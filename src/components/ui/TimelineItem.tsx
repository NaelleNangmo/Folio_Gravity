"use client";

import React from "react";
import { TimelineEvent } from "@/data/timeline";
import { useTranslation } from "@/context/LanguageContext";
import { GraduationCap, Briefcase, Calendar, MapPin, Check } from "lucide-react";

interface TimelineItemProps {
  event: TimelineEvent;
  isLast: boolean;
}

export function TimelineItem({ event, isLast }: TimelineItemProps) {
  const { locale } = useTranslation();
  const isEducation = event.type === "education";

  const periodText = event.period[locale] || event.period.fr;
  const titleText = event.title[locale] || event.title.fr;
  const descriptionText = event.description[locale] || event.description.fr;
  const achievements = event.achievements[locale] || event.achievements.fr;

  return (
    <div className="relative flex gap-4 sm:gap-8 group">
      {/* Timeline line and icon node */}
      <div className="flex flex-col items-center">
        {/* Node Icon */}
        <div
          className={`relative z-10 w-11 h-11 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
            isEducation
              ? "bg-night-surface border-cyan-glow/50 text-cyan-glow group-hover:shadow-cyan-glow"
              : "bg-night-surface border-violet-glow/50 text-violet-glow group-hover:shadow-violet-glow"
          }`}
        >
          {isEducation ? (
            <GraduationCap className="w-5 h-5" />
          ) : (
            <Briefcase className="w-5 h-5" />
          )}
        </div>

        {/* Connecting Vertical Line */}
        {!isLast && (
          <div className="w-[2px] flex-grow bg-gradient-to-b from-space-border via-cyan-glow/20 to-space-border my-2" />
        )}
      </div>

      {/* Content Card */}
      <div className="flex-grow pb-10">
        <div className="rounded-2xl bg-space-card border border-space-border group-hover:border-cyan-glow/40 transition-all duration-300 p-5 sm:p-6 backdrop-blur-md">
          {/* Top metadata: Period, Type tag, Location */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider ${
                isEducation
                  ? "bg-cyan-glow/15 text-cyan-glow border border-cyan-glow/30"
                  : "bg-violet-glow/15 text-violet-glow border border-violet-glow/30"
              }`}
            >
              {isEducation ? "Formation" : "Expérience Pro"}
            </span>

            <div className="flex items-center gap-3 text-xs font-mono text-cold-dim">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-cyan-glow/70" />
                <span>{periodText}</span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-violet-glow/70" />
                <span>{event.location}</span>
              </span>
            </div>
          </div>

          {/* Title & Institution */}
          <h3 className="font-heading text-lg sm:text-xl font-bold text-cold-white group-hover:text-cyan-glow transition-colors">
            {titleText}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-cyan-glow/90 font-mono mb-3">
            {event.institution}
          </p>

          {/* Description */}
          <p className="text-cold-muted text-xs sm:text-sm leading-relaxed mb-4">
            {descriptionText}
          </p>

          {/* Achievements bullets */}
          <ul className="space-y-1.5 mb-4">
            {achievements.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs sm:text-sm text-cold-muted/90"
              >
                <Check className="w-3.5 h-3.5 text-cyan-glow flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-night-deep text-cold-dim border border-space-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
