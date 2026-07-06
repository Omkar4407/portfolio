"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { X, ExternalLink, Github, ArrowRight, Sparkles } from "lucide-react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <SectionWrapper id="projects" className="max-w-7xl mx-auto min-h-screen py-20">
        <SectionHeader id="projects" title="Featured Work" />
        
        <div className="mt-16 px-4 md:px-6">
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px]">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsSection;

// Project Card Component
const ProjectCard = ({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) => {
  // Make first card span 2 columns, last card span full width (3 columns)
  const isFirstCard = index === 0;
  const isLastCard = index === projects.length - 1;
  const isComingSoon = project.live === "#";
  
  const gridSpanClass = isLastCard 
    ? "lg:col-span-3 lg:row-span-1" // Full width for last card
    : isFirstCard 
    ? "lg:col-span-2 lg:row-span-1" // 2 columns for first card
    : ""; // Single column for others
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-3xl cursor-pointer pointer-events-auto ${gridSpanClass}`}
      onClick={onClick}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={project.src}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col justify-between p-6 pointer-events-none">
        {/* Top Badge */}
        <div className="flex justify-between items-start gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 backdrop-blur-md border border-white/20 text-white whitespace-nowrap">
            <Sparkles className="w-3 h-3 flex-shrink-0" />
            <span className="truncate max-w-[150px]">{project.category}</span>
          </span>
          {isComingSoon && (
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-amber-500/90 backdrop-blur-md border border-amber-400/50 text-white whitespace-nowrap">
              Coming Soon
            </span>
          )}
        </div>

        {/* Bottom Content */}
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-brand transition-colors line-clamp-2 break-words">
            {project.title}
          </h3>
          <p className="text-xs md:text-sm text-neutral-300 line-clamp-2 break-words">
            {project.shortDescription}
          </p>
          
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mt-2">
            {project.skills.frontend.slice(0, 3).map((skill) => (
              <span
                key={skill.title}
                className="px-2 py-1 text-xs rounded-md bg-white/10 backdrop-blur-sm text-white border border-white/20 whitespace-nowrap"
              >
                {skill.title}
              </span>
            ))}
            {(project.skills.frontend.length + (project.skills.backend?.length || 0)) > 3 && (
              <span className="px-2 py-1 text-xs rounded-md bg-white/10 backdrop-blur-sm text-white border border-white/20">
                +{project.skills.frontend.length + (project.skills.backend?.length || 0) - 3}
              </span>
            )}
          </div>

          {/* View Details Button */}
          <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-white group-hover:gap-3 transition-all pt-1">
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-brand/50 transition-all pointer-events-none" />
    </motion.div>
  );
};

// Project Modal Component
const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  const isComingSoon = project.live === "#";
  
  const handleVisitClick = (e: React.MouseEvent) => {
    if (isComingSoon) {
      e.preventDefault();
      alert("🚀 Coming Soon!\n\nThis project is currently under development and will be launched soon. Stay tuned!");
    }
  };

  const handleGithubClick = (e: React.MouseEvent) => {
    if (project.github === "#") {
      e.preventDefault();
      alert("🚀 Coming Soon!\n\nThe source code will be available once the project is ready for public release.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm pointer-events-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl overflow-hidden pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors border border-white/20"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent">
          {/* Hero Section with Image */}
          <div className="relative h-[40vh] md:h-[50vh]">
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-md border border-white/20 text-white mb-4">
                <Sparkles className="w-4 h-4" />
                {project.category}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {project.title}
              </h2>
              <p className="text-lg text-neutral-200 max-w-3xl">
                {project.shortDescription}
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Tech Stack */}
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                Technology Stack
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Frontend */}
                {project.skills.frontend?.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-lg font-semibold text-neutral-700 dark:text-neutral-200">
                        Frontend
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.skills.frontend.map((skill) => (
                        <div
                          key={skill.title}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 border border-neutral-300 dark:border-neutral-600"
                        >
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                            {skill.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Backend */}
                {project.skills.backend?.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                      </div>
                      <span className="text-lg font-semibold text-neutral-700 dark:text-neutral-200">
                        Backend & Infrastructure
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.skills.backend.map((skill) => (
                        <div
                          key={skill.title}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 border border-neutral-300 dark:border-neutral-600"
                        >
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                            {skill.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-700">
                {project.content}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={project.live}
                target={isComingSoon ? undefined : "_blank"}
                rel={isComingSoon ? undefined : "noopener noreferrer"}
                onClick={handleVisitClick}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl ${
                  isComingSoon
                    ? "bg-gradient-to-r from-neutral-600 to-neutral-700 hover:from-neutral-700 hover:to-neutral-800 text-white cursor-pointer"
                    : "bg-gradient-to-r from-brand to-orange-500 hover:from-orange-600 hover:to-orange-600 text-white"
                }`}
              >
                <ExternalLink className="w-5 h-5" />
                {isComingSoon ? "Coming Soon" : "Visit Live Site"}
              </Link>
              
              {project.github && (
                <Link
                  href={project.github}
                  target={project.github === "#" ? undefined : "_blank"}
                  rel={project.github === "#" ? undefined : "noopener noreferrer"}
                  onClick={handleGithubClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-semibold transition-colors border border-neutral-300 dark:border-neutral-600"
                >
                  <Github className="w-5 h-5" />
                  {project.github === "#" ? "Coming Soon" : "View Source"}
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
