import React from "react";
import Link from "next/link";
import { Github, SendHorizontal, Mail, Linkedin, Heart, ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";

const footerNav = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-dark-950 border-t border-slate-200/80 dark:border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/80 dark:border-white/5">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center">
                  <span className="font-black text-transparent bg-clip-text bg-gradient-to-tr from-emerald-400 to-cyan-400 text-sm">
                    ST
                  </span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Solomon Tilahun
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm leading-relaxed">
              Software Engineering Student at Wollo University &amp; aspiring
              Full-Stack Developer passionate about architecting elegant, scalable digital experiences.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {footerNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Profiles */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Direct Channels
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-850 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:shadow-neon-green transition-all"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.contact.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-850 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-neon-cyan transition-all"
                aria-label="Telegram"
                title="Telegram: @sol21mariam"
              >
                <SendHorizontal className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-850 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:shadow-neon-green transition-all"
                aria-label="Email"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-850 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-neon-cyan transition-all"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            &copy; {currentYear} Solomon Tilahun. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" /> using Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
