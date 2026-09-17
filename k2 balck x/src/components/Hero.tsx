import React from 'react';
import { 
  Lock, 
  Terminal, 
  CheckCircle2, 
  Server, 
  ArrowDown, 
  Sparkles,
  Share2
} from 'lucide-react';
import { K2Logo } from './K2Logo';
import { CyberTerminalStream } from './CyberTerminalStream';

interface HeroProps {
  onExploreClick: () => void;
  onToolsClick: () => void;
  onConsultationClick: () => void;
  onShareClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onToolsClick,
  onConsultationClick,
  onShareClick,
}) => {
  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-28 overflow-hidden border-b border-slate-900">
      {/* Glow / matrix ambient effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-7">
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 text-sm sm:text-base font-bold text-emerald-400 shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>K2 BlackX • النطاق الكامل للحلول والأمن السيبراني</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.2] sm:leading-[1.18] tracking-tight">
              المرجع الشامل للخدمات والحلول{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                التقنية والسيبرانية
              </span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-3xl font-normal">
              منصة هندسية متكاملة تجمع <strong className="text-white font-black text-xl sm:text-2xl">15 قسماً تخصصياً</strong> وأكثر من <strong className="text-emerald-400 font-black text-xl sm:text-2xl">90 خدمة متقدمة</strong>، من فحص أمان المواقع وتحليل الأدلة الجنائية وأنظمة Kali Linux، وحتى أتمتة الأعمال بالذكاء الاصطناعي ومشاريع التخرج.
            </p>

            {/* Quick trust badges */}
            <div className="flex flex-wrap gap-y-3 gap-x-6 text-sm sm:text-base font-bold text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>سرية تامة واتفاقيات عدم إفشاء (NDA)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>تقارير فنية وقانونية معتمدة</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5 text-violet-400 shrink-0" />
                <span>بيئات عزل واختبار متقدمة</span>
              </div>
            </div>

            {/* Action buttons with larger, comfortable click targets */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                id="hero-explore-btn"
                onClick={onExploreClick}
                className="px-7 py-4 rounded-2xl text-base sm:text-lg font-black bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 shadow-xl shadow-emerald-500/25 transition transform active:scale-95 flex items-center gap-2.5"
              >
                <span>استكشف الـ 15 قسماً</span>
                <ArrowDown className="w-5 h-5" />
              </button>

              <button
                id="hero-tools-btn"
                onClick={onToolsClick}
                className="px-6 py-4 rounded-2xl text-base sm:text-lg font-bold bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700/80 hover:border-slate-600 shadow-lg transition flex items-center gap-2.5"
              >
                <Terminal className="w-5 h-5 text-emerald-400" />
                <span>المعمل التفاعلي الحي</span>
              </button>

              <button
                id="hero-consult-btn"
                onClick={onConsultationClick}
                className="px-6 py-4 rounded-2xl text-base sm:text-lg font-bold bg-slate-950 hover:bg-slate-900 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 shadow-lg transition flex items-center gap-2.5"
              >
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>طلب خدمة محددة</span>
              </button>

              {onShareClick && (
                <button
                  id="hero-share-btn"
                  onClick={onShareClick}
                  className="px-5 py-4 rounded-2xl text-base sm:text-lg font-bold bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-emerald-500/40 hover:text-emerald-300 transition flex items-center gap-2.5"
                  title="مشاركة رابط الموقع"
                >
                  <Share2 className="w-5 h-5 text-emerald-400" />
                  <span>مشاركة الموقع</span>
                </button>
              )}
            </div>
          </div>

          {/* Cyber Terminal Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden group">
              {/* Official Brand Badge Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80 bg-slate-900/40 -mx-5 -mt-5 p-4 sm:-mx-6 sm:-mt-6">
                <div className="flex items-center gap-3">
                  <K2Logo size="md" className="shadow-amber-500/20" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm sm:text-base font-black text-white font-mono">
                        K2 <span className="text-amber-400">BlackX</span>
                      </span>
                      <span className="text-[11px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono font-bold">
                        AUTHENTIC
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono block mt-0.5">
                      Cyber Security • Digital Intelligence • Protection
                    </span>
                  </div>
                </div>
                <span className="text-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full font-mono font-bold">
                  ACTIVE
                </span>
              </div>

              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="mr-2 text-xs font-mono text-slate-300">k2-blackx@ops-node:~#</span>
                </div>
                <span className="text-xs text-slate-400 font-mono font-bold">
                  15 SECTIONS
                </span>
              </div>

              {/* Terminal live continuous streaming output */}
              <CyberTerminalStream />

              {/* Terminal status bar */}
              <div className="pt-3 text-slate-300 border-t border-slate-800 flex items-center justify-between text-xs sm:text-sm font-mono">
                <span className="font-bold text-slate-400">Continuous Security Stream:</span>
                <span className="text-emerald-400 font-bold bg-slate-900 px-2.5 py-0.5 rounded border border-slate-700 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>LIVE • NON-STOP</span>
                </span>
              </div>

              {/* Terminal footer stat highlight */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2.5 text-center">
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">15</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-300 mt-0.5">قسماً متخصصاً</div>
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">90+</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-300 mt-0.5">خدمة وحلاً تقنياً</div>
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">24/7</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-300 mt-0.5">استجابة وتأمين</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
