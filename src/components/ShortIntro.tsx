import React from 'react';
import { ArrowRight, Sparkles, BookOpen, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ShortIntroProps {
  onNavigateToAbout: () => void;
}

export const ShortIntro: React.FC<ShortIntroProps> = ({ onNavigateToAbout }) => {
  return (
    <section className="py-16 md:py-20 border-b border-[#1c1c1c] bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Section Kicker & Title */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#DC2626] uppercase tracking-wider mb-2">
              <Sparkles size={14} />
              <span>Introduction</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              More About Me
            </h2>
            <div className="flex items-center gap-3 mt-3">
              <img
                src={PERSONAL_INFO.profilePhoto || '/profile.png'}
                alt={PERSONAL_INFO.fullName}
                className="w-10 h-10 rounded-full object-cover object-[center_20%] border border-[#DC2626]/50 shadow-sm shrink-0"
              />
              <div>
                <p className="text-sm font-semibold text-white">
                  {PERSONAL_INFO.fullName}
                </p>
                <p className="text-xs text-neutral-400 font-mono">
                  {PERSONAL_INFO.roleTitle}
                </p>
              </div>
            </div>
          </div>

          {/* Description & Narrative */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              Halo! Saya <span className="text-white font-semibold">{PERSONAL_INFO.fullName}</span>, seorang pembelajar aktif dan kreator digital yang berdomisili di <span className="text-neutral-200">{PERSONAL_INFO.location}</span>. Minat saya berkembang dari rasa penasaran mendalam terhadap teknologi Generatif AI saat mengikuti program pelatihan LPK Gen AI.
            </p>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Bagi saya, berkarya bukan sekadar menyelesaikan tugas teknis, melainkan tentang hobi dan kepuasan merangkai elemen visual, audio, teks, dan logika menjadi sesuatu yang berdaya guna. Dari pondasi inilah saya mendirikan <span className="text-[#DC2626] font-medium">YannStudio</span> sebagai wadah pengembangan ide bisnis kreatif.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <BookOpen size={15} className="text-[#DC2626]" />
                <span>Alumni LPK Gen AI</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Heart size={15} className="text-[#DC2626]" />
                <span>Berangkat dari Hobi Berkarya</span>
              </div>
              <button
                onClick={onNavigateToAbout}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#DC2626] transition-colors ml-auto group"
              >
                <span>Pelajari Selengkapnya</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
