import React, { useState } from 'react';
import { Search, Wrench, Sparkles, Filter, CheckCircle2, BookOpen } from 'lucide-react';
import { SKILLS_DATA, SkillItem } from '../data/portfolioData';

export const SkillsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Technology & Development',
    'Editing & Multimedia',
    'Design & Creative',
    'Business & Digital Marketing',
    'Gaming & Digital Ecosystem',
  ];

  const levels = ['All', 'Experienced', 'Practicing', 'Developing', 'Learning'];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || skill.level === selectedLevel;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const getLevelBadge = (level: SkillItem['level']) => {
    switch (level) {
      case 'Experienced':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#DC2626]/20 text-[#DC2626] border border-[#DC2626]/30 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            Experienced
          </span>
        );
      case 'Practicing':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-950/60 text-amber-300 border border-amber-800/40 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Practicing
          </span>
        );
      case 'Developing':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-950/60 text-blue-300 border border-blue-800/40 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Developing
          </span>
        );
      case 'Learning':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900 text-neutral-300 border border-neutral-700 text-xs font-normal">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
            Learning
          </span>
        );
    }
  };

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-fade-in">
      {/* Header */}
      <div className="border-b border-[#222] pb-8">
        <div className="text-xs font-mono text-[#DC2626] uppercase tracking-wider mb-2">
          Skills & Capabilities
        </div>
        <h1 className="font-poster text-5xl sm:text-7xl md:text-8xl text-white tracking-wide">
          MY SKILLS
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mt-2">
          Katalog kemampuan diri yang dinilai secara objektif, transparan, dan dapat disesuaikan seiring berjalannya proses belajar.
        </p>
      </div>

      {/* Level Explanation Guide */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#121212] border border-[#222]">
        <div className="space-y-1">
          <div className="text-xs font-semibold text-[#DC2626]">Experienced</div>
          <p className="text-[11px] text-neutral-400">Pemahaman mendalam & telah diterapkan dalam skenario nyata.</p>
        </div>
        <div className="space-y-1">
          <div className="text-xs font-semibold text-amber-400">Practicing</div>
          <p className="text-[11px] text-neutral-400">Sering digunakan dalam pengerjaan project & latihan rutin.</p>
        </div>
        <div className="space-y-1">
          <div className="text-xs font-semibold text-blue-400">Developing</div>
          <p className="text-[11px] text-neutral-400">Sedang memperdalam teknik tingkat lanjut & alur kerja.</p>
        </div>
        <div className="space-y-1">
          <div className="text-xs font-semibold text-neutral-400">Learning</div>
          <p className="text-[11px] text-neutral-500">Mempelajari konsep dasar & eksplorasi awal.</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari kemampuan atau tools (misal: AI, CapCut, Photoshop)..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#141414] border border-[#2a2a2a] focus:border-[#DC2626] focus:outline-none rounded-xl text-xs text-white placeholder-neutral-500 transition-colors"
          />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs font-mono text-neutral-500 mr-2 flex items-center gap-1">
            <Filter size={12} />
            <span>Kategori:</span>
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
              {cat}
            </button>
          ))}
        </div>

        {/* Level Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-neutral-500 mr-2">Level:</span>
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
                selectedLevel === lvl
                  ? 'bg-neutral-200 text-black font-semibold'
                  : 'bg-transparent text-neutral-400 hover:text-white border border-[#222]'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-[#121212] border border-[#222] hover:border-[#DC2626]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                  {skill.category}
                </span>
                {getLevelBadge(skill.level)}
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {skill.name}
              </h3>

              <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                {skill.description}
              </p>

              {skill.learningFocus && (
                <div className="p-3 rounded-xl bg-[#171717] border border-[#262626] mb-4">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#DC2626] mb-1">
                    <BookOpen size={12} />
                    <span>Fokus Pembelajaran:</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-normal">
                    {skill.learningFocus}
                  </p>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-[#1c1c1c]">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-500 mb-2">
                <Wrench size={12} className="text-[#DC2626]" />
                <span>Tools Digunakan:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skill.tools.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded bg-[#1a1a1a] border border-[#262626] text-[11px] text-neutral-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <div className="p-12 text-center rounded-2xl bg-[#121212] border border-[#222]">
          <p className="text-sm text-neutral-400">Tidak ada kemampuan yang cocok dengan filter yang dipilih.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedLevel('All');
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
