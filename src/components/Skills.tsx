"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Wrench,
  CheckCircle,
  Layers,
  Cpu,
} from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { skillCategories } from "@/data/skills";

const categoryIcons: Record<string, React.ReactNode> = {
  "Frontend Development": <Code className="w-5 h-5 text-emerald-400" />,
  "Backend Development": <Server className="w-5 h-5 text-cyan-400" />,
  "Databases": <Database className="w-5 h-5 text-teal-400" />,
  "Development Tools": <Wrench className="w-5 h-5 text-emerald-400" />,
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-dark-900/40">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Expertise"
          title="Skills & Technologies"
          subtitle="A categorized overview of the languages, frameworks, databases, and developer tooling I use to craft scalable applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col justify-between" glow>
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/80 dark:border-white/10">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-white/10">
                      {categoryIcons[category.title] || (
                        <Layers className="w-5 h-5 text-emerald-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {category.skills.length} core technologies
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid within Category */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex items-center justify-between p-3 rounded-xl bg-slate-100/70 dark:bg-dark-800/60 border border-slate-200/60 dark:border-white/5 hover:border-emerald-500/40 hover:bg-white dark:hover:bg-dark-800 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                          <span className="font-semibold text-sm text-slate-800 dark:text-slate-200 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 group-hover:text-emerald-500 transition-colors">
                          Active
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer badge */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    Verified Stack
                  </span>
                  <span className="text-[11px] text-emerald-500 font-medium">Production Ready</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
