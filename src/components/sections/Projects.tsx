"use client";

import React, { useState, useMemo } from "react";
import { projectsData, Project } from "@/data/projects";
import { FilterBar, FilterCategory } from "@/components/ui/FilterBar";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectDetailModal } from "@/components/sections/ProjectDetail";
import { useTranslation } from "@/context/LanguageContext";

export function Projects() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Compute counts per category
  const counts = useMemo(() => {
    return {
      all: projectsData.length,
      fullstack: projectsData.filter((p) => p.category === "fullstack" || p.tags.includes("Full Stack")).length,
      data: projectsData.filter((p) => p.category === "data" || p.tags.includes("Data")).length,
      devops: projectsData.filter((p) => p.category === "devops" || p.tags.includes("DevOps")).length,
    };
  }, []);

  // Filter projects according to active category
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projectsData;
    if (activeFilter === "fullstack") {
      return projectsData.filter((p) => p.category === "fullstack" || p.tags.includes("Full Stack"));
    }
    if (activeFilter === "data") {
      return projectsData.filter((p) => p.category === "data" || p.tags.includes("Data"));
    }
    if (activeFilter === "devops") {
      return projectsData.filter((p) => p.category === "devops" || p.tags.includes("DevOps"));
    }
    return projectsData;
  }, [activeFilter]);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-cyan-glow/10 text-cyan-glow border border-cyan-glow/30 mb-4 inline-block">
            {t.projects.badge}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cold-white mb-4">
            {t.projects.title}
          </h2>
          <p className="text-sm sm:text-base text-cold-muted font-body">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter Navigation */}
        <FilterBar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          counts={counts}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Detail Overlay Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
