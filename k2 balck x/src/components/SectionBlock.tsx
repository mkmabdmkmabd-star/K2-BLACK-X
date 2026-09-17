import React from 'react';
import { SectionData, ServiceItem, SelectedService } from '../types';
import { SectionIcon } from './SectionIcon';
import { Check, Plus, Clock, ArrowUpRight } from 'lucide-react';

interface SectionBlockProps {
  section: SectionData;
  selectedServices: SelectedService[];
  onToggleService: (section: SectionData, service: ServiceItem) => void;
  onRequestSingleService: (section: SectionData, service: ServiceItem) => void;
}

export const SectionBlock: React.FC<SectionBlockProps> = ({
  section,
  selectedServices,
  onToggleService,
  onRequestSingleService,
}) => {
  return (
    <div
      id={`section-anchor-${section.id}`}
      className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 lg:p-9 backdrop-blur transition-all duration-300 hover:border-slate-700 shadow-2xl relative overflow-hidden"
    >
      {/* Accent corner line */}
      <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800/90">
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-700/80 flex items-center justify-center shrink-0 text-emerald-400 shadow-inner">
            <SectionIcon name={section.iconName} className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <span className="text-xs sm:text-sm font-mono font-black text-emerald-400 bg-emerald-500/15 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                القسم {section.id.toString().padStart(2, '0')}
              </span>
              <span className="text-xs sm:text-sm text-slate-300 font-mono hidden sm:inline">
                {section.subtitle}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1.5 tracking-tight">
              {section.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-slate-200 bg-slate-950 px-3.5 py-2 rounded-xl border border-slate-800 font-mono">
            {section.services.length} خدمات متاحة
          </span>
        </div>
      </div>

      {/* Summary */}
      <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-7 max-w-5xl font-normal">
        {section.summary}
      </p>

      {/* Sub-services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {section.services.map((service, index) => {
          const isSelected = selectedServices.some((s) => s.serviceId === service.id);

          return (
            <div
              key={service.id}
              className={`bg-slate-950/80 border rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 group hover:shadow-xl ${
                isSelected
                  ? 'border-emerald-500/60 ring-2 ring-emerald-500/30 bg-emerald-950/15 shadow-emerald-500/5'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Top service header */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    #{section.id}.{index + 1}
                  </span>
                  {service.badge && (
                    <span className="text-xs font-bold bg-slate-900 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h4 className="text-base sm:text-lg font-black text-white group-hover:text-emerald-300 transition leading-snug mb-2.5">
                  {service.title}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Deliverables */}
                {service.deliverables && service.deliverables.length > 0 && (
                  <div className="mb-4">
                    <span className="text-xs text-slate-400 font-bold block mb-1.5">
                      المخرجات والتسليمات:
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="text-xs sm:text-sm text-slate-200 flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tools & Tech Chips */}
                {service.tools && service.tools.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4 pt-2.5 border-t border-slate-900">
                    {service.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs bg-slate-900 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-800 font-mono"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer actions */}
              <div className="pt-3.5 border-t border-slate-800/80 mt-2 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{service.duration || 'حسب المتطلبات'}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onToggleService(section, service)}
                    className={`p-2 rounded-xl border text-sm transition font-bold ${
                      isSelected
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700/80'
                    }`}
                    title={isSelected ? 'إلغاء التحديد' : 'إضافة إلى سلة الاستشارة'}
                  >
                    {isSelected ? <Check className="w-4 h-4 font-black" /> : <Plus className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => onRequestSingleService(section, service)}
                    className="px-3 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 transition flex items-center gap-1.5"
                  >
                    <span>طلب فوري</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
