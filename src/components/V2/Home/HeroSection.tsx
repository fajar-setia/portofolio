import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Globe } from "lucide-react";

import HeroFotoBody from "../../../assets/logo/v2/foto_fajar.png";

export default function HeroSection() {
  const socials = [
    { label: "GitHub", icon: Github, href: "https://github.com/" },
    { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/" },
    { label: "Instagram", icon: Instagram, href: "https://instagram.com/" },
    { label: "Email", icon: Mail, href: "mailto:fajarsetiapambudi@email.com" },
    { label: "Website", icon: Globe, href: "#" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 18 },
    },
  };

  const textLeftVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 90, damping: 16, delay: 0.1 },
    },
  };

  const textRightVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 90, damping: 16, delay: 0.1 },
    },
  };

  const photoVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 16, delay: 0.15 },
    },
  };

  return (
    <section
      id="home"
      className="w-full flex flex-col justify-between pb-3 pt-1 box-border overflow-hidden select-none"
      style={{ height: "calc(100dvh - var(--nav-h, 100px) - 1rem)" }}
    >
      {/* ================= HERO MAIN CONTAINER ================= */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full flex-1 min-h-0 flex flex-col justify-between items-center overflow-hidden"
      >
        {/* BIG OVERLAPPING TEXT HEADER (MENAMPUNG SEMUA ELEMEN) */}
        <div className="relative w-full flex-1 min-h-0 flex flex-col justify-between items-center my-auto">
          {/* 1. Teks Kiri & Kanan dengan Foto di Tengah */}
          <div className="relative w-full flex-1 min-h-0 flex items-center justify-center my-auto">
            <div className="w-full max-w-[1250px] mx-auto grid grid-cols-12 items-center text-center font-heading font-bold leading-none tracking-tight text-[var(--text-primary)] uppercase">
              <motion.span
                variants={textLeftVariants}
                className="font-kenyan col-span-5 text-right pr-2 sm:pr-4 z-10 whitespace-nowrap text-[8.5vw] sm:text-[9.5vw] lg:text-[7rem] tracking-[-0.02em]"
              >
                FAJAR SETIA
              </motion.span>
              <span className="col-span-2" /> {/* Space Tengah Foto */}
              <motion.span
                variants={textRightVariants}
                className="font-kenyan col-span-5 text-left pl-2 sm:pl-4 z-10 whitespace-nowrap text-[8.5vw] sm:text-[9.5vw] lg:text-[7rem] tracking-[0.15em]"
              >
                PAMBUDI
              </motion.span>
            </div>

            {/* Foto Badan Standing */}
            <motion.div
              variants={photoVariants}
              animate={{ y: [0, -8, 0] }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                },
              }}
              /* top-[55%] untuk mobile, md:top-[52%] untuk desktop */
              className="absolute top-[55%] md:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex items-center justify-center overflow-visible h-[clamp(150px,35vh,420px)] md:h-[clamp(250px,70vh,510px)]"
            >
              {/* Glow halus di belakang foto (70%/blur-2xl di mobile, 60%/blur-3xl di desktop) */}
              <div className="absolute inset-0 m-auto w-[70%] md:w-[60%] h-[56%] rounded-full bg-transparent dark:bg-[#C81E23]/60 light:bg-[#C81E23]/95 blur-2xl md:blur-3xl -z-10 transition-all duration-500" />

              {/* Tag Image */}
              <img
                src={HeroFotoBody}
                alt="Fajar Setia Pambudi"
                className="h-full w-auto object-contain relative z-10"
              />
            </motion.div>
          </div>

          {/* 2. SUBTITLE & BUTTONS */}
          <div className="w-full flex flex-col sm:flex-row items-end justify-between gap-4 px-2 z-10 shrink-0 mb-4 sm:mb-6">
            <motion.div
              variants={itemVariants}
              className="text-center sm:text-left space-y-2 max-w-md mx-auto sm:mx-0 w-full"
            >
              <div>
                <span className="text-xs font-semibold tracking-widest text-[var(--text-secondary)] uppercase block">
                  FULLSTACK DEVELOPER
                </span>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-snug pt-0.5 max-w-xs sm:max-w-none mx-auto sm:mx-0">
                  Building clean, functional, and scalable digital experiences.
                </p>
              </div>

              {/* Tombol Rata Tengah di Mobile, Rata Kiri di Desktop */}
              <div className="flex items-center justify-center sm:justify-start gap-2.5 pt-1">
                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="bg-[var(--brand-primary)] text-white font-medium px-5 py-2 rounded-xl hover:opacity-90 transition-all shadow-sm text-xs sm:text-sm"
                >
                  About Me
                </motion.a>

                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-primary)] font-medium px-5 py-2 rounded-xl hover:border-[var(--text-primary)] transition-all text-xs sm:text-sm shadow-xs"
                >
                  See Project
                </motion.a>
              </div>
            </motion.div>

            {/* Badge Circular */}
            <motion.div
              variants={itemVariants}
              className="relative w-14 h-14 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center shrink-0 self-center sm:self-auto mx-auto sm:mx-0 my-2 sm:my-0"
            >
              <motion.svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9.5px] fill-[var(--text-primary)] tracking-widest font-semibold uppercase">
                  <textPath href="#circlePath">
                    Fajars • Fullstack Developer •
                  </textPath>
                </text>
              </motion.svg>

              <div className="absolute text-[var(--brand-primary)] text-xs select-none">
                ✦
              </div>
            </motion.div>
          </div>

          {/* 3. SOCIAL MEDIA BAR */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-3xl mx-auto flex flex-wrap lg:grid lg:grid-cols-5 items-center justify-center bg-[var(--card-bg)] border border-[var(--border-color)] rounded-[20px] shadow-sm transition-colors duration-300 shrink-0 overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-color)]"
          >
            {socials.map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.35 + i * 0.05,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  whileHover={{ y: -2 }}
                  className="group flex-1 min-w-[110px] sm:min-w-0 p-2 sm:p-3 flex items-center justify-center gap-2 hover:bg-[var(--bg-main)] transition-colors duration-200"
                >
                  <div className="p-1.5 rounded-lg bg-[var(--bg-main)] group-hover:bg-[var(--card-bg)] text-[var(--brand-primary)] border border-[var(--border-color)] transition-all shrink-0">
                    <Icon size={15} strokeWidth={2} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--brand-primary)] transition-colors whitespace-nowrap">
                    {social.label}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
