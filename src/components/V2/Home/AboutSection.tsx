import React from "react";
import { Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

import HeroFoto from "../../../assets/logo/foto_aku_3.jpg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full flex flex-col justify-center items-center py-2 box-border overflow-hidden select-none"
      style={{ height: "calc(100dvh - var(--nav-h, 84px) - 2rem)" }}
    >
      {/* CARD UTAMA (Memenuhi 1 Layar Penuh dengan Flexbox/Grid Presisi) */}
      <div className="w-full h-full bg-[#1B1716] text-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl border border-white/10 flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-center justify-between my-auto">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-4 space-y-2 sm:space-y-4 text-center lg:text-left w-full">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-wide text-white uppercase font-bold">
            [About Me.]
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-snug">
            Hi, I’m <strong className="text-white font-semibold">Fajar Setia Pambudi</strong>
            <br />
            I build digital products from frontend to backend
          </p>
        </div>

        {/* CENTER COLUMN: ID CARD LANYARD (Presisi di Tengah Layar) */}
        <div className="lg:col-span-4 flex justify-center items-center relative my-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-[220px] sm:w-[260px] lg:w-[280px] bg-white rounded-[28px] sm:rounded-[32px] p-4 sm:p-5 flex flex-col items-center shadow-2xl border border-gray-200 relative"
          >
            {/* Lanyard Strap Top */}
            <div className="absolute -top-10 sm:-top-12 flex flex-col items-center">
              <div className="w-7 sm:w-8 h-12 sm:h-16 bg-[#A6171B] rounded-t-sm flex flex-col items-center justify-around py-1 shadow-md border-x border-red-900/40">
                <span className="text-[9px] sm:text-[10px] text-cyan-400 font-bold">⚛</span>
                <span className="text-[9px] sm:text-[10px] text-cyan-400 font-bold">⚛</span>
                <span className="text-[9px] sm:text-[10px] text-cyan-400 font-bold">⚛</span>
              </div>
              <div className="w-5 sm:w-6 h-2.5 sm:h-3 bg-zinc-800 rounded-b-md shadow-inner flex items-center justify-center">
                <div className="w-2 h-1 bg-zinc-400 rounded-full" />
              </div>
            </div>

            {/* Photo Inside ID Card */}
            <div className="w-full h-[200px] sm:h-[240px] lg:h-[270px] rounded-2xl overflow-hidden mt-2 sm:mt-3 bg-zinc-900 shadow-md">
              <img
                src={HeroFoto}
                alt="Fajar Setia Pambudi ID Card"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6 w-full">
          <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed max-w-md">
            From interface to server-side logic, I enjoy turning ideas into functional, scalable, and well-crafted experiences.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 w-full">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-[#A6171B] hover:bg-[#8e1317] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm transition-all shadow-md hover:scale-[1.02]"
            >
              <Mail size={16} />
              Contact
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/30 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm transition-all hover:scale-[1.02]"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}