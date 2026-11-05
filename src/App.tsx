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
import { PhotoUploaderModal } from './components/PhotoUploaderModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { LegalModals } from './components/LegalModals';
import { Project } from './data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Load saved custom photo from localStorage on mount
  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem('sopian_portfolio_photo');
      if (savedPhoto) {
        setUserPhoto(savedPhoto);
      }
    } catch {
      // localStorage may fail in restricted sandboxes
    }
  }, []);

  const handleSavePhoto = (newPhoto: string | null) => {
    setUserPhoto(newPhoto);
    try {
      if (newPhoto) {
        localStorage.setItem('sopian_portfolio_photo', newPhoto);
      } else {
        localStorage.removeItem('sopian_portfolio_photo');
      }
    } catch {
      // Ignore storage errors
    }
  };

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
        onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <HeroSection
              onNavigate={handleTabChange}
              onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
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
            onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
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

      {/* Interactive Photo Uploader / Customizer Modal */}
      <PhotoUploaderModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        currentPhoto={userPhoto}
        onSavePhoto={handleSavePhoto}
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
