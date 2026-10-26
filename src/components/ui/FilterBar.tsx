"use client";

import React from "react";
import { useTranslation } from "@/context/LanguageContext";

export type FilterCategory = "all" | "fullstack" | "data" | "devops";

interface FilterBarProps {
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
  counts: {
    all: number;
    fullstack: number;
    data: number;
    devops: number;
  };
}

export function FilterBar({ activeFilter, onFilterChange, counts }: FilterBarProps) {
  const { t } = useTranslation();

  const filters: { id: FilterCategory; label: string; count: number }[] = [
    { id: "all", label: t.projects.filterAll, count: counts.all },
    { id: "fullstack", label: t.projects.filterFullstack, count: counts.fullstack },
    { id: "data", label: t.projects.filterData, count: counts.data },
    { id: "devops", label: t.projects.filterDevops, count: counts.devops },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-8">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.id;
        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onFilterChange(filter.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 border ${
              isActive
                ? "bg-cyan-glow/15 text-cyan-glow border-cyan-glow/50 shadow-cyan-glow"
                : "bg-night-surface/60 text-cold-muted border-space-border hover:text-cold-white hover:border-cyan-glow/30"
            }`}
          >
            <span>{filter.label}</span>
            <span
              className={`px-1.5 py-0.2 rounded-md text-[10px] font-mono ${
                isActive
                  ? "bg-cyan-glow text-space-black font-semibold"
                  : "bg-night-deep text-cold-dim"
              }`}
            >
              {filter.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
