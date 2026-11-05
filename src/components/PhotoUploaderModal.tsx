import React, { useState } from 'react';
import { X, Upload, RefreshCw, UserCheck, Image as ImageIcon } from 'lucide-react';

interface PhotoUploaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string | null;
  onSavePhoto: (photoDataUrl: string | null) => void;
}

export const PhotoUploaderModal: React.FC<PhotoUploaderModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  onSavePhoto,
}) => {
  const [preview, setPreview] = useState<string | null>(currentPhoto);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg('Harap pilih file gambar (JPG, PNG, WEBP).');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg('Ukuran file maksimal 5MB.');
      return;
    }

    setErrorMsg(null);
    const reader = new FileReader();
    reader.onload = (event) => {
      setPreview(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    onSavePhoto(preview);
    onClose();
  };

  const handleResetToDefault = () => {
    setPreview(null);
    onSavePhoto(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-[#121212] border border-[#262626] rounded-2xl p-6 text-white shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-[#1f1f1f] transition-colors"
          aria-label="Tutup"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-[#DC2626]/10 border border-[#DC2626]/20 text-[#DC2626]">
            <ImageIcon size={22} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Ganti Foto Profil Pribadi</h3>
            <p className="text-xs text-neutral-400">Sesuaikan foto profil untuk Hero & About Me</p>
          </div>
        </div>

        {/* Preview Circle */}
        <div className="flex flex-col items-center justify-center my-6">
          <div className="relative w-40 h-40 rounded-full p-1 border-2 border-[#DC2626] shadow-lg shadow-[#DC2626]/10 bg-[#171717] flex items-center justify-center overflow-hidden">
            {preview ? (
              <img
                src={preview}
                alt="Preview Foto Profil Sopian Sahuri"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-4">
                <span className="font-poster text-4xl text-[#DC2626]">SS</span>
                <span className="text-[11px] text-neutral-400 mt-1">Placeholder Siluet</span>
              </div>
            )}
          </div>
          <span className="text-xs text-neutral-400 mt-2">
            {preview ? 'Foto khusus terpilih' : 'Menggunakan avatar siluet default'}
          </span>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 bg-red-950/50 border border-red-800/50 rounded-lg text-xs text-red-300">
            {errorMsg}
          </div>
        )}

        {/* Upload Button */}
        <div className="space-y-3">
          <label className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#1f1f1f] hover:bg-[#282828] border border-[#333] hover:border-[#DC2626]/50 rounded-xl text-sm font-medium cursor-pointer transition-colors text-white">
            <Upload size={16} className="text-[#DC2626]" />
            <span>Pilih Foto dari Perangkat (JPG / PNG)</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={handleResetToDefault}
              type="button"
              className="flex-1 py-2.5 px-3 bg-transparent hover:bg-[#1a1a1a] border border-[#262626] rounded-xl text-xs font-medium text-neutral-400 hover:text-white transition-colors flex items-center justify-center gap-1.5"
            >
              <RefreshCw size={14} />
              Reset ke Default
            </button>
            <button
              onClick={handleSave}
              type="button"
              className="flex-1 py-2.5 px-3 bg-[#DC2626] hover:bg-[#b91c1c] text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-red-900/20"
            >
              <UserCheck size={14} />
              Terapkan Foto
            </button>
          </div>
        </div>

        <p className="text-[11px] text-neutral-500 text-center mt-4">
          Foto akan tersimpan di browser Anda secara lokal agar langsung terlihat di seluruh halaman website.
        </p>
      </div>
    </div>
  );
};
