import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#121212] border border-[#2a2a2a] rounded-3xl p-6 sm:p-8 text-white shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#222]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#DC2626]/10 text-[#DC2626]">
              {isPrivacy ? <Shield size={18} /> : <FileText size={18} />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <p className="text-xs text-neutral-400">
                {PERSONAL_INFO.fullName} · YannStudio
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-[#1f1f1f] transition-colors"
            aria-label="Tutup"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="py-6 space-y-4 text-xs sm:text-sm text-neutral-300 overflow-y-auto leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                <strong>1. Pengenalan</strong><br />
                Kebijakan Privasi ini menjelaskan bagaimana website portofolio pribadi <strong>{PERSONAL_INFO.fullName}</strong> dan inisiatif <strong>YannStudio</strong> menghargai dan melindungi informasi yang Anda berikan saat menggunakan situs ini.
              </p>
              <p>
                <strong>2. Data yang Dikumpulkan</strong><br />
                Website ini tidak mengumpulkan data pribadi secara diam-diam melalui cookies pelacak pihak ketiga. Informasi yang Anda masukkan dalam formulir kontak (nama, email, pesan) hanya digunakan secara langsung untuk mengirimkan pesan ke WhatsApp atau email resmi tanpa disimpan di database eksternal publik.
              </p>
              <p>
                <strong>3. Penggunaan Media & Portofolio</strong><br />
                Seluruh materi visual, foto profil, dan aset media yang ditampilkan di situs ini merupakan hak cipta dan representasi resmi dari Sopian Sahuri dan ekosistem YannStudio.
              </p>
              <p>
                <strong>4. Kontak</strong><br />
                Jika Anda memiliki pertanyaan terkait privasi ini, silakan hubungi melalui email di <span className="text-[#DC2626] font-mono">{PERSONAL_INFO.email}</span>.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Ketentuan Umum</strong><br />
                Dengan mengakses website portofolio <strong>{PERSONAL_INFO.fullName}</strong> dan platform <strong>YannStudio</strong>, Anda menyetujui ketentuan penggunaan yang berlaku di situs ini.
              </p>
              <p>
                <strong>2. Hak Cipta & Kepemilikan Materi</strong><br />
                Semua konten, logo YannStudio, konsep desain, tulisan, dan struktur materi merupakan hak kekayaan intelektual pemilik situs dan dilindungi oleh undang-undang. Penggunaan atau adaptasi komersial wajib mendapatkan izin tertulis.
              </p>
              <p>
                <strong>3. Status Proyek & Layanan YannStudio</strong><br />
                Website ini menampilkan portofolio pribadi, karya studi kasus, dan rancangan pengembangan bisnis YannStudio. Layanan yang berstatus "In Development" atau "Future Development" merupakan rencana pengembangan bertahap dan tunduk pada pembaruan operasional berkala.
              </p>
              <p>
                <strong>4. Hukum yang Berlaku</strong><br />
                Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum yang berlaku di Republik Indonesia.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#222] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#1f1f1f] hover:bg-[#282828] text-white text-xs font-semibold rounded-xl transition-colors"
          >
            Mengerti & Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
