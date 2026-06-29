"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  Star,
  Clock,
  ArrowRight,
  Zap,
  Layout,
  Globe,
  Database,
  Search,
  Bot
} from "lucide-react";

import { OFFERS_DATA, Offer } from "@/src/constants/offers";
import Link from "next/link";

/**
 * COMPONENTS
 */

const CardGallery = ({ images }: { images: string[] }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-56 overflow-hidden bg-slate-800 rounded-t-2xl">
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
          />
        </div>
      ))}
      <div className="absolute bottom-4 right-4 z-20 flex gap-1.5 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIdx ? "w-4 h-1.5 bg-blue-500" : "w-1.5 h-1.5 bg-white/40"
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % OFFERS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + OFFERS_DATA.length) % OFFERS_DATA.length);
  };

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

  // Logic to show 3 cards at a time (simplified for loop)
  const getVisibleOffers = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(OFFERS_DATA[(currentIndex + i) % OFFERS_DATA.length]);
    }
    return items;
  };

  return (
    <section className="relative py-28 px-6 lg:px-16 bg-[#030712] overflow-hidden">
      {/* Mesh Gradients */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Ecosystem Capabilities
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              High-performance offers. <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-200 to-emerald-400 bg-clip-text text-transparent">
                Engineered for absolute scale.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {getVisibleOffers().map((offer, idx) => (
            <div
              key={`${offer.id}-${idx}`}
              className="group bg-slate-900/40 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 rounded-2xl flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden"
            >
              <CardGallery images={offer.images} />

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                    {offer.shortDesc}
                  </p>
                </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Investment</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-white">${offer.price}</span>
                      <span className="text-xs text-slate-500 font-medium">Starting</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/services/${offer.slug}`}
                      className="bg-white/5 hover:bg-white/10 text-white p-3 rounded-xl transition-all border border-white/10 group/eye"
                      title="Deep Dive"
                    >
                      <Globe className="w-4 h-4 text-slate-400 group-hover/eye:text-blue-400" />
                    </Link>
                    <button
                      onClick={() => openModal(offer)}
                      className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-5 py-3 rounded-xl transition-all flex items-center gap-2 group/btn"
                    >
                      Details
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL POPUP --- */}
      {selectedOffer && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="bg-slate-900 border border-white/10 w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl relative grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Left: Content */}
            <div className="lg:col-span-7 p-8 md:p-12 overflow-y-auto custom-scrollbar space-y-10 border-b lg:border-b-0 lg:border-r border-white/5">
              <button
                onClick={closeModal}
                className="absolute top-6 left-6 lg:hidden w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <div className="inline-block bg-blue-500/10 text-blue-400 text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-md mb-4 border border-blue-500/20">
                  Detailed Scope
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                  {selectedOffer.title}
                </h3>
                <p className="text-sm font-bold text-blue-400 italic">
                  &ldquo;{selectedOffer.tagline}&rdquo;
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 shadow-inner">
                <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                  {selectedOffer.longDesc}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    Base Deliverables
                  </h4>
                  <ul className="space-y-4">
                    {selectedOffer.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                          <Check className="w-3 h-3 text-emerald-400" strokeWidth={3} />
                        </div>
                        <span className="text-xs font-medium text-slate-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6 opacity-60">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full" />
                    Strategic Upgrades
                  </h4>
                  <ul className="space-y-4">
                    {selectedOffer.exclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                          <X className="w-3 h-3 text-slate-500" strokeWidth={3} />
                        </div>
                        <span className="text-xs font-medium text-slate-500 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6 pt-4">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Production Sprint Path
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedOffer.workflow.map((step, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex gap-4 items-start hover:bg-white/[0.07] transition-colors">
                        <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded-lg border border-blue-500/20">
                          0{idx+1}
                        </span>
                        <span className="text-xs text-slate-300 font-semibold leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
              </div>
            </div>

            {/* Modal Right: Configuration */}
            <div className="lg:col-span-5 p-8 md:p-12 bg-slate-950/50 flex flex-col h-full overflow-y-auto custom-scrollbar">
              <div className="flex-1">
                <div className="flex justify-between items-center pb-6 border-b border-white/10 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Configure Add-ons
                  </h4>
                  <button
                    onClick={closeModal}
                    className="hidden lg:flex w-10 h-10 bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl items-center justify-center transition-all"
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
                            ? 'bg-blue-600/10 border-blue-500/50 text-white shadow-[0_0_20px_rgba(59,130,246,0.1)]'
                            : 'bg-white/5 border-white/5 text-slate-400 hover:border-white/10 hover:bg-white/[0.07]'}
                        `}
                      >
                        <div className={`
                          w-5 h-5 rounded-lg mt-0.5 border flex items-center justify-center shrink-0
                          ${isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'border-white/20 bg-slate-900'}
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
                        <span className="text-sm font-bold text-blue-400">+${addon.price}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Live Summary Board */}
              <div className="mt-12 pt-8 border-t border-white/10 space-y-6">
                <div className="flex justify-between items-center px-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Total Investment</span>
                    <span className="text-4xl font-bold text-white tracking-tight">${calculateTotal().price}</span>
                  </div>
                  <div className="text-right flex flex-col">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Delivery Time</span>
                    <span className="text-sm font-bold text-blue-400">{calculateTotal().days} Days</span>
                  </div>
                </div>

                <a
                  href={selectedOffer.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-6 rounded-2xl transition-all shadow-xl shadow-blue-600/20 text-center block tracking-wide group"
                >
                  Confirm Order via PeoplePerHour
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
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
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
