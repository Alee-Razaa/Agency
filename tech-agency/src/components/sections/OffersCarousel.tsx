"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  Star,
  ArrowRight,
  Globe,
  Zap
} from "lucide-react";

import { OFFERS_DATA, Offer } from "@/src/constants/offers";
import Link from "next/link";

const CardGallery = ({ images }: { images: string[] }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-32 sm:h-36 md:h-40 xl:h-48 overflow-hidden bg-slate-800 rounded-t-2xl">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIdx ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={img}
            alt="Offer Preview"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ))}
      <div className="absolute bottom-2 right-2 z-20 flex gap-1 bg-slate-900/60 backdrop-blur-md px-1.5 py-0.5 rounded-full border border-white/10">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIdx ? "w-2.5 h-1 bg-blue-500" : "w-1 h-1 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export function OffersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [activeAddons, setActiveAddons] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % OFFERS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + OFFERS_DATA.length) % OFFERS_DATA.length);
  };

  const getVisibleCount = () => {
    if (!mounted) return 3;
    if (windowWidth < 768) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };

  const visibleOffers = [];
  const count = getVisibleCount();
  for (let i = 0; i < count; i++) {
    visibleOffers.push(OFFERS_DATA[(currentIndex + i) % OFFERS_DATA.length]);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const openModal = (offer: Offer) => {
    setSelectedOffer(offer);
    setActiveAddons([]);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedOffer(null);
    document.body.style.overflow = "auto";
  };

  const toggleAddon = (index: number) => {
    setActiveAddons((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const calculateTotal = () => {
    if (!selectedOffer) return { price: 0, days: 0 };
    let price = selectedOffer.price;
    let days = selectedOffer.deliveryDays;
    activeAddons.forEach((idx) => {
      price += selectedOffer.addOns[idx].price;
      days += selectedOffer.addOns[idx].days;
    });
    return { price, days: Math.max(1, days) };
  };

  return (
<section id="services" className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-16 bg-slate-950 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1920px] mx-auto relative z-10">
        <div className="text-center mb-6 sm:mb-8 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-2.5 sm:px-3 py-1 rounded-full text-[8px] sm:text-[9px] font-bold tracking-widest uppercase">
            <span className="w-1 h-1 rounded-full bg-indigo-500 animate-pulse"></span>
            Ecosystem Capabilities
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
            High-performance offers. <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Engineered for absolute scale.
            </span>
          </h2>
        </div>

        <div className="relative group/carousel">
          {/* Navigation Arrows - Centered Vertically on Sides */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 sm:left-[-20px] lg:left-[-40px] top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-slate-800 bg-slate-900/80 backdrop-blur-md hover:border-indigo-500/50 text-slate-400 flex items-center justify-center transition-all shadow-md hover:shadow-indigo-500/20"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-2 sm:right-[-20px] lg:right-[-40px] top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-slate-800 bg-slate-900/80 backdrop-blur-md hover:border-indigo-500/50 text-slate-400 flex items-center justify-center transition-all shadow-md hover:shadow-indigo-500/20"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 xl:gap-6 px-2 sm:px-0">
            {visibleOffers.map((offer, idx) => (
              <div
                key={`${offer.id}-${idx}`}
                className="group bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 rounded-2xl flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
              >
                <CardGallery images={offer.images} />

                <div className="p-4 sm:p-5 xl:p-6 flex-1 flex flex-col">
                  <div className="flex-1 space-y-2.5">
                    <h3 className="text-base xl:text-lg font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                      {offer.title}
                    </h3>
                    <p className="text-[12px] text-slate-400 leading-relaxed line-clamp-2">
                      {offer.shortDesc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[8px] text-slate-500 uppercase font-bold tracking-widest mb-0.5">Investment</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-white">${offer.price}</span>
                        <span className="text-[9px] text-slate-500 font-medium">Starting</span>
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      <Link
                        href={`/services/${offer.slug}`}
                        className="bg-slate-800 hover:bg-slate-700 text-slate-300 p-2 rounded-lg transition-all border border-slate-700"
                      >
                        <Globe className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        onClick={() => openModal(offer)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white text-[10px] font-bold px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5"
                      >
                        Details
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- MODAL POPUP --- */}
      {selectedOffer && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-xl flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-8 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="bg-slate-900 border border-slate-800 w-full max-w-5xl rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl relative grid grid-cols-1 lg:grid-cols-12 max-h-[95vh] sm:max-h-[90vh] animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lg:col-span-7 p-5 sm:p-8 md:p-12 overflow-y-auto custom-scrollbar space-y-6 sm:space-y-10 border-b lg:border-b-0 lg:border-r border-slate-800">
              <button
                onClick={closeModal}
                className="absolute top-6 left-6 lg:hidden w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <div className="inline-block bg-slate-800 text-slate-300 text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-md mb-4">
                  Detailed Scope
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                  {selectedOffer.title}
                </h3>
                <p className="text-sm font-bold text-indigo-400 italic">
                  &ldquo;{selectedOffer.tagline}&rdquo;
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 shadow-inner">
                <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                  {selectedOffer.longDesc}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    Base Deliverables
                  </h4>
                  <ul className="space-y-4">
                    {selectedOffer.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-emerald-400" strokeWidth={3} />
                        </div>
                        <span className="text-xs font-medium text-slate-400 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6 opacity-60">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                    <div className="w-2 h-2 bg-slate-600 rounded-full" />
                    Strategic Upgrades
                  </h4>
                  <ul className="space-y-4">
                    {selectedOffer.exclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                          <X className="w-3 h-3 text-slate-500" strokeWidth={3} />
                        </div>
                        <span className="text-xs font-medium text-slate-500 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full" />
                  Pre-Requisites
                </h4>
                <ul className="space-y-3">
                  {selectedOffer.requirements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500/40 shrink-0" />
                      <span className="text-xs font-medium text-slate-400 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Production Sprint Path
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedOffer.workflow.map((step, idx) => (
                    <div key={idx} className="bg-slate-800 border border-slate-700 p-5 rounded-2xl flex gap-4 items-start hover:bg-slate-700/50 transition-colors shadow-sm">
                      <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-lg border border-indigo-500/20">
                        0{idx+1}
                      </span>
                      <span className="text-xs text-slate-300 font-semibold leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-5 sm:p-8 md:p-12 bg-slate-900/50 flex flex-col h-full overflow-y-auto custom-scrollbar">
              <div className="flex-1">
                <div className="flex justify-between items-center pb-6 border-b border-slate-800 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Configure Add-ons
                  </h4>
                  <button
                    onClick={closeModal}
                    className="hidden lg:flex w-10 h-10 bg-slate-800 border border-slate-700 text-slate-500 hover:text-white rounded-xl items-center justify-center transition-all shadow-sm"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  {selectedOffer.addOns.map((addon, idx) => {
                    const isSelected = activeAddons.includes(idx);
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleAddon(idx)}
                        className={`
                          p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 select-none
                          ${isSelected
                            ? 'bg-indigo-500/10 border-indigo-500 text-white shadow-sm'
                            : 'bg-slate-800 border-slate-700 text-slate-500 hover:border-slate-600'}
                        `}
                      >
                        <div className={`
                          w-5 h-5 rounded-lg mt-0.5 border flex items-center justify-center shrink-0
                          ${isSelected ? 'bg-indigo-500 border-indigo-500 text-white' : 'border-slate-600 bg-slate-900'}
                        `}>
                          {isSelected && <Check className="w-3.5 h-3.5" strokeWidth={4} />}
                        </div>
                        <div className="flex-1">
                          <p className={`text-xs font-bold mb-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                            {addon.title}
                          </p>
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                            {addon.days === 0 ? "Instant" : addon.days > 0 ? `+${addon.days} Business Days` : `${addon.days} Business Days`}
                          </p>
                        </div>
                        <span className="text-sm font-bold text-indigo-400">+${addon.price}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800 space-y-4 sm:space-y-6">
                <div className="flex justify-between items-center px-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Total Investment</span>
                    <span className="text-3xl sm:text-4xl font-bold text-indigo-400 tracking-tight">${calculateTotal().price}</span>
                  </div>
                  <div className="text-right flex flex-col">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Delivery Time</span>
                    <span className="text-sm font-bold text-slate-300">{calculateTotal().days} Days</span>
                  </div>
                </div>

                <a
                  href={selectedOffer.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-5 px-6 rounded-2xl transition-all shadow-xl shadow-indigo-600/20 text-center block tracking-wide group"
                >
                  Confirm Order
                  <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="flex justify-between text-[10px] text-slate-500 font-bold tracking-widest uppercase px-2">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    99.8% Success Rate
                  </div>
                  <span>{selectedOffer.views} Active Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}
