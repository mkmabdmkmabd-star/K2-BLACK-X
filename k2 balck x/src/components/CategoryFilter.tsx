import React from 'react';
import { SECTIONS_DATA } from '../data/servicesData';
import { SectionIcon } from './SectionIcon';
import { Layers, CheckCircle2, ChevronLeft } from 'lucide-react';

interface CategoryFilterProps {
  selectedSectionId: number | 'all';
  onSelectSection: (id: number | 'all') => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedSectionId,
  onSelectSection,
}) => {
  return (
    <div className="w-full space-y-6">
      {/* Top Header & Reset Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="text-base sm:text-lg font-black text-white">
              أقسام المنظومة الـ 15 المتخصصة
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              اضغط على أي قسم لعرض خدماته فوراً، أو اختر كافة الأقسام
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            id="filter-all-sections"
            onClick={() => onSelectSection('all')}
            className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm sm:text-base font-black transition-all ${
              selectedSectionId === 'all'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30 ring-2 ring-emerald-400'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>عرض كافة الأقسام (15)</span>
          </button>
        </div>
      </div>

      {/* Grid of 15 Enriched, Spacious Section Boxes Fitting the Page */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4.5 w-full">
        {SECTIONS_DATA.map((section) => {
          const isSelected = selectedSectionId === section.id;

          return (
            <button
              key={section.id}
              id={`filter-section-${section.id}`}
              onClick={() => onSelectSection(section.id)}
              className={`group relative p-4 sm:p-5 rounded-2xl text-right transition-all duration-300 flex flex-col justify-between min-h-[160px] sm:min-h-[175px] border-2 shadow-lg ${
                isSelected
                  ? 'bg-slate-900 border-emerald-400 shadow-emerald-500/20 ring-2 ring-emerald-500/40 translate-y-[-2px]'
                  : 'bg-slate-900/70 hover:bg-slate-900 border-slate-800 hover:border-emerald-500/50 hover:shadow-xl hover:translate-y-[-2px]'
              }`}
            >
              {/* Top Row: Section Number & Icon */}
              <div className="w-full flex items-center justify-between mb-3">
                <span
                  className={`w-9 h-9 rounded-xl font-mono text-sm font-black flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
                      : 'bg-slate-950 border border-slate-800 text-emerald-400 group-hover:border-emerald-500/40'
                  }`}
                >
                  {section.id.toString().padStart(2, '0')}
                </span>

                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50'
                      : 'bg-slate-950/80 text-emerald-400/90 border border-slate-800 group-hover:text-emerald-300 group-hover:border-emerald-500/30'
                  }`}
                >
                  <SectionIcon name={section.iconName} className="w-5 h-5" />
                </div>
              </div>

              {/* Middle: Title & Subtitle */}
              <div className="my-auto py-1">
                <h3
                  className={`text-base sm:text-lg font-black leading-snug transition-colors ${
                    isSelected
                      ? 'text-emerald-300'
                      : 'text-white group-hover:text-emerald-300'
                  }`}
                >
                  {section.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-1 font-mono">
                  {section.subtitle}
                </p>
              </div>

              {/* Bottom Row: Service Count and Status */}
              <div className="w-full pt-3 mt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-300 bg-slate-950/90 px-2.5 py-1 rounded-md border border-slate-800 font-mono">
                  {section.services.length} خدمات
                </span>

                {isSelected ? (
                  <span className="flex items-center gap-1 text-emerald-400 font-bold">
                    <span>محدد</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                ) : (
                  <span className="flex items-center gap-0.5 text-slate-500 group-hover:text-emerald-400 transition font-medium">
                    <span>تصفح</span>
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
