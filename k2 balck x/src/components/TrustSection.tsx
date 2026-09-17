import React from 'react';
import { ShieldCheck, FileKey, Zap, Terminal, Lock, Cpu, EyeOff, Award } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const pillars = [
    {
      icon: EyeOff,
      title: 'اتفاقية سرية مطلقة (NDA)',
      desc: 'حماية كاملة لخصوصية بياناتك، أكوادك، ومحتويات أجهزتك، مع التزام قانوني صارم بعدم الإفشاء أو مشاركة أي معلومة.'
    },
    {
      icon: Terminal,
      title: 'بيئات معزولة (Air-gapped & Sandboxed)',
      desc: 'فحص الملفات المشبوهة وتحليل الأدلة الجنائية داخل بيئات افتراضية معزولة تماماً تمنع أي انتشار أو تسريب.'
    },
    {
      icon: ShieldCheck,
      title: 'منهجيات دولية معتمدة',
      desc: 'تطبيق معايير ISO/IEC 27037 في حيازة الأدلة الجنائية، ومعايير OWASP في اختبار أمان تطبيقات ومواقع الويب.'
    },
    {
      icon: Award,
      title: 'خبرات هندسية تخصصية',
      desc: 'فريق متخصص في أنظمة Linux، التحليل الجنائي، الأتمتة المتقدمة، وهندسة البرمجيات وليس مجرد حلول سطحية.'
    }
  ];

  return (
    <section id="why-k2" className="py-16 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-xs font-semibold text-emerald-400 border border-slate-800 mb-3">
            <Lock className="w-3.5 h-3.5" />
            <span>معايير الأمان والموثوقية</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            لماذا يثق العملاء والمؤسسات في منظومة K2 BlackX؟
          </h2>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            نجمع بين الهندسة العميقة، والالتزام الأخلاقي، والدقة المتناهية لضمان تفوقك التقني وحماية أصولك الرقمية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
