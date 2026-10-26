"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "@/context/LanguageContext";
import { ArrowRight, Info, Database, Sparkles, Cpu, Layers } from "lucide-react";

const DataLabScene = dynamic(() => import("../3d/DataLabScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[380px] sm:h-[440px] rounded-2xl bg-night-deep/50 border border-space-border flex items-center justify-center">
      <div className="w-32 h-32 rounded-full border border-cyan-glow/30 animate-pulse flex items-center justify-center">
        <span className="text-xs font-mono text-cyan-glow">Loading 3D Flow...</span>
      </div>
    </div>
  ),
});

export function DataLab() {
  const { t } = useTranslation();
  const [activeStageKey, setActiveStageKey] = useState<string>("collect");

  const stageKeys = ["collect", "transform", "storage", "analysis", "visualize"] as const;

  const currentStage =
    t.datalab.stages[activeStageKey as keyof typeof t.datalab.stages] ||
    t.datalab.stages.collect;

  return (
    <section id="datalab" className="relative py-24 sm:py-32 overflow-hidden bg-night-deep/30">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-glow/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-violet-glow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-violet-glow/10 text-violet-glow border border-violet-glow/30 mb-4 inline-block">
            {t.datalab.badge}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cold-white mb-4">
            {t.datalab.title}
          </h2>
          <p className="text-sm sm:text-base text-cold-muted font-body mb-6">
            {t.datalab.subtitle}
          </p>

          {/* Cautious Learning Disclaimer Banner */}
          <div className="inline-flex items-start gap-2.5 p-3.5 sm:p-4 rounded-xl bg-night-surface/80 border border-cyan-glow/30 text-left text-xs sm:text-sm text-cold-muted max-w-2xl backdrop-blur-md">
            <Info className="w-5 h-5 flex-shrink-0 text-cyan-glow mt-0.5" />
            <p className="leading-relaxed">
              {t.datalab.learningNote}
            </p>
          </div>
        </div>

        {/* 3D Scene Viewport */}
        <div className="mb-10">
          <DataLabScene
            activeStageId={activeStageKey}
            onSelectStage={(stageId) => setActiveStageKey(stageId)}
          />
        </div>

        {/* Stage Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-8">
          {stageKeys.map((key, idx) => {
            const stage = t.datalab.stages[key];
            const isActive = activeStageKey === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveStageKey(key)}
                className={`p-3 rounded-xl border text-left transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-glow/15 border-cyan-glow/60 shadow-cyan-glow text-cyan-glow"
                    : "bg-night-surface/50 border-space-border text-cold-muted hover:text-cold-white hover:border-cyan-glow/30"
                }`}
              >
                <div className="text-[10px] font-mono tracking-wider text-cold-dim uppercase">
                  Stage 0{idx + 1}
                </div>
                <div className="text-xs sm:text-sm font-semibold truncate font-heading">
                  {stage.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="p-6 sm:p-8 rounded-2xl bg-space-card border border-space-border backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-violet-glow/15 text-violet-glow border border-violet-glow/30 mb-2">
                {currentStage.tag}
              </div>
              <h3 className="font-heading text-2xl font-bold text-cold-white">
                {currentStage.name}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-glow">
              <Sparkles className="w-4 h-4" />
              <span>Architecture Master 1 Ingénierie des Données</span>
            </div>
          </div>

          <p className="text-cold-muted text-sm sm:text-base leading-relaxed max-w-4xl">
            {currentStage.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
