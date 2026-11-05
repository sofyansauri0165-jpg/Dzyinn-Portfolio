import React from 'react';
import { ArrowUpRight, Sparkles, Gamepad2, FolderArchive, ShieldCheck, CheckCircle2, Clock, Hourglass } from 'lucide-react';
import { STUDIO_BRANCHES, StudioBranch } from '../data/portfolioData';

interface YannStudioSectionProps {
  onNavigateToStudio: () => void;
}

export const YannStudioSection: React.FC<YannStudioSectionProps> = ({ onNavigateToStudio }) => {
  const getStatusBadge = (status: StudioBranch['status']) => {
    switch (status) {
      case 'Available / Active':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-emerald-950/60 text-emerald-300 border border-emerald-800/60">
            <CheckCircle2 size={12} className="text-emerald-400" />
            <span>Available / Active</span>
          </span>
        );
      case 'In Development':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-amber-950/60 text-amber-300 border border-amber-800/60">
            <Clock size={12} className="text-amber-400" />
            <span>In Development</span>
          </span>
        );
      case 'Future Development':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-neutral-900 text-neutral-400 border border-neutral-700">
            <Hourglass size={12} className="text-neutral-500" />
            <span>Future Development</span>
          </span>
        );
      default:
        return null;
    }
  };

  const getBranchIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles size={20} className="text-[#DC2626]" />;
      case 'Gamepad2':
        return <Gamepad2 size={20} className="text-[#DC2626]" />;
      case 'FolderArchive':
        return <FolderArchive size={20} className="text-[#DC2626]" />;
      case 'ShieldCheck':
        return <ShieldCheck size={20} className="text-[#DC2626]" />;
      default:
        return <Sparkles size={20} className="text-[#DC2626]" />;
    }
  };

  return (
    <section className="py-16 md:py-24 border-b border-[#1c1c1c] bg-[#0D0D0D] relative overflow-hidden">
      {/* Decorative accent background subtle circle */}
      <div 
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#DC2626]/5 blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DC2626]/10 border border-[#DC2626]/20 text-[#DC2626] text-xs font-mono uppercase tracking-wider mb-3">
            <span>Business Venture & Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Building Ideas Into Digital Experiences
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed">
            YannStudio merupakan ekosistem bisnis kreatif dan digital yang dikembangkan untuk menghadirkan berbagai layanan, produk digital, dan solusi kreatif dalam satu platform.
          </p>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
            YannStudio dirancang sebagai bisnis yang dapat berkembang secara bertahap, dengan menggabungkan kreativitas, teknologi, layanan digital, dan peluang bisnis.
          </p>
        </div>

        {/* 4 Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STUDIO_BRANCHES.map((branch) => (
            <div
              key={branch.id}
              className="p-6 md:p-7 rounded-2xl bg-[#121212] border border-[#222] hover:border-[#DC2626]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#1a1a1a] border border-[#262626] group-hover:border-[#DC2626]/30 transition-colors">
                      {getBranchIcon(branch.icon)}
                    </div>
                    <div>
                      <span className="font-poster text-xl text-neutral-500 group-hover:text-[#DC2626] transition-colors tabular-nums">
                        {branch.number}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">
                        {branch.title}
                      </h3>
                    </div>
                  </div>
                  <div>
                    {getStatusBadge(branch.status)}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                  {branch.shortDesc}
                </p>

                {/* Sub services list */}
                <div className="space-y-1.5 pt-2 border-t border-[#1c1c1c]">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                    Cakupan Layanan / Rencana:
                  </p>
                  <ul className="space-y-1">
                    {branch.services.slice(0, 3).map((item, i) => (
                      <li key={i} className="text-xs text-neutral-400 flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#DC2626] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1a1a1a] flex items-center justify-between text-xs text-neutral-500">
                <span>YannStudio Inisiatif</span>
                <span className="text-neutral-400 group-hover:text-[#DC2626] transition-colors font-medium">
                  {branch.status === 'Available / Active' ? 'Dapat Dipesan' : 'Tahap Riset & Rancang'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Explore YannStudio CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#171717] via-[#121212] to-[#1a1111] border border-[#2a2a2a] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">Ingin Mengetahui Rencana Lengkap & Roadmap YannStudio?</h4>
            <p className="text-xs text-neutral-400">
              Pelajari visi jangka panjang, formulir konsultasi pemesanan awal, dan panduan layanan.
            </p>
          </div>
          <button
            onClick={onNavigateToStudio}
            className="px-6 py-3 bg-[#DC2626] hover:bg-[#b91c1c] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2 whitespace-nowrap shadow-lg shadow-red-950/40"
          >
            <span>Explore YannStudio</span>
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};

export const DzyinnStudioSection = YannStudioSection;
