import React from 'react';
import { CONTACT_INFO } from '../data/contactInfo';
import { MessageCircle, Instagram, Facebook } from 'lucide-react';

interface SocialLinksProps {
  variant?: 'badges' | 'cards' | 'icons-only';
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  variant = 'badges',
  className = '',
}) => {
  // TikTok Custom SVG Icon
  const TikTokIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743 2.895 2.895 0 0 1 2.313-4.636c.329 0 .647.054.945.155V9.451a6.34 6.34 0 0 0-.945-.072 6.34 6.34 0 1 0 6.333 6.34V8.708a8.175 8.175 0 0 0 4.77 1.524V6.787a4.838 4.838 0 0 1-1-.101z" />
    </svg>
  );

  if (variant === 'cards') {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 ${className}`}>
        {/* WhatsApp Card */}
        <a
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-slate-900/90 hover:bg-slate-900 border border-emerald-500/30 hover:border-emerald-400/80 transition-all duration-200 group flex items-center gap-3.5 shadow-lg shadow-black/40 hover:-translate-y-0.5"
        >
          <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition shrink-0">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div className="overflow-hidden text-right">
            <span className="text-[11px] text-emerald-400 font-bold block">واتساب</span>
            <span className="text-xs sm:text-sm font-black text-white block">
              تواصل مباشر
            </span>
          </div>
        </a>

        {/* Instagram Card */}
        <a
          href={CONTACT_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-slate-900/90 hover:bg-slate-900 border border-pink-500/30 hover:border-pink-400/80 transition-all duration-200 group flex items-center gap-3.5 shadow-lg shadow-black/40 hover:-translate-y-0.5"
        >
          <div className="w-11 h-11 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-110 transition shrink-0">
            <Instagram className="w-5 h-5" />
          </div>
          <div className="overflow-hidden text-right">
            <span className="text-[11px] text-pink-400 font-bold block">إنستغرام</span>
            <span className="text-xs sm:text-sm font-black text-white font-mono dir-ltr block truncate">
              @{CONTACT_INFO.instagramHandle}
            </span>
          </div>
        </a>

        {/* TikTok Card */}
        <a
          href={CONTACT_INFO.tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-slate-900/90 hover:bg-slate-900 border border-cyan-500/30 hover:border-cyan-400/80 transition-all duration-200 group flex items-center gap-3.5 shadow-lg shadow-black/40 hover:-translate-y-0.5"
        >
          <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition shrink-0">
            <TikTokIcon className="w-5 h-5" />
          </div>
          <div className="overflow-hidden text-right">
            <span className="text-[11px] text-cyan-400 font-bold block">تيك توك</span>
            <span className="text-xs sm:text-sm font-black text-white font-mono dir-ltr block truncate">
              {CONTACT_INFO.tiktokHandle}
            </span>
          </div>
        </a>

        {/* Facebook Card */}
        <a
          href={CONTACT_INFO.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-slate-900/90 hover:bg-slate-900 border border-blue-500/30 hover:border-blue-400/80 transition-all duration-200 group flex items-center gap-3.5 shadow-lg shadow-black/40 hover:-translate-y-0.5"
        >
          <div className="w-11 h-11 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition shrink-0">
            <Facebook className="w-5 h-5" />
          </div>
          <div className="overflow-hidden text-right">
            <span className="text-[11px] text-blue-400 font-bold block">فيسبوك</span>
            <span className="text-xs sm:text-sm font-black text-white font-mono dir-ltr block truncate">
              {CONTACT_INFO.facebookHandle}
            </span>
          </div>
        </a>
      </div>
    );
  }

  // Badges variant (horizontal responsive pills)
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {/* WhatsApp */}
      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 hover:text-emerald-200 text-xs sm:text-sm font-bold transition shadow-sm"
        title="مراسلة عبر واتساب"
      >
        <MessageCircle className="w-4 h-4 text-emerald-400" />
        <span>واتساب</span>
      </a>

      {/* Instagram */}
      <a
        href={CONTACT_INFO.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-pink-500/15 hover:bg-pink-500/25 border border-pink-500/30 text-pink-300 hover:text-pink-200 text-xs sm:text-sm font-bold transition shadow-sm"
        title="متابعة على إنستغرام"
      >
        <Instagram className="w-4 h-4 text-pink-400" />
        <span className="font-mono">@{CONTACT_INFO.instagramHandle}</span>
      </a>

      {/* TikTok */}
      <a
        href={CONTACT_INFO.tiktokUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 hover:text-cyan-200 text-xs sm:text-sm font-bold transition shadow-sm"
        title="متابعة على تيك توك"
      >
        <TikTokIcon className="w-4 h-4 text-cyan-400" />
        <span className="font-mono">{CONTACT_INFO.tiktokHandle}</span>
      </a>

      {/* Facebook */}
      <a
        href={CONTACT_INFO.facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-500/15 hover:bg-blue-500/25 border border-blue-500/30 text-blue-300 hover:text-blue-200 text-xs sm:text-sm font-bold transition shadow-sm"
        title="متابعة على فيسبوك"
      >
        <Facebook className="w-4 h-4 text-blue-400" />
        <span className="font-mono">{CONTACT_INFO.facebookHandle}</span>
      </a>
    </div>
  );
};
