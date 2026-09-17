import React, { useState } from 'react';
import { Search, Terminal, ShoppingBag, PhoneCall, Menu, X, Share2 } from 'lucide-react';
import { SelectedService } from '../types';
import { K2Logo } from './K2Logo';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedServices: SelectedService[];
  onOpenCart: () => void;
  onOpenConsultation: () => void;
  onOpenShare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  setSearchQuery,
  selectedServices,
  onOpenCart,
  onOpenConsultation,
  onOpenShare,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 gap-4">
          {/* Right-aligned Master Group: Brand Identity + Main Navigation Links */}
          <div className="flex items-center gap-6 lg:gap-8 shrink-0">
            {/* Brand Identity */}
            <div className="flex items-center gap-3.5 shrink-0">
              {/* Official K2 BlackX Original Logo Emblem */}
              <K2Logo size="lg" className="shadow-amber-500/15" />

              <a href="#" className="flex flex-col group text-right">
                <div className="flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl font-black tracking-wider text-white font-mono group-hover:text-amber-300 transition">
                    K2 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">BlackX</span>
                  </span>
                  <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full font-mono font-bold">
                    OFFICIAL
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-slate-300 font-semibold tracking-tight mt-0.5">
                  الخدمات والحلول التقنية والسيبرانية المتكاملة
                </span>
              </a>
            </div>

            {/* Main Navigation Menu Links - Right Aligned Next to Brand */}
            <nav className="hidden lg:flex items-center gap-5 sm:gap-6 text-sm sm:text-base font-bold text-slate-200">
              <a
                href="#sections-catalog"
                className="hover:text-emerald-400 transition py-1.5 px-2 rounded-lg hover:bg-slate-900/60"
              >
                الأقسام التقنية
              </a>
              <a
                href="#interactive-tools"
                className="hover:text-emerald-400 transition flex items-center gap-2 py-1.5 px-2 rounded-lg hover:bg-slate-900/60"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>المعمل التفاعلي</span>
              </a>
              <a
                href="#why-k2"
                className="hover:text-emerald-400 transition py-1.5 px-2 rounded-lg hover:bg-slate-900/60"
              >
                ضمانات السرية
              </a>
            </nav>
          </div>

          {/* Left-aligned Group: Search bar + Utilities & Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Search bar */}
            <div className="hidden xl:flex relative w-56 lg:w-72">
              <Search className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="nav-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="بحث سريع في الـ 15 قسماً..."
                className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl pr-10 pl-8 py-2 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 text-sm text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Share button */}
            <button
              id="open-share-modal-nav"
              onClick={onOpenShare}
              className="flex items-center gap-2 px-3.5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-xl text-slate-100 text-sm font-bold transition shadow-sm"
              title="مشاركة رابط الموقع مع الآخرين"
            >
              <Share2 className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">مشاركة</span>
            </button>

            {/* Cart / Selected services trigger */}
            <button
              id="open-quote-drawer"
              onClick={onOpenCart}
              className="relative p-3 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-xl text-slate-100 transition shadow-sm"
              title="سلة الخدمات المختارة"
            >
              <ShoppingBag className="w-5 h-5 text-emerald-400" />
              {selectedServices.length > 0 && (
                <span className="absolute -top-2 -left-2 w-6 h-6 bg-emerald-500 text-slate-950 text-xs font-black rounded-full flex items-center justify-center animate-pulse shadow-md">
                  {selectedServices.length}
                </span>
              )}
            </button>

            {/* Quick Consultation CTA */}
            <button
              id="nav-consultation-btn"
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm sm:text-base font-black bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 rounded-xl shadow-lg shadow-emerald-500/20 transition transform active:scale-95"
            >
              <PhoneCall className="w-4 h-4" />
              <span>طلب استشارة فورية</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-slate-300 hover:text-white rounded-xl bg-slate-900 border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile search & menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 py-5 space-y-4 text-right">
            <div className="relative">
              <Search className="w-5 h-5 absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث بين 15 قسماً والخدمات التقنية..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pr-11 pl-4 py-3 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-500 text-right"
              />
            </div>

            <div className="flex flex-col gap-2 text-base font-bold text-slate-200 pt-2">
              <a
                href="#sections-catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 hover:bg-slate-900 rounded-xl text-right"
              >
                الأقسام التقنية
              </a>
              <a
                href="#interactive-tools"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 hover:bg-slate-900 rounded-xl flex items-center justify-end gap-2 text-right"
              >
                <span>المعمل التفاعلي وأدوات الفحص الميداني</span>
                <Terminal className="w-4 h-4 text-cyan-400" />
              </a>
              <a
                href="#why-k2"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 hover:bg-slate-900 rounded-xl text-right"
              >
                معايير الأمان والسرية
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenShare();
                }}
                className="w-full mt-2 py-3 text-sm font-bold bg-slate-900 border border-slate-800 text-emerald-400 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800"
              >
                <Share2 className="w-4 h-4" />
                <span>مشاركة رابط الموقع</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 text-base font-black bg-emerald-500 text-slate-950 rounded-xl flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5" />
                <span>طلب استشارة أو مشروع</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
