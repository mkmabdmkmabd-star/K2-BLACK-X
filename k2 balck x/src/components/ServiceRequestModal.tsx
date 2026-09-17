import React, { useState } from 'react';
import { SelectedService } from '../types';
import { X, Send, Copy, Check, Shield, AlertCircle, MessageSquare, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/contactInfo';

interface ServiceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  servicesToRequest: SelectedService[];
  onClearCart?: () => void;
}

export const ServiceRequestModal: React.FC<ServiceRequestModalProps> = ({
  isOpen,
  onClose,
  servicesToRequest,
  onClearCart,
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [urgency, setUrgency] = useState<'normal' | 'urgent' | 'critical'>('normal');
  const [details, setDetails] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const getUrgencyText = (level: string) => {
    switch (level) {
      case 'critical':
        return 'طارئ جداً (حالة اختراق / استجابة أمنية فورية)';
      case 'urgent':
        return 'عاجل (خلال 24-48 ساعة)';
      default:
        return 'قياسي / استشارة مجدولة';
    }
  };

  const generateMessageBody = () => {
    const servicesList = servicesToRequest
      .map((s, idx) => `${idx + 1}. [القسم ${s.sectionId}: ${s.sectionTitle}] - ${s.serviceTitle}`)
      .join('\n');

    return `مرحباً فريق K2 BlackX للخدمات والحلول التقنية،
أرغب في الاستفسار وطلب الخدمات التقنية التالية:

${servicesList}

الاسم / الجهة: ${name || 'عميل كريم'}
رقم التواصل: ${contact || 'غير محدد'}
درجة الأولوية: ${getUrgencyText(urgency)}
تفاصيل إضافية / متطلبات:
${details || 'لا توجد ملاحظات إضافية'}

يرجى تزويدي بالخطة الزمنية والتكلفة التقديرية. شكراً لكم.`;
  };

  const handleCopy = () => {
    const text = generateMessageBody();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(generateMessageBody());
    // Direct WhatsApp API link targeting the official phone number
    window.open(`https://api.whatsapp.com/send?phone=${CONTACT_INFO.phoneRaw}&text=${text}`, '_blank');
    setSubmitted(true);
    if (onClearCart) onClearCart();
  };

  const handleTelegram = () => {
    const text = encodeURIComponent(generateMessageBody());
    window.open(`https://t.me/share/url?url=${encodeURIComponent('https://k2blackx.tech')}&text=${text}`, '_blank');
    setSubmitted(true);
    if (onClearCart) onClearCart();
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onClearCart) onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                طلب تنفيذ واستشارة تقنية معتمدة
              </h3>
              <p className="text-xs text-slate-400">
                K2 BlackX • ضمان السرية وعدم الإفشاء لجميع البيانات
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

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">تم استلام طلبكم بنجاح!</h4>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              تم توجيه بيانات الاستشارة لفريق المهندسين والمختصين في K2 BlackX. يمكنك أيضاً التحدث معنا مباشرة وفوراً عبر واتساب أو متابعة حساباتنا الرسمية.
            </p>

            {/* Direct WhatsApp Callout */}
            <div className="py-2 flex flex-col items-center gap-3">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/20 transition"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>متابعة المحادثة عبر واتساب</span>
              </a>
            </div>

            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-200 hover:bg-slate-700 transition"
              >
                العودة للصفحة الرئيسية
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleDirectSubmit} className="p-6 space-y-5">
            {/* Selected services recap */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-2">
                الخدمات المطلوبة ({servicesToRequest.length}):
              </label>
              <div className="max-h-36 overflow-y-auto bg-slate-950 border border-slate-800 rounded-xl p-3 space-y-2">
                {servicesToRequest.length === 0 ? (
                  <p className="text-xs text-amber-400 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    لم تقم بتحديد أي خدمة محددة بعد، يمكنك كتابة استفسارك العام أدناه.
                  </p>
                ) : (
                  servicesToRequest.map((s, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs py-1 border-b border-slate-900 last:border-0"
                    >
                      <span className="text-slate-200 font-medium">
                        {idx + 1}. {s.serviceTitle}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {s.sectionTitle}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Inputs: Name & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  الاسم الكامل أو اسم المنشأة / المشروع *
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="مثال: المهندس أحمد / شركة التقنية"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  رقم الهاتف أو الواتساب أو معرف تليغرام *
                </label>
                <input
                  required
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="مثال: +966 5X XXX XXXX أو @username"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono transition"
                />
              </div>
            </div>

            {/* Urgency */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                مستوى الاستعجال وطبيعة الحالة
              </label>
              <div className="grid grid-cols-3 gap-2.5 text-xs">
                <button
                  type="button"
                  onClick={() => setUrgency('normal')}
                  className={`p-2.5 rounded-xl border text-center transition ${
                    urgency === 'normal'
                      ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  استفسار قياسي
                </button>
                <button
                  type="button"
                  onClick={() => setUrgency('urgent')}
                  className={`p-2.5 rounded-xl border text-center transition ${
                    urgency === 'urgent'
                      ? 'bg-amber-500/15 border-amber-500/40 text-amber-300 font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  عاجل (خلال يومين)
                </button>
                <button
                  type="button"
                  onClick={() => setUrgency('critical')}
                  className={`p-2.5 rounded-xl border text-center transition ${
                    urgency === 'critical'
                      ? 'bg-rose-500/15 border-rose-500/40 text-rose-300 font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  طارئ جداً (أمني)
                </button>
              </div>
            </div>

            {/* Detailed Description */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                تفاصيل المتطلبات، نوع النظام، أو الملفات المراد فحصها
              </label>
              <textarea
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="أذكر أي تفاصيل تقنية (مثل: نوع نظام التشغيل، رابط الموقع المراد فحصه، حجم البيانات، لغات البرمجة المطلوبة...)"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition resize-none"
              />
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-md shadow-emerald-600/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>إرسال عبر WhatsApp فوراً</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="p-2.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-300 transition"
                  title="نسخ صيغة الطلب للحافظة"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold border border-slate-700 transition"
              >
                <Send className="w-3.5 h-3.5" />
                <span>إرسال الطلب وحفظ التذكرة</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
