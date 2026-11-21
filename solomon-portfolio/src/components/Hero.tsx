"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Send,
  Eye,
  Github,
  Mail,
  SendHorizontal,
  Code2,
  Terminal,
  Database,
  Layers,
  Sparkles,
} from "lucide-react";
import { personalInfo } from "@/data/personalInfo";

export const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background ambient neon glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/15 dark:bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                Software Engineering Student &bull; Wollo University
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I&apos;m{" "}
                <span className="text-neon-gradient relative inline-block">
                  {personalInfo.name}
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                  />
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
                {personalInfo.title}
              </p>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.shortBio}
            </p>

            {/* Call to Actions (CV, Hire Me, View Projects) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={personalInfo.cvUrl}
                download="Solomon-Tilahun-CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:opacity-95 shadow-neon-glow transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-slate-950" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-800 dark:text-white bg-slate-100 dark:bg-dark-850 hover:bg-slate-200 dark:hover:bg-dark-800 border border-slate-300 dark:border-white/10 hover:border-emerald-500/50 transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 text-emerald-500" />
                <span>Hire Me</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 border border-transparent hover:border-slate-300 dark:hover:border-white/10 transition-all"
              >
                <Eye className="w-4 h-4 text-cyan-500" />
                <span>View Projects</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="font-medium text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect Directly:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/80 dark:bg-dark-850 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:shadow-neon-green transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.contact.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/80 dark:bg-dark-850 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-neon-cyan transition-all"
                  aria-label="Telegram"
                  title="Telegram: @sol21mariam"
                >
                  <SendHorizontal className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="p-2.5 rounded-xl bg-white/80 dark:bg-dark-850 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:shadow-neon-green transition-all"
                  aria-label="Email Address"
                  title={`Email: ${personalInfo.contact.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Profile Image with Glowing Tech Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Outer pulsing glow gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 opacity-60 blur-2xl animate-pulse-slow" />

              {/* Rotating border frame */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 opacity-80" />

              {/* Photo Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-dark-900 border-2 border-emerald-400/30 shadow-2xl">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 300px, 400px"
                />

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />

                {/* Profile overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-dark-900/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Solomon Tilahun
                    </p>
                    <p className="text-[11px] text-emerald-400 font-medium">
                      Full-Stack Engineer
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider">
                      Available
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -left-6 sm:-left-8 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-dark-850/90 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg flex items-center gap-2"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">Focus</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Next.js &amp; React</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-dark-850/90 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg flex items-center gap-2"
              >
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Database className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">Backend</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Node &amp; Django</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
