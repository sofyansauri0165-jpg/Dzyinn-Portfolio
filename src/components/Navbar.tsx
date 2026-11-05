import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Camera } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPhotoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenPhotoModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'studio', label: 'YannStudio' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-[#262626] shadow-lg shadow-black/40 py-3.5'
          : 'bg-[#0A0A0A]/80 backdrop-blur-sm border-[#1c1c1c] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant 3-zone contract: Brand wordmark — Nav links — Primary action */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-1.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626]"
          >
            <span className="font-poster text-2xl tracking-wider text-white group-hover:text-neutral-200 transition-colors whitespace-nowrap shrink-0">
              SOPIAN SAHURI
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0"></span>
          </button>

          {/* Zone 2: 4-6 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 text-sm tracking-wide ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#DC2626] rounded-full transition-all" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenPhotoModal}
              title="Ganti Foto Profil Anda"
              className="p-2 text-neutral-400 hover:text-white hover:bg-[#1a1a1a] rounded-lg border border-transparent hover:border-[#262626] transition-colors"
              aria-label="Ubah foto profil"
            >
              <Camera size={18} />
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#DC2626] hover:bg-[#b91c1c] active:bg-[#991B1B] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-red-950/40"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenPhotoModal}
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-[#1c1c1c]"
              aria-label="Ganti foto profil"
            >
              <Camera size={18} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white rounded-lg hover:bg-[#1c1c1c] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#262626] bg-[#0D0D0D] px-4 pt-3 pb-6 animate-fade-in">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#1a1a1a] text-white border-l-2 border-[#DC2626]'
                      : 'text-neutral-400 hover:text-white hover:bg-[#141414]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs text-[#DC2626] font-mono">Active</span>}
                </button>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[#1f1f1f]">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#DC2626] hover:bg-[#b91c1c] text-white rounded-xl text-sm font-semibold tracking-wide transition-colors"
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={16} />
              </button>
              <div className="mt-3 flex items-center justify-center gap-4 text-xs text-neutral-500">
                <span>{PERSONAL_INFO.studioLocation}</span>
                <span>·</span>
                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-[#DC2626]"
                >
                  WhatsApp
                </a>
                <span>·</span>
                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-[#DC2626]"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
