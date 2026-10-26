"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/projects";
import { useTranslation } from "@/context/LanguageContext";
import { X, Github, ExternalLink, ShieldCheck, FileText, CheckCircle2, Cpu, Database } from "lucide-react";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const { locale, t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isVerified = project.verificationStatus.verified;
  const verificationNote = project.verificationStatus[locale === "en" ? "noteEn" : "noteFr"];
  const contextText = project.context[locale] || project.context.fr;
  const features = project.keyFeatures[locale] || project.keyFeatures.fr;
  const highlights = project.technicalHighlights[locale] || project.technicalHighlights.fr;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-space-black/85 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-night-blue border border-cyan-glow/30 p-6 sm:p-8 md:p-10 shadow-cyan-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-night-surface border border-space-border text-cold-muted hover:text-cyan-glow hover:border-cyan-glow/50 transition-colors"
          aria-label={t.projects.closeModal}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tags & Category */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider bg-cyan-glow/15 text-cyan-glow border border-cyan-glow/30">
            {project.category}
          </span>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-night-surface text-cold-muted border border-space-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-cold-white mb-4">
          {project.title}
        </h2>

        {/* Verification Status Banner */}
        <div
          className={`p-4 rounded-xl mb-6 flex items-start gap-3 border ${
            isVerified
              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
              : "bg-amber-500/10 border-amber-500/30 text-amber-200"
          }`}
        >
          {isVerified ? (
            <ShieldCheck className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
          ) : (
            <FileText className="w-5 h-5 flex-shrink-0 text-amber-400 mt-0.5" />
          )}
          <div className="text-xs sm:text-sm">
            <span className="font-semibold block mb-0.5 font-mono">
              {isVerified ? t.projects.verifiedBadge : t.projects.cautiousBadge}
            </span>
            <p className="opacity-90">{verificationNote}</p>
          </div>
        </div>

        {/* Context & Purpose */}
        <div className="mb-6">
          <h3 className="text-xs font-mono tracking-wider uppercase text-cyan-glow mb-2 flex items-center gap-2">
            <Database className="w-3.5 h-3.5" />
            <span>Contexte & Périmètre</span>
          </h3>
          <p className="text-cold-muted text-sm sm:text-base leading-relaxed bg-night-surface/50 p-4 rounded-xl border border-space-border">
            {contextText}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h3 className="text-xs font-mono tracking-wider uppercase text-violet-glow mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{t.projects.modalFeaturesTitle}</span>
          </h3>
          <ul className="space-y-2">
            {features.map((feat, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-cold-muted"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow mt-1.5 flex-shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Highlights & Architecture */}
        <div className="mb-8">
          <h3 className="text-xs font-mono tracking-wider uppercase text-cyan-glow mb-3 flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.projects.modalHighlightsTitle}</span>
          </h3>
          <ul className="space-y-2">
            {highlights.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-cold-muted"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-glow mt-1.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div className="mb-8">
          <span className="block text-xs font-mono uppercase text-cold-dim mb-2">
            Stack Technologique
          </span>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-night-deep text-cyan-glow border border-space-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-space-border">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-night-surface hover:bg-night-surface/80 text-cold-muted border border-space-border transition-colors"
          >
            {t.projects.closeModal}
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-cyan-glow text-space-black hover:bg-cyan-glow/90 font-semibold shadow-cyan-glow flex items-center gap-2 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>{t.projects.sourceCode}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
