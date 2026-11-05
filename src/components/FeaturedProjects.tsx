import React from 'react';
import { ArrowUpRight, ArrowRight, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  onNavigateToProjects: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onSelectProject,
  onNavigateToProjects,
}) => {
  // Show top 4 projects as featured
  const featured = PROJECTS_DATA.slice(0, 4);

  return (
    <section className="py-16 md:py-24 border-b border-[#1c1c1c] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 pb-6 border-b border-[#222]">
          <div>
            <div className="text-xs font-mono text-[#DC2626] uppercase tracking-wider mb-2">
              Curated Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
          </div>
          <button
            onClick={onNavigateToProjects}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-[#DC2626] transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Disclaimer banner: honest dummy/sample notification */}
        <div className="mb-8 p-3.5 rounded-xl bg-[#121212] border border-[#262626] flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            <span>Koleksi di bawah ini adalah konsep karya & studi eksplorasi terstruktur yang dapat disesuaikan dengan karya asli Anda.</span>
          </div>
          <span className="font-mono text-neutral-500 text-[11px] hidden sm:inline">DUMMY TEMPLATE READY</span>
        </div>

        {/* 2x2 Bento / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featured.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-2xl bg-[#121212] border border-[#222] hover:border-[#DC2626]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/9] w-full bg-[#181818] overflow-hidden flex items-center justify-center border-b border-[#222]">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#171717] to-[#251010] opacity-80 group-hover:scale-105 transition-transform duration-500" />
                )}

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Top Badge for Video or Before/After */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/75 backdrop-blur-md border border-white/20 text-white">
                    {project.category}
                  </span>
                  {project.isVideo && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#DC2626] text-white font-bold flex items-center gap-1 shadow-md">
                      VIDEO REEL
                    </span>
                  )}
                  {project.isBeforeAfter && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-900 border border-[#DC2626] text-[#DC2626] font-bold">
                      BEFORE / AFTER
                    </span>
                  )}
                </div>

                {/* Hover Quick Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                  <span className="px-4 py-2 rounded-lg bg-[#DC2626] text-white text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-lg">
                    <span>Lihat Detail Karya</span>
                    <ExternalLink size={13} />
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                    <span className="text-[#DC2626] font-medium">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#DC2626] transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2 mb-4">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1c1c1c] flex items-center justify-between">
                  <div className="flex flex-wrap gap-2 text-xs text-neutral-500">
                    {project.tools.slice(0, 3).map((tool, i) => (
                      <span key={i} className="text-neutral-400 text-xs">
                        {tool}{i < Math.min(project.tools.length, 3) - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white group-hover:text-[#DC2626] transition-colors"
                  >
                    <span>Detail</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onNavigateToProjects}
            className="px-6 py-3 rounded-xl bg-[#141414] hover:bg-[#1f1f1f] border border-[#2a2a2a] hover:border-[#DC2626]/50 text-white text-sm font-semibold transition-all inline-flex items-center gap-2"
          >
            <span>Buka Semua Koleksi Project ({PROJECTS_DATA.length})</span>
            <ArrowRight size={16} className="text-[#DC2626]" />
          </button>
        </div>
      </div>
    </section>
  );
};
