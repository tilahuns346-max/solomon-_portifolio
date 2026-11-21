"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Code2,
  FolderGit2,
  Layers,
  Sparkles,
  Info,
} from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { ProjectModal } from "./ProjectModal";
import { projects } from "@/data/projects";
import { Project } from "@/types";

const filterCategories = ["All", "Full Stack", "Frontend", "Backend"];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Engineering Work"
          title="Projects & Applications"
          subtitle="Explore selected full-stack web applications, REST API architectures, and responsive frontend systems."
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 relative ${
                selectedCategory === cat
                  ? "text-slate-900 bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-neon-green"
                  : "text-slate-600 dark:text-slate-400 bg-white/70 dark:bg-dark-850/80 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 hover:border-emerald-500/40"
              }`}
            >
              {cat}
              {cat === "All" ? ` (${projects.length})` : ` (${projects.filter((p) => p.category === cat).length})`}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="h-full flex flex-col justify-between overflow-hidden group border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 hover:shadow-neon-green transition-all duration-300">
                  <div>
                    {/* Media Thumbnail Container */}
                    <div
                      className="relative w-full h-52 bg-dark-900 overflow-hidden cursor-pointer"
                      onClick={() => setActiveProject(project)}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <Badge variant="neon" className="backdrop-blur-md">
                          {project.category}
                        </Badge>
                        {project.featured && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                            <Sparkles className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Hover Overlay Hint */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-dark-950/40 backdrop-blur-[2px]">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-semibold border border-white/20">
                          <Info className="w-3.5 h-3.5 text-emerald-400" />
                          View Details
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-3">
                      <h3
                        onClick={() => setActiveProject(project)}
                        className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-dark-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-[11px] font-medium px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-dark-800 text-slate-500">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="px-6 pb-6 pt-3 border-t border-slate-200/80 dark:border-white/5 flex items-center justify-between gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-800 transition-colors"
                      >
                        Details
                      </button>

                      {project.liveDemoUrl !== "#" ? (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg text-slate-900 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:opacity-90 shadow-sm"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Demo</span>
                        </a>
                      ) : (
                        <button
                          onClick={() => setActiveProject(project)}
                          className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Preview</span>
                        </button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
