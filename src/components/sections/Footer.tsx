"use client";

import React from "react";
import { useTranslation } from "@/context/LanguageContext";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-space-border bg-space-black/90 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-space-border/50">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-night-surface border border-cyan-glow/40 flex items-center justify-center">
                <span className="font-heading font-bold text-xs bg-gradient-to-r from-cyan-glow to-violet-glow bg-clip-text text-transparent">
                  NN
                </span>
              </div>
              <span className="font-heading font-bold text-sm tracking-wider text-cold-white">
                NAELLE NOUTONG NANGMO
              </span>
            </div>
            <p className="text-xs font-mono text-cyan-glow/80">
              {t.footer.tagline}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/NaelleNangmo/NaelleNangmo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-night-surface border border-space-border text-cold-muted hover:text-cyan-glow hover:border-cyan-glow/40 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/naelle-nangmo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-night-surface border border-space-border text-cold-muted hover:text-violet-glow hover:border-violet-glow/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:naellenangmo@gmail.com"
              className="p-2.5 rounded-xl bg-night-surface border border-space-border text-cold-muted hover:text-cyan-glow hover:border-cyan-glow/40 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-night-surface border border-space-border text-cold-muted hover:text-cold-white hover:border-cyan-glow/40 transition-colors"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 text-xs font-mono text-cold-dim">
          <span>&copy; {new Date().getFullYear()} Naelle Noutong Nangmo.</span>
          <span>{t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
