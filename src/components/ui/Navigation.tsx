"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "@/context/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X, Terminal, Sparkles, FileDown } from "lucide-react";

export function Navigation() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#datalab", label: t.nav.datalab },
    { href: "#journey", label: t.nav.journey },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-space-black/85 backdrop-blur-lg border-b border-space-border py-3 shadow-glass"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Naelle Noutong Nangmo Portfolio"
          >
            <div className="relative w-10 h-10 rounded-xl bg-night-surface border border-cyan-glow/40 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-cyan-glow group-hover:shadow-cyan-glow">
              <span className="font-heading font-bold text-base bg-gradient-to-br from-cyan-glow via-cold-white to-violet-glow bg-clip-text text-transparent">
                NN
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-glow/10 to-violet-glow/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-sm font-semibold tracking-wider text-cold-white group-hover:text-cyan-glow transition-colors">
                NAELLE NOUTONG
              </span>
              <span className="text-[10px] font-mono text-cyan-glow/80 tracking-widest uppercase">
                BEYOND THE INTERFACE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs lg:text-sm font-body text-cold-muted hover:text-cold-white transition-colors rounded-lg hover:bg-night-surface/50 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions: Language Switcher + CV + GitHub */}
          <div className="hidden md:flex items-center gap-2.5">
            <LanguageSwitcher />
            <a
              href="/cv-naelle-noutong.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-mono rounded-lg bg-violet-subtle border border-violet-glow/30 text-violet-glow hover:bg-violet-glow/20 transition-all duration-200 flex items-center gap-1.5"
              download="CV_Naelle_Noutong_Nangmo.pdf"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
            <a
              href="https://github.com/NaelleNangmo/NaelleNangmo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-mono rounded-lg bg-cyan-subtle border border-cyan-glow/30 text-cyan-glow hover:bg-cyan-glow/20 transition-all duration-200 flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-night-surface border border-space-border text-cold-white hover:text-cyan-glow"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-space-dark/95 border-b border-space-border backdrop-blur-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-cold-white hover:bg-night-surface hover:text-cyan-glow transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-space-border/50 flex flex-wrap items-center gap-2">
              <a
                href="/cv-naelle-noutong.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-mono rounded-lg bg-violet-subtle border border-violet-glow/30 text-violet-glow inline-flex items-center gap-1.5"
                download="CV_Naelle_Noutong_Nangmo.pdf"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>{t.hero.downloadResume}</span>
              </a>
              <a
                href="https://github.com/NaelleNangmo/NaelleNangmo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-mono rounded-lg bg-cyan-subtle border border-cyan-glow/30 text-cyan-glow inline-flex items-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/naelle-nangmo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-mono rounded-lg bg-night-surface border border-space-border text-cold-muted hover:text-cold-white inline-flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
