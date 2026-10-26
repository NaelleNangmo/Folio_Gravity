"use client";

import React from "react";
import { SkillItem } from "@/data/skills";
import { useTranslation } from "@/context/LanguageContext";
import { CheckCircle2, Loader2, Sparkles } from "lucide-react";

interface SkillBadgeProps {
  skill: SkillItem;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  const { locale } = useTranslation();
  const isAcquired = skill.status === "acquired";
  const desc = locale === "en" ? skill.descriptionEn : skill.descriptionFr;

  return (
    <div
      className={`group relative flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl border transition-all duration-200 ${
        isAcquired
          ? "bg-night-surface/60 border-space-border hover:border-cyan-glow/40 hover:bg-night-surface"
          : "bg-night-surface/40 border-amber-500/20 hover:border-amber-500/40 hover:bg-night-surface/60"
      }`}
    >
      <div className="flex items-center gap-2">
        <span
          className={`w-2 h-2 rounded-full flex-shrink-0 ${
            isAcquired ? "bg-cyan-glow shadow-cyan-glow" : "bg-amber-400 animate-pulse"
          }`}
        />
        <span className="text-xs sm:text-sm font-medium text-cold-white group-hover:text-cyan-glow transition-colors">
          {skill.name}
        </span>
      </div>

      <div className="flex items-center gap-1.5">
        {isAcquired ? (
          <span className="text-[10px] font-mono text-emerald-400/90 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            <span className="hidden sm:inline">Acquis</span>
          </span>
        ) : (
          <span className="text-[10px] font-mono text-amber-300/90 flex items-center gap-1">
            <Loader2 className="w-3 h-3 animate-spin" />
            <span className="hidden sm:inline">En cours</span>
          </span>
        )}
      </div>

      {desc && (
        <div className="absolute -bottom-7 left-2 z-20 hidden group-hover:flex items-center px-2 py-0.5 rounded bg-night-deep border border-space-border text-[10px] font-mono text-cold-muted whitespace-nowrap shadow-glass">
          {desc}
        </div>
      )}
    </div>
  );
}
