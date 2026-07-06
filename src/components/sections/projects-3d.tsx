"use client";
import React from "react";
import dynamic from "next/dynamic";
import projects from "@/data/projects";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

// Dynamically import InfiniteMenu to avoid SSR issues with WebGL
const InfiniteMenu = dynamic(() => import("../ui/InfiniteMenu"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="text-neutral-600 dark:text-neutral-400">Loading 3D Menu...</div>
    </div>
  ),
});

const Projects3DSection = () => {
  // Transform projects data to InfiniteMenu format
  const menuItems = projects.map((project) => ({
    image: project.src,
    link: project.live === "#" ? "" : project.live,
    title: project.title,
    description: project.shortDescription || project.category,
  }));

  return (
    <SectionWrapper id="projects-3d" className="max-w-full mx-auto min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeader id="projects-3d" title="Explore Projects in 3D" />
      </div>
      
      <div className="mt-16 w-full" style={{ height: "70vh", minHeight: "600px" }}>
        <InfiniteMenu items={menuItems} scale={1.0} />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 mt-12 text-center">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Drag to rotate • Click centered project to view details
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Projects3DSection;
