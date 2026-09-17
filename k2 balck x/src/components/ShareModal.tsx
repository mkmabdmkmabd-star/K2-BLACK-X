import React, { useState } from 'react';
import { Share2, Check, Copy, ExternalLink, QrCode, X, MessageSquare, Send, Globe } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  appUrl?: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  appUrl,
}) => {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  if (!isOpen) return null;

  // Determine the effective sharing URL
  const currentUrl =
    appUrl ||
    (typeof window !== 'undefined'
      ? window.location.origin
      : 'https://k2blackx.tech');

  const shareTitle = 'K2 BlackX | المنصة المتكاملة للخدمات والحلول التقنية والسيبرانية';
  const shareDescription =
    'استكشف 15 قسماً هندسياً وأكثر من 90 خدمة تخصصية في الأمن السيبراني، التحليل الجنائي، أنظمة كالي لينكس، الأتمتة، والذكاء الاصطناعي مع معمل تفاعلي مجاني.';

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(currentUrl);
      } else {
        const input = document.createElement('input');
        input.value = currentUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error('Failed to copy', e);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`${shareTitle}\n\n${shareDescription}\n\n🔗 رابط الموقع:\n${currentUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleTelegram = () => {
    const text = encodeURIComponent(`${shareTitle}\n\n${shareDescription}`);
    window.open(`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${text}`, '_blank');
  };

  const handleTwitterX = () => {
    const text = encodeURIComponent(`${shareTitle}\n${shareDescription}`);
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${text}`, '_blank');
  };

  const handleLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
    currentUrl
  )}&bgcolor=020617&color=10b981&qzone=2`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">مشاركة رابط الموقع</h3>
              <p className="text-xs text-slate-400 font-mono">K2 BlackX Web Access</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* URL Box with Copy button */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              الرابط المباشر للموقع:
            </label>
            <div className="flex items-center gap-2 p-1.5 bg-slate-950 border border-slate-800 rounded-xl">
              <div className="p-2 text-slate-500">
                <Globe className="w-4 h-4 text-emerald-400" />
              </div>
              <input
                readOnly
                type="text"
                value={currentUrl}
                className="w-full bg-transparent text-xs text-slate-200 font-mono focus:outline-none select-all"
              />
              <button
                onClick={handleCopy}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 shrink-0 ${
                  copied
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>تم النسخ!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>نسخ الرابط</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              يمكن لأي شخص فتح هذا الرابط لتصفح الخدمات الـ 15 واستخدام المعمل التفاعلي وطلب الاستشارات.
            </p>
          </div>

          {/* Social Share Buttons */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2.5">
              مشاركة مباشرة عبر التطبيقات:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {/* WhatsApp */}
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-2 p-3 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 text-emerald-300 rounded-xl text-xs font-bold transition group"
              >
                <MessageSquare className="w-4 h-4 group-hover:scale-110 transition" />
                <span>واتساب</span>
              </button>

              {/* Telegram */}
              <button
                onClick={handleTelegram}
                className="flex items-center justify-center gap-2 p-3 bg-sky-950/40 hover:bg-sky-900/50 border border-sky-500/30 text-sky-300 rounded-xl text-xs font-bold transition group"
              >
                <Send className="w-4 h-4 group-hover:scale-110 transition" />
                <span>تيليغرام</span>
              </button>

              {/* X / Twitter */}
              <button
                onClick={handleTwitterX}
                className="flex items-center justify-center gap-2 p-3 bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-200 rounded-xl text-xs font-bold transition group"
              >
                <span className="font-bold text-sm">𝕏</span>
                <span>تويتر (X)</span>
              </button>

              {/* LinkedIn */}
              <button
                onClick={handleLinkedIn}
                className="flex items-center justify-center gap-2 p-3 bg-blue-950/40 hover:bg-blue-900/50 border border-blue-500/30 text-blue-300 rounded-xl text-xs font-bold transition group"
              >
                <ExternalLink className="w-4 h-4 group-hover:scale-110 transition" />
                <span>لينكد إن</span>
              </button>
            </div>
          </div>

          {/* QR Code toggle */}
          <div className="pt-2 border-t border-slate-800/80">
            <button
              onClick={() => setShowQR(!showQR)}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition"
            >
              <div className="flex items-center gap-2">
                <QrCode className="w-4 h-4 text-emerald-400" />
                <span>عرض رمز الاستجابة السريعة (QR Code) للمسح عبر كاميرا الجوال</span>
              </div>
              <span className="text-[11px] text-emerald-400 font-mono">
                {showQR ? 'إخفاء' : 'إظهار'}
              </span>
            </button>

            {showQR && (
              <div className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded-xl flex flex-col items-center text-center space-y-3">
                <div className="p-2 bg-slate-950 border-2 border-emerald-500/40 rounded-xl shadow-lg">
                  <img
                    src={qrCodeUrl}
                    alt="K2 BlackX Website QR Code"
                    className="w-48 h-48 rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-xs text-slate-400 max-w-xs">
                  امسح الرمز بكاميرا أي هاتف ذكي لفتح موقع K2 BlackX مباشرة بدون كتابة الرابط.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950/60 border-t border-slate-800 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
