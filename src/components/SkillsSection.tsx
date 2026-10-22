import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CheckCircle2, Wrench, Search, LineChart, FileText, Sliders } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative py-20 lg:py-24 bg-[#050605] border-b border-[rgba(220,230,210,0.1)]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#B8F500] uppercase">
              SEO SPECIALIZATION
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#F4F5F0]">
              SEO SKILLS &amp; <span className="text-[#B8F500]">PRACTICE</span>.
            </h2>
            <p className="text-xs sm:text-sm text-[#B5B8AF] max-w-md leading-relaxed font-normal">
              Categorized areas of practical search engine optimization knowledge and methodical search analysis developed across office environments.
            </p>
          </div>
        </div>

        {/* 5 Categorized SEO Skill Cards (No arbitrary percentages, purely SEO) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PORTFOLIO_DATA.skillsCategories.map((category) => (
            <div
              key={category.id}
              className="bg-[#101210] border border-[rgba(220,230,210,0.12)] p-6 hover:border-[rgba(184,245,0,0.4)] transition-colors rounded-[2px]"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[rgba(220,230,210,0.08)]">
                <h3 className="font-display text-base font-bold uppercase tracking-wider text-[#F4F5F0] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8F500]" />
                  {category.name}
                </h3>
                <span className="text-[10px] font-mono text-[#777B72]">
                  {category.items.length} SKILLS
                </span>
              </div>

              {/* Skills Items List */}
              <ul className="space-y-2.5">
                {category.items.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-[#B5B8AF] hover:text-[#F4F5F0] transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8F500] shrink-0 mt-0.5" />
                    <span className="font-normal">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Practical Tools & SEO Technologies Strip */}
        <div className="p-6 bg-[#0B0D0B] border border-[rgba(220,230,210,0.12)]">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[rgba(220,230,210,0.08)]">
            <Wrench className="w-4 h-4 text-[#B8F500]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#777B72]">
              CONFIRMED SEO TOOLS &amp; AUDIT PLATFORMS
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {PORTFOLIO_DATA.tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#101210] border border-[rgba(220,230,210,0.1)] hover:border-[rgba(184,245,0,0.4)] text-xs text-[#F4F5F0] transition-colors rounded-[2px]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8F500]" />
                <span>{tool}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
