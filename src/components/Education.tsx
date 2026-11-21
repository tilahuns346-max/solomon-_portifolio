"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { educationData } from "@/data/education";

export const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Education & Credentials"
          subtitle="Formal software engineering education groundings in algorithms, systems, and engineering design."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 sm:p-10 relative overflow-hidden border border-slate-200 dark:border-white/10" glow>
                {/* Accent indicator line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-2">
                      <GraduationCap className="w-3.5 h-3.5" />
                      Undergraduate Degree
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-white/5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-white/5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-8">
                  {edu.description}
                </p>

                {/* Relevant Coursework */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-emerald-500" />
                    Relevant Academic Coursework
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                    {edu.coursework.map((course, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3 rounded-xl bg-slate-100/70 dark:bg-dark-800/60 border border-slate-200/80 dark:border-white/5 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Achievements */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    Achievements &amp; Leadership
                  </h4>
                  <div className="space-y-2">
                    {edu.achievements.map((ach, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
