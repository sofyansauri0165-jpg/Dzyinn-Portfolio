import React, { useState } from 'react';
import { Sparkles, Gamepad2, FolderArchive, ShieldCheck, CheckCircle2, Clock, Hourglass, ArrowUpRight, MessageCircle, Send, Check } from 'lucide-react';
import { STUDIO_BRANCHES, PERSONAL_INFO } from '../data/portfolioData';

export const YannStudioPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('Video Editing (Reels/Shorts)');
  const [clientName, setClientName] = useState('');
  const [clientBrief, setClientBrief] = useState('');
  const [copiedNotification, setCopiedNotification] = useState(false);

  const availableServicesList = [
    'Video Editing (Reels/Shorts)',
    'Photo Editing & Digital Poster',
    'Carousel Media Sosial Edukatif',
    'Desain Slide Presentasi PowerPoint',
    'Pembuatan Website Portfolio / Landing Page',
    'Konsultasi Ide Bisnis Kreatif',
  ];

  const handleOrderViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo YannStudio (Sopian Sahuri),%0A%0ANama: ${encodeURIComponent(clientName || '[Belum diisi]')}%0ALayanan yang diminati: ${encodeURIComponent(selectedService)}%0ABrief / Kebutuhan: ${encodeURIComponent(clientBrief || 'Ingin konsultasi terlebih dahulu')}%0A%0ASaya ingin berdiskusi lebih lanjut mengenai alur kerja dan estimasi.`;
    window.open(`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 animate-fade-in">
      {/* Header */}
      <div className="border-b border-[#222] pb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-[#DC2626] uppercase tracking-wider mb-2">
          <Sparkles size={14} />
          <span>Creative Digital Ecosystem</span>
        </div>
        <h1 className="font-poster text-5xl sm:text-7xl md:text-8xl text-white tracking-wide">
          YANNSTUDIO
        </h1>
        <p className="text-base sm:text-lg text-neutral-300 max-w-3xl mt-3 leading-relaxed">
          "Building Ideas Into Digital Experiences" — Ekosistem bisnis kreatif dan digital yang dirancang untuk berkembang secara bertahap, menggabungkan kreativitas, teknologi, layanan multimedia, dan peluang pasar.
        </p>
      </div>

      {/* 1. Studio Overview */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[#121212] border border-[#222] relative overflow-hidden">
        <div 
          className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#DC2626]/10 blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />
        <div className="max-w-3xl relative z-10 space-y-4">
          <div className="text-xs font-mono text-[#DC2626] uppercase tracking-wider">
            Studio Overview
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Pusat Inovasi Kreatif Berbasis Serang, Banten
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            YannStudio merupakan ekosistem bisnis kreatif dan digital yang dikembangkan untuk menghadirkan berbagai layanan, produk digital, dan solusi kreatif dalam satu platform. 
          </p>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            YannStudio dirancang sebagai bisnis yang dapat berkembang secara bertahap, dengan menggabungkan kreativitas, teknologi, layanan digital, dan peluang bisnis. Diprakarsai oleh <strong className="text-white">Sopian Sahuri</strong> sebagai wujud aplikasi nyata dari eksplorasi Generatif AI dan kecintaan terhadap dunia visual dan gaming.
          </p>
        </div>
      </section>

      {/* 2. Vision & Mission */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-[#121212] border border-[#222] flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono text-[#DC2626] uppercase tracking-wider mb-2">
              Our Vision
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Visi YannStudio</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Menjadi ekosistem kreatif dan digital terpadu yang memberdayakan individu, kreator, dan pelaku usaha melalui solusi visual berkualitas tinggi, aset digital siap pakai, serta komunitas interaktif yang amanah dan profesional.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#1c1c1c] text-xs font-mono text-neutral-500">
            STRATEGIC VISION · 2025 - 2030
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-[#121212] border border-[#222] flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono text-[#DC2626] uppercase tracking-wider mb-2">
              Our Mission
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Misi YannStudio</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1.5 shrink-0" />
                <span>Menghadirkan layanan video, desain poster, presentasi, dan web dengan standar visual premium dan harga yang bersahabat.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1.5 shrink-0" />
                <span>Memanfaatkan akselerasi Generatif AI secara etis dan bertanggung jawab untuk efisiensi produksi.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1.5 shrink-0" />
                <span>Membangun toko aset digital yang memudahkan para kreator pemula untuk berkarya.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1.5 shrink-0" />
                <span>Mengembangkan ekosistem gaming yang aman, legal, dan mematuhi regulasi platform game resmi.</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-[#1c1c1c] text-xs font-mono text-neutral-500">
            CORE PRINCIPLES
          </div>
        </div>
      </section>

      {/* 3. Deep Dive into the 4 Business Branches */}
      <section className="space-y-8">
        <div className="border-b border-[#222] pb-4">
          <div className="text-xs font-mono text-[#DC2626] uppercase tracking-wider mb-1">
            Business Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            4 Cabang Ekosistem YannStudio
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Setiap cabang memiliki fase maturitas berbeda yang dikembangkan secara bertahap dan terukur.
          </p>
        </div>

        <div className="space-y-6">
          {STUDIO_BRANCHES.map((branch) => (
            <div
              key={branch.id}
              className="p-7 sm:p-8 rounded-3xl bg-[#121212] border border-[#222] hover:border-[#DC2626]/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-poster text-3xl text-[#DC2626] tabular-nums">
                    {branch.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{branch.title}</h3>
                    <p className="text-xs text-neutral-400">{branch.shortDesc}</p>
                  </div>
                </div>

                <div>
                  {branch.status === 'Available / Active' && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-emerald-950/60 text-emerald-300 border border-emerald-800/60">
                      <CheckCircle2 size={13} className="text-emerald-400" />
                      <span>Available / Active</span>
                    </span>
                  )}
                  {branch.status === 'In Development' && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-amber-950/60 text-amber-300 border border-amber-800/60">
                      <Clock size={13} className="text-amber-400" />
                      <span>In Development</span>
                    </span>
                  )}
                  {branch.status === 'Future Development' && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-neutral-900 text-neutral-400 border border-neutral-700">
                      <Hourglass size={13} className="text-neutral-500" />
                      <span>Future Development</span>
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 pt-2 border-t border-[#1a1a1a]">
                {branch.details}
              </p>

              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                  Daftar Layanan / Aset Cabang:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {branch.services.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#171717] border border-[#222] text-xs text-neutral-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Development Roadmap */}
      <section className="space-y-6">
        <div className="border-b border-[#222] pb-4">
          <div className="text-xs font-mono text-[#DC2626] uppercase tracking-wider mb-1">
            Phased Milestones
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Development Roadmap
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#121212] border-2 border-[#DC2626] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#DC2626] mb-2">
                <span>FASE 1</span>
                <span className="px-2 py-0.5 rounded bg-[#DC2626]/20 font-bold">AKTIF</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Creative & Editing Foundation</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Membuka pemesanan video editing, desain poster, presentasi, dan media sosial via WhatsApp.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#222] text-[11px] font-mono text-neutral-500">
              Q1 - Q2 2025
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#121212] border border-[#222] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-2">
                <span>FASE 2</span>
                <span className="px-2 py-0.5 rounded bg-amber-950/60 font-medium">IN DEV</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Gaming Services Integration</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Penyusunan media kit turnamen MLBB & FF, forum diskusi strategi game, dan branding komunitas gamer.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#222] text-[11px] font-mono text-neutral-500">
              Q3 - Q4 2025
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#121212] border border-[#222] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                <span>FASE 3</span>
                <span className="px-2 py-0.5 rounded bg-[#1a1a1a] font-medium">PLANNED</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Digital Product Store Launch</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Peluncuran etalase katalog produk digital: preset video, sound effects, template deck, dan starter code.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#222] text-[11px] font-mono text-neutral-500">
              2026
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#121212] border border-[#222] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                <span>FASE 4</span>
                <span className="px-2 py-0.5 rounded bg-[#1a1a1a] font-medium">FUTURE</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Secure Digital Marketplace</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Rintisan sistem transaksi escrow aman untuk item virtual dan aset digital dengan legalitas terverifikasi.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#222] text-[11px] font-mono text-neutral-500">
              JANGKA PANJANG
            </div>
          </div>
        </div>
      </section>

      {/* 5. Early Order / Consultation Form via WhatsApp */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[#121212] border border-[#262626] relative">
        <div className="max-w-3xl">
          <div className="text-xs font-mono text-[#DC2626] uppercase tracking-wider mb-2">
            Early Order & Inquiry
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Formulir Pemesanan & Konsultasi Awal YannStudio
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-8">
            Saat ini alur pemesanan YannStudio dilayani secara personal melalui WhatsApp langsung ke Sopian Sahuri. Pilih layanan yang Anda butuhkan dan kirimkan ringkasan ide Anda.
          </p>

          <form onSubmit={handleOrderViaWhatsApp} className="space-y-5">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-2">
                Pilih Layanan yang Anda Minati:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableServicesList.map((srv) => (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => setSelectedService(srv)}
                    className={`p-3 rounded-xl text-left text-xs transition-colors flex items-center justify-between border ${
                      selectedService === srv
                        ? 'bg-[#DC2626]/10 border-[#DC2626] text-white font-medium'
                        : 'bg-[#171717] border-[#222] text-neutral-400 hover:text-white hover:bg-[#1f1f1f]'
                    }`}
                  >
                    <span>{srv}</span>
                    {selectedService === srv && <Check size={14} className="text-[#DC2626]" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Nama Anda / Brand:
                </label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Contoh: Budi / Tim Kreatif"
                  className="w-full px-4 py-2.5 bg-[#171717] border border-[#2a2a2a] focus:border-[#DC2626] focus:outline-none rounded-xl text-xs text-white placeholder-neutral-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Estimasi Waktu Pengerjaan:
                </label>
                <input
                  type="text"
                  placeholder="Contoh: 3-5 hari / santai"
                  className="w-full px-4 py-2.5 bg-[#171717] border border-[#2a2a2a] focus:border-[#DC2626] focus:outline-none rounded-xl text-xs text-white placeholder-neutral-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Brief Singkat Kebutuhan Project:
              </label>
              <textarea
                rows={3}
                value={clientBrief}
                onChange={(e) => setClientBrief(e.target.value)}
                placeholder="Ceritakan detail video, slide, atau desain yang Anda inginkan..."
                className="w-full px-4 py-2.5 bg-[#171717] border border-[#2a2a2a] focus:border-[#DC2626] focus:outline-none rounded-xl text-xs text-white placeholder-neutral-500 resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-3 bg-[#DC2626] hover:bg-[#b91c1c] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-lg shadow-red-950/40"
              >
                <MessageCircle size={16} />
                <span>Kirim Pesan ke WhatsApp YannStudio</span>
              </button>
              <span className="text-xs text-neutral-500 ml-4">
                Nomor: {PERSONAL_INFO.whatsappDisplay}
              </span>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export const DzyinnStudioPage = YannStudioPage;
