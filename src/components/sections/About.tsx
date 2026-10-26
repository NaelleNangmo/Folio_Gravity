"use client";

import React from "react";
import { useTranslation } from "@/context/LanguageContext";
import { Server, Workflow, Cloud, CheckCircle, ShieldCheck, Cpu, Code2 } from "lucide-react";

export function About() {
  const { t } = useTranslation();

  const domainCards = [
    {
      icon: Server,
      title: t.about.domain1Title,
      desc: t.about.domain1Desc,
      tag: "REST & Microservices",
      color: "cyan",
      badge: "Production Ready",
      techs: ["NestJS", "Laravel", "TypeScript", "Angular", "React", "Node.js"],
    },
    {
      icon: Workflow,
      title: t.about.domain2Title,
      desc: t.about.domain2Desc,
      tag: "Master 1 3iL",
      color: "violet",
      badge: "Formation Active",
      techs: ["Python (En cours)", "ETL / ELT", "SQL Avancé", "Power BI", "Data Modeling"],
    },
    {
      icon: Cloud,
      title: t.about.domain3Title,
      desc: t.about.domain3Desc,
      tag: "Infra & Résilience",
      color: "cyan",
      badge: "CI / CD & Docker",
      techs: ["Docker", "Redis Cache", "Git / GitHub", "Linux", "Sanctum Auth"],
    },
  ];

  const stats = [
    { value: t.about.stats.stat1Value, label: t.about.stats.stat1Label, sub: "suivi-academic-backend" },
    { value: t.about.stats.stat2Value, label: t.about.stats.stat2Label, sub: "CamwaterApp v1.0.0" },
    { value: t.about.stats.stat3Value, label: t.about.stats.stat3Label, sub: "Hes Digital Services" },
    { value: t.about.stats.stat4Value, label: t.about.stats.stat4Label, sub: "FR, EN, TH, DE" },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-glow/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-violet-glow/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-cyan-glow/10 text-cyan-glow border border-cyan-glow/30 mb-4 inline-block">
            {t.about.badge}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cold-white mb-4">
            {t.about.title}
          </h2>
          <p className="text-sm sm:text-base text-cold-muted font-body">
            {t.about.subtitle}
          </p>
        </div>

        {/* Bio Narrative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 sm:p-8 rounded-2xl bg-space-card border border-space-border hover:border-cyan-glow/40 transition-all duration-300 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-night-surface border border-cyan-glow/30 text-cyan-glow flex items-center justify-center mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-xl font-bold text-cold-white mb-3">
              Génie Logiciel & Architectures Applicatives
            </h3>
            <p className="text-cold-muted text-sm sm:text-base leading-relaxed">
              {t.about.bioParagraph1}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-space-card border border-space-border hover:border-violet-glow/40 transition-all duration-300 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-night-surface border border-violet-glow/30 text-violet-glow flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-xl font-bold text-cold-white mb-3">
              Ingénierie des Données & Systèmes Distribués
            </h3>
            <p className="text-cold-muted text-sm sm:text-base leading-relaxed">
              {t.about.bioParagraph2}
            </p>
          </div>
        </div>

        {/* Verified Technical Proof Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((st, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 rounded-2xl bg-night-surface/60 border border-space-border text-center hover:border-cyan-glow/40 transition-all group"
            >
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-cyan-glow group-hover:scale-105 transition-transform mb-1">
                {st.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-cold-white mb-1">
                {st.label}
              </div>
              <div className="text-[11px] font-mono text-cold-dim">
                {st.sub}
              </div>
            </div>
          ))}
        </div>

        {/* 3 Domain Pillars */}
        <div>
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl font-bold text-cold-white">
              {t.about.domainsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {domainCards.map((card, idx) => {
              const Icon = card.icon;
              const isViolet = card.color === "violet";
              return (
                <div
                  key={idx}
                  className={`flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-space-card border transition-all duration-300 hover:-translate-y-1 backdrop-blur-md ${
                    isViolet
                      ? "border-space-border hover:border-violet-glow/50 hover:shadow-violet-glow"
                      : "border-space-border hover:border-cyan-glow/50 hover:shadow-cyan-glow"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                          isViolet
                            ? "bg-violet-glow/10 border-violet-glow/30 text-violet-glow"
                            : "bg-cyan-glow/10 border-cyan-glow/30 text-cyan-glow"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider ${
                          isViolet
                            ? "bg-violet-glow/15 text-violet-glow border border-violet-glow/30"
                            : "bg-cyan-glow/15 text-cyan-glow border border-cyan-glow/30"
                        }`}
                      >
                        {card.badge}
                      </span>
                    </div>

                    <h4 className="font-heading text-xl font-bold text-cold-white mb-2">
                      {card.title}
                    </h4>
                    <p className="text-cold-muted text-xs sm:text-sm leading-relaxed mb-6">
                      {card.desc}
                    </p>
                  </div>

                  <div>
                    <span className="block text-[11px] font-mono uppercase text-cold-dim mb-2">
                      Technologies & Pratiques
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {card.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-night-deep text-cold-muted border border-space-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
