"use client";

import React from "react";
import { skillCategories, spokenLanguages } from "@/data/skills";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { useTranslation } from "@/context/LanguageContext";
import { Server, Layout, Database, Workflow, Cpu, CheckCircle, Languages, Globe } from "lucide-react";

export function Skills() {
  const { locale, t } = useTranslation();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Server":
        return <Server className="w-5 h-5 text-cyan-glow" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-violet-glow" />;
      case "Database":
        return <Database className="w-5 h-5 text-cyan-glow" />;
      case "Workflow":
        return <Workflow className="w-5 h-5 text-amber-300" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-cyan-glow" />;
      case "CheckCircle":
        return <CheckCircle className="w-5 h-5 text-emerald-400" />;
      default:
        return <Server className="w-5 h-5 text-cyan-glow" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-glow/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-cyan-glow/10 text-cyan-glow border border-cyan-glow/30 mb-4 inline-block">
            {t.skills.badge}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cold-white mb-4">
            {t.skills.title}
          </h2>
          <p className="text-sm sm:text-base text-cold-muted font-body mb-6">
            {t.skills.subtitle}
          </p>

          {/* Status Legend */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-glow shadow-cyan-glow" />
              <span className="text-cold-white">{t.skills.acquired}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-200">{t.skills.inProgress}</span>
            </div>
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((group) => {
            const title = locale === "en" ? group.titleEn : group.titleFr;
            const desc = locale === "en" ? group.descriptionEn : group.descriptionFr;
            const isDataGroup = group.id === "data";

            return (
              <div
                key={group.id}
                className={`p-6 rounded-2xl bg-space-card border transition-all duration-300 backdrop-blur-md flex flex-col justify-between ${
                  isDataGroup
                    ? "border-amber-500/30 hover:border-amber-400/50"
                    : "border-space-border hover:border-cyan-glow/40"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-night-surface border border-space-border flex items-center justify-center">
                      {getCategoryIcon(group.iconName)}
                    </div>
                    <div>
                      <h3 className="font-heading text-base sm:text-lg font-bold text-cold-white">
                        {title}
                      </h3>
                      {isDataGroup && (
                        <span className="text-[10px] font-mono text-amber-300 uppercase tracking-wider">
                          Master 1 3iL
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-cold-muted mb-5 leading-relaxed">
                    {desc}
                  </p>

                  {/* Skills List in Category */}
                  <div className="space-y-2">
                    {group.skills.map((skill) => (
                      <SkillBadge key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Spoken Languages Subsection */}
        <div className="p-8 rounded-3xl bg-night-surface/50 border border-space-border backdrop-blur-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-glow/10 border border-violet-glow/30 text-violet-glow flex items-center justify-center">
              <Languages className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-cold-white">
                {t.skills.languagesTitle}
              </h3>
              <p className="text-xs sm:text-sm text-cold-muted">
                {t.skills.languagesSubtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {spokenLanguages.map((lang, idx) => {
              const name = locale === "en" ? lang.nameEn : lang.nameFr;
              const level = locale === "en" ? lang.levelEn : lang.levelFr;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-space-card border border-space-border hover:border-violet-glow/40 transition-colors flex items-center justify-between"
                >
                  <div>
                    <span className="font-heading text-sm font-bold text-cold-white block">
                      {name}
                    </span>
                    <span className="text-xs text-cold-dim font-mono">
                      {level}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-violet-glow/15 text-violet-glow border border-violet-glow/30">
                    {lang.badge}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
