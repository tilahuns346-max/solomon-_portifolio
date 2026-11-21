"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Target,
  Compass,
  CheckCircle2,
  Code,
  Sparkles,
  MapPin,
  Calendar,
} from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { personalInfo } from "@/data/personalInfo";

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Discover My Journey"
          title="About Solomon Tilahun"
          subtitle="Engineering purposeful web systems with clean logic, modern frameworks, and user-centric aesthetics."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Photo & Quick Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Background gradient frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 blur-xl" />

              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-dark-900 shadow-xl aspect-[4/5]">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 350px, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                    Profile
                  </span>
                  <h3 className="text-xl font-extrabold">{personalInfo.name}</h3>
                  <p className="text-xs text-slate-300">
                    BSc Software Engineering &bull; Wollo University
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
              <Card className="p-3 text-center" glow>
                <p className="text-2xl font-black text-neon-gradient">8+</p>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                  Projects Built
                </p>
              </Card>
              <Card className="p-3 text-center" glow>
                <p className="text-2xl font-black text-cyan-gradient">KIOT</p>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                  Wollo Univ.
                </p>
              </Card>
              <Card className="p-3 text-center" glow>
                <p className="text-2xl font-black text-emerald-400">100%</p>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                  Dedication
                </p>
              </Card>
            </div>
          </motion.div>

          {/* Right Column: Bio, Education & Objectives */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Professional Introduction Card */}
            <Card className="p-6 sm:p-8" glow>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Professional Introduction
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.about.intro}
              </p>
            </Card>

            {/* Academic Background Card */}
            <Card className="p-6 sm:p-8" glow>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Education Background
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    BSc Software Engineering &bull; Wollo University (2022 - Present)
                  </p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Studying at the Kombolcha Institute of Technology (KIOT), Wollo University.
                Deeply immersed in the fundamental disciplines of software architecture,
                object-oriented engineering, data structures, algorithms, relational databases,
                and modern web systems.
              </p>
            </Card>

            {/* Career Objectives Card */}
            <Card className="p-6 sm:p-8" glow>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Career Objectives
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.about.careerGoals}
              </p>
            </Card>

            {/* Technical Interests */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Compass className="w-4 h-4 text-emerald-500" />
                Core Interests &amp; Passions
              </h4>
              <div className="flex flex-wrap gap-2">
                {personalInfo.about.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-dark-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
