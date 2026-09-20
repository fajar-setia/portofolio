import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Data Navigasi
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Project", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  // Data Media Sosial
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/", label: "GitHub" },
  ];

  return (
    <footer className="w-full bg-[#1A1A1A] text-white pt-16 pb-8 mt-auto border-t border-white/10 select-none">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 box-border">
        {/* ================= BARIS UTAS (Header & Socials) ================= */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
          {/* Logo/Nama Brand */}
          <div className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            FAJARSTY
          </div>

          {/* Bagian Social Media */}
          <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
            <span className="text-sm font-medium text-gray-400">Social</span>
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-300 hover:text-[var(--brand-primary)] transition-colors"
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= BARIS TENGAH (Nav Links & Badge) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end mb-16">
          {/* Link Navigasi Vertikal */}
          <nav className="flex flex-col items-start gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-2xl sm:text-3xl text-gray-200 hover:text-[var(--brand-primary)] hover:translate-x-1 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Badge Melingkar Berputar (Sesuai Desain) */}
          <div className="relative w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 flex items-center justify-center shrink-0 mx-auto md:mx-0 md:ml-auto">
            <motion.svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <path
                id="circlePathFooter"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[9.5px] fill-gray-200 tracking-[0.2em] font-medium uppercase">
                <textPath href="#circlePathFooter">
                  FAJARS • FULLSTACK DEVELOPER •
                </textPath>
              </text>
            </motion.svg>
            <div className="absolute text-[var(--brand-primary)] text-xl">
              ✦
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}