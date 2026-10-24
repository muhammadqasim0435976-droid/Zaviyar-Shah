import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, CheckCircle2, AlertCircle, Copy, ExternalLink, ArrowRight, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CornerPaintSplatter } from './BrushesAndAccents';

// Configurable WhatsApp Constants
export const WHATSAPP_NUMBER = '923345493449';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

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

// High-fidelity WhatsApp Icon
export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.89 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.488-8.414z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    service: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isInitiated, setIsInitiated] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      errs.name = 'Please provide your full name.';
    } else if (trimmedName.length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!trimmedEmail) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedEmail)) {
      errs.email = 'Please enter a valid email address (e.g. name@company.com).';
    }

    if (!trimmedSubject) {
      errs.subject = 'Please enter an enquiry subject.';
    } else if (trimmedSubject.length < 3) {
      errs.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.service) {
      errs.service = 'Please select a required SEO service from the dropdown.';
    }

    if (!trimmedMessage) {
      errs.message = 'Please share details about your enquiry.';
    } else if (trimmedMessage.length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build the formatted WhatsApp message as specified
    const messageText = `New Portfolio Enquiry

Full Name: ${formData.name.trim()}
Email Address: ${formData.email.trim()}
Subject: ${formData.subject.trim()}
Service Required: ${formData.service}

Message:
${formData.message.trim()}

Source: Portfolio Website`;

    const encodedMessage = encodeURIComponent(messageText);
    const targetUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    setGeneratedWhatsAppUrl(targetUrl);
    setIsInitiated(true);

    // Open WhatsApp in a new window/tab safely across desktop and mobile browsers
    try {
      const opened = window.open(targetUrl, '_blank', 'noopener,noreferrer');
      if (!opened || opened.closed || typeof opened.closed === 'undefined') {
        // Fallback programmatic click if popup was intercepted
        const link = document.createElement('a');
        link.href = targetUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch {
      // In case window.open is restricted by environment
      const link = document.createElement('a');
      link.href = targetUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyWhatsApp = () => {
    navigator.clipboard.writeText(`+${WHATSAPP_NUMBER}`);
    setCopiedWhatsApp(true);
    setTimeout(() => setCopiedWhatsApp(false), 2500);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#050605] border-b border-[rgba(220,230,210,0.1)] overflow-hidden">
      {/* Decorative Large Watermark Background */}
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
              Looking to improve your website's organic visibility, technical SEO foundation, or keyword rankings? Send an enquiry directly to my WhatsApp or inbox.
            </p>

            {/* Prominent Contact Info Card */}
            <div className="p-6 bg-[#101210] border border-[rgba(220,230,210,0.12)] space-y-4 mb-6">
              {/* WhatsApp Direct */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    <span className="text-[10px] font-mono uppercase text-[#777B72]">DIRECT WHATSAPP</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyWhatsApp}
                    className="px-2.5 py-1 text-[10px] font-mono text-[#B5B8AF] hover:text-[#25D366] border border-[rgba(220,230,210,0.1)] hover:border-[#25D366] transition-colors flex items-center gap-1 rounded-[2px]"
                    title="Copy WhatsApp number"
                  >
                    {copiedWhatsApp ? <CheckCircle2 className="w-3 h-3 text-[#25D366]" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedWhatsApp ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
                <a
                  href={WHATSAPP_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm sm:text-base font-bold text-[#25D366] hover:underline flex items-center gap-2"
                >
                  <span>+92 334 5493449</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>

              {/* Direct Email */}
              <div className="pt-3 border-t border-[rgba(220,230,210,0.06)]">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#B8F500]" />
                    <span className="text-[10px] font-mono uppercase text-[#777B72]">EMAIL INBOX</span>
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
                  className="font-mono text-xs sm:text-sm font-bold text-[#F4F5F0] hover:text-[#B8F500] hover:underline block truncate"
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
                  <span>linkedin.com/in/muhammadqasim-waheed/</span>
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
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 rounded-[2px] transition-colors shadow-lg shadow-[#25D366]/20"
              >
                <WhatsAppIcon className="w-4 h-4 text-black" />
                <span>CHAT ON WHATSAPP</span>
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

          {/* Right Column: Instant WhatsApp Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0B0D0B] p-6 sm:p-8 border border-[rgba(220,230,210,0.12)] relative">
            <div className="mb-6 pb-3 border-b border-[rgba(220,230,210,0.08)] flex items-center justify-between">
              <div>
                <h3 className="font-display text-xl font-bold uppercase text-[#F4F5F0]">
                  ENQUIRY FORM
                </h3>
                <p className="text-[11px] text-[#777B72] font-normal">
                  Fills your enquiry and connects directly via WhatsApp click-to-chat
                </p>
              </div>
              <span className="text-[9px] font-mono text-[#25D366] uppercase hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 border border-[#25D366]/30 bg-[#101210]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                WHATSAPP CHAT
              </span>
            </div>

            {/* WhatsApp Initiated Banner with Fallback Link */}
            {isInitiated && (
              <div className="mb-6 p-4 sm:p-5 bg-[#0A160D] border border-[#25D366]/60 rounded-[2px] text-xs text-[#E5F9EA] shadow-xl shadow-[#25D366]/10 animate-fadeIn">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#25D366]">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#25D366] uppercase tracking-wider text-xs mb-1">
                      WhatsApp Chat Ready
                    </h4>
                    <p className="leading-relaxed text-[#BFE8C7] mb-3">
                      Your enquiry has been prepared and formatted. Please review the prefilled message in WhatsApp and tap <strong>Send</strong> to deliver it directly to Muhammad Qasim (+92 334 5493449).
                    </p>

                    <div className="flex flex-wrap items-center gap-2.5 pt-1">
                      <a
                        href={generatedWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20BD5A] text-black font-bold text-xs uppercase tracking-wider rounded-[2px] transition-colors shadow-md"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-black" />
                        <span>OPEN WHATSAPP CHAT</span>
                        <ArrowRight className="w-3.5 h-3.5 text-black" />
                      </a>

                      <a
                        href={WHATSAPP_BASE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#121E14] hover:bg-[#18281B] text-[#25D366] border border-[#25D366]/30 text-xs font-mono rounded-[2px] transition-colors"
                      >
                        <span>Direct link: {WHATSAPP_BASE_URL}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <p className="text-[10px] text-[#789A7E] mt-3">
                      Note: Submitting this form does not send an automated message. You will review and send the prefilled text directly inside WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSendWhatsApp} noValidate className="space-y-4">
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
                        : 'border-[rgba(220,230,210,0.14)] focus:border-[#25D366]'
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
                        : 'border-[rgba(220,230,210,0.14)] focus:border-[#25D366]'
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
                      : 'border-[rgba(220,230,210,0.14)] focus:border-[#25D366]'
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
                        : 'border-[rgba(220,230,210,0.14)] focus:border-[#25D366]'
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
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#25D366]">
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
                      : 'border-[rgba(220,230,210,0.14)] focus:border-[#25D366]'
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
                className="w-full py-4 bg-[#25D366] hover:bg-[#20BD5A] active:scale-[0.99] text-black font-extrabold text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2.5 transition-all rounded-[2px] shadow-lg shadow-[#25D366]/25 group cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-black transition-transform group-hover:scale-110" />
                <span>SEND ENQUIRY VIA WHATSAPP</span>
              </button>

              {/* Helper Information */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-[#777B72] gap-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  <span>Destination: <strong>+92 334 5493449</strong> (WhatsApp)</span>
                </span>
                <span className="font-mono text-[10px] text-[#646860]">
                  Supports Mobile App &amp; WhatsApp Web
                </span>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
