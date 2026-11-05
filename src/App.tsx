import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ShortIntro } from './components/ShortIntro';
import { CreativeProcess } from './components/CreativeProcess';
import { FeaturedProjects } from './components/FeaturedProjects';
import { InteractiveMediaShowcase } from './components/InteractiveMediaShowcase';
import { YannStudioSection } from './components/DzyinnStudioSection';
import { SkillsOverview } from './components/SkillsOverview';
import { ClosingCTA } from './components/ClosingCTA';
import { AboutPage } from './components/AboutPage';
import { SkillsPage } from './components/SkillsPage';
import { ProjectsPage } from './components/ProjectsPage';
import { YannStudioPage } from './components/DzyinnStudioPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { LegalModals } from './components/LegalModals';
import { Project, PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const userPhoto = PERSONAL_INFO.profilePhoto || '/profile.png';
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] flex flex-col font-sans selection:bg-[#DC2626] selection:text-white">
      {/* Sticky 3-Zone Compliant Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <HeroSection
              onNavigate={handleTabChange}
              userPhoto={userPhoto}
            />
            <ShortIntro
              onNavigateToAbout={() => handleTabChange('about')}
            />
            <CreativeProcess />
            {/* Interactive Showcase for Poster Visual, Video Editing Suite, and Photo Retouching */}
            <InteractiveMediaShowcase />
            <FeaturedProjects
              onSelectProject={(project) => setSelectedProject(project)}
              onNavigateToProjects={() => handleTabChange('projects')}
            />
            <YannStudioSection
              onNavigateToStudio={() => handleTabChange('studio')}
            />
            <SkillsOverview
              onNavigateToSkills={() => handleTabChange('skills')}
            />
            <ClosingCTA
              onNavigate={handleTabChange}
            />
          </>
        )}

        {activeTab === 'about' && (
          <AboutPage
            userPhoto={userPhoto}
            onNavigateToContact={() => handleTabChange('contact')}
          />
        )}

        {activeTab === 'skills' && (
          <SkillsPage />
        )}

        {activeTab === 'projects' && (
          <ProjectsPage
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {activeTab === 'studio' && (
          <YannStudioPage />
        )}

        {activeTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Minimalist Editorial Footer */}
      <Footer
        setActiveTab={handleTabChange}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Project Detail Lightbox Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Privacy Policy & Terms Modal */}
      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
