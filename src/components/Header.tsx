import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050605]/92 backdrop-blur-md border-b border-[rgba(220,230,210,0.1)] py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8F500] rounded"
          aria-label="Muhammad Qasim — SEO Specialist Home"
        >
          {/* Custom geometric monogram logo */}
          <div className="relative w-8 h-8 flex items-center justify-center bg-[#101210] border border-[rgba(184,245,0,0.4)] group-hover:border-[#B8F500] transition-colors">
            <span className="font-display font-extrabold text-[#B8F500] text-base leading-none">
              Q
            </span>
            <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-[#B8F500]" />
          </div>

          <div className="flex flex-col">
            <span className="font-display text-xl sm:text-2xl font-black tracking-tight leading-none text-[#F4F5F0]">
              MUHAMMAD QASIM<span className="text-[#B8F500]">.</span>
            </span>
            <span className="text-[9px] font-semibold tracking-[0.22em] text-[#B5B8AF] uppercase leading-none mt-0.5">
              SEO SPECIALIST
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors py-1 ${
                  isActive ? 'text-[#B8F500]' : 'text-[#B5B8AF] hover:text-[#F4F5F0]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B8F500] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Contact CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] border border-[rgba(184,245,0,0.4)] hover:border-[#B8F500] text-[#F4F5F0] hover:text-[#050605] bg-transparent hover:bg-[#B8F500] transition-all duration-200 group rounded-[2px]"
          >
            <span>CONTACT ME</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B8F500] group-hover:text-[#050605] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F4F5F0] hover:text-[#B8F500] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8F500] border border-[rgba(220,230,210,0.13)] bg-[#101210]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#B8F500]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#0B0D0B] border-b border-[rgba(184,245,0,0.25)] px-6 py-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-semibold uppercase tracking-[0.18em] py-2 border-b border-[rgba(220,230,210,0.08)] flex items-center justify-between ${
                    isActive ? 'text-[#B8F500]' : 'text-[#F4F5F0]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#B8F500]" />}
                </a>
              );
            })}
          </div>

          <div className="pt-2">
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 bg-[#B8F500] hover:bg-[#C8FF00] text-[#050605] font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 rounded-[2px]"
            >
              <Mail className="w-4 h-4" />
              <span>EMAIL ME DIRECTLY</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
