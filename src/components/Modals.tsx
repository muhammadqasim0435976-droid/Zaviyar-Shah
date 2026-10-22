import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Printer, Download, Mail, Linkedin, Briefcase, Wrench, Layers } from 'lucide-react';
import { Project, ServiceItem, PORTFOLIO_DATA } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectAnalysisModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#101210] border border-[rgba(184,245,0,0.4)] max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl rounded-[2px]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#050605] border border-[rgba(220,230,210,0.15)] text-[#B5B8AF] hover:text-[#B8F500] hover:border-[#B8F500] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8F500] block mb-1">
            {project.badge}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[#F4F5F0]">
            {project.name}
          </h2>
          <p className="text-xs text-[#819E25] font-mono mt-1 uppercase">
            {project.category}
          </p>
        </div>

        {/* Project Description */}
        <div className="p-4 bg-[#050605] border border-[rgba(220,230,210,0.08)] mb-6 text-xs text-[#B5B8AF] leading-relaxed">
          <p>{project.description}</p>
        </div>

        {/* SEO Considerations */}
        <div className="mb-6">
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#F4F5F0] mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#B8F500] rounded-full" />
            SEO &amp; STRUCTURAL ANALYSIS FOCUS:
          </h3>
          <div className="space-y-2">
            {project.analysisFocus.map((focus, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 bg-[#050605] border border-[rgba(220,230,210,0.06)] text-xs text-[#F4F5F0]">
                <CheckCircle className="w-4 h-4 text-[#B8F500] shrink-0 mt-0.5" />
                <span>{focus}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-[11px] text-[#777B72] mb-6 font-normal">
          Portfolio Analysis Note: Included for examination of structure, content organization, and technical search opportunities.
        </p>

        {/* Actions */}
        <div className="pt-4 border-t border-[rgba(220,230,210,0.1)] flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-mono text-[#777B72] hover:text-[#F4F5F0]"
          >
            CLOSE
          </button>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#B8F500] hover:bg-[#C8FF00] text-[#050605] font-bold text-xs uppercase tracking-wider flex items-center gap-2 rounded-[2px]"
          >
            <span>VISIT LIVE WEBSITE</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onConnect: () => void;
}

export const ServiceDetailModal: React.FC<ServiceModalProps> = ({ service, onClose, onConnect }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#101210] border border-[rgba(184,245,0,0.4)] max-w-xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto relative shadow-2xl rounded-[2px]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#050605] border border-[rgba(220,230,210,0.15)] text-[#B5B8AF] hover:text-[#B8F500] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8F500] block mb-2">
          SEO SERVICE {service.number}
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[#F4F5F0] mb-3">
          {service.title}
        </h2>
        <p className="text-xs sm:text-sm text-[#B5B8AF] leading-relaxed mb-6 font-normal">
          {service.description}
        </p>

        <div className="p-4 bg-[#050605] border border-[rgba(220,230,210,0.08)] mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#B8F500] mb-2.5">
            CORE FOCUS AREAS:
          </h3>
          <ul className="space-y-1.5 text-xs text-[#F4F5F0]">
            {service.focusAreas.map((f, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8F500]" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-[rgba(220,230,210,0.1)] flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-mono text-[#777B72] hover:text-[#F4F5F0]"
          >
            CLOSE
          </button>
          <button
            onClick={() => {
              onClose();
              onConnect();
            }}
            className="px-5 py-2.5 bg-[#B8F500] text-[#050605] font-bold text-xs uppercase tracking-wider rounded-[2px]"
          >
            DISCUSS THIS SERVICE
          </button>
        </div>
      </div>
    </div>
  );
};

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { resumeData, personal } = PORTFOLIO_DATA;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0B0D0B] border border-[rgba(184,245,0,0.4)] max-w-3xl w-full max-h-[92vh] overflow-y-auto relative p-6 sm:p-10 shadow-2xl rounded-[2px]">
        {/* Actions Bar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-[rgba(220,230,210,0.12)]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B8F500]" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8F500]">
              PROFESSIONAL RESUME OVERVIEW
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/muhammad-qasim-seo-specialist-cv.pdf"
              download="muhammad-qasim-seo-specialist-cv.pdf"
              className="px-3.5 py-1.5 bg-[#B8F500] hover:bg-[#C8FF00] text-[#050605] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors rounded-[2px]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-[#101210] border border-[rgba(220,230,210,0.15)] hover:border-[#B8F500] text-xs font-mono text-[#F4F5F0] flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-[#B8F500]" />
              <span>PRINT</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 bg-[#101210] border border-[rgba(220,230,210,0.15)] text-[#B5B8AF] hover:text-[#B8F500] transition-colors"
              aria-label="Close resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="space-y-6 text-xs text-[#B5B8AF]">
          {/* Header */}
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-[#F4F5F0] tracking-tight">
              {personal.fullName}
            </h1>
            <p className="text-sm font-semibold text-[#B8F500] uppercase tracking-wider mt-0.5">
              {personal.title}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-mono text-[#777B72] mt-2">
              <span>Location: {personal.location}</span>
              <span>•</span>
              <span>Email: {personal.email}</span>
            </div>
            <p className="mt-4 text-xs text-[#F4F5F0] leading-relaxed border-l-2 border-[#B8F500] pl-3 font-normal">
              {resumeData.summary}
            </p>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-3 pb-1 border-b border-[rgba(220,230,210,0.08)]">
              <Briefcase className="w-4 h-4 text-[#B8F500]" />
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-[#F4F5F0]">
                PRACTICAL EXPERIENCE
              </h2>
            </div>

            <div className="space-y-5">
              {resumeData.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-4 border-l border-[rgba(184,245,0,0.3)]">
                  <div className="absolute -left-1 top-1 w-2 h-2 rounded-full bg-[#B8F500]" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <h3 className="font-display text-sm font-bold uppercase text-[#F4F5F0]">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-[10px] text-[#B8F500]">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#777B72] mb-1.5">{exp.company} • {exp.location}</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-[#B5B8AF]">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="leading-relaxed font-normal">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies */}
          <div className="pt-2 border-t border-[rgba(220,230,210,0.08)]">
            <div className="flex items-center gap-2 mb-3">
              <Wrench className="w-4 h-4 text-[#B8F500]" />
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-[#F4F5F0]">
                CORE COMPETENCIES
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F4F5F0]">
              {resumeData.coreCompetencies.map((comp, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 bg-[#101210] border border-[rgba(220,230,210,0.06)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8F500]" />
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Contact footer */}
          <div className="pt-4 border-t border-[rgba(220,230,210,0.1)] flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-[#777B72]">Direct Inquiries: {personal.email}</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B8F500] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
