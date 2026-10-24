import React from 'react';
import { Download, ArrowRight, FileText, CheckCircle2, ExternalLink, Eye } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeSectionProps {
  onViewProjects: () => void;
  onOpenPreview: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  onViewProjects,
  onOpenPreview,
}) => {
  return (
    <section id="resume" className="relative py-20 lg:py-24 bg-[#0B0D0B] border-b border-[rgba(220,230,210,0.1)]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#B8F500] uppercase">
              CURRICULUM VITAE
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#F4F5F0]">
                MY PROFESSIONAL <span className="text-[#B8F500]">PROFILE</span>.
              </h2>
              <p className="text-xs sm:text-sm text-[#B5B8AF] mt-2 font-normal max-w-xl leading-relaxed">
                Explore my SEO experience, core skills, and selected website projects in a professionally designed résumé.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/muhammad-qasim-seo-specialist-cv.pdf"
                download="muhammad-qasim-seo-specialist-cv.pdf"
                className="px-6 py-3.5 bg-[#B8F500] hover:bg-[#C8FF00] text-[#050605] font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all rounded-[2px] shadow-lg shadow-[#B8F500]/15"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD MY CV</span>
              </a>

              <button
                onClick={onViewProjects}
                className="px-5 py-3.5 bg-[#101210] hover:bg-[#151815] border border-[rgba(220,230,210,0.15)] hover:border-[#B8F500] text-[#F4F5F0] font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all rounded-[2px]"
              >
                <span>VIEW MY PROJECTS</span>
                <ArrowRight className="w-4 h-4 text-[#B8F500]" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive CV Preview Card */}
        <div className="bg-[#101210] border border-[rgba(220,230,210,0.14)] p-6 sm:p-10 rounded-[2px] relative overflow-hidden shadow-2xl">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#B8F500]/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Top Bar inside Card */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[rgba(220,230,210,0.1)]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#B8F500]" />
                <span className="text-[10px] font-mono text-[#B8F500] uppercase tracking-widest">
                  DOCUMENT: muhammad-qasim-seo-specialist-cv.pdf
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[#F4F5F0]">
                MUHAMMAD QASIM — <span className="text-[#B8F500]">SEO SPECIALIST</span>
              </h3>
              <p className="text-xs text-[#777B72] font-mono mt-0.5">
                Pakistan  •  muhammadqasim0435976@gmail.com  •  linkedin.com/in/muhammadqasim-waheed/
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onOpenPreview}
                className="px-3.5 py-2 bg-[#050605] border border-[rgba(220,230,210,0.15)] hover:border-[#B8F500] text-xs font-mono text-[#F4F5F0] flex items-center gap-1.5 transition-colors rounded-[2px]"
              >
                <Eye className="w-3.5 h-3.5 text-[#B8F500]" />
                <span>EXPAND VIEW</span>
              </button>

              <a
                href="/muhammad-qasim-seo-specialist-cv.pdf"
                download="muhammad-qasim-seo-specialist-cv.pdf"
                className="px-4 py-2 bg-[#B8F500] text-[#050605] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors rounded-[2px]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD PDF</span>
              </a>
            </div>
          </div>

          {/* Preview Layout in Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs">
            {/* Left Col: Summary & Experience (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Summary */}
              <div>
                <h4 className="text-[11px] font-display font-bold uppercase tracking-widest text-[#B8F500] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#B8F500] rounded-full" />
                  PROFESSIONAL SUMMARY
                </h4>
                <p className="text-xs text-[#B5B8AF] leading-relaxed font-normal bg-[#050605] p-3.5 border border-[rgba(220,230,210,0.06)]">
                  {PORTFOLIO_DATA.resumeData.summary}
                </p>
              </div>

              {/* Experience */}
              <div>
                <h4 className="text-[11px] font-display font-bold uppercase tracking-widest text-[#B8F500] mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#B8F500] rounded-full" />
                  PRACTICAL EXPERIENCE (~1.5 YEARS COMBINED)
                </h4>
                <div className="space-y-4">
                  {PORTFOLIO_DATA.resumeData.experience.map((exp, idx) => (
                    <div key={idx} className="p-3.5 bg-[#050605] border border-[rgba(220,230,210,0.06)]">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                        <span className="font-display font-bold uppercase text-sm text-[#F4F5F0]">
                          {exp.role}
                        </span>
                        <span className="font-mono text-[10px] text-[#B8F500]">
                          {exp.period}
                        </span>
                      </div>
                      <span className="text-[10px] text-[#777B72] block mb-2">{exp.company} • {exp.location}</span>
                      <ul className="space-y-1 text-xs text-[#B5B8AF]">
                        {exp.bullets.slice(0, 3).map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="text-[#B8F500] font-bold">•</span>
                            <span className="font-normal">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Core SEO Competencies & Selected Projects (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Core Skills */}
              <div>
                <h4 className="text-[11px] font-display font-bold uppercase tracking-widest text-[#B8F500] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#B8F500] rounded-full" />
                  CORE SEO COMPETENCIES
                </h4>
                <div className="p-3.5 bg-[#050605] border border-[rgba(220,230,210,0.06)] space-y-2">
                  {PORTFOLIO_DATA.skillsCategories.map((cat) => (
                    <div key={cat.id} className="text-xs">
                      <span className="font-semibold text-[#F4F5F0]">{cat.name}: </span>
                      <span className="text-[#B5B8AF]">{cat.items.slice(0, 4).join(', ')}...</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects in CV */}
              <div>
                <h4 className="text-[11px] font-display font-bold uppercase tracking-widest text-[#B8F500] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#B8F500] rounded-full" />
                  SELECTED PORTFOLIO WEBSITES (6 SITES)
                </h4>
                <div className="p-3.5 bg-[#050605] border border-[rgba(220,230,210,0.06)] space-y-2">
                  {PORTFOLIO_DATA.projects.map((proj) => (
                    <div key={proj.id} className="flex items-center justify-between text-xs py-0.5">
                      <span className="text-[#F4F5F0] font-medium">{proj.name}</span>
                      <span className="font-mono text-[10px] text-[#819E25] uppercase">{proj.category}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified PDF Notice */}
              <div className="p-3 bg-[#151815] border border-[rgba(184,245,0,0.3)] flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2 text-[#F4F5F0]">
                  <CheckCircle2 className="w-4 h-4 text-[#B8F500]" />
                  <span>A4 ATS-Compliant PDF Ready</span>
                </div>
                <a
                  href="/muhammad-qasim-seo-specialist-cv.pdf"
                  download="muhammad-qasim-seo-specialist-cv.pdf"
                  className="font-mono text-[#B8F500] hover:underline flex items-center gap-1 font-bold"
                >
                  <span>SAVE FILE</span>
                  <Download className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
