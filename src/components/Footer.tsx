import React from 'react';
import { ArrowUp, Mail, Linkedin, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050605] border-t border-[rgba(220,230,210,0.12)] pt-14 pb-10 text-[#B5B8AF]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[rgba(220,230,210,0.08)]">
          
          {/* Identity Block (6 cols) */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 flex items-center justify-center bg-[#101210] border border-[rgba(184,245,0,0.4)]">
                <span className="font-display font-extrabold text-[#B8F500] text-sm leading-none">
                  Q
                </span>
              </div>
              <div>
                <span className="font-display text-xl font-black tracking-tight text-[#F4F5F0]">
                  MUHAMMAD QASIM<span className="text-[#B8F500]">.</span>
                </span>
                <span className="text-[8px] font-semibold tracking-[0.2em] text-[#777B72] uppercase block">
                  SEO SPECIALIST
                </span>
              </div>
            </div>

            <p className="text-xs text-[#F4F5F0] font-semibold mb-1">
              Muhammad Qasim | SEO Specialist
            </p>
            <p className="text-xs text-[#B5B8AF] leading-relaxed max-w-md mb-4 font-normal">
              Focused on search visibility, content optimization, and organic growth.
            </p>

            <div className="inline-flex items-center gap-2 text-[10px] font-mono text-[#777B72] border border-[rgba(220,230,210,0.08)] px-2.5 py-1 bg-[#101210]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8F500]" />
              <span>LOCATION: PAKISTAN • REMOTE COLLABORATION</span>
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F4F5F0] mb-3">
              PAGE NAVIGATION
            </h4>
            <ul className="space-y-1.5 text-xs">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#B8F500] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Contact Details (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F4F5F0] mb-3">
                DIRECT CONTACT
              </h4>
              <div className="space-y-2 text-xs">
                <a
                  href={PORTFOLIO_DATA.personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[#25D366] hover:underline flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                  <span>WhatsApp: +92 334 5493449</span>
                  <ExternalLink className="w-3 h-3 opacity-75" />
                </a>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="font-mono text-[#B8F500] hover:underline flex items-center gap-1.5 truncate"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{PORTFOLIO_DATA.personal.email}</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F4F5F0] hover:text-[#B8F500] flex items-center gap-1.5 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#B8F500] shrink-0" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Back to Top */}
            <div className="mt-6 md:mt-0">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#101210] border border-[rgba(220,230,210,0.12)] hover:border-[#B8F500] text-[#F4F5F0] hover:text-[#B8F500] text-[10px] font-bold uppercase tracking-widest transition-colors rounded-[2px]"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#B8F500]" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#777B72]">
          <p>
            © {currentYear} Muhammad Qasim. All rights reserved.
          </p>
          <p className="font-mono text-[10px]">
            Focused on search visibility, content optimization, and organic growth.
          </p>
        </div>

      </div>
    </footer>
  );
};
