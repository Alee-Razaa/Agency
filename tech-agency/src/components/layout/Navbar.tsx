"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/#solutions" },
  { name: "About Us", href: "/#about" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Resources/Blog", href: "/blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 lg:px-16 py-5 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Matching Adapta Style */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white text-lg group-hover:rotate-[10deg] transition-transform duration-500">
            a
          </div>
          <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? "text-slate-900" : "text-white"}`}>
            adapta<span className="text-indigo-500">labs</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors font-sans ${
                isScrolled
                  ? (pathname === link.href ? "text-indigo-600" : "text-slate-600 hover:text-indigo-600")
                  : (pathname === link.href ? "text-white" : "text-slate-200 hover:text-white")
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/login"
            className={`text-sm font-semibold transition-colors font-sans ${
              isScrolled ? "text-slate-600 hover:text-indigo-600" : "text-slate-200 hover:text-white"
            }`}
          >
            Log in
          </Link>
          <Link
            href="/contact"
            className={`px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-indigo-200/50 hover:-translate-y-0.5 ${
              isScrolled
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-white text-indigo-600 hover:bg-slate-50"
            }`}
          >
            Start Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-[#030712] z-50 px-6 sm:px-10 pt-20 pb-6 flex flex-col animate-fadeIn overflow-y-auto">
           <button
             className="absolute top-6 right-6 sm:right-10 text-white p-2 -mr-2"
             onClick={() => setMobileMenuOpen(false)}
             aria-label="Close menu"
           >
             <X className="w-6 h-6" />
           </button>
           <div className="flex flex-col gap-2 mt-2">
            {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg sm:text-xl font-medium text-slate-400 hover:text-white transition-colors py-1.5 font-mono tracking-tight"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/5 my-3" />
              <div className="flex flex-col gap-3">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-400 hover:text-white transition-colors py-1 font-mono tracking-tight"
                >
                  Log in
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-white text-black py-3 rounded-full text-center font-semibold text-sm hover:bg-slate-200 transition-colors mt-1"
                >
                  Contact Sales
                </Link>
              </div>
           </div>
        </div>
      )}
    </nav>
  );
}
