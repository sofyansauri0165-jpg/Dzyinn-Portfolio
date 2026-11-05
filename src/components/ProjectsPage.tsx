import React, { useState } from 'react';
import { ArrowUpRight, Filter, Search, Layers, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';

interface ProjectsPageProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Design',
    'Video Editing',
    'Photo Editing',
    'Presentation',
    'Web Development',
    'Other Projects',
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-fade-in">
      {/* Header */}
      <div className="border-b border-[#222] pb-8">
        <div className="text-xs font-mono text-[#DC2626] uppercase tracking-wider mb-2">
          Portfolio & Case Studies
        </div>
        <h1 className="font-poster text-5xl sm:text-7xl md:text-8xl text-white tracking-wide">
          PROJECTS
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mt-2">
          Kumpulan studi kasus, eksplorasi visual, editing video, dan prototipe pengembangan produk digital.
        </p>
      </div>

      {/* Honest Dummy Guidance Card */}
      <div className="p-4 rounded-2xl bg-[#121212] border border-[#262626] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-400">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
          <span>
            Setiap kartu di bawah ini merupakan data dummy terstruktur. Anda dapat langsung mengedit judul, deskripsi, proses, dan galeri melalui file data <code className="text-neutral-200 bg-[#1c1c1c] px-1.5 py-0.5 rounded font-mono">portfolioData.ts</code>.
          </span>
        </div>
        <span className="font-mono text-neutral-500 text-[11px] shrink-0">TOTAL: {filteredProjects.length} PROYEK</span>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        {/* Search */}
        <div className="relative max-w-md">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari proyek berdasarkan judul atau software..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#141414] border border-[#2a2a2a] focus:border-[#DC2626] focus:outline-none rounded-xl text-xs text-white placeholder-neutral-500 transition-colors"
          />
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-neutral-500 mr-2 flex items-center gap-1">
            <Filter size={12} />
            <span>Filter Kategori:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#DC2626] text-white shadow-sm'
                  : 'bg-[#141414] text-neutral-400 hover:text-white border border-[#222]'
              }`}
            >
              {cat === 'Design' ? 'Poster & Graphic Design' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group cursor-pointer rounded-2xl bg-[#121212] border border-[#222] hover:border-[#DC2626]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            {/* Visual Thumbnail */}
            <div className="relative aspect-[16/10] w-full bg-[#181818] overflow-hidden flex items-center justify-center border-b border-[#222]">
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#161616] to-[#251010] opacity-80 group-hover:scale-105 transition-transform duration-500" />
              )}

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Badges */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/75 backdrop-blur-md border border-white/20 text-white">
                  {project.category}
                </span>
                {project.isVideo && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#DC2626] text-white font-bold">
                    VIDEO
                  </span>
                )}
                {project.isBeforeAfter && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-900 border border-[#DC2626] text-[#DC2626] font-bold">
                    RETOUCH
                  </span>
                )}
              </div>

              {/* Hover Overlay Button */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                <span className="px-4 py-2 rounded-lg bg-[#DC2626] text-white text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-lg">
                  <span>Lihat Detail</span>
                  <ExternalLink size={13} />
                </span>
              </div>
            </div>

            {/* Info Body */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                  <span className="text-[#DC2626] font-medium">{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#DC2626] transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2 mb-4">
                  {project.shortDesc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1c1c1c] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 text-xs text-neutral-500">
                  {project.tools.slice(0, 2).map((tool, i) => (
                    <span key={i} className="text-neutral-400 text-[11px]">
                      {tool}{i < 1 && project.tools.length > 1 ? ' ·' : ''}
                    </span>
                  ))}
                  {project.tools.length > 2 && (
                    <span className="text-neutral-500 text-[11px]">+{project.tools.length - 2}</span>
                  )}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject(project);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-white group-hover:text-[#DC2626] transition-colors"
                >
                  <span>Buka</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="p-12 text-center rounded-2xl bg-[#121212] border border-[#222]">
          <p className="text-sm text-neutral-400">Tidak ada proyek yang sesuai dengan kriteria pencarian.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-3 px-4 py-2 bg-[#1f1f1f] text-xs text-white rounded-lg hover:bg-[#282828]"
          >
            Reset Filter
          </button>
        </div>
      )}
    </div>
  );
};
