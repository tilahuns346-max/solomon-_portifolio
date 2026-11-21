"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  SendHorizontal,
  Github,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { personalInfo } from "@/data/personalInfo";

const contactFormSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.message || "Failed to submit message. Please try again.");
      }
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage("Network error occurred. You can also contact directly via Telegram or Email!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-dark-900/40">
      {/* Background neon glows */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Let's Connect"
          title="Get In Touch"
          subtitle="Interested in collaborating on a full-stack project, hiring me, or exploring technical discussions? Drop me a message!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Channels & Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Let&apos;s Build Something Incredible
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Whether you have an inquiry, open full-stack job opportunity, or
                an innovative idea, my inbox is always open.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-dark-850/80 border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 hover:shadow-neon-green transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Official Email
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-400 transition-colors">
                    {personalInfo.contact.email}
                  </p>
                </div>
              </a>

              {/* Telegram */}
              <a
                href={personalInfo.contact.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-dark-850/80 border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 hover:shadow-neon-cyan transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <SendHorizontal className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Telegram Direct
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                    {personalInfo.contact.telegramUsername}
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-dark-850/80 border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 hover:shadow-neon-green transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-800 text-slate-800 dark:text-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    GitHub Profile
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-400 transition-colors">
                    github.com/{personalInfo.contact.githubUsername}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-dark-850/80 border border-slate-200 dark:border-white/10">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Current Location
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {personalInfo.contact.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <Card className="p-6 sm:p-10 border border-slate-200 dark:border-white/10" glow>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2"
                  >
                    Full Name <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Abebe Kebede"
                    {...register("name")}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-900 border text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none transition-all ${
                      errors.name
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-slate-200 dark:border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2"
                  >
                    Email Address <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-900 border text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none transition-all ${
                      errors.email
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-slate-200 dark:border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2"
                  >
                    Subject <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    {...register("subject")}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-900 border text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none transition-all ${
                      errors.subject
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-slate-200 dark:border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2"
                  >
                    Your Message <span className="text-emerald-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Describe your project, timeline, or inquiry..."
                    {...register("message")}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-900 border text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none transition-all resize-y ${
                      errors.message
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-slate-200 dark:border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Feedback Banners */}
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm flex items-center gap-2.5"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>Thank you! Your message has been sent successfully. Solomon will respond soon.</span>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm flex items-center gap-2.5"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-slate-900 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:opacity-95 shadow-neon-glow transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-900" />
                      <span>Dispatching Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-slate-900" />
                      <span>Send Message to Solomon</span>
                    </>
                  )}
                </button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
