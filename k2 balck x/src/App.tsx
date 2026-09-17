import React, { useState, useMemo, useEffect } from 'react';
import { SECTIONS_DATA } from './data/servicesData';
import { SectionData, ServiceItem, SelectedService } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { SectionBlock } from './components/SectionBlock';
import { InteractiveTools } from './components/InteractiveTools';
import { TrustSection } from './components/TrustSection';
import { Footer } from './components/Footer';
import { ServiceRequestModal } from './components/ServiceRequestModal';
import { QuoteDrawer } from './components/QuoteDrawer';
import { ShareModal } from './components/ShareModal';
import { ShoppingBag, Search, Sparkles, FilterX, Share2 } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSectionId, setSelectedSectionId] = useState<number | 'all'>('all');
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>(() => {
    try {
      const saved = localStorage.getItem('k2_selected_services');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [modalServices, setModalServices] = useState<SelectedService[]>([]);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('k2_selected_services', JSON.stringify(selectedServices));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [selectedServices]);

  // Handle adding/removing a service from cart
  const handleToggleService = (section: SectionData, service: ServiceItem) => {
    setSelectedServices((prev) => {
      const exists = prev.some((s) => s.serviceId === service.id);
      if (exists) {
        return prev.filter((s) => s.serviceId !== service.id);
      } else {
        return [
          ...prev,
          {
            serviceId: service.id,
            sectionId: section.id,
            sectionTitle: section.title,
            serviceTitle: service.title,
          },
        ];
      }
    });
  };

  // Handle direct single service inquiry
  const handleRequestSingleService = (section: SectionData, service: ServiceItem) => {
    setModalServices([
      {
        serviceId: service.id,
        sectionId: section.id,
        sectionTitle: section.title,
        serviceTitle: service.title,
      },
    ]);
    setIsRequestModalOpen(true);
  };

  // Open general consultation modal
  const handleOpenGeneralConsultation = () => {
    if (selectedServices.length > 0) {
      setModalServices(selectedServices);
    } else {
      setModalServices([]);
    }
    setIsRequestModalOpen(true);
  };

  // Filter sections based on category and search query
  const filteredSections = useMemo(() => {
    let list = SECTIONS_DATA;

    // Filter by selected category
    if (selectedSectionId !== 'all') {
      list = list.filter((sec) => sec.id === selectedSectionId);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list
        .map((sec) => {
          // Check section metadata match
          const matchesSec =
            sec.title.toLowerCase().includes(q) ||
            sec.subtitle.toLowerCase().includes(q) ||
            sec.summary.toLowerCase().includes(q);

          // Check sub-services match
          const matchingServices = sec.services.filter(
            (srv) =>
              srv.title.toLowerCase().includes(q) ||
              srv.description.toLowerCase().includes(q) ||
              (srv.tools && srv.tools.some((t) => t.toLowerCase().includes(q))) ||
              (srv.deliverables && srv.deliverables.some((d) => d.toLowerCase().includes(q)))
          );

          if (matchesSec) {
            return sec;
          }

          if (matchingServices.length > 0) {
            return {
              ...sec,
              services: matchingServices,
            };
          }

          return null;
        })
        .filter(Boolean) as SectionData[];
    }

    return list;
  }, [selectedSectionId, searchQuery]);

  const handleSelectSection = (id: number | 'all') => {
    setSelectedSectionId(id);
    setSearchQuery('');
    const element = document.getElementById('sections-catalog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Top Navigation */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedServices={selectedServices}
        onOpenCart={() => setIsQuoteDrawerOpen(true)}
        onOpenConsultation={handleOpenGeneralConsultation}
        onOpenShare={() => setIsShareModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onExploreClick={() => {
          const el = document.getElementById('sections-catalog');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onToolsClick={() => {
          const el = document.getElementById('interactive-tools');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onConsultationClick={handleOpenGeneralConsultation}
        onShareClick={() => setIsShareModalOpen(true)}
      />

      {/* Main Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Interactive Lab / Live Sandbox Section */}
        <InteractiveTools onSelectSection={handleSelectSection} />

        {/* Catalog Section Header & Filter */}
        <div id="sections-catalog" className="pt-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/90 pb-6">
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-sm font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 mb-2.5">
                <Sparkles className="w-4 h-4" />
                <span>الدليل الشامل للخدمات والحلول</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                أقسام K2 BlackX
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mt-2 font-normal">
                اختر أي قسم للاطلاع على تفاصيل خدماته وتسليماته وأدواته المتخصصة.
              </p>
            </div>

            {/* Quick search input if on mobile or focused */}
            <div className="md:hidden relative w-full">
              <Search className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في الخدمات (مثال: كالي، OCR، اختراق...)"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pr-10 pl-3 py-2 text-xs text-slate-100 placeholder-slate-500"
              />
            </div>
          </div>

          {/* 15 Category Filter Bar */}
          <CategoryFilter
            selectedSectionId={selectedSectionId}
            onSelectSection={setSelectedSectionId}
          />
        </div>

        {/* Sections Listing */}
        {filteredSections.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 space-y-4">
            <FilterX className="w-12 h-12 mx-auto text-slate-600" />
            <h3 className="text-lg font-bold text-white">
              لم يتم العثور على نتائج تطابق: "{searchQuery}"
            </h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              تأكد من كتابة الكلمة بشكل صحيح، أو أعد ضبط الفلاتر لتصفح جميع الأقسام الـ 15 المتاحة.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSectionId('all');
              }}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold hover:bg-emerald-400 transition"
            >
              عرض جميع الأقسام الـ 15
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            {filteredSections.map((section) => (
              <SectionBlock
                key={section.id}
                section={section}
                selectedServices={selectedServices}
                onToggleService={handleToggleService}
                onRequestSingleService={handleRequestSingleService}
              />
            ))}
          </div>
        )}

        {/* Security & Confidentiality Matrix */}
        <TrustSection />
      </main>

      {/* Floating Cart Indicator (Bottom-right on desktop & mobile) */}
      {selectedServices.length > 0 && (
        <div className="fixed bottom-6 left-6 z-40">
          <button
            id="floating-cart-badge"
            onClick={() => setIsQuoteDrawerOpen(true)}
            className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold rounded-2xl shadow-2xl shadow-emerald-500/40 border border-emerald-400/50 transition transform hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="w-5 h-5 text-slate-950" />
            <span className="text-xs">سلة الخدمات المختارة</span>
            <span className="w-6 h-6 rounded-full bg-slate-950 text-emerald-400 font-mono text-xs flex items-center justify-center font-black">
              {selectedServices.length}
            </span>
          </button>
        </div>
      )}

      {/* Quote Drawer */}
      <QuoteDrawer
        isOpen={isQuoteDrawerOpen}
        onClose={() => setIsQuoteDrawerOpen(false)}
        selectedServices={selectedServices}
        onRemoveService={(id) => {
          setSelectedServices((prev) => prev.filter((s) => s.serviceId !== id));
        }}
        onClearAll={() => setSelectedServices([])}
        onRequestQuote={() => {
          setModalServices(selectedServices);
          setIsRequestModalOpen(true);
        }}
      />

      {/* Service Request & Consultation Modal */}
      <ServiceRequestModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        servicesToRequest={modalServices}
        onClearCart={() => setSelectedServices([])}
      />

      {/* Share Website Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      {/* Footer */}
      <Footer
        onSelectSection={handleSelectSection}
        onOpenShare={() => setIsShareModalOpen(true)}
      />
    </div>
  );
}
