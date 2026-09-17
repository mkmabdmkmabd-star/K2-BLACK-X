import React from 'react';
import { SelectedService } from '../types';
import { ShoppingBag, X, ArrowLeft, Trash2, Send, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/contactInfo';

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServices: SelectedService[];
  onRemoveService: (serviceId: string) => void;
  onClearAll: () => void;
  onRequestQuote: () => void;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  selectedServices,
  onRemoveService,
  onClearAll,
  onRequestQuote,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-r border-slate-800 shadow-2xl flex flex-col justify-between">
          {/* Drawer Header */}
          <div className="p-6 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">سلة الخدمات المختارة</h3>
                <p className="text-xs text-slate-400">
                  {selectedServices.length} خدمات مضافة للمشروع
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items list */}
          <div className="flex-1 overflow-y-auto p-6 space-y-3">
            {selectedServices.length === 0 ? (
              <div className="text-center py-16 text-slate-500 space-y-3">
                <ShoppingBag className="w-12 h-12 mx-auto text-slate-700" />
                <p className="text-sm">لم تقم بإضافة أي خدمات إلى السلة بعد.</p>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                  تصفح الأقسام التقنية الـ 15 واضغط على زر (+) لإضافة أي خدمة ترغب في استشارتنا بشأنها.
                </p>
              </div>
            ) : (
              selectedServices.map((item) => (
                <div
                  key={item.serviceId}
                  className="bg-slate-950/90 border border-slate-800/90 rounded-xl p-3.5 flex items-center justify-between gap-3 group hover:border-slate-700 transition"
                >
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 block mb-0.5">
                      القسم {item.sectionId}: {item.sectionTitle}
                    </span>
                    <h4 className="text-xs font-bold text-slate-200">
                      {item.serviceTitle}
                    </h4>
                  </div>
                  <button
                    onClick={() => onRemoveService(item.serviceId)}
                    className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition shrink-0"
                    title="حذف من السلة"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          {selectedServices.length > 0 && (
            <div className="p-6 border-t border-slate-800 bg-slate-950/60 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>إجمالي الخدمات المحددة:</span>
                <span className="font-bold text-white font-mono">{selectedServices.length}</span>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onRequestQuote();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition transform active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>إتمام الطلب والحصول على تسعيرة</span>
              </button>

              <a
                href={`https://api.whatsapp.com/send?phone=${CONTACT_INFO.phoneRaw}&text=${encodeURIComponent(
                  `السلام عليكم K2 BlackX، أرغب بالاستفسار والتسعير للخدمات التالية:\n` +
                  selectedServices.map((s, idx) => `${idx + 1}. [القسم ${s.sectionId}: ${s.sectionTitle}] ${s.serviceTitle}`).join('\n')
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2 transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
                <span>إرسال السلة مباشرة إلى واتساب</span>
              </a>

              <button
                onClick={onClearAll}
                className="w-full py-2 text-xs text-slate-500 hover:text-red-400 transition"
              >
                تفريغ كافة العناصر
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
