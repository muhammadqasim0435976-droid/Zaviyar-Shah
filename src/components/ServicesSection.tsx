import React from 'react';
import { Search, FileText, Wrench, Edit3, BarChart, TrendingUp, Compass, FileCheck } from 'lucide-react';
import { PORTFOLIO_DATA, ServiceItem } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'keyword-research':
        return <Search className="w-5 h-5 text-[#B8F500]" />;
      case 'on-page-seo':
        return <FileText className="w-5 h-5 text-[#B8F500]" />;
      case 'technical-seo':
        return <Wrench className="w-5 h-5 text-[#B8F500]" />;
      case 'seo-content-writing':
        return <Edit3 className="w-5 h-5 text-[#B8F500]" />;
      case 'competitor-analysis':
        return <BarChart className="w-5 h-5 text-[#B8F500]" />;
      case 'website-seo-audits':
        return <FileCheck className="w-5 h-5 text-[#B8F500]" />;
      case 'organic-traffic-growth':
        return <Compass className="w-5 h-5 text-[#B8F500]" />;
      case 'seo-analytics-reporting':
        return <TrendingUp className="w-5 h-5 text-[#B8F500]" />;
      default:
        return <Search className="w-5 h-5 text-[#B8F500]" />;
    }
  };

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-[#0B0D0B] border-b border-[rgba(220,230,210,0.1)]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#B8F500] uppercase">
              AREAS OF SPECIALIZATION
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#F4F5F0]">
              SEO SERVICES BUILT FOR <span className="text-[#B8F500]">ORGANIC GROWTH</span>.
            </h2>
            <p className="text-xs sm:text-sm text-[#B5B8AF] max-w-md leading-relaxed font-normal">
              Practical search engine optimization, content strategy, and technical website recommendations built for steady, long-term search visibility.
            </p>
          </div>
        </div>

        {/* 8-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PORTFOLIO_DATA.services.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group relative bg-[#101210] hover:bg-[#151815] border border-[rgba(220,230,210,0.12)] hover:border-[rgba(184,245,0,0.45)] p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer rounded-[2px] min-h-[260px]"
            >
              {/* Header with Number and Icon */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-[#050605] border border-[rgba(220,230,210,0.1)] group-hover:border-[#B8F500] transition-colors">
                    {getIcon(service.id)}
                  </div>
                  <span className="font-mono text-xs text-[#777B72] group-hover:text-[#B8F500] transition-colors font-bold">
                    SERVICE {service.number}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold uppercase tracking-wider text-[#F4F5F0] group-hover:text-[#B8F500] transition-colors mb-2 leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs text-[#B5B8AF] leading-relaxed font-normal mb-4">
                  {service.description}
                </p>
              </div>

              {/* Focus tags */}
              <div className="pt-3 border-t border-[rgba(220,230,210,0.06)]">
                <div className="flex flex-wrap gap-1">
                  {service.focusAreas.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-mono text-[#819E25] group-hover:text-[#B8F500] transition-colors"
                    >
                      #{tag.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Realistic Disclaimer */}
        <div className="mt-8 p-3.5 bg-[#050605] border border-[rgba(220,230,210,0.08)] flex items-center justify-between text-[11px] text-[#777B72]">
          <span>* Transparent practice note: Sustainable SEO follows search engine quality guidelines; no unrealistic first-page ranking guarantees.</span>
          <span className="text-[#B8F500] font-mono uppercase hidden sm:block">WHITE-HAT PRACTICES</span>
        </div>

      </div>
    </section>
  );
};
