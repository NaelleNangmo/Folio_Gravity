"use client";

import React, { useState } from "react";
import { useTranslation } from "@/context/LanguageContext";
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles, MapPin } from "lucide-react";

export function Contact() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const email = "naellenangmo@gmail.com";
  const githubUrl = "https://github.com/NaelleNangmo/NaelleNangmo";
  const linkedinUrl = "https://www.linkedin.com/in/naelle-nangmo";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    "Prise de contact via portfolio — Naelle Noutong"
  )}&body=${encodeURIComponent(
    "Bonjour Naelle,\n\nJe vous contacte suite à la consultation de votre portfolio...\n"
  )}`;

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-t from-cyan-glow/10 via-violet-glow/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-cyan-glow/10 text-cyan-glow border border-cyan-glow/30 mb-4 inline-block">
            {t.contact.badge}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cold-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-cold-muted font-body">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Main Card */}
        <div className="rounded-3xl bg-space-card border border-space-border backdrop-blur-xl p-8 sm:p-12 shadow-glass">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left side: direct actions */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-glow bg-cyan-glow/10 border border-cyan-glow/30 w-fit mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Disponible pour opportunités</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-cold-white mb-4">
                {t.contact.composedMessageTitle}
              </h3>
              <p className="text-sm text-cold-muted leading-relaxed mb-6">
                {t.contact.composedMessageDesc}
              </p>

              {/* Email Box with copy & send */}
              <div className="p-4 rounded-2xl bg-night-surface/90 border border-space-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-glow/10 text-cyan-glow flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-cold-dim block">
                      {t.contact.emailLabel}
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-cold-white font-medium select-all">
                      {email}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-lg bg-night-deep hover:bg-night-surface border border-space-border text-xs font-mono text-cold-muted hover:text-cyan-glow transition-all flex items-center gap-1.5"
                    aria-label="Copier l'adresse email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">{t.contact.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.contact.copyEmail}</span>
                      </>
                    )}
                  </button>

                  <a
                    href={mailtoUrl}
                    className="px-4 py-1.5 rounded-lg bg-cyan-glow hover:bg-cyan-glow/90 text-space-black font-semibold text-xs transition-all shadow-cyan-glow flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.contact.sendEmailCta}</span>
                  </a>
                </div>
              </div>

              {/* Mobility note */}
              <div className="flex items-center gap-2 text-xs font-mono text-cold-dim">
                <MapPin className="w-3.5 h-3.5 text-violet-glow" />
                <span>{t.contact.locationValue}</span>
              </div>
            </div>

            {/* Right side: Social Profile Links */}
            <div className="md:col-span-5 flex flex-col gap-4">
              {/* GitHub Card */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-night-surface/70 border border-space-border hover:border-cyan-glow/40 hover:bg-night-surface transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-night-deep border border-space-border text-cold-white group-hover:text-cyan-glow flex items-center justify-center transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-heading text-sm font-bold text-cold-white group-hover:text-cyan-glow transition-colors block">
                      {t.contact.githubLabel}
                    </span>
                    <span className="text-xs font-mono text-cold-dim">
                      @NaelleNangmo
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-glow group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>

              {/* LinkedIn Card */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-night-surface/70 border border-space-border hover:border-violet-glow/40 hover:bg-night-surface transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-night-deep border border-space-border text-cold-white group-hover:text-violet-glow flex items-center justify-center transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-heading text-sm font-bold text-cold-white group-hover:text-violet-glow transition-colors block">
                      {t.contact.linkedinLabel}
                    </span>
                    <span className="text-xs font-mono text-cold-dim">
                      in/naelle-nangmo
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-violet-glow group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
