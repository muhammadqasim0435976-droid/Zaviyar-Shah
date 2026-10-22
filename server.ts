import express, { Request, Response, RequestHandler } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Parse incoming JSON payloads with size limit
app.use(express.json({ limit: '100kb' }));

// Anti-Spam: In-memory Rate Limiting per IP (max 5 requests per 10 minutes)
interface RateLimitRecord {
  count: number;
  resetTime: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();

// Duplicate submission cache (prevents double submits within 60 seconds)
const duplicateSubmissionCache = new Set<string>();

const ALLOWED_SERVICES = [
  'Keyword Research',
  'On-Page SEO',
  'Technical SEO',
  'SEO Content Writing',
  'Website SEO Audit',
  'Competitor Analysis',
  'Organic Growth Strategy',
  'Other',
];

// Helper to escape HTML characters in email bodies to prevent HTML injection
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Basic string sanitizer: trim and strip potential script tags
function sanitizeText(str: unknown): string {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>?/gm, '').trim();
}

// Rate limit cleanup routine every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000);

// Status / Health Check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    emailConfigured: Boolean(process.env.RESEND_API_KEY),
    destinationEmail: process.env.CONTACT_EMAIL || 'muhammadqasim0435976@gmail.com',
  });
});

// Shared Enquiry Handler
const handleEnquiry: RequestHandler = async (req, res): Promise<any> => {
  try {
    const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0].trim() || req.socket.remoteAddress || 'unknown';

    // 1. Anti-Spam Honeypot Check
    // If the hidden 'website' or 'honeypot' field is filled, silently discard or reject bot
    if (req.body.website || req.body.honeypot) {
      console.warn(`[Anti-Spam] Bot detected from IP ${clientIp} (honeypot triggered)`);
      return res.status(400).json({
        success: false,
        error: 'Spam detected. Submission rejected.',
      });
    }

    // 2. Server-side Rate Limiting (5 requests per 10 minutes)
    const now = Date.now();
    const windowMs = 10 * 60 * 1000;
    const ipRecord = rateLimitMap.get(clientIp);

    if (ipRecord) {
      if (now < ipRecord.resetTime) {
        if (ipRecord.count >= 5) {
          return res.status(429).json({
            success: false,
            error: 'Too many enquiries submitted recently. Please wait a few minutes before trying again or email muhammadqasim0435976@gmail.com directly.',
          });
        }
        ipRecord.count += 1;
      } else {
        rateLimitMap.set(clientIp, { count: 1, resetTime: now + windowMs });
      }
    } else {
      rateLimitMap.set(clientIp, { count: 1, resetTime: now + windowMs });
    }

    // 3. Extract & Sanitize Form Fields
    const rawName = sanitizeText(req.body.name);
    const rawEmail = sanitizeText(req.body.email);
    const rawSubject = sanitizeText(req.body.subject);
    const rawService = sanitizeText(req.body.service);
    const rawMessage = sanitizeText(req.body.message);

    // 4. Validate Fields
    const errors: Record<string, string> = {};

    if (!rawName || rawName.length < 2) {
      errors.name = 'Please provide your full name (at least 2 characters).';
    } else if (rawName.length > 100) {
      errors.name = 'Name must be 100 characters or fewer.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!rawEmail) {
      errors.email = 'Please provide a valid email address.';
    } else if (!emailRegex.test(rawEmail) || rawEmail.length > 150) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!rawSubject || rawSubject.length < 3) {
      errors.subject = 'Please provide a subject (at least 3 characters).';
    } else if (rawSubject.length > 200) {
      errors.subject = 'Subject must be 200 characters or fewer.';
    }

    if (!rawService || !ALLOWED_SERVICES.includes(rawService)) {
      errors.service = 'Please select a valid service from the list.';
    }

    if (!rawMessage || rawMessage.length < 10) {
      errors.message = 'Please provide a message with at least 10 characters.';
    } else if (rawMessage.length > 5000) {
      errors.message = 'Message must be 5000 characters or fewer.';
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed. Please correct the highlighted fields.',
        validationErrors: errors,
      });
    }

    // 5. Prevent Duplicate Submissions (within 60 seconds)
    const duplicateKey = `${rawEmail.toLowerCase()}|${rawSubject.toLowerCase()}|${rawMessage.slice(0, 40)}`;
    if (duplicateSubmissionCache.has(duplicateKey)) {
      return res.status(409).json({
        success: false,
        error: 'A duplicate enquiry was submitted moments ago. Please wait before re-sending.',
      });
    }

    // 6. Check Provider Credentials
    const apiKey = process.env.RESEND_API_KEY;
    const destinationEmail = process.env.CONTACT_EMAIL || 'muhammadqasim0435976@gmail.com';
    const senderEmail = process.env.VERIFIED_SENDER_EMAIL || 'onboarding@resend.dev';

    if (!apiKey) {
      console.error('[Enquiry Service] RESEND_API_KEY is not configured in environment variables.');
      return res.status(503).json({
        success: false,
        error: "We couldn't submit your enquiry right now. Please try again or email muhammadqasim0435976@gmail.com directly.",
        detail: 'Email delivery provider is awaiting configuration with RESEND_API_KEY.',
      });
    }

    // 7. Dispatch Email through Resend
    const resend = new Resend(apiKey);

    const emailSubject = `[SEO Enquiry] ${rawSubject} — ${rawName}`;
    const textContent = `You have received a new SEO client enquiry from your portfolio website.

--------------------------------------------------
CLIENT ENQUIRY DETAILS
--------------------------------------------------
Full Name:        ${rawName}
Email Address:    ${rawEmail}
Service Required: ${rawService}
Subject:          ${rawSubject}
Date & Time:      ${new Date().toUTCString()}
Client IP:        ${clientIp}

--------------------------------------------------
MESSAGE
--------------------------------------------------
${rawMessage}

--------------------------------------------------
Reply directly to this email to respond to ${rawName} (${rawEmail}).
Sent via Muhammad Qasim — SEO Specialist Portfolio
`;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New SEO Enquiry</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #0d0f0d; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f4f5f0;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #121512; border: 1px solid #232b21; border-radius: 4px; overflow: hidden;">
    
    <div style="background-color: #181d18; border-bottom: 2px solid #b8f500; padding: 20px 24px;">
      <span style="font-size: 10px; font-weight: bold; letter-spacing: 0.2em; text-transform: uppercase; color: #b8f500; display: block; margin-bottom: 4px;">
        PORTFOLIO INQUIRY
      </span>
      <h1 style="margin: 0; font-size: 22px; color: #f4f5f0; font-weight: 800; letter-spacing: -0.02em;">
        New Client SEO Enquiry
      </h1>
    </div>

    <div style="padding: 24px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 8px 0; font-size: 12px; color: #777b72; text-transform: uppercase; width: 130px; font-weight: 600;">Full Name:</td>
          <td style="padding: 8px 0; font-size: 14px; color: #f4f5f0; font-weight: 700;">${escapeHtml(rawName)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 12px; color: #777b72; text-transform: uppercase; font-weight: 600;">Email:</td>
          <td style="padding: 8px 0; font-size: 14px; color: #b8f500; font-weight: 600;">
            <a href="mailto:${escapeHtml(rawEmail)}" style="color: #b8f500; text-decoration: none;">${escapeHtml(rawEmail)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 12px; color: #777b72; text-transform: uppercase; font-weight: 600;">Service Required:</td>
          <td style="padding: 8px 0; font-size: 13px; color: #050605; font-weight: 700;">
            <span style="display: inline-block; background-color: #b8f500; padding: 3px 10px; border-radius: 2px;">
              ${escapeHtml(rawService)}
            </span>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 12px; color: #777b72; text-transform: uppercase; font-weight: 600;">Subject:</td>
          <td style="padding: 8px 0; font-size: 14px; color: #f4f5f0;">${escapeHtml(rawSubject)}</td>
        </tr>
      </table>

      <div style="margin-top: 16px; border-top: 1px solid #232b21; padding-top: 16px;">
        <span style="font-size: 11px; text-transform: uppercase; color: #777b72; font-weight: 700; letter-spacing: 0.1em; display: block; margin-bottom: 8px;">
          Message Content:
        </span>
        <div style="background-color: #080a08; border: 1px solid #1a2218; padding: 16px; border-radius: 2px; color: #e2e5dc; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(rawMessage)}</div>
      </div>

      <div style="margin-top: 24px; padding: 12px 16px; background-color: #171d17; border-left: 3px solid #b8f500; font-size: 12px; color: #b5b8af;">
        You can reply directly to this email to contact <strong>${escapeHtml(rawName)}</strong>. The reply-to header has been configured to <code>${escapeHtml(rawEmail)}</code>.
      </div>
    </div>

    <div style="background-color: #0a0d0a; border-top: 1px solid #1c221b; padding: 14px 24px; font-size: 11px; color: #646860; text-align: center;">
      Muhammad Qasim — SEO Specialist | Pakistan | muhammadqasim0435976@gmail.com
    </div>
  </div>
</body>
</html>
`;

    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: [destinationEmail],
      replyTo: rawEmail,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    if (error) {
      console.error('[Resend Error]', error);
      return res.status(502).json({
        success: false,
        error: "We couldn't submit your enquiry right now. Please try again or email muhammadqasim0435976@gmail.com directly.",
        detail: error.message || 'Delivery provider error',
      });
    }

    // Cache duplicate key for 60 seconds
    duplicateSubmissionCache.add(duplicateKey);
    setTimeout(() => {
      duplicateSubmissionCache.delete(duplicateKey);
    }, 60 * 1000);

    console.log(`[Enquiry Delivered] Successfully accepted by Resend with ID: ${data?.id}`);

    return res.status(200).json({
      success: true,
      message: 'Thank you for your enquiry! Your message has been submitted successfully.',
      id: data?.id,
    });
  } catch (err: unknown) {
    console.error('[Enquiry Endpoint Unhandled Exception]', err);
    return res.status(500).json({
      success: false,
      error: "We couldn't submit your enquiry right now. Please try again or email muhammadqasim0435976@gmail.com directly.",
    });
  }
};

// Register Enquiry Submission Endpoints
app.post('/api/enquiries', handleEnquiry);
app.post('/api/contact', handleEnquiry);

// Vite middleware or Static files serving
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        port: PORT,
        hmr: process.env.DISABLE_HMR !== 'true',
        watch: process.env.DISABLE_HMR === 'true' ? null : {},
      },
      appType: 'spa',
    });

    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT} [${isProduction ? 'production' : 'development'}]`);
  });
}

startServer();
