import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import {
  ProjectAnalysisModal,
  ServiceDetailModal,
  ResumeModal,
} from './components/Modals';
import { Project, ServiceItem } from './data/portfolioData';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Active section tracking on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'services', 'projects', 'resume', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 130;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      const navOffset = 76;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#050605] text-[#F4F5F0] selection:bg-[#B8F500] selection:text-[#050605]">
      {/* Navigation Header */}
      <Header
        activeSection={activeSection}
      />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onViewProjects={() => handleScrollTo('projects')}
          onConnect={() => handleScrollTo('contact')}
        />

        {/* 2. About Me Section: SEO with Purpose. Growth with Strategy. */}
        <AboutSection />

        {/* 3. Work Process Section: My Approach to SEO */}
        <ProcessSection />

        {/* 4. Skills Section: 5 Categorized SEO Disciplines */}
        <SkillsSection />

        {/* 5. Services Section: SEO Services Built for Organic Growth */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* 6. Selected Website Projects (6 Websites) */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 7. Dedicated CV / Resume Section: My Professional Profile */}
        <ResumeSection
          onViewProjects={() => handleScrollTo('projects')}
          onOpenPreview={() => setIsResumeOpen(true)}
        />

        {/* 8. Contact Section: Let's Talk SEO */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectAnalysisModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onConnect={() => {
          setSelectedService(null);
          handleScrollTo('contact');
        }}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
