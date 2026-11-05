import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ClosingCTAProps {
  onNavigate: (tab: string) => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#120808] to-[#0A0A0A] border-b border-[#1c1c1c]">
      {/* Subtle crimson glow background */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#DC2626]/10 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DC2626]/10 border border-[#DC2626]/20 text-[#DC2626] text-xs font-mono uppercase tracking-widest mb-4">
          <span>Let's Connect & Collaborate</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Have an Idea? Let's Create Something Meaningful.
        </h2>

        <p className="mt-5 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Terbuka untuk diskusi, kolaborasi, project kreatif, dan berbagai peluang menarik lainnya.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('contact')}
            className="px-7 py-3.5 bg-[#DC2626] hover:bg-[#b91c1c] active:bg-[#991B1B] text-white rounded-xl text-sm font-semibold tracking-wide transition-all shadow-xl shadow-red-950/50 flex items-center gap-2"
          >
            <span>Contact Me</span>
            <ArrowUpRight size={16} />
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="px-7 py-3.5 bg-transparent hover:bg-[#1c1c1c] text-white border border-[#333] hover:border-neutral-500 rounded-xl text-sm font-semibold tracking-wide transition-colors"
          >
            <span>Explore My Projects</span>
          </button>
        </div>

        {/* Quick direct WhatsApp link */}
        <div className="mt-8 pt-8 border-t border-[#222]/80 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <a
            href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=Halo%20Sopian,%20saya%20tertarik%20berdiskusi%20tentang%20kolaborasi`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-neutral-300 hover:text-[#DC2626] transition-colors"
          >
            <MessageCircle size={15} className="text-[#DC2626]" />
            <span>Chat Langsung via WhatsApp ({PERSONAL_INFO.whatsappDisplay})</span>
          </a>
          <span className="text-neutral-600 hidden sm:inline">|</span>
          <span className="text-neutral-400">Domisili: {PERSONAL_INFO.location}</span>
        </div>
      </div>
    </section>
  );
};
