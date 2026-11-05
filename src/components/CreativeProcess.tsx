import React from 'react';
import { Compass, Target, Palette, Code2, CheckCircle2 } from 'lucide-react';
import { CREATIVE_PROCESS } from '../data/portfolioData';

const ICONS = [Compass, Target, Palette, Code2, CheckCircle2];

export const CreativeProcess: React.FC = () => {
  return (
    <section className="py-16 md:py-20 border-b border-[#1c1c1c] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-[#222]">
          <div>
            <div className="text-xs font-mono text-[#DC2626] uppercase tracking-wider mb-2">
              Structured Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              My Creative Process
            </h2>
          </div>
          <p className="text-xs text-neutral-400 max-w-md">
            Alur pengerjaan terstruktur untuk memastikan setiap ide diolah dengan ketelitian konsep, estetika visual, dan hasil teruji.
          </p>
        </div>

        {/* 5-step horizontal flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CREATIVE_PROCESS.map((step, idx) => {
            const IconComponent = ICONS[idx % ICONS.length];
            return (
              <div
                key={step.number}
                className="relative p-5 rounded-2xl bg-[#121212] border border-[#222] hover:border-[#DC2626]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-poster text-3xl text-neutral-500 group-hover:text-[#DC2626] transition-colors tabular-nums">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-xl bg-[#1a1a1a] text-neutral-400 group-hover:text-white transition-colors">
                      <IconComponent size={18} />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#DC2626] transition-colors mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#1a1a1a] flex items-center justify-between text-[11px] font-mono text-neutral-600 group-hover:text-neutral-400">
                  <span>STEP {idx + 1} OF 5</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-[#DC2626] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
