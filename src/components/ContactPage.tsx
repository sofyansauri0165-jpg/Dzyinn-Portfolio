import React, { useState } from 'react';
import { Phone, Mail, Instagram, MapPin, Send, MessageCircle, Copy, Check, Clock, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sendMethod, setSendMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formFeedback, setFormFeedback] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      setFormFeedback('Harap lengkapi nama dan pesan Anda.');
      return;
    }

    setFormFeedback(null);

    if (sendMethod === 'whatsapp') {
      const waText = `Halo Sopian Sahuri,%0A%0ANama: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email || 'Tidak dicantumkan')}%0ASubjek: ${encodeURIComponent(subject || 'Inquiry Portfolio')}%0APesan:%0A${encodeURIComponent(message)}`;
      window.open(`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${waText}`, '_blank');
    } else {
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject || `Pesan dari ${name}`)}&body=${encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`)}`;
      window.location.href = mailtoUrl;
    }
  };

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 animate-fade-in">
      {/* Page Header */}
      <div className="border-b border-[#222] pb-8">
        <div className="text-xs font-mono text-[#DC2626] uppercase tracking-wider mb-2">
          Direct Inquiries
        </div>
        <h1 className="font-poster text-5xl sm:text-7xl md:text-8xl text-white tracking-wide">
          CONTACT ME
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mt-2">
          Punya ide project, tawaran kolaborasi, atau sekadar ingin bertukar pikiran seputar AI & multimedia? Silakan hubungi saya melalui form atau kontak di bawah ini.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Contact Info Cards & Quick Links (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-[#121212] border border-[#222] space-y-6">
            <h2 className="text-xl font-bold text-white">
              Informasi Kontak Langsung
            </h2>

            {/* WhatsApp Card */}
            <div className="p-4 rounded-2xl bg-[#171717] border border-[#262626] flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-neutral-400 uppercase">WhatsApp</div>
                  <div className="text-sm font-semibold text-white">{PERSONAL_INFO.whatsappDisplay}</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'wa')}
                  className="p-2 rounded-lg bg-[#222] text-neutral-400 hover:text-white transition-colors"
                  title="Salin Nomor WhatsApp"
                >
                  {copiedType === 'wa' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#DC2626] hover:bg-[#b91c1c] text-white text-xs font-medium transition-colors"
                >
                  Chat
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-4 rounded-2xl bg-[#171717] border border-[#262626] flex items-center justify-between group">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-xl bg-red-950/60 border border-red-800/40 text-[#DC2626] shrink-0">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase">Email Resmi</div>
                  <div className="text-xs sm:text-sm font-semibold text-white truncate">{PERSONAL_INFO.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 shrink-0 ml-2">
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-lg bg-[#222] text-neutral-400 hover:text-white transition-colors"
                  title="Salin Email"
                >
                  {copiedType === 'email' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="p-4 rounded-2xl bg-[#171717] border border-[#262626] flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#222] border border-[#333] text-[#DC2626]">
                  <Instagram size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-neutral-400 uppercase">Instagram</div>
                  <div className="text-sm font-semibold text-white">@{PERSONAL_INFO.instagram}</div>
                </div>
              </div>
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#222] hover:bg-[#2c2c2c] text-neutral-300 hover:text-white text-xs font-medium transition-colors"
              >
                Kunjungi
              </a>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-2xl bg-[#171717] border border-[#262626] flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#222] border border-[#333] text-neutral-400">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-[11px] font-mono text-neutral-400 uppercase">Lokasi Domisili & Studio</div>
                <div className="text-sm font-medium text-white">{PERSONAL_INFO.location}</div>
              </div>
            </div>

            {/* Studio Note */}
            <div className="p-4 rounded-2xl bg-[#151515] border border-[#222] flex items-start gap-3">
              <Clock size={16} className="text-[#DC2626] mt-0.5 shrink-0" />
              <p className="text-xs text-neutral-400 leading-relaxed">
                Respon aktif setiap hari. Untuk respon paling cepat, disarankan menghubungi melalui pesan WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-[#222]">
            <div className="mb-6">
              <div className="text-xs font-mono text-[#DC2626] uppercase tracking-wider mb-1">
                Interactive Form
              </div>
              <h2 className="text-2xl font-bold text-white">Kirim Pesan</h2>
              <p className="text-xs text-neutral-400 mt-1">
                Formulir ini menggunakan validasi frontend dan akan langsung menyusun pesan ke WhatsApp atau aplikasi email Anda.
              </p>
            </div>

            {formFeedback && (
              <div className="mb-5 p-3 rounded-xl bg-red-950/60 border border-red-800/40 text-xs text-red-300 flex items-center gap-2">
                <AlertCircle size={15} />
                <span>{formFeedback}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Nama Anda *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-2.5 bg-[#171717] border border-[#2a2a2a] focus:border-[#DC2626] focus:outline-none rounded-xl text-xs text-white placeholder-neutral-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Alamat Email (Opsional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@domain.com"
                    className="w-full px-4 py-2.5 bg-[#171717] border border-[#2a2a2a] focus:border-[#DC2626] focus:outline-none rounded-xl text-xs text-white placeholder-neutral-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Subjek Pesan
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Contoh: Diskusi Pembuatan Video / Kolaborasi Project"
                  className="w-full px-4 py-2.5 bg-[#171717] border border-[#2a2a2a] focus:border-[#DC2626] focus:outline-none rounded-xl text-xs text-white placeholder-neutral-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Isi Pesan *
                </label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan pesan, pertanyaan, atau detail kolaborasi Anda di sini..."
                  className="w-full px-4 py-2.5 bg-[#171717] border border-[#2a2a2a] focus:border-[#DC2626] focus:outline-none rounded-xl text-xs text-white placeholder-neutral-500 resize-none transition-colors"
                />
              </div>

              {/* Delivery channel toggle */}
              <div className="pt-2">
                <label className="block text-xs font-medium text-neutral-400 mb-2">
                  Metode Pengiriman Pesan:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSendMethod('whatsapp')}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium transition-colors flex items-center justify-center gap-2 ${
                      sendMethod === 'whatsapp'
                        ? 'bg-emerald-950/50 border-emerald-500 text-emerald-300 font-semibold'
                        : 'bg-[#171717] border-[#262626] text-neutral-400 hover:text-white'
                    }`}
                  >
                    <MessageCircle size={15} />
                    <span>Kirim via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSendMethod('email')}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium transition-colors flex items-center justify-center gap-2 ${
                      sendMethod === 'email'
                        ? 'bg-red-950/50 border-[#DC2626] text-red-300 font-semibold'
                        : 'bg-[#171717] border-[#262626] text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Mail size={15} />
                    <span>Kirim via Email Client</span>
                  </button>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#DC2626] hover:bg-[#b91c1c] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-lg shadow-red-950/40"
                >
                  <Send size={15} />
                  <span>Send Message</span>
                </button>

                <span className="text-[11px] text-neutral-500">
                  {sendMethod === 'whatsapp' ? 'Membuka WhatsApp Web / App' : 'Membuka Email Client Anda'}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
