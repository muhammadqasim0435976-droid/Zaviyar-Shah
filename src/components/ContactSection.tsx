import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, CheckCircle2, AlertCircle, Copy, ExternalLink, Loader2, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CornerPaintSplatter } from './BrushesAndAccents';

const SERVICE_OPTIONS = [
  'Keyword Research',
  'On-Page SEO',
  'Technical SEO',
  'SEO Content Writing',
  'Website SEO Audit',
  'Competitor Analysis',
  'Organic Growth Strategy',
  'Other',
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    service: '',
    message: '',
    website: '', // Honeypot field for anti-spam
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter an enquiry subject.';
    } else if (formData.subject.trim().length < 3) {
      errs.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.service) {
      errs.service = 'Please select a required SEO service.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please share details about your enquiry.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setFeedbackMessage('');

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          service: formData.service,
          message: formData.message.trim(),
          website: formData.website, // Honeypot verification
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setStatus('success');
        setFeedbackMessage(
          'Thank you for your enquiry! Your message has been submitted successfully.'
        );
        // Clear form upon confirmed successful delivery
        setFormData({
          name: '',
          email: '',
          subject: '',
          service: '',
          message: '',
          website: '',
        });
        setErrors({});
      } else {
        // Retain entered message and fields if delivery fails
        setStatus('error');
        setFeedbackMessage(
          result?.error ||
          "We couldn't submit your enquiry right now. Please try again or email muhammadqasim0435976@gmail.com directly."
        );
        if (result?.validationErrors) {
          setErrors(result.validationErrors);
        }
      }
    } catch {
      // Retain message and show friendly error with direct email option
      setStatus('error');
      setFeedbackMessage(
        "We couldn't submit your enquiry right now. Please try again or email muhammadqasim0435976@gmail.com directly."
      );
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleMailtoFallback = () => {
    const mailtoSubject = encodeURIComponent(`[SEO Enquiry] ${formData.subject || 'SEO Consultation'}`);
    const mailtoBody = encodeURIComponent(
      `Hello Muhammad,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nSent via Muhammad Qasim SEO Portfolio`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#050605] border-b border-[rgba(220,230,210,0.1)] overflow-hidden">
      {/* Decorative Large Watermark Background Email */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[60px] sm:text-[90px] md:text-[130px] lg:text-[150px] font-black uppercase text-[#B8F500] opacity-[0.03] select-none pointer-events-none whitespace-nowrap tracking-wider z-0"
      >
        {PORTFOLIO_DATA.personal.email}
      </div>

      {/* Background paint splatter accents */}
      <div className="absolute -bottom-16 -right-16 w-96 h-96 pointer-events-none opacity-80 z-0">
        <CornerPaintSplatter variant="lime" className="w-full h-full rotate-12" />
      </div>
      <div className="absolute -top-16 -left-16 w-80 h-80 pointer-events-none opacity-15 z-0">
        <CornerPaintSplatter variant="white" className="w-full h-full -rotate-45" />
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column: Heading & Contact Info (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#B8F500] uppercase">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold uppercase tracking-tight text-[#F4F5F0] leading-[0.92] mb-5">
              LET'S TALK <br />
              <span className="text-[#B8F500]">SEO</span>.
            </h2>

            <p className="text-sm text-[#B5B8AF] leading-relaxed mb-8 max-w-md font-normal">
              Looking to improve your website's organic visibility, technical SEO foundation, or keyword rankings? Send an enquiry directly to my inbox.
            </p>

            {/* Prominent Contact Info Card */}
            <div className="p-6 bg-[#101210] border border-[rgba(220,230,210,0.12)] space-y-4 mb-6">
              {/* Prominent Email in Foreground */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#B8F500]" />
                    <span className="text-[10px] font-mono uppercase text-[#777B72]">DIRECT EMAIL INBOX</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1 text-[10px] font-mono text-[#B5B8AF] hover:text-[#B8F500] border border-[rgba(220,230,210,0.1)] hover:border-[#B8F500] transition-colors flex items-center gap-1 rounded-[2px]"
                    title="Copy email address"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-3 h-3 text-[#B8F500]" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="font-mono text-sm sm:text-base font-bold text-[#B8F500] hover:underline block truncate"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>

              {/* LinkedIn */}
              <div className="pt-3 border-t border-[rgba(220,230,210,0.06)]">
                <div className="flex items-center gap-2 mb-1">
                  <Linkedin className="w-4 h-4 text-[#B8F500]" />
                  <span className="text-[10px] font-mono uppercase text-[#777B72]">LINKEDIN PROFILE</span>
                </div>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#F4F5F0] hover:text-[#B8F500] flex items-center gap-1.5 transition-colors"
                >
                  <span>linkedin.com/in/muhammad-qasim-waheed/</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Location */}
              <div className="pt-3 border-t border-[rgba(220,230,210,0.06)] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B8F500] shrink-0" />
                <span className="text-xs font-semibold text-[#F4F5F0]">Pakistan</span>
                <span className="text-[10px] font-mono text-[#777B72]">• Remote SEO Engagements</span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="px-6 py-3 bg-[#B8F500] hover:bg-[#C8FF00] text-[#050605] font-bold text-xs uppercase tracking-wider flex items-center gap-2 rounded-[2px] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL DIRECTLY</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#101210] hover:bg-[#151815] border border-[rgba(184,245,0,0.4)] text-[#F4F5F0] hover:text-[#B8F500] font-bold text-xs uppercase tracking-wider flex items-center gap-2 rounded-[2px] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#B8F500]" />
                <span>CONNECT ON LINKEDIN</span>
              </a>
            </div>
          </div>

          {/* Right Column: Functional Backend Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0B0D0B] p-6 sm:p-8 border border-[rgba(220,230,210,0.12)] relative">
            <div className="mb-6 pb-3 border-b border-[rgba(220,230,210,0.08)] flex items-center justify-between">
              <div>
                <h3 className="font-display text-xl font-bold uppercase text-[#F4F5F0]">
                  ENQUIRY FORM
                </h3>
                <p className="text-[11px] text-[#777B72] font-normal">
                  Delivered directly to {PORTFOLIO_DATA.personal.email}
                </p>
              </div>
              <span className="text-[9px] font-mono text-[#B8F500] uppercase hidden sm:inline-block px-2 py-0.5 border border-[rgba(184,245,0,0.3)] bg-[#101210]">
                DIRECT EMAIL BACKEND
              </span>
            </div>

            {/* Success Banner */}
            {status === 'success' && (
              <div className="mb-6 p-4 bg-[#051105] border border-[#B8F500]/60 rounded-[2px] text-xs text-[#EAFCE0] flex items-start gap-3 shadow-lg shadow-[#B8F500]/10">
                <CheckCircle2 className="w-5 h-5 text-[#B8F500] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#B8F500] uppercase tracking-wider text-xs mb-1">Enquiry Sent</h4>
                  <p className="leading-relaxed">{feedbackMessage}</p>
                  <p className="text-[11px] text-[#A2B39B] mt-2">
                    I have received your enquiry and will review your website and reply as soon as possible.
                  </p>
                </div>
              </div>
            )}

            {/* Error Banner */}
            {status === 'error' && (
              <div className="mb-6 p-4 bg-[#140808] border border-red-500/60 rounded-[2px] text-xs text-[#FDDCDC] flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-bold text-red-400 uppercase tracking-wider text-xs mb-1">Submission Status</h4>
                  <p className="leading-relaxed">{feedbackMessage}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleMailtoFallback}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#B8F500] text-[#050605] font-bold text-[11px] uppercase tracking-wider rounded-[2px] hover:bg-[#C8FF00] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send Via Email Client</span>
                    </button>
                    <span className="text-[11px] text-[#B5B8AF]">(Your message is saved)</span>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSendMessage} noValidate className="space-y-4">
              {/* Anti-Spam Honeypot Field (invisible to genuine users) */}
              <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                <label htmlFor="hp_website">Leave this field blank</label>
                <input
                  id="hp_website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#B5B8AF] mb-1.5">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="Your Name"
                    className={`w-full px-3.5 py-2.5 bg-[#101210] border text-xs text-[#F4F5F0] placeholder-[#777B72] focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-[rgba(220,230,210,0.14)] focus:border-[#B8F500]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#B5B8AF] mb-1.5">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="name@company.com"
                    className={`w-full px-3.5 py-2.5 bg-[#101210] border text-xs text-[#F4F5F0] placeholder-[#777B72] focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-[rgba(220,230,210,0.14)] focus:border-[#B8F500]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#B5B8AF] mb-1.5">
                  SUBJECT *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: '' });
                  }}
                  placeholder="e.g. SEO Audit Inquiry / Ranking Strategy"
                  className={`w-full px-3.5 py-2.5 bg-[#101210] border text-xs text-[#F4F5F0] placeholder-[#777B72] focus:outline-none transition-colors ${
                    errors.subject
                      ? 'border-red-500/80 focus:border-red-500'
                      : 'border-[rgba(220,230,210,0.14)] focus:border-[#B8F500]'
                  }`}
                />
                {errors.subject && (
                  <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.subject}
                  </p>
                )}
              </div>

              {/* Service Required Dropdown */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#B5B8AF] mb-1.5">
                  SERVICE REQUIRED *
                </label>
                <div className="relative">
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => {
                      setFormData({ ...formData, service: e.target.value });
                      if (errors.service) setErrors({ ...errors, service: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 bg-[#101210] border text-xs text-[#F4F5F0] focus:outline-none transition-colors appearance-none cursor-pointer ${
                      errors.service
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-[rgba(220,230,210,0.14)] focus:border-[#B8F500]'
                    } ${!formData.service ? 'text-[#777B72]' : 'text-[#F4F5F0]'}`}
                  >
                    <option value="" disabled className="bg-[#101210] text-[#777B72]">
                      Select a Service...
                    </option>
                    {SERVICE_OPTIONS.map((srv) => (
                      <option key={srv} value={srv} className="bg-[#101210] text-[#F4F5F0]">
                        {srv}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#B8F500]">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
                {errors.service && (
                  <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.service}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#B5B8AF] mb-1.5">
                  MESSAGE *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  placeholder="Please share your website URL, current search visibility challenges, target keywords, and goals..."
                  className={`w-full px-3.5 py-2.5 bg-[#101210] border text-xs text-[#F4F5F0] placeholder-[#777B72] focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? 'border-red-500/80 focus:border-red-500'
                      : 'border-[rgba(220,230,210,0.14)] focus:border-[#B8F500]'
                  }`}
                />
                {errors.message && (
                  <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 bg-[#B8F500] hover:bg-[#C8FF00] disabled:bg-[#B8F500]/50 disabled:cursor-not-allowed text-[#050605] font-bold text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2 transition-all rounded-[2px] shadow-lg shadow-[#B8F500]/10"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#050605]" />
                    <span>SENDING ENQUIRY...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>SEND MY ENQUIRY</span>
                  </>
                )}
              </button>

              {/* Submission Details */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-[#777B72] gap-2">
                <span>
                  Delivery target: <span className="text-[#B8F500]">{PORTFOLIO_DATA.personal.email}</span>
                </span>
                <span className="font-mono text-[10px] text-[#646860]">
                  Reply-To: your email
                </span>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
