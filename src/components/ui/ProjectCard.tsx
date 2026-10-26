"use client";

import React, { useRef, useState } from "react";
import { Project } from "@/data/projects";
import { useTranslation } from "@/context/LanguageContext";
import { Github, ExternalLink, ShieldCheck, FileText, ArrowRight, Layers } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const { locale, t } = useTranslation();
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const summaryText = project.summary[locale] || project.summary.fr;
  const isVerified = project.verificationStatus.verified;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: "transform 0.15s ease-out, border-color 0.2s ease, box-shadow 0.2s ease",
      }}
      className="group relative flex flex-col justify-between rounded-2xl bg-space-card border border-space-border hover:border-cyan-glow/50 hover:shadow-cyan-glow backdrop-blur-xl p-6 overflow-hidden transition-all duration-300"
    >
      {/* Background ambient gradient glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-glow/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-glow/20 transition-all duration-500" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-violet-glow/10 rounded-full blur-3xl pointer-events-none group-hover:bg-violet-glow/20 transition-all duration-500" />

      {/* Card Header: Category + Status Badge */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-night-surface border border-space-border text-cyan-glow">
              <Layers className="w-4 h-4" />
            </span>
            <span className="text-[11px] font-mono tracking-wider uppercase text-cyan-glow font-medium">
              {project.category}
            </span>
          </div>

          {/* Verification Badge */}
          {isVerified ? (
            <div
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
              title={project.verificationStatus[locale === "en" ? "noteEn" : "noteFr"]}
            >
              <ShieldCheck className="w-3 h-3" />
              <span>{t.projects.verifiedBadge}</span>
            </div>
          ) : (
            <div
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30"
              title={project.verificationStatus[locale === "en" ? "noteEn" : "noteFr"]}
            >
              <FileText className="w-3 h-3" />
              <span>{t.projects.cautiousBadge}</span>
            </div>
          )}
        </div>

        {/* Project Title */}
        <h3 className="font-heading text-xl font-bold text-cold-white group-hover:text-cyan-glow transition-colors tracking-tight mb-2">
          {project.title}
        </h3>

        {/* Short Summary */}
        <p className="text-cold-muted text-sm leading-relaxed mb-5 line-clamp-3">
          {summaryText}
        </p>
      </div>

      {/* Metrics / Documented Claims if available */}
      {project.metrics && (
        <div className="mb-4 px-3 py-1.5 rounded-lg bg-night-surface/70 border border-space-border text-[11px] font-mono text-cyan-glow/90 flex items-center justify-between">
          <span className="truncate">{project.metrics[locale]}</span>
        </div>
      )}

      {/* Tech Stack Chips */}
      <div>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-night-deep/80 text-cold-dim border border-space-border group-hover:border-cyan-glow/20 group-hover:text-cold-muted transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-space-border/60 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-glow hover:text-cold-white transition-colors group/btn"
          >
            <span>{t.projects.viewDetails}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-night-surface hover:bg-cyan-glow/20 border border-space-border hover:border-cyan-glow/40 text-cold-muted hover:text-cyan-glow transition-all"
              aria-label={`Code source pour ${project.title}`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
