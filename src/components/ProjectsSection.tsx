import React from 'react';
import { ExternalLink, Globe, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="relative py-20 lg:py-28 bg-[#0B0D0B] border-b border-[rgba(220,230,210,0.1)]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#B8F500] uppercase">
                PORTFOLIO SHOWCASE
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#F4F5F0]">
              SELECTED <span className="text-[#B8F500]">WEBSITE PROJECTS</span>.
            </h2>
            <p className="text-xs sm:text-sm text-[#B5B8AF] mt-2 font-normal max-w-xl leading-relaxed">
              Explore six websites featured in my SEO portfolio across logistics, healthcare, medical services, and other business categories.
            </p>
          </div>

          <div className="text-[10px] font-mono text-[#777B72] border border-[rgba(220,230,210,0.1)] px-3.5 py-1.5 bg-[#101210]">
            6 WEBSITES FEATURED
          </div>
        </div>

        {/* 6 Real Website Cards (3 columns on desktop, 2 on medium, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#101210] border border-[rgba(220,230,210,0.12)] hover:border-[rgba(184,245,0,0.45)] transition-all duration-300 flex flex-col justify-between overflow-hidden rounded-[2px]"
            >
              {/* Card Header Banner / Branded Aesthetic Slate */}
              <div className="p-6 bg-gradient-to-br from-[#151815] to-[#0A0C0A] border-b border-[rgba(220,230,210,0.08)] relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#B8F500] bg-black/60 px-2.5 py-1 border border-[rgba(184,245,0,0.3)]">
                    {project.badge}
                  </span>
                  <Globe className="w-4 h-4 text-[#777B72] group-hover:text-[#B8F500] transition-colors" />
                </div>

                <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-[#F4F5F0] group-hover:text-[#B8F500] transition-colors mb-1">
                  {project.name}
                </h3>
                <p className="text-[11px] text-[#819E25] font-mono uppercase">
                  {project.category}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-xs text-[#B5B8AF] leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* SEO Analysis Focus List */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#777B72] block">
                      KEY SEO &amp; ARCHITECTURAL CONSIDERATIONS:
                    </span>
                    {project.analysisFocus.map((focus, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#F4F5F0]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#B8F500] shrink-0 mt-0.5" />
                        <span className="text-[11px] text-[#B5B8AF]">{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions: Visit Website (External link in new tab) + View Analysis Details */}
                <div className="pt-4 border-t border-[rgba(220,230,210,0.08)] flex items-center justify-between gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-[#B8F500] hover:bg-[#C8FF00] text-[#050605] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors rounded-[2px]"
                  >
                    <span>VISIT WEBSITE</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="px-3.5 py-2.5 bg-transparent border border-[rgba(220,230,210,0.15)] hover:border-[#B8F500] text-[#F4F5F0] hover:text-[#B8F500] text-xs font-semibold uppercase tracking-wider transition-colors rounded-[2px]"
                  >
                    ANALYSIS NOTES
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Portfolio Note */}
        <div className="p-4 bg-[#050605] border border-[rgba(220,230,210,0.1)] text-center">
          <p className="text-xs text-[#777B72]">
            Note: These six websites are featured as selected portfolio examples for examining website structure, content relevance, and technical SEO opportunities across different business categories.
          </p>
        </div>

      </div>
    </section>
  );
};
