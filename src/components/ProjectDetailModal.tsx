import React, { useEffect } from 'react';
import { X, Calendar, Wrench, CheckCircle2, Target, Layers, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Project, PERSONAL_INFO } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
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

  const consultationMessage = encodeURIComponent(
    `Halo Sopian, saya tertarik dengan proyek "${project.title}" (${project.category}). Saya ingin berkonsultasi mengenai pembuatan karya serupa.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#121212] border border-[#2a2a2a] rounded-3xl text-white shadow-2xl flex flex-col overflow-hidden my-auto">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222] bg-[#161616]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#DC2626]/20 text-[#DC2626] border border-[#DC2626]/30">
              {project.category}
            </span>
            <span className="text-xs text-neutral-400 font-mono flex items-center gap-1">
              <Calendar size={13} />
              {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-[#222] transition-colors focus:outline-none"
            aria-label="Tutup detail modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          {/* Main Title & Kicker */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
              {project.shortDesc}
            </p>
          </div>

          {/* Graphic Showcase Container */}
          <div className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl bg-[#181818] border border-[#2a2a2a] relative overflow-hidden flex items-center justify-center">
            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="relative z-10 text-center space-y-2 p-6">
                <div className="inline-block p-3 rounded-2xl bg-black/60 border border-[#DC2626]/40 backdrop-blur-md">
                  <Layers size={28} className="text-[#DC2626] mx-auto mb-2" />
                  <span className="font-poster text-2xl tracking-wider block">{project.title}</span>
                  <span className="text-xs text-neutral-400 font-mono">Placeholder Visual Showcase</span>
                </div>
              </div>
            )}

            {/* Video overlay badge if video */}
            {project.isVideo && (
              <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-[#DC2626] text-white text-xs font-mono font-bold shadow-lg flex items-center gap-1.5">
                <span>PREVIEW VIDEO SUITE</span>
              </div>
            )}

            {/* Before After badge if photo */}
            {project.isBeforeAfter && (
              <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-black/80 border border-[#DC2626] text-[#DC2626] text-xs font-mono font-bold shadow-lg flex items-center gap-1.5">
                <span>BEFORE / AFTER RETOUCH</span>
              </div>
            )}
          </div>

          {/* 1. Project Overview & Objective */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#171717] border border-[#262626]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#DC2626] uppercase font-mono mb-2">
                <Layers size={14} />
                <span>Project Overview</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#171717] border border-[#262626]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#DC2626] uppercase font-mono mb-2">
                <Target size={14} />
                <span>Tujuan Project</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {project.objective}
              </p>
            </div>
          </div>

          {/* 2. Process Workflow */}
          <div className="p-6 rounded-2xl bg-[#171717] border border-[#262626] space-y-4">
            <div className="text-xs font-semibold text-[#DC2626] uppercase font-mono">
              Tahap & Proses Pengerjaan
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.process.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#121212] border border-[#222]">
                  <span className="font-poster text-base text-[#DC2626] tabular-nums mt-0.5">
                    {`0${idx + 1}`}
                  </span>
                  <span className="text-xs text-neutral-300 leading-relaxed">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Tools Used & Final Result */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#171717] border border-[#262626]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#DC2626] uppercase font-mono mb-3">
                <Wrench size={14} />
                <span>Tools & Teknologi</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-[#121212] border border-[#2b2b2b] text-xs font-mono text-neutral-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#171717] border border-[#262626]">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase font-mono mb-2">
                <CheckCircle2 size={14} />
                <span>Hasil Akhir (Deliverable)</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {project.result}
              </p>
            </div>
          </div>

          {/* 4. Gallery Project Placeholders */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-neutral-400 uppercase font-mono">
              Galeri Aset & Mockup (Placeholder)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.galleryPlaceholders.map((gallery, gIdx) => (
                <div
                  key={gIdx}
                  className="aspect-[4/3] rounded-xl bg-[#181818] border border-[#262626] p-4 flex flex-col justify-between group hover:border-[#DC2626]/40 transition-colors"
                >
                  <span className="text-[10px] font-mono text-neutral-500">ASSET 0{gIdx + 1}</span>
                  <div>
                    <p className="text-xs font-bold text-white">{gallery.title}</p>
                    <p className="text-[11px] text-neutral-400 mt-0.5">{gallery.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="px-6 py-4 border-t border-[#222] bg-[#141414] flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            Tertarik mengadaptasi konsep ini untuk project Anda?
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs text-neutral-400 hover:text-white transition-colors"
            >
              Tutup
            </button>
            <a
              href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${consultationMessage}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-[#DC2626] hover:bg-[#b91c1c] text-white text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-1.5 shadow-md shadow-red-950/40"
            >
              <MessageCircle size={14} />
              <span>Konsultasi Proyek Ini</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
