import React from 'react';
import { ArrowUp, Instagram, Mail, MessageCircle, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'studio', label: 'YannStudio' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a] text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1c1c1c]">
          {/* Brand & Personal Tagline (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-poster text-2xl tracking-wider text-white">
                {PERSONAL_INFO.fullName}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            </div>

            <p className="text-xs font-mono text-[#DC2626] uppercase tracking-wider font-semibold">
              [ {PERSONAL_INFO.tagline} ]
            </p>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Pusat portofolio dan inkubasi ide digital kreator multimedia dan eksplorasi Generatif AI. Merintis YannStudio sebagai ekosistem masa depan.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-neutral-500">
              <MapPin size={13} className="text-[#DC2626]" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Quick Nav (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              Navigasi Utama
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left text-neutral-400 hover:text-white transition-colors py-1"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-3">
                Media Sosial & Kontak
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#121212] hover:bg-[#1a1a1a] border border-[#222] hover:border-[#DC2626]/50 text-neutral-300 hover:text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={16} />
                </a>
                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#121212] hover:bg-[#1a1a1a] border border-[#222] hover:border-[#DC2626]/50 text-neutral-300 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-xl bg-[#121212] hover:bg-[#1a1a1a] border border-[#222] hover:border-[#DC2626]/50 text-neutral-300 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors py-2"
              >
                <span>Kembali ke Atas</span>
                <ArrowUp size={14} className="text-[#DC2626]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. All rights reserved. Built for YannStudio.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-neutral-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-neutral-300 transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
