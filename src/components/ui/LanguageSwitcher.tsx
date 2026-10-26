"use client";

import React from "react";
import { useTranslation, Locale } from "@/context/LanguageContext";

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="flex items-center rounded-full bg-night-surface/80 p-1 border border-space-border backdrop-blur-md">
      <button
        type="button"
        onClick={() => setLocale("fr")}
        className={`px-2.5 py-1 text-xs font-mono font-medium rounded-full transition-all duration-200 ${
          locale === "fr"
            ? "bg-cyan-glow/20 text-cyan-glow border border-cyan-glow/40 shadow-cyan-glow"
            : "text-cold-muted hover:text-cold-white"
        }`}
        aria-label="Passer en Français"
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`px-2.5 py-1 text-xs font-mono font-medium rounded-full transition-all duration-200 ${
          locale === "en"
            ? "bg-violet-glow/20 text-violet-glow border border-violet-glow/40 shadow-violet-glow"
            : "text-cold-muted hover:text-cold-white"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
