import React from 'react';
import { ArrowRight, Mail, Search, Layers, Globe, BarChart2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { HeroLimeBrush, TechRadarRings } from './BrushesAndAccents';
import heroPortraitImg from '../assets/images/hero_portrait_1792575133213.jpg';

interface HeroSectionProps {
  onViewProjects: () => void;
  onConnect: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onViewProjects,
  onConnect,
}) => {
  const statIcons = [
    <Search key="search" className="w-4 h-4 text-[#B8F500]" />,
    <Layers key="layers" className="w-4 h-4 text-[#B8F500]" />,
    <Globe key="globe" className="w-4 h-4 text-[#B8F500]" />,
    <BarChart2 key="chart" className="w-4 h-4 text-[#B8F500]" />,
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92svh] pt-24 lg:pt-28 pb-12 lg:pb-16 flex flex-col justify-between overflow-hidden bg-[#050605] border-b border-[rgba(220,230,210,0.1)]"
    >
      {/* Background Grid Pattern & Ambient Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[480px] h-[480px] bg-[#B8F500]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main 3-Part Hero Container */}
      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Column 1: Left Copy & Actions (6 cols on desktop) */}
          <div className="lg:col-span-6 z-20 flex flex-col items-start pt-4 lg:pt-0">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101210] border border-[rgba(184,245,0,0.3)] mb-4 lg:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#B8F500] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#B8F500] uppercase">
                {PORTFOLIO_DATA.personal.headlineSub}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-[54px] sm:text-[72px] md:text-[88px] xl:text-[102px] font-extrabold uppercase leading-[0.9] tracking-tight text-[#F4F5F0] mb-4">
              TURN SEARCHES INTO <br />
              <span className="text-[#B8F500] lime-text-glow">GROWTH.</span>
            </h1>

            {/* Supporting Tagline */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.22em] mb-4 text-[#F4F5F0]">
              <span className="text-[#B8F500]">STRATEGY.</span>
              <span className="text-[rgba(220,230,210,0.4)]">•</span>
              <span>CONTENT.</span>
              <span className="text-[rgba(220,230,210,0.4)]">•</span>
              <span>ORGANIC GROWTH.</span>
            </div>

            {/* Introduction */}
            <p className="text-sm sm:text-base text-[#B5B8AF] leading-relaxed max-w-[490px] mb-8 font-normal">
              I'm Muhammad Qasim, an SEO Specialist focused on keyword research, on-page optimization, technical SEO, content strategy, and organic search performance. I work to identify search opportunities, improve website visibility, and build sustainable SEO strategies through research, relevant content, and data-informed optimization.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <button
                onClick={onViewProjects}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#B8F500] hover:bg-[#C8FF00] text-[#050605] font-bold text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2 transition-all duration-200 group rounded-[2px] shadow-lg shadow-[#B8F500]/15"
              >
                <span>EXPLORE MY PROJECTS</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onConnect}
                className="w-full sm:w-auto px-5 py-3.5 bg-transparent hover:bg-[#101210] border border-[rgba(184,245,0,0.4)] hover:border-[#B8F500] text-[#F4F5F0] font-bold text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2 transition-all duration-200 rounded-[2px]"
              >
                <Mail className="w-4 h-4 text-[#B8F500]" />
                <span>CONTACT ME</span>
              </button>

              <a
                href="/muhammad-qasim-seo-specialist-cv.pdf"
                download="muhammad-qasim-seo-specialist-cv.pdf"
                className="w-full sm:w-auto px-5 py-3.5 bg-[#101210] hover:bg-[#151815] border border-[rgba(220,230,210,0.18)] hover:border-[#B8F500] text-[#F4F5F0] hover:text-[#B8F500] font-bold text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition-all duration-200 rounded-[2px]"
              >
                <svg className="w-4 h-4 text-[#B8F500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>DOWNLOAD MY CV</span>
              </a>
            </div>

            {/* Trust Statement */}
            <div className="pt-4 border-t border-[rgba(220,230,210,0.1)] w-full max-w-[500px]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#B8F500]" />
                <span className="text-[10px] sm:text-[11px] uppercase font-bold tracking-[0.18em] text-[#777B72]">
                  {PORTFOLIO_DATA.personal.trustStatement}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Center-Right Profile Portrait with Lime Brush Accent (4 cols) */}
          <div className="lg:col-span-4 relative flex items-center justify-center min-h-[400px] sm:min-h-[480px]">
            {/* Tech Radar Rings behind */}
            <div className="absolute -top-8 -right-10 w-[360px] h-[360px] z-0">
              <TechRadarRings className="w-full h-full" />
            </div>

            {/* Energetic Diagonal Lime Brush Stroke Graphic */}
            <div className="absolute inset-0 -top-6 -left-6 -right-6 -bottom-6 z-0 flex items-center justify-center">
              <HeroLimeBrush className="w-[125%] h-[125%] -rotate-6 scale-105 opacity-90 filter drop-shadow-[0_0_35px_rgba(184,245,0,0.35)]" />
            </div>

            {/* Portrait Image Container */}
            <div className="relative z-10 w-[280px] sm:w-[320px] md:w-[350px] aspect-[3/4] overflow-hidden rounded-[2px] border border-[rgba(220,230,210,0.15)] shadow-2xl bg-[#101210]">
              <img
                src={heroPortraitImg}
                alt="Muhammad Qasim — SEO Specialist"
                className="w-full h-full object-cover object-top filter grayscale contrast-125"
                loading="eager"
              />

              {/* Edge Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050605] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/30" />

              {/* Status Badge in Corner */}
              <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 bg-black/85 backdrop-blur-sm border border-[rgba(184,245,0,0.3)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8F500]" />
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#F4F5F0]">
                  MUHAMMAD QASIM
                </span>
              </div>

              {/* Location Tag */}
              <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 bg-black/85 backdrop-blur-sm border border-[rgba(220,230,210,0.15)]">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#B5B8AF]">
                  PAKISTAN • SEO SPECIALIST
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Far-Right Statistics Panel (2 cols) */}
          <div className="lg:col-span-2 z-20 flex flex-col justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 bg-[#0B0D0B]/85 p-5 border border-[rgba(220,230,210,0.1)] lg:border-l lg:border-l-[rgba(184,245,0,0.35)]">
              {PORTFOLIO_DATA.heroStats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`flex flex-col ${
                    idx < PORTFOLIO_DATA.heroStats.length - 1
                      ? 'lg:border-b lg:border-[rgba(220,230,210,0.08)] lg:pb-3.5'
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {statIcons[idx]}
                    <span className="font-display text-2xl lg:text-3xl font-extrabold tracking-tight text-[#B8F500]">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F4F5F0] leading-tight">
                    {stat.label}
                  </span>
                  <span className="text-[9px] font-mono text-[#777B72] mt-0.5">
                    {stat.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
