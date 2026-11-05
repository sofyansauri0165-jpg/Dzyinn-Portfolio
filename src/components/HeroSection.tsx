import React from 'react';
import { ArrowUpRight, Mail, Instagram, MessageCircle, MapPin, Layers, Compass, Rocket } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onNavigate: (tab: string) => void;
  userPhoto?: string | null;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  userPhoto,
}) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-[#1c1c1c]">
      {/* Subtle crimson radial gradient in background */}
      <div 
        className="absolute top-1/4 right-1/4 w-[420px] h-[420px] bg-[#DC2626]/10 rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top editorial kicker bar reminiscent of the reference poster */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#222] text-xs text-neutral-400 font-mono tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <span>CREATIVE PORTFOLIO & STUDIO ECOSYSTEM</span>
          </div>
          <div className="flex items-center gap-3">
            <span>AVAILABLE FOR COLLABORATION</span>
            <span className="text-neutral-600">/</span>
            <span className="text-neutral-300">KOTA SERANG, BANTEN</span>
          </div>
        </div>

        {/* Big Editorial Poster Title */}
        <div className="pt-6 pb-8 md:pb-12 text-center md:text-left select-none">
          <h1 className="font-poster text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.88] tracking-tight text-white flex flex-wrap items-baseline gap-x-6 justify-between">
            <span>SOPIAN</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600">
              SAHURI
            </span>
          </h1>
        </div>

        {/* 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (Content & Persona) - 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Status indicator unboxed */}
            <div className="flex items-center gap-2.5 text-xs text-neutral-300">
              <span className="px-2.5 py-1 rounded bg-[#1c1c1c] border border-[#2a2a2a] text-[#DC2626] font-medium tracking-wide">
                Status Saat Ini
              </span>
              <span className="text-neutral-300">{PERSONAL_INFO.statusLabel}</span>
            </div>

            {/* Greeting & Title */}
            <div>
              <p className="text-neutral-400 text-sm uppercase tracking-widest font-mono mb-2">
                Hello, I'm
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                {PERSONAL_INFO.fullName}
              </h2>
              <p className="text-base sm:text-lg text-[#DC2626] font-semibold mt-1">
                {PERSONAL_INFO.roleTitle}
              </p>
            </div>

            {/* Editorial quote inspired by the reference layout */}
            <div className="relative pl-5 border-l-2 border-[#DC2626] py-1">
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed italic">
                "{PERSONAL_INFO.bio}"
              </p>
              <p className="text-xs text-neutral-400 mt-2 font-mono">
                — Menghubungkan eksplorasi Generatif AI dengan kebutuhan visual & bisnis nyata
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3 bg-[#DC2626] hover:bg-[#b91c1c] active:bg-[#991B1B] text-white rounded-xl text-sm font-semibold tracking-wide transition-colors shadow-lg shadow-red-950/40 flex items-center gap-2"
              >
                <span>Explore My Work</span>
                <ArrowUpRight size={16} />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 bg-transparent hover:bg-[#1a1a1a] text-white border border-[#333] hover:border-neutral-500 rounded-xl text-sm font-semibold tracking-wide transition-colors flex items-center gap-2"
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Media Links with Placeholders */}
            <div className="pt-3 flex flex-wrap items-center gap-3 text-xs text-neutral-400">
              <span className="font-mono text-neutral-500 uppercase tracking-wider text-[11px]">Connect:</span>
              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=Halo%20Sopian,%20saya%20melihat%20website%20portfolio%20Anda`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] hover:border-[#DC2626]/50 text-neutral-300 hover:text-white transition-colors"
              >
                <MessageCircle size={14} className="text-[#DC2626]" />
                <span>WhatsApp</span>
              </a>
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] hover:border-[#DC2626]/50 text-neutral-300 hover:text-white transition-colors"
              >
                <Instagram size={14} className="text-[#DC2626]" />
                <span>@{PERSONAL_INFO.instagram}</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] hover:border-[#DC2626]/50 text-neutral-300 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-[#DC2626]" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column (Photo Showcase with Crimson Ring Inspiration) - 5 cols */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl bg-[#121212] border border-[#262626] p-4 flex flex-col justify-between overflow-hidden group shadow-2xl shadow-black/80">
              {/* Minimalist Red Circular Element behind the portrait frame (inspired by the reference) */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-[#DC2626] to-[#991B1B] opacity-30 blur-2xl pointer-events-none group-hover:opacity-45 transition-opacity duration-500"
                aria-hidden="true" 
              />
              <div 
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full border border-[#DC2626]/30 pointer-events-none"
                aria-hidden="true" 
              />

              {/* Permanent Profile Portrait Container */}
              <div className="relative flex-1 rounded-2xl bg-[#171717] border border-[#2a2a2a] overflow-hidden flex flex-col items-center justify-center">
                <div className="relative w-full h-full">
                  <img
                    src={userPhoto || PERSONAL_INFO.profilePhoto || '/profile.png'}
                    alt="Foto Profil Sopian Sahuri"
                    className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient vignette for sleek editorial contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />

                  {/* Corner Accent Graphic Mark */}
                  <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#DC2626]/80 pointer-events-none" />

                  {/* Bottom photo badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-left pointer-events-none">
                    <span className="text-[11px] font-mono tracking-wider text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                      SOPIAN SAHURI
                    </span>
                    <span className="text-[10px] font-mono tracking-wider text-[#DC2626] bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-red-500/20">
                      FOUNDER
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Identity Footer */}
              <div className="pt-4 flex items-center justify-between text-xs text-neutral-400 border-t border-[#222] mt-3">
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#DC2626]" />
                  <span>{PERSONAL_INFO.studioLocation}</span>
                </div>
                <div className="font-mono text-[11px] text-neutral-500">
                  YannStudio Inisiator
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-metric strip below hero split (Strictly compliant with §2.B of portfolio design) */}
        <div className="mt-14 pt-8 border-t border-[#222] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-[#121212] border border-[#222] flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#DC2626]/10 text-[#DC2626] mt-0.5">
              <Layers size={18} />
            </div>
            <div>
              <div className="font-poster text-3xl text-white tracking-wider tabular-nums">04</div>
              <div className="text-xs text-neutral-300 font-medium">Cabang YannStudio</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Kreatif, Game & Aset</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#121212] border border-[#222] flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#DC2626]/10 text-[#DC2626] mt-0.5">
              <Compass size={18} />
            </div>
            <div>
              <div className="font-poster text-3xl text-white tracking-wider tabular-nums">05</div>
              <div className="text-xs text-neutral-300 font-medium">Tahap Alur Kerja</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Discover s/d Deliver</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#121212] border border-[#222] flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#DC2626]/10 text-[#DC2626] mt-0.5">
              <Rocket size={18} />
            </div>
            <div>
              <div className="font-poster text-3xl text-white tracking-wider tabular-nums">06+</div>
              <div className="text-xs text-neutral-300 font-medium">Eksplorasi Proyek</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Desain, Video & Web</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#121212] border border-[#222] flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#DC2626]/10 text-[#DC2626] mt-0.5">
              <MapPin size={18} />
            </div>
            <div>
              <div className="font-poster text-3xl text-white tracking-wider tabular-nums">BANTEN</div>
              <div className="text-xs text-neutral-300 font-medium">Prov. Banten, Serang</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Basis Domisili & Studio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
