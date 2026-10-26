"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import frTranslations from "../i18n/fr.json";
import enTranslations from "../i18n/en.json";

export type Locale = "fr" | "en";
export type TranslationType = typeof frTranslations;

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: TranslationType;
}

const translations: Record<Locale, TranslationType> = {
  fr: frTranslations,
  en: enTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  defaultLocale = "fr",
}: {
  children: React.ReactNode;
  defaultLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("preferred-locale") as Locale | null;
      if (saved && (saved === "fr" || saved === "en")) {
        setLocaleState(saved);
      } else {
        const browserLang = navigator.language.slice(0, 2);
        if (browserLang === "en") {
          setLocaleState("en");
        }
      }
    } catch {
      // LocalStorage unavailable
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem("preferred-locale", newLocale);
      document.documentElement.lang = newLocale;
    } catch {
      // ignore
    }
  };

  const toggleLocale = () => {
    setLocale(locale === "fr" ? "en" : "fr");
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        toggleLocale,
        t: translations[locale],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
