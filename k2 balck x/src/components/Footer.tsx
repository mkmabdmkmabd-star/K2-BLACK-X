import React from 'react';
import { Lock, ArrowUp, Share2, ShieldAlert } from 'lucide-react';
import { SECTIONS_DATA } from '../data/servicesData';
import { K2Logo } from './K2Logo';

interface FooterProps {
  onSelectSection: (id: number) => void;
  onOpenShare?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectSection, onOpenShare }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-14 pb-12 text-sm text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* شريط الإشعار الأمني والقانوني البارز على طول الصفحة */}
        <div className="w-full mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900 border-2 border-emerald-500/60 shadow-2xl shadow-black/80 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div className="space-y-3 text-right flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xl sm:text-2xl font-black text-emerald-400 tracking-wide">إشعار قانوني وإخلاء مسؤولية أمنية:</span>
                <span className="text-xs sm:text-sm font-bold font-mono px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  تنبيه نظامي مُلزم
                </span>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-slate-100 leading-relaxed font-semibold">
                تُقدَّم كافة خدمات الأمن السيبراني واختبار الاختراق والتحليل الجنائي الرقمي حصراً لأغراض تعليمية، وتدريبية، واختبارات حماية مشروعة؛ وتخضع للتشريعات واللوائح المنظمة لمكافحة جرائم تقنية المعلومات. ويُشترط لتنفيذ أي فحص أمني وجود تفويض رسمي صريح وإذن خطي مسبق من المالك الشرعي للنظام أو الجهة المخولة قانوناً. وتُخلي إدارة المنصة وكوادرها مسؤوليتها القانونية والجنائية والمدنية التامة عن أي سوء استخدام، أو تطبيق غير مصرّح به، أو أضرار ناتجة عن تشغيل هذه الأدوات خارج إطارها الأخلاقي والمصرح به نظاماً.
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <K2Logo size="lg" />
              <div>
                <span className="text-2xl font-black text-white tracking-wider font-mono">
                  K2 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">BlackX</span>
                </span>
                <p className="text-sm sm:text-base text-slate-200 font-bold">
                  الخدمات والحلول التقنية والسيبرانية المتكاملة
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-sm font-medium">
              المنصة الهندسية والتقنية الأولى لخدمات الأمن السيبراني المتقدمة، التحليل الجنائي الرقمي، أنظمة Kali Linux، تطوير البرمجيات وحلول الذكاء الاصطناعي ومشاريع التخرج.
            </p>
          </div>

          {/* Column 1 of sections */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              الأقسام الأمنية والجنائية
            </h4>
            <ul className="space-y-2.5">
              {SECTIONS_DATA.slice(0, 5).map((sec) => (
                <li key={sec.id}>
                  <button
                    onClick={() => onSelectSection(sec.id)}
                    className="hover:text-emerald-400 transition text-right text-sm font-medium"
                  >
                    {sec.id}. {sec.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 of sections */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              البرمجة والأتمتة والبيانات
            </h4>
            <ul className="space-y-2.5">
              {SECTIONS_DATA.slice(5, 10).map((sec) => (
                <li key={sec.id}>
                  <button
                    onClick={() => onSelectSection(sec.id)}
                    className="hover:text-emerald-400 transition text-right text-sm font-medium"
                  >
                    {sec.id}. {sec.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 of sections */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              الأجهزة والأكاديميا والتدريب
            </h4>
            <ul className="space-y-2.5">
              {SECTIONS_DATA.slice(10, 15).map((sec) => (
                <li key={sec.id}>
                  <button
                    onClick={() => onSelectSection(sec.id)}
                    className="hover:text-emerald-400 transition text-right text-sm font-medium"
                  >
                    {sec.id}. {sec.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            جميع الحقوق محفوظة © {new Date().getFullYear()} K2 BlackX - التقنية والحلول السيبرانية المتقدمة.
          </p>

          <div className="flex items-center gap-3">
            {onOpenShare && (
              <button
                onClick={onOpenShare}
                className="flex items-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/40 rounded-lg text-slate-200 hover:text-emerald-300 text-sm font-medium transition"
              >
                <Share2 className="w-4 h-4 text-emerald-400" />
                <span>مشاركة الموقع</span>
              </button>
            )}

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-200 hover:text-white text-sm font-medium transition"
            >
              <span>العودة للأعلى</span>
              <ArrowUp className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
