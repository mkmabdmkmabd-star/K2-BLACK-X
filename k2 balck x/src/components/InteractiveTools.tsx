import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  Search, 
  Cpu, 
  Sparkles, 
  Lock, 
  FileText, 
  Code, 
  Globe, 
  Zap, 
  Bot, 
  Database, 
  LifeBuoy, 
  HardDrive, 
  Radio, 
  Layers, 
  GraduationCap, 
  Palette, 
  Users,
  CheckCircle2,
  SlidersHorizontal,
  ArrowLeft
} from 'lucide-react';
import {
  ToolCyberSecurity,
  ToolDigitalForensics,
  ToolLinuxKali,
  ToolSoftwareScripting,
  ToolWebDev,
  ToolAutomationBots,
  ToolAILab,
  ToolDataAnalytics,
  ToolRemoteSupport,
  ToolDataRecovery,
  ToolHardwareIoT,
  ToolTechProjects,
  ToolAcademicResearch,
  ToolDesignBranding,
  ToolTrainingSkills
} from './tools/DepartmentTools';
import { K2Logo } from './K2Logo';

interface InteractiveToolsProps {
  onSelectSection?: (sectionId: number) => void;
}

export const InteractiveTools: React.FC<InteractiveToolsProps> = ({ onSelectSection }) => {
  const [selectedDept, setSelectedDept] = useState<number>(1);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const departments = [
    {
      id: 1,
      name: 'الأمن السيبراني وحماية الأنظمة',
      category: 'security',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40',
      bg: 'bg-emerald-500/10',
      toolName: 'فاحص الرؤوس الأمنية ومحاكي الثغرات (VAPT & Security Headers)',
      component: <ToolCyberSecurity />
    },
    {
      id: 2,
      name: 'التحليل الجنائي الرقمي والأدلة الجنائية',
      category: 'security',
      icon: Lock,
      color: 'text-cyan-400',
      border: 'border-cyan-500/40',
      bg: 'bg-cyan-500/10',
      toolName: 'حساب البصمة الرقمية الجنائية وسلسلة الحيازة (ISO 27037)',
      component: <ToolDigitalForensics />
    },
    {
      id: 3,
      name: 'أنظمة Linux وتوزيعة Kali Linux',
      category: 'security',
      icon: Terminal,
      color: 'text-indigo-400',
      border: 'border-indigo-500/40',
      bg: 'bg-indigo-500/10',
      toolName: 'محاكي طرفية كالي لينكس والأوامر الميدانية (Kali Shell Simulator)',
      component: <ToolLinuxKali />
    },
    {
      id: 4,
      name: 'البرمجة وتطوير البرمجيات والسكريبتات',
      category: 'dev',
      icon: Code,
      color: 'text-violet-400',
      border: 'border-violet-500/40',
      bg: 'bg-violet-500/10',
      toolName: 'مختبر التعابير النمطية وفلترة الأنماط الأمنية (Regex Lab)',
      component: <ToolSoftwareScripting />
    },
    {
      id: 5,
      name: 'تصميم وتطوير المواقع والخدمات السحابية',
      category: 'dev',
      icon: Globe,
      color: 'text-teal-400',
      border: 'border-teal-500/40',
      bg: 'bg-teal-500/10',
      toolName: 'فاحص كفاءة الويب ومحلل شهادات SSL وتشفير TLS 1.3',
      component: <ToolWebDev />
    },
    {
      id: 6,
      name: 'الأتمتة وربط الأنظمة وتطوير البوتات',
      category: 'dev',
      icon: Zap,
      color: 'text-amber-400',
      border: 'border-amber-500/40',
      bg: 'bg-amber-500/10',
      toolName: 'محاكي الـ Webhooks واختبار إشعارات البوتات (Bot Webhook Tester)',
      component: <ToolAutomationBots />
    },
    {
      id: 7,
      name: 'الذكاء الاصطناعي والحلول الذكية',
      category: 'ai_data',
      icon: Cpu,
      color: 'text-rose-400',
      border: 'border-rose-500/40',
      bg: 'bg-rose-500/10',
      toolName: 'مخطط ومحاكي تشغيل نماذج الـ LLM المعزولة محلياً (Offline LLMs)',
      component: <ToolAILab />
    },
    {
      id: 8,
      name: 'تحليل ومعالجة البيانات والتقارير المتقدمة',
      category: 'ai_data',
      icon: Database,
      color: 'text-blue-400',
      border: 'border-blue-500/40',
      bg: 'bg-blue-500/10',
      toolName: 'محاكي استخراج النصوص الممسوحة (OCR) ومحول الـ JSON',
      component: <ToolDataAnalytics />
    },
    {
      id: 9,
      name: 'الدعم الفني والخدمات التقنية عن بُعد',
      category: 'dev',
      icon: LifeBuoy,
      color: 'text-sky-400',
      border: 'border-sky-500/40',
      bg: 'bg-sky-500/10',
      toolName: 'مولّد تقارير التشخيص الفني وتذاكر الدعم السريع (Ticket Dispatch)',
      component: <ToolRemoteSupport />
    },
    {
      id: 10,
      name: 'استعادة وإدارة البيانات الرقمية',
      category: 'security',
      icon: HardDrive,
      color: 'text-red-400',
      border: 'border-red-500/40',
      bg: 'bg-red-500/10',
      toolName: 'محاكي التطهير العسكري للبيانات (DoD 5220.22-M Wipe)',
      component: <ToolDataRecovery />
    },
    {
      id: 11,
      name: 'الأجهزة والإلكترونيات والأنظمة المدمجة',
      category: 'engineering',
      icon: Radio,
      color: 'text-orange-400',
      border: 'border-orange-500/40',
      bg: 'bg-orange-500/10',
      toolName: 'حاسبة ألوان المقاومات ومخططات منافذ IoT (ESP32 / Arduino)',
      component: <ToolHardwareIoT />
    },
    {
      id: 12,
      name: 'المشاريع التقنية والتعليمية ومشاريع التخرج',
      category: 'academic',
      icon: Layers,
      color: 'text-purple-400',
      border: 'border-purple-500/40',
      bg: 'bg-purple-500/10',
      toolName: 'مخطط معمارية المشاريع والمكدس البرمجي (Tech Stack Architect)',
      component: <ToolTechProjects />
    },
    {
      id: 13,
      name: 'الخدمات الأكاديمية والبحثية',
      category: 'academic',
      icon: GraduationCap,
      color: 'text-yellow-400',
      border: 'border-yellow-500/40',
      bg: 'bg-yellow-500/10',
      toolName: 'مولّد التوثيق الأكاديمي المعتمد (APA 7th & IEEE Citation Generator)',
      component: <ToolAcademicResearch />
    },
    {
      id: 14,
      name: 'التصميم والمحتوى الرقمي والهويات البصرية',
      category: 'design',
      icon: Palette,
      color: 'text-pink-400',
      border: 'border-pink-500/40',
      bg: 'bg-pink-500/10',
      toolName: 'مختبر ألوان الهوية السيبرانية وفاحص التباين (WCAG AA Contrast)',
      component: <ToolDesignBranding />
    },
    {
      id: 15,
      name: 'التدريب وتطوير المهارات التقنية والسيبرانية',
      category: 'academic',
      icon: Users,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40',
      bg: 'bg-emerald-500/10',
      toolName: 'مقياس الجاهزية والمهارات السيبرانية الفورية (Skill Assessment)',
      component: <ToolTrainingSkills />
    }
  ];

  // Filtering
  const filteredDepts = departments.filter((dept) => {
    const matchesCategory = categoryFilter === 'all' || dept.category === categoryFilter;
    const matchesSearch = 
      dept.name.includes(searchQuery) || 
      dept.toolName.includes(searchQuery) ||
      dept.id.toString() === searchQuery.trim();
    return matchesCategory && matchesSearch;
  });

  const currentDept = departments.find(d => d.id === selectedDept) || departments[0];
  const CurrentIcon = currentDept.icon;

  return (
    <section id="interactive-tools" className="scroll-mt-24">
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-4 sm:p-7 shadow-2xl relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800/80 pb-6 mb-6 relative z-10">
          <div className="flex items-center gap-3.5">
            <K2Logo size="lg" className="shadow-amber-500/15" />
            <div>
              <div className="flex items-center gap-2.5">
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  المختبر التفاعلي والمحاكاة الميدانية
                </h2>
                <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2.5 py-0.5 rounded-full font-mono font-bold">
                  15 أداة تخصصية
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-300 mt-1">
                أدوات تفاعلية فورية ومحاكاة ميدانية حية تغطي كافة إدارات وأقسام <strong className="text-white">K2 BlackX</strong> الـ 15
              </p>
            </div>
          </div>

          {/* Quick Stats & Controls */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="relative">
              <Search className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن أداة أو إدارة..."
                className="bg-slate-900 border border-slate-700/80 rounded-xl pr-9 pl-3 py-2 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-500/50 w-52 sm:w-64"
              />
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-5 scrollbar-none">
          {[
            { id: 'all', label: 'كافة الإدارات (15)' },
            { id: 'security', label: 'الأمن والتحليل والأدلة' },
            { id: 'dev', label: 'البرمجة والويب والأتمتة' },
            { id: 'ai_data', label: 'الذكاء الاصطناعي والبيانات' },
            { id: 'engineering', label: 'الهاردوير والأنظمة المدمجة' },
            { id: 'academic', label: 'المشاريع والبحث والتدريب' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCategoryFilter(tab.id)}
              className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition text-xs sm:text-sm ${
                categoryFilter === tab.id
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-lg shadow-amber-500/10'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 15 Departments Grid / Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 mb-6">
          {filteredDepts.map((dept) => {
            const Icon = dept.icon;
            const isSelected = selectedDept === dept.id;
            return (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`p-3 rounded-2xl text-right flex flex-col justify-between transition-all duration-200 border ${
                  isSelected
                    ? `${dept.bg} ${dept.border} shadow-lg shadow-black/40 scale-[1.02]`
                    : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800/90 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <div className={`p-2 rounded-xl ${dept.bg}`}>
                    <Icon className={`w-4 h-4 ${dept.color}`} />
                  </div>
                  <span className={`text-xs font-mono font-black ${isSelected ? dept.color : 'text-slate-400'}`}>
                    #{dept.id}
                  </span>
                </div>
                <span className={`text-xs sm:text-sm font-bold line-clamp-1 leading-snug ${isSelected ? 'text-white font-black' : 'text-slate-200'}`}>
                  {dept.name.split(' ')[0]} {dept.name.split(' ')[1] || ''}
                </span>
                <span className="text-[11px] text-slate-400 truncate block mt-1">
                  محاكاة الإدارة #{dept.id}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Department Simulation Laboratory Card */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-6 relative">
          {/* Active Tool Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl ${currentDept.bg} border ${currentDept.border}`}>
                <CurrentIcon className={`w-5 h-5 ${currentDept.color}`} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    الإدارة {currentDept.id} من 15:
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    {currentDept.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className={`text-xs font-bold ${currentDept.color}`}>
                    {currentDept.toolName}
                  </span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.2 rounded font-mono">
                    LIVE LAB
                  </span>
                </div>
              </div>
            </div>

            {/* Quick jump to services */}
            {onSelectSection && (
              <button
                onClick={() => onSelectSection(currentDept.id)}
                className="self-start sm:self-center px-3 py-1.5 bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-slate-300 hover:text-amber-300 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0"
              >
                <span>استعراض خدمات هذا القسم</span>
                <ArrowLeft className="w-3.5 h-3.5 text-amber-400" />
              </button>
            )}
          </div>

          {/* Render the Active Department Interactive Simulation Component */}
          <div className="mt-2">
            {currentDept.component}
          </div>
        </div>
      </div>
    </section>
  );
};
