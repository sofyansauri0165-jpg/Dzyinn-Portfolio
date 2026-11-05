import React from 'react';
import { ArrowRight, Wrench, Layers } from 'lucide-react';
import { SKILLS_DATA, SkillItem } from '../data/portfolioData';

interface SkillsOverviewProps {
  onNavigateToSkills: () => void;
}

export const SkillsOverview: React.FC<SkillsOverviewProps> = ({ onNavigateToSkills }) => {
  // Honest level indicator styling
  const getLevelBadge = (level: SkillItem['level']) => {
    switch (level) {
      case 'Experienced':
        return <span className="text-[#DC2626] font-semibold text-xs">Experienced</span>;
      case 'Practicing':
        return <span className="text-amber-400 font-medium text-xs">Practicing</span>;
      case 'Developing':
        return <span className="text-blue-400 font-medium text-xs">Developing</span>;
      case 'Learning':
        return <span className="text-neutral-400 font-normal text-xs">Learning</span>;
    }
  };

  // Curate 6 core skills for the overview
  const previewSkills = SKILLS_DATA.slice(0, 6);

  return (
    <section className="py-16 md:py-24 border-b border-[#1c1c1c] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 pb-6 border-b border-[#222]">
          <div>
            <div className="text-xs font-mono text-[#DC2626] uppercase tracking-wider mb-2">
              Capabilities & Focus
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills & Development
            </h2>
          </div>
          <button
            onClick={onNavigateToSkills}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-[#DC2626] transition-colors"
          >
            <span>Buka Seluruh Keahlian</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Note on genuine mastery approach (no fake percentages) */}
        <div className="mb-8 p-3.5 rounded-xl bg-[#121212] border border-[#262626] flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            <span>Katalog kemampuan dinilai secara transparan berdasarkan status penguasaan nyata (Learning, Developing, Practicing, Experienced) tanpa persentase fiktif.</span>
          </div>
          <span className="font-mono text-neutral-500 text-[11px] hidden md:inline">TRANSPARENT EVALUATION</span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {previewSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#121212] border border-[#222] hover:border-[#DC2626]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                  <span className="text-neutral-500 font-mono text-[11px] uppercase tracking-wider">
                    {skill.category}
                  </span>
                  {getLevelBadge(skill.level)}
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {skill.name}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1c1c1c]">
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 mb-1.5">
                  <Wrench size={12} className="text-[#DC2626]" />
                  <span>Tools:</span>
                </div>
                <div className="flex flex-wrap gap-1 text-xs text-neutral-300">
                  {skill.tools.map((tool, tIdx) => (
                    <span key={tIdx} className="text-neutral-400 text-xs">
                      {tool}{tIdx < skill.tools.length - 1 ? ' ·' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools banner / Bar inspired by the reference poster (Figma, Photoshop, CapCut, etc.) */}
        <div className="mt-12 p-6 rounded-2xl bg-[#121212] border border-[#222] flex flex-wrap items-center justify-between gap-6">
          <div>
            <h4 className="text-sm font-bold text-white">Tools & Software Ecosystem</h4>
            <p className="text-xs text-neutral-400 mt-0.5">Software dan platform yang rutin dipelajari serta digunakan</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {['Midjourney', 'ChatGPT', 'CapCut', 'Photoshop', 'Canva', 'PowerPoint', 'VS Code', 'Tailwind'].map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-[#1a1a1a] border border-[#2b2b2b] text-xs font-mono text-neutral-300 hover:text-white hover:border-[#DC2626]/40 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
