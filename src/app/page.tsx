"use client";

import React from "react";
import { Navigation } from "@/components/ui/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { DataLab } from "@/components/sections/DataLab";
import { Journey } from "@/components/sections/Journey";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-space-black text-cold-white selection:bg-cyan-glow/20 selection:text-cold-white">
      {/* Fixed top navigation bar */}
      <Navigation />

      <main className="relative z-10 flex flex-col">
        {/* Hero Section with interactive 3D crystalline object */}
        <Hero />

        {/* About section with 3 domain pillars and verified facts */}
        <About />

        {/* Projects section with 3D tilt cards, filters, and detail modal */}
        <Projects />

        {/* Data Lab with 3D ETL pipeline flow simulator */}
        <DataLab />

        {/* Journey section with chronological timeline & certifications */}
        <Journey />

        {/* Skills section with acquired vs in-progress categorization */}
        <Skills />

        {/* Contact section with verified direct links */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
