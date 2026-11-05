import React from 'react';
import { MapPin, Mail, Phone, Instagram, Calendar, Target, Flag, Compass, Sparkles, Camera, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutPageProps {
  onOpenPhotoModal: () => void;
  userPhoto: string | null;
  onNavigateToContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenPhotoModal,
  userPhoto,
  onNavigateToContact,
}) => {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 animate-fade-in">
      {/* Page Header */}
      <div className="border-b border-[#222] pb-8">
        <div className="text-xs font-mono text-[#DC2626] uppercase tracking-wider mb-2">
          Identity & Narrative
        </div>
        <h1 className="font-poster text-5xl sm:text-7xl md:text-8xl text-white tracking-wide">
          ABOUT ME
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mt-2">
          Mengenal lebih dekat identitas, perjalanan belajar, fokus keahlian, dan visi masa depan Sopian Sahuri.
        </p>
      </div>

      {/* 1. Personal Introduction Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Photo Portrait Container */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl bg-[#121212] border border-[#262626] p-4 flex flex-col justify-between overflow-hidden shadow-2xl">
            <div 
              className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#DC2626]/20 blur-3xl pointer-events-none" 
              aria-hidden="true" 
            />

            <div className="relative flex-1 rounded-2xl bg-[#171717] border border-[#2a2a2a] overflow-hidden flex flex-col items-center justify-center group">
              {userPhoto ? (
                <img
                  src={userPhoto}
                  alt="Foto Sopian Sahuri"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="p-8 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#DC2626]/20 to-[#991B1B]/40 border-2 border-[#DC2626] flex items-center justify-center">
                    <span className="font-poster text-4xl text-white">SS</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block">
                      [ AREA FOTO PROFIL ]
                    </span>
                    <span className="text-[11px] text-neutral-500 mt-1 block">
                      Gunakan foto terbaik Anda untuk memperkuat personal branding
                    </span>
                  </div>
                  <button
                    onClick={onOpenPhotoModal}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#DC2626]/20 hover:bg-[#DC2626] text-white text-xs font-medium transition-colors border border-[#DC2626]/40"
                  >
                    <Camera size={13} />
                    <span>Upload Foto</span>
                  </button>
                </div>
              )}

              {userPhoto && (
                <button
                  onClick={onOpenPhotoModal}
                  className="absolute bottom-3 right-3 px-3 py-1.5 bg-black/80 hover:bg-[#DC2626] text-white text-xs rounded-lg border border-white/20 transition-all flex items-center gap-1.5"
                >
                  <Camera size={12} />
                  <span>Ganti Foto</span>
                </button>
              )}
            </div>

            <div className="pt-3 text-center">
              <span className="text-xs font-mono text-neutral-500">
                Sopian Sahuri · Personal Profile
              </span>
            </div>
          </div>
        </div>

        {/* Right: Personal Metadata & Contact List */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 md:p-8 rounded-2xl bg-[#121212] border border-[#222]">
            <h2 className="text-2xl font-bold text-white mb-4">
              {PERSONAL_INFO.fullName}
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              {PERSONAL_INFO.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#1c1c1c] text-xs">
              <div className="p-3.5 rounded-xl bg-[#171717] border border-[#262626]">
                <div className="text-neutral-500 font-mono text-[11px] mb-1">TEMPAT TINGGAL</div>
                <div className="text-white font-medium flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#DC2626]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#171717] border border-[#262626]">
                <div className="text-neutral-500 font-mono text-[11px] mb-1">LOKASI STUDIO</div>
                <div className="text-white font-medium flex items-center gap-1.5">
                  <Compass size={14} className="text-[#DC2626]" />
                  <span>{PERSONAL_INFO.studioLocation}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#171717] border border-[#262626]">
                <div className="text-neutral-500 font-mono text-[11px] mb-1">WHATSAPP / KONTAK</div>
                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-[#DC2626] font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Phone size={14} className="text-[#DC2626]" />
                  <span>{PERSONAL_INFO.whatsappDisplay}</span>
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-[#171717] border border-[#262626]">
                <div className="text-neutral-500 font-mono text-[11px] mb-1">EMAIL RESMI</div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-white hover:text-[#DC2626] font-medium flex items-center gap-1.5 transition-colors truncate"
                >
                  <Mail size={14} className="text-[#DC2626]" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-[#171717] border border-[#262626]">
                <div className="text-neutral-500 font-mono text-[11px] mb-1">INSTAGRAM</div>
                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-[#DC2626] font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Instagram size={14} className="text-[#DC2626]" />
                  <span>@{PERSONAL_INFO.instagram}</span>
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-[#171717] border border-[#262626]">
                <div className="text-neutral-500 font-mono text-[11px] mb-1">STUDIO KREATIF</div>
                <div className="text-white font-medium flex items-center gap-1.5">
                  <Sparkles size={14} className="text-[#DC2626]" />
                  <span>YannStudio Inisiator</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. My Story Section */}
      <section className="p-8 rounded-3xl bg-[#121212] border border-[#222]">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#DC2626] uppercase tracking-wider mb-2">
            <Sparkles size={14} />
            <span>Origins & Passion</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            My Story
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
            <p>
              {PERSONAL_INFO.story}
            </p>
            <p className="text-neutral-400">
              <strong className="text-white">Alasan Mulai Berkarya:</strong> {PERSONAL_INFO.hobbies}. Bagi saya, setiap alat baru—terutama revolusi kecerdasan buatan generatif—adalah kanvas terbuka yang mempercepat transformasi ide abstrak menjadi karya visual dan layanan yang dapat dinikmati orang lain.
            </p>
          </div>
        </div>
      </section>

      {/* 3. My Journey & Timeline */}
      <section className="space-y-6">
        <div className="border-b border-[#222] pb-4">
          <div className="text-xs font-mono text-[#DC2626] uppercase tracking-wider mb-1">
            Learning Progression
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            My Journey & Milestones
          </h2>
        </div>

        <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#262626]">
          {/* Milestone 1 */}
          <div className="relative group">
            <div className="absolute -left-[27px] sm:-left-[31px] top-1 w-3 h-3 rounded-full bg-[#DC2626] ring-4 ring-[#0A0A0A]" />
            <div className="p-6 rounded-2xl bg-[#121212] border border-[#222] group-hover:border-[#DC2626]/40 transition-colors">
              <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono mb-1">
                <Calendar size={13} className="text-[#DC2626]" />
                <span>2024 · Titik Awal</span>
              </div>
              <h3 className="text-lg font-bold text-white">Pelatihan LPK Gen AI & Eksplorasi Tools AI</h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                Memulai langkah dengan mengikuti pelatihan intensif di LPK Gen AI. Mempelajari prinsip dasar prompt engineering, pembuatan konten visual berbantuan AI, dan otomasi alur kerja digital.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-neutral-400">
                <span className="px-2 py-0.5 rounded bg-[#1a1a1a] border border-[#262626]">Gen AI Training</span>
                <span className="px-2 py-0.5 rounded bg-[#1a1a1a] border border-[#262626]">Prompting Fundamentals</span>
                <span className="px-2 py-0.5 rounded bg-[#1a1a1a] border border-[#262626]">Creative Workflow</span>
              </div>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="relative group">
            <div className="absolute -left-[27px] sm:-left-[31px] top-1 w-3 h-3 rounded-full bg-[#991B1B] ring-4 ring-[#0A0A0A]" />
            <div className="p-6 rounded-2xl bg-[#121212] border border-[#222] group-hover:border-[#DC2626]/40 transition-colors">
              <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono mb-1">
                <Calendar size={13} className="text-[#DC2626]" />
                <span>2024 - 2025 · Pengembangan Praktis</span>
              </div>
              <h3 className="text-lg font-bold text-white">Praktek Multimedia & Desain Konten Digital</h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                Mengaplikasikan pengetahuan ke dalam proyek nyata: editing video pendek untuk media sosial (Reels/Shorts), manipulasi foto & poster, serta pembuatan template slide presentasi PowerPoint untuk kebutuhan bisnis.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-neutral-400">
                <span className="px-2 py-0.5 rounded bg-[#1a1a1a] border border-[#262626]">Video Editing (CapCut/Premiere)</span>
                <span className="px-2 py-0.5 rounded bg-[#1a1a1a] border border-[#262626]">Photoshop Retouching</span>
                <span className="px-2 py-0.5 rounded bg-[#1a1a1a] border border-[#262626]">PowerPoint Deck</span>
              </div>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="relative group">
            <div className="absolute -left-[27px] sm:-left-[31px] top-1 w-3 h-3 rounded-full bg-[#DC2626] ring-4 ring-[#0A0A0A]" />
            <div className="p-6 rounded-2xl bg-[#121212] border border-[#222] group-hover:border-[#DC2626]/40 transition-colors">
              <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono mb-1">
                <Calendar size={13} className="text-[#DC2626]" />
                <span>2025 - Saat Ini · Fase Pembangunan</span>
              </div>
              <h3 className="text-lg font-bold text-white">Merintis Ekosistem Bisnis YannStudio</h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                Mengintegrasikan seluruh hasil belajar ke dalam satu brand mandiri, YannStudio. Merancang 4 cabang bisnis bertahap mulai dari layanan kreatif, gaming services, toko produk digital, hingga rencana marketplace masa depan.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-neutral-400">
                <span className="px-2 py-0.5 rounded bg-[#1a1a1a] border border-[#262626]">YannStudio Ecosystem</span>
                <span className="px-2 py-0.5 rounded bg-[#1a1a1a] border border-[#262626]">Web Development Intro</span>
                <span className="px-2 py-0.5 rounded bg-[#1a1a1a] border border-[#262626]">Service SOP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. My Goals Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#121212] border border-[#222] flex flex-col justify-between">
          <div>
            <div className="p-2.5 rounded-xl bg-[#DC2626]/10 text-[#DC2626] w-fit mb-3">
              <Target size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Tujuan Jangka Pendek</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {PERSONAL_INFO.goalsShortTerm}
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-[#1c1c1c] text-[11px] font-mono text-neutral-500">
            FOKUS 2025 · FUNDAMENTAL & KARYA
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#121212] border border-[#222] flex flex-col justify-between">
          <div>
            <div className="p-2.5 rounded-xl bg-[#DC2626]/10 text-[#DC2626] w-fit mb-3">
              <Flag size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Tujuan Jangka Panjang</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {PERSONAL_INFO.goalsLongTerm}
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-[#1c1c1c] text-[11px] font-mono text-neutral-500">
            FOKUS MASA DEPAN · EKOSISTEM MANDIRI
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#121212] border border-[#222] flex flex-col justify-between">
          <div>
            <div className="p-2.5 rounded-xl bg-[#DC2626]/10 text-[#DC2626] w-fit mb-3">
              <Compass size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Visi Pengembangan Diri</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {PERSONAL_INFO.vision}
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-[#1c1c1c] text-[11px] font-mono text-neutral-500">
            PRINSIP & NILAI DASAR
          </div>
        </div>
      </section>

      {/* Call to contact */}
      <div className="text-center pt-8 border-t border-[#222]">
        <button
          onClick={onNavigateToContact}
          className="px-6 py-3 bg-[#DC2626] hover:bg-[#b91c1c] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
        >
          <span>Mari Terhubung & Berdiskusi</span>
        </button>
      </div>
    </div>
  );
};
