import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Eye, Search, Sliders, TrendingUp } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const stepIcons = [
    <Eye key="discover" className="w-5 h-5 text-[#B8F500]" />,
    <Search key="research" className="w-5 h-5 text-[#B8F500]" />,
    <Sliders key="optimize" className="w-5 h-5 text-[#B8F500]" />,
    <TrendingUp key="measure" className="w-5 h-5 text-[#B8F500]" />,
  ];

  return (
    <section id="process" className="relative py-20 lg:py-24 bg-[#050605] border-b border-[rgba(220,230,210,0.1)]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#B8F500] uppercase">
              STRUCTURED WORKFLOW
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#F4F5F0]">
              MY APPROACH <span className="text-[#B8F500]">TO SEO</span>.
            </h2>
            <p className="text-xs sm:text-sm text-[#B5B8AF] max-w-md leading-relaxed font-normal">
              A systematic four-step methodology designed to research user demand, resolve technical barriers, and sustain organic visibility.
            </p>
          </div>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PORTFOLIO_DATA.approachSteps.map((step, index) => (
            <div
              key={step.step}
              className="group relative bg-[#101210] hover:bg-[#151815] border border-[rgba(220,230,210,0.12)] hover:border-[rgba(184,245,0,0.45)] p-6 flex flex-col justify-between transition-all duration-300 rounded-[2px]"
            >
              {/* Step Number & Icon */}
              <div className="flex items-center justify-between mb-8">
                <div className="p-2.5 bg-[#050605] border border-[rgba(220,230,210,0.1)] group-hover:border-[#B8F500] transition-colors">
                  {stepIcons[index]}
                </div>
                <span className="font-display text-3xl font-black text-[#819E25] group-hover:text-[#B8F500] transition-colors">
                  {step.step}
                </span>
              </div>

              {/* Step Title & Description */}
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-[#F4F5F0] group-hover:text-[#B8F500] transition-colors mb-2.5">
                  {step.title}
                </h3>
                <p className="text-xs text-[#B5B8AF] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Subtle Bottom Accent Indicator */}
              <div className="mt-6 pt-3 border-t border-[rgba(220,230,210,0.06)] flex items-center justify-between text-[9px] font-mono text-[#777B72]">
                <span>STEP {step.step}</span>
                <span className="text-[#B8F500]">SYSTEMATIC</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
