"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowDown, Github, Linkedin, Sparkles, Terminal, ChevronRight, FileDown } from "lucide-react";

// Dynamic import with SSR disabled for 3D HeroScene
const HeroScene = dynamic(() => import("../3d/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[450px] sm:h-[520px] lg:h-[620px] flex items-center justify-center">
      <div className="relative w-48 h-48 rounded-full border border-cyan-glow/20 flex items-center justify-center animate-pulse">
        <div className="w-24 h-24 rounded-full border border-violet-glow/40 animate-spin-slow" />
      </div>
    </div>
  ),
});

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-glow/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-violet-glow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-night-surface/90 border border-cyan-glow/40 shadow-cyan-glow backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-glow animate-ping" />
              <span className="text-xs font-mono font-medium text-cyan-glow tracking-wide">
                {t.hero.status}
              </span>
            </div>

            {/* Greeting */}
            <span className="text-sm sm:text-base font-mono text-violet-glow tracking-widest uppercase mb-2">
              {t.hero.greeting}
            </span>

            {/* Full Name */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-cold-white mb-4">
              <span className="bg-gradient-to-r from-cold-white via-cyan-glow to-violet-glow bg-clip-text text-transparent">
                Naelle Noutong Nangmo
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl font-heading font-semibold text-cyan-glow tracking-wide mb-3">
              &ldquo;{t.hero.tagline}&rdquo;
            </p>

            {/* Official GitHub Profile Subtitle */}
            <p className="text-xs sm:text-sm font-mono text-cold-muted mb-4">
              {t.hero.roleTitle}
            </p>

            {/* Positioning Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-lg text-xs font-mono bg-night-surface border border-space-border text-cold-white">
                Full Stack Development
              </span>
              <span className="text-cyan-glow">·</span>
              <span className="px-3 py-1 rounded-lg text-xs font-mono bg-night-surface border border-space-border text-cold-white">
                Data Engineering
              </span>
              <span className="text-cyan-glow">·</span>
              <span className="px-3 py-1 rounded-lg text-xs font-mono bg-night-surface border border-space-border text-cold-white">
                Cloud & DevOps
              </span>
            </div>

            {/* Concise Bio */}
            <p className="text-sm sm:text-base text-cold-muted leading-relaxed max-w-xl mb-8">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-glow text-space-black font-semibold text-sm hover:bg-cyan-glow/90 shadow-cyan-glow transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>{t.hero.ctaProjects}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-night-surface hover:bg-night-surface/80 border border-space-border text-cold-white font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>{t.hero.ctaContact}</span>
              </a>

              <a
                href="/cv-naelle-noutong.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-violet-glow/15 hover:bg-violet-glow/25 border border-violet-glow/40 text-violet-glow font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 group"
                download="CV_Naelle_Noutong_Nangmo.pdf"
              >
                <FileDown className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>{t.hero.ctaResume}</span>
              </a>

              <div className="flex items-center gap-2 pt-2 sm:pt-0">
                <a
                  href="https://github.com/NaelleNangmo/NaelleNangmo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-night-surface border border-space-border text-cold-muted hover:text-cyan-glow hover:border-cyan-glow/40 transition-colors"
                  aria-label="GitHub de Naelle Nangmo"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/naelle-nangmo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-night-surface border border-space-border text-cold-muted hover:text-violet-glow hover:border-violet-glow/40 transition-colors"
                  aria-label="LinkedIn de Naelle Nangmo"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Scene */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-cold-dim hover:text-cyan-glow transition-colors group"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase">
              {t.hero.scrollDown}
            </span>
            <div className="w-6 h-10 rounded-full border border-space-border flex items-start justify-center p-1.5 group-hover:border-cyan-glow/50 transition-colors">
              <div className="w-1.5 h-2 rounded-full bg-cyan-glow animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
