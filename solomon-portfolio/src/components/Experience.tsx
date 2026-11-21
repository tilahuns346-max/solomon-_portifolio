"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  GitBranch,
  Award,
  Trophy,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { experienceData } from "@/data/experience";

const typeIcons: Record<string, React.ReactNode> = {
  project: <Briefcase className="w-4 h-4 text-emerald-400" />,
  collaboration: <Users className="w-4 h-4 text-cyan-400" />,
  opensource: <GitBranch className="w-4 h-4 text-teal-400" />,
  certificate: <Award className="w-4 h-4 text-amber-400" />,
  hackathon: <Trophy className="w-4 h-4 text-purple-400" />,
};

const typeLabels: Record<string, string> = {
  project: "Software Projects",
  collaboration: "Team Engineering",
  opensource: "Open Source",
  certificate: "Certified Skills",
  hackathon: "Competition Sprint",
};

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Track Record"
          title="Experience & Achievements"
          subtitle="Documented practical software development milestones, collaborative deliveries, and verified achievements."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {experienceData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Card className="p-6 sm:p-8" glow>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-white/10">
                      {typeIcons[item.type]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                          {typeLabels[item.type]}
                        </span>
                        {item.verified && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20">
                            <CheckCircle className="w-3 h-3" />
                            Verified
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 self-start sm:self-center">
                    {item.period}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200/80 dark:border-white/5">
                  {item.technologies && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-dark-800 text-slate-600 dark:text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-500 hover:text-emerald-400 transition-colors ml-auto"
                    >
                      <span>Repository link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
