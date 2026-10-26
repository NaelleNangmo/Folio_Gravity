"use client";

import React, { useState } from "react";
import { timelineData } from "@/data/timeline";
import { certificationsData } from "@/data/certifications";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { useTranslation } from "@/context/LanguageContext";
import { Award, CheckCircle2, Clock, ShieldCheck, Sparkles } from "lucide-react";

export function Journey() {
  const { locale, t } = useTranslation();
  const [filterType, setFilterType] = useState<"all" | "education" | "experience">("all");

  const filteredTimeline = timelineData.filter((item) => {
    if (filterType === "all") return true;
    return item.type === filterType;
  });

  return (
    <section id="journey" className="relative py-24 sm:py-32">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-cyan-glow/10 text-cyan-glow border border-cyan-glow/30 mb-4 inline-block">
            {t.journey.badge}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cold-white mb-4">
            {t.journey.title}
          </h2>
          <p className="text-sm sm:text-base text-cold-muted font-body">
            {t.journey.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setFilterType("all")}
            className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              filterType === "all"
                ? "bg-cyan-glow/20 text-cyan-glow border border-cyan-glow/50"
                : "bg-night-surface/60 text-cold-muted border border-space-border hover:text-cold-white"
            }`}
          >
            {t.journey.filterAll}
          </button>
          <button
            type="button"
            onClick={() => setFilterType("experience")}
            className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              filterType === "experience"
                ? "bg-violet-glow/20 text-violet-glow border border-violet-glow/50"
                : "bg-night-surface/60 text-cold-muted border border-space-border hover:text-cold-white"
            }`}
          >
            {t.journey.filterExperience}
          </button>
          <button
            type="button"
            onClick={() => setFilterType("education")}
            className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              filterType === "education"
                ? "bg-cyan-glow/20 text-cyan-glow border border-cyan-glow/50"
                : "bg-night-surface/60 text-cold-muted border border-space-border hover:text-cold-white"
            }`}
          >
            {t.journey.filterEducation}
          </button>
        </div>

        {/* Timeline Items */}
        <div className="mb-20">
          {filteredTimeline.map((event, index) => (
            <TimelineItem
              key={event.id}
              event={event}
              isLast={index === filteredTimeline.length - 1}
            />
          ))}
        </div>

        {/* Certifications & Ongoing Qualifications */}
        <div className="mt-16 pt-12 border-t border-space-border">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-violet-glow/10 text-violet-glow border border-violet-glow/30 mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Accréditations</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-cold-white mb-2">
              {t.journey.certificationsTitle}
            </h3>
            <p className="text-xs sm:text-sm text-cold-muted">
              {t.journey.certificationsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {certificationsData.map((cert) => {
              const statusText = cert.status[locale] || cert.status.fr;
              const descText = cert.description[locale] || cert.description.fr;
              return (
                <div
                  key={cert.id}
                  className="p-5 sm:p-6 rounded-2xl bg-space-card border border-space-border hover:border-violet-glow/40 transition-all backdrop-blur-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono text-cyan-glow font-medium">
                        {cert.issuer}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono ${
                          cert.isOngoing
                            ? "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                            : "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                        }`}
                      >
                        {cert.isOngoing ? (
                          <Clock className="w-3 h-3" />
                        ) : (
                          <CheckCircle2 className="w-3 h-3" />
                        )}
                        <span>{statusText}</span>
                      </span>
                    </div>

                    <h4 className="font-heading text-base sm:text-lg font-bold text-cold-white mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-cold-muted leading-relaxed">
                      {descText}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
