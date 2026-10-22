import React from 'react';
import { Search, Compass, Terminal, Cpu, FileSearch, LineChart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#0B0D0B] border-b border-[rgba(220,230,210,0.1)] overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Technical SEO Architecture Graphic Panel (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#101210] border border-[rgba(220,230,210,0.14)] p-6 relative">
              {/* Top Terminal Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[rgba(220,230,210,0.08)]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B8F500]" />
                  <span className="text-[10px] font-mono text-[#777B72] ml-2">organic_search_system.audit</span>
                </div>
                <span className="text-[9px] font-mono text-[#B8F500] uppercase">STATUS: ACTIVE</span>
              </div>

              {/* SEO System Configuration */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-[#050605] border border-[rgba(184,245,0,0.25)]">
                  <span className="text-[#819E25] block text-[10px]">// Search Optimization Architecture</span>
                  <p className="text-[#F4F5F0] mt-1">
                    <span className="text-[#B8F500]">const</span> seoStrategy = &#123;
                  </p>
                  <p className="pl-4 text-[#B5B8AF]">
                    goal: <span className="text-[#C8FF00]">"Sustainable Organic Visibility"</span>,
                  </p>
                  <p className="pl-4 text-[#B5B8AF]">
                    focus: [<span className="text-[#F4F5F0]">"Search Intent"</span>, <span className="text-[#F4F5F0]">"On-Page Hierarchy"</span>, <span className="text-[#F4F5F0]">"Technical Health"</span>],
                  </p>
                  <p className="pl-4 text-[#B5B8AF]">
                    telemetry: <span className="text-[#B8F500]">"Search Console &amp; GA4"</span>,
                  </p>
                  <p className="text-[#F4F5F0]">&#125;;</p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="p-2.5 bg-[#050605] border border-[rgba(220,230,210,0.08)]">
                    <span className="text-[#777B72] block">SPECIALIZATION</span>
                    <span className="text-[#F4F5F0] font-bold">SEO Specialist</span>
                  </div>
                  <div className="p-2.5 bg-[#050605] border border-[rgba(220,230,210,0.08)]">
                    <span className="text-[#777B72] block">DISCIPLINE</span>
                    <span className="text-[#B8F500] font-bold">Organic Search</span>
                  </div>
                </div>

                <div className="p-3 bg-[#050605] border border-[rgba(220,230,210,0.08)]">
                  <div className="flex items-center justify-between text-[10px] text-[#777B72] mb-1.5">
                    <span>USER INTENT &amp; TECHNICAL COMPLIANCE</span>
                    <span className="text-[#B8F500]">100%</span>
                  </div>
                  <div className="h-1.5 bg-[#151815] w-full">
                    <div className="h-full bg-[#B8F500] w-full" />
                  </div>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="mt-4 pt-3 border-t border-[rgba(220,230,210,0.08)] flex items-center justify-between text-[10px] font-mono text-[#777B72]">
                <span>LOCATION: PAKISTAN</span>
                <span className="text-[#B8F500]">1.5 YEARS EXPERIENCE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Introduction & Principles (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#B8F500] uppercase">
                ABOUT ME
              </span>
            </div>

            {/* Main Section Heading */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold uppercase leading-[1.05] tracking-tight text-[#F4F5F0] mb-5">
              SEO WITH PURPOSE. <br />
              <span className="text-[#B8F500]">GROWTH WITH STRATEGY.</span>
            </h2>

            {/* Paragraphs with Exact Provided Content */}
            <div className="space-y-4 text-sm sm:text-[15px] text-[#B5B8AF] leading-relaxed mb-8 font-normal">
              {PORTFOLIO_DATA.personal.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Core Working Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 bg-[#101210] border border-[rgba(220,230,210,0.1)]">
                <Search className="w-4 h-4 text-[#B8F500] mb-2" />
                <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#F4F5F0] mb-1">
                  SEARCH INTENT
                </h3>
                <p className="text-[11px] text-[#777B72] leading-normal">
                  Matching content to genuine user queries and real intent.
                </p>
              </div>

              <div className="p-3.5 bg-[#101210] border border-[rgba(220,230,210,0.1)]">
                <FileSearch className="w-4 h-4 text-[#B8F500] mb-2" />
                <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#F4F5F0] mb-1">
                  TECHNICAL SEO
                </h3>
                <p className="text-[11px] text-[#777B72] leading-normal">
                  Auditing indexing, sitemaps, canonicals, and structure.
                </p>
              </div>

              <div className="p-3.5 bg-[#101210] border border-[rgba(220,230,210,0.1)]">
                <LineChart className="w-4 h-4 text-[#B8F500] mb-2" />
                <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#F4F5F0] mb-1">
                  DATA-INFORMED
                </h3>
                <p className="text-[11px] text-[#777B72] leading-normal">
                  Guiding optimization through Search Console &amp; GA4 data.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
