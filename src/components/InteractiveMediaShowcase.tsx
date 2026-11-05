import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Sliders, Film, Image as ImageIcon, SplitSquareVertical, Layers } from 'lucide-react';

export const InteractiveMediaShowcase: React.FC = () => {
  const [activeMediaTab, setActiveMediaTab] = useState<'poster' | 'video' | 'photo'>('poster');

  // Video player state
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackProgress, setPlaybackProgress] = useState(45);
  const [videoMode, setVideoMode] = useState<'timeline' | 'color' | 'subtitles'>('timeline');

  // Photo editing state
  const [photoViewMode, setPhotoViewMode] = useState<'split' | 'before' | 'after'>('split');
  const [zoomLevel, setZoomLevel] = useState(false);

  // Auto playback simulation
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setPlaybackProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 250);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="py-16 md:py-24 border-b border-[#1c1c1c] bg-[#0c0c0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 pb-6 border-b border-[#222]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#DC2626] uppercase tracking-wider mb-2">
              <Sparkles size={14} />
              <span>Interactive Production Studio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Media Showcase & Studio Works
            </h2>
          </div>
          <p className="text-xs text-neutral-400 max-w-md">
            Eksplorasi langsung hasil karya poster visual, simulasi timeline video editing interaktif, dan komparasi retouching foto studio.
          </p>
        </div>

        {/* Media Category Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-2xl bg-[#141414] border border-[#262626] w-fit">
          <button
            onClick={() => setActiveMediaTab('poster')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              activeMediaTab === 'poster'
                ? 'bg-[#DC2626] text-white shadow-lg shadow-red-950/40'
                : 'text-neutral-400 hover:text-white hover:bg-[#1a1a1a]'
            }`}
          >
            <ImageIcon size={15} />
            <span>Poster Visual (Graphic Design)</span>
          </button>

          <button
            onClick={() => setActiveMediaTab('video')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              activeMediaTab === 'video'
                ? 'bg-[#DC2626] text-white shadow-lg shadow-red-950/40'
                : 'text-neutral-400 hover:text-white hover:bg-[#1a1a1a]'
            }`}
          >
            <Film size={15} />
            <span>Video Editing Reel (Timeline Suite)</span>
          </button>

          <button
            onClick={() => setActiveMediaTab('photo')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              activeMediaTab === 'photo'
                ? 'bg-[#DC2626] text-white shadow-lg shadow-red-950/40'
                : 'text-neutral-400 hover:text-white hover:bg-[#1a1a1a]'
            }`}
          >
            <SplitSquareVertical size={15} />
            <span>Foto Editing (Before & After)</span>
          </button>
        </div>

        {/* 1. POSTER VISUAL SHOWCASE */}
        {activeMediaTab === 'poster' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
            {/* Left: Main Editorial Poster */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-3xl bg-[#141414] border border-[#2a2a2a] p-3 sm:p-5 overflow-hidden group shadow-2xl">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src="/src/assets/images/poster_visual_concept_1793861478236.jpg"
                    alt="Poster Visual Concept Avant-Garde"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                    <span>AVANT-GARDE EDITORIAL MOCKUP</span>
                  </div>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-400">
                  <div>
                    <h3 className="text-base font-bold text-white">Poster Eksplorasi Visual & Tipografi</h3>
                    <p className="text-xs text-neutral-400 mt-0.5">Komposisi modernis dengan palet Crimson (#DC2626) dan Obsidian Black.</p>
                  </div>
                  <span className="text-[11px] font-mono text-[#DC2626] px-2.5 py-1 rounded bg-[#DC2626]/10 border border-[#DC2626]/20 shrink-0">
                    High Resolution 4:3
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Gaming Championship Poster & Spec Details */}
            <div className="lg:col-span-5 space-y-6">
              {/* Secondary Gaming Tournament Poster */}
              <div className="relative rounded-3xl bg-[#141414] border border-[#2a2a2a] p-4 overflow-hidden group shadow-xl">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black">
                  <img
                    src="/src/assets/images/gaming_tournament_poster_1793861496401.jpg"
                    alt="Poster Turnamen Esports Mobile Legends / Free Fire"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>ESPORTS TOURNAMENT POSTER</span>
                  </div>
                </div>
                <div className="pt-3">
                  <h4 className="text-sm font-bold text-white">Poster Turnamen Mobile Esports (MLBB & FF)</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Tata letak dinamis dengan efek percikan api dan tipografi kejuaraan.</p>
                </div>
              </div>

              {/* Poster Design Technical Breakdown */}
              <div className="p-5 rounded-2xl bg-[#141414] border border-[#222] space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                  <Sliders size={13} className="text-[#DC2626]" />
                  <span>Spesifikasi Desain Poster</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#181818] border border-[#262626]">
                    <div className="text-[10px] font-mono text-neutral-500">COLOR PALETTE</div>
                    <div className="text-white font-medium mt-0.5 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                      <span>#DC2626 & #0A0A0A</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#181818] border border-[#262626]">
                    <div className="text-[10px] font-mono text-neutral-500">GRID SYSTEM</div>
                    <div className="text-white font-medium mt-0.5">12-Column Editorial</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#181818] border border-[#262626]">
                    <div className="text-[10px] font-mono text-neutral-500">SOFTWARE TOOLS</div>
                    <div className="text-white font-medium mt-0.5">Figma · Photoshop · AI</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#181818] border border-[#262626]">
                    <div className="text-[10px] font-mono text-neutral-500">FORMAT OUTPUT</div>
                    <div className="text-white font-medium mt-0.5">Print CMYK & Digital 300DPI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. VIDEO EDITING SHOWCASE (Interactive Player & Multi-Track Suite) */}
        {activeMediaTab === 'video' && (
          <div className="space-y-6 animate-fade-in">
            {/* Video Suite Frame */}
            <div className="rounded-3xl bg-[#141414] border border-[#2a2a2a] p-4 sm:p-6 shadow-2xl overflow-hidden">
              {/* Top Bar of Suite */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#222]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#DC2626]/20 text-[#DC2626]">
                    <Film size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <span>Timeline Video Suite — Short Reel Project</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/60 text-emerald-300 border border-emerald-800/60">
                        Active Simulation
                      </span>
                    </h3>
                    <p className="text-xs text-neutral-400">CapCut Pro & Premiere Pro Workflow Visualization</p>
                  </div>
                </div>

                {/* Sub-modes for video analysis */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#181818] border border-[#262626] text-xs">
                  <button
                    onClick={() => setVideoMode('timeline')}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      videoMode === 'timeline' ? 'bg-[#DC2626] text-white font-semibold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Timeline & Audio Sync
                  </button>
                  <button
                    onClick={() => setVideoMode('color')}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      videoMode === 'color' ? 'bg-[#DC2626] text-white font-semibold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Color Grading Wheel
                  </button>
                  <button
                    onClick={() => setVideoMode('subtitles')}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      videoMode === 'subtitles' ? 'bg-[#DC2626] text-white font-semibold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Kinetic Subtitles
                  </button>
                </div>
              </div>

              {/* Main Video Monitor Area */}
              <div className="relative my-4 aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black border border-[#222]">
                <img
                  src="/src/assets/images/video_editing_showcase_1793861477620.jpg"
                  alt="Video Editing Suite Workstation Monitor"
                  className="w-full h-full object-cover"
                />

                {/* Simulated Subtitle overlay on active time */}
                {videoMode === 'subtitles' && (
                  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 px-6 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-[#DC2626]/50 text-white font-bold text-sm tracking-wide shadow-2xl animate-pulse">
                    "Transforming Creative Ideas With AI & Precision Editing"
                  </div>
                )}

                {/* Interactive Player Floating HUD */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col gap-2">
                  {/* Progress Bar / Scrubber */}
                  <div className="relative w-full h-1.5 bg-neutral-700/80 rounded-full overflow-hidden cursor-pointer">
                    <div
                      className="h-full bg-[#DC2626] rounded-full transition-all duration-200"
                      style={{ width: `${playbackProgress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-neutral-300">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-1.5 rounded-lg bg-white text-black hover:bg-neutral-200 transition-colors"
                        aria-label={isPlaying ? 'Jeda video' : 'Putar video'}
                      >
                        {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
                      </button>

                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="text-neutral-400 hover:text-white transition-colors"
                        aria-label="Audio switch"
                      >
                        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                      </button>

                      <span className="font-mono text-[11px] text-neutral-300">
                        00:{playbackProgress < 10 ? `0${playbackProgress}` : playbackProgress}:14 / 00:30:00 (30 FPS)
                      </span>
                    </div>

                    {/* Animated Audio Waveform */}
                    <div className="flex items-center gap-1 h-4">
                      {[12, 24, 18, 30, 16, 28, 22, 14, 26, 19, 32, 15].map((h, i) => (
                        <div
                          key={i}
                          className="w-1 bg-[#DC2626] rounded-full transition-all duration-300"
                          style={{
                            height: isPlaying ? `${(h * ((i % 3) + 1)) % 24 + 6}px` : '4px',
                            opacity: isPlaying ? 0.9 : 0.3,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulated Multitrack Timeline Layers */}
              <div className="space-y-2 pt-2 border-t border-[#222]">
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-1">
                  <span>TIMELINE MULTITRACK LAYERS</span>
                  <span>SYNC BEAT: 128 BPM</span>
                </div>

                {/* Track V2: Motion & Titles */}
                <div className="flex items-center gap-3 p-2 rounded-xl bg-[#181818] border border-[#222] text-xs">
                  <span className="w-12 font-mono text-[11px] text-neutral-400 shrink-0">V2 [TEXT]</span>
                  <div className="flex-1 h-5 rounded bg-amber-950/40 border border-amber-800/40 flex items-center px-3 text-[10px] font-mono text-amber-300">
                    Kinetic Subtitle Node #01 - #04 (Dynamic Transition)
                  </div>
                </div>

                {/* Track V1: Main Video */}
                <div className="flex items-center gap-3 p-2 rounded-xl bg-[#181818] border border-[#222] text-xs">
                  <span className="w-12 font-mono text-[11px] text-neutral-400 shrink-0">V1 [VIDEO]</span>
                  <div className="flex-1 h-5 rounded bg-blue-950/40 border border-blue-800/40 flex items-center px-3 text-[10px] font-mono text-blue-300">
                    A-Roll Cinematic Footage 4K 60fps · Color Graded (Rec.709)
                  </div>
                </div>

                {/* Track A1: Audio Music */}
                <div className="flex items-center gap-3 p-2 rounded-xl bg-[#181818] border border-[#222] text-xs">
                  <span className="w-12 font-mono text-[11px] text-neutral-400 shrink-0">A1 [AUDIO]</span>
                  <div className="flex-1 h-5 rounded bg-red-950/40 border border-[#DC2626]/40 flex items-center px-3 text-[10px] font-mono text-red-300">
                    Background Beat Track + Audio Ducking + Whoosh SFX
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. PHOTO EDITING (Before & After Retouching Showcase) */}
        {activeMediaTab === 'photo' && (
          <div className="space-y-6 animate-fade-in">
            <div className="rounded-3xl bg-[#141414] border border-[#2a2a2a] p-4 sm:p-6 shadow-2xl">
              {/* Header and Toggle Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#222]">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span>High-Fashion Editorial Portrait — Before & After Retouching</span>
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Studi komparasi Photoshop: Raw unedited skin tone vs. Retouched, frequency separated, and crimson graded.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center p-1 rounded-xl bg-[#181818] border border-[#262626] text-xs">
                    <button
                      onClick={() => setPhotoViewMode('split')}
                      className={`px-3 py-1.5 rounded-lg transition-colors ${
                        photoViewMode === 'split' ? 'bg-[#DC2626] text-white font-semibold' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Split View (Both)
                    </button>
                    <button
                      onClick={() => setPhotoViewMode('before')}
                      className={`px-3 py-1.5 rounded-lg transition-colors ${
                        photoViewMode === 'before' ? 'bg-[#DC2626] text-white font-semibold' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Before (RAW)
                    </button>
                    <button
                      onClick={() => setPhotoViewMode('after')}
                      className={`px-3 py-1.5 rounded-lg transition-colors ${
                        photoViewMode === 'after' ? 'bg-[#DC2626] text-white font-semibold' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      After (Graded)
                    </button>
                  </div>

                  <button
                    onClick={() => setZoomLevel(!zoomLevel)}
                    className="p-2 rounded-xl bg-[#181818] hover:bg-[#222] border border-[#262626] text-neutral-300 hover:text-white transition-colors"
                    title={zoomLevel ? 'Zoom Normal' : 'Zoom In Detail'}
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>
              </div>

              {/* Main Photo Showcase Container */}
              <div className="relative my-4 aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black border border-[#222] flex items-center justify-center">
                <img
                  src="/src/assets/images/photo_editing_retouch_1793861497353.jpg"
                  alt="Before and After Photo Retouching Demonstration"
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    zoomLevel ? 'scale-125' : 'scale-100'
                  }`}
                  style={{
                    objectPosition:
                      photoViewMode === 'before'
                        ? '25% center'
                        : photoViewMode === 'after'
                        ? '75% center'
                        : 'center',
                  }}
                />

                {/* Floating Inspection Badges */}
                {photoViewMode === 'split' && (
                  <>
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-neutral-300">
                      BEFORE · RAW IMAGE
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-[#DC2626]/90 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-lg">
                      AFTER · RETOUCHED & GRADED
                    </div>
                  </>
                )}
                {photoViewMode === 'before' && (
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/20 text-xs font-semibold text-neutral-300">
                    FOKUS: BEFORE (UNEDITED RAW PORTRAIT)
                  </div>
                )}
                {photoViewMode === 'after' && (
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-[#DC2626] backdrop-blur-md text-xs font-semibold text-white shadow-lg">
                    FOKUS: AFTER (STUDIO RETOUCH & COLOR GRADE)
                  </div>
                )}
              </div>

              {/* Retouching Technical Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-[#222] text-xs">
                <div className="p-3 rounded-xl bg-[#181818] border border-[#262626]">
                  <div className="text-[10px] font-mono text-[#DC2626] uppercase">01. SKIN RETOUCHING</div>
                  <p className="text-neutral-300 mt-1">Frequency separation untuk menjaga tekstur pori asli tanpa efek plastik.</p>
                </div>
                <div className="p-3 rounded-xl bg-[#181818] border border-[#262626]">
                  <div className="text-[10px] font-mono text-[#DC2626] uppercase">02. LIGHT SCULPTING</div>
                  <p className="text-neutral-300 mt-1">Dodge & burn manual untuk menegaskan garis tulang pipi dan bayangan dramatis.</p>
                </div>
                <div className="p-3 rounded-xl bg-[#181818] border border-[#262626]">
                  <div className="text-[10px] font-mono text-[#DC2626] uppercase">03. COLOR HARMONY</div>
                  <p className="text-neutral-300 mt-1">Grading tone crimson dan dark shadow untuk atmosfer sinematik elegan.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
