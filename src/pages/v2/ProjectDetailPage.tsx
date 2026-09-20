import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { initialData } from "../../pages/data"; // Sesuaikan path import data kamu

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = initialData.find((p) => p.id === Number(id));

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Perbaikan Presisi Detection Scroll untuk Semua Screenshot (1..N)
  const handleScrollDetection = () => {
    if (scrollContainerRef.current && project?.screenshots.length) {
      const container = scrollContainerRef.current;
      const children = Array.from(container.children) as HTMLElement[];
      const containerCenter = container.scrollLeft + container.clientWidth / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      children.forEach((child, index) => {
        const childCenter = child.offsetLeft + child.clientWidth / 2;
        const distance = Math.abs(containerCenter - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeScreenshotIndex) {
        setActiveScreenshotIndex(closestIndex);
      }
    }
  };

  // Navigasi Manual Smooth Scroll
  const scrollToScreenshot = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const targetChild = container.children[index] as HTMLElement;
      if (targetChild) {
        container.scrollTo({
          left: targetChild.offsetLeft - 16, // Offset padding kiri
          behavior: "smooth",
        });
        setActiveScreenshotIndex(index);
      }
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <Link
          to="/"
          className="bg-[var(--brand-primary)] text-white px-5 py-2.5 rounded-xl font-medium shadow-md active:scale-95 transition-all"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300">
      <div className="w-full px-4 md:px-8 lg:px-12 py-8 max-w-[1400px] mx-auto box-border">
        
        {/* ================= BARISAN ATAS: BACK BUTTON DENGAN BG TIPIS ================= */}
        <div className="flex items-center justify-between mb-10 border-b border-[var(--border-color)] pb-6">
          <Link
            to="/v2"
            className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[var(--text-primary)] bg-[var(--card-bg)] border border-[var(--border-color)] px-4 py-2.5 rounded-xl hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-all shadow-xs group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* ================= BARISAN TENGAH: NAMA, DESKRIPSI, TECH STACK ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 items-start">
          
          {/* KIRI: NAMA PROJECT */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {project.title}
            </h1>
          </motion.div>

          {/* TENGAH: DESKRIPSI PROJECT & REPOSITORY LINK */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 space-y-5"
          >
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {project.description}
            </p>
            
            {/* TOMBOL LINK REPO DENGAN BACKGROUND TIPIS TEGAS */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {project.githubFe && project.githubFe.trim() !== "" && (
                <a 
                  href={project.githubFe} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-primary)] px-3.5 py-2 rounded-xl text-xs font-semibold hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-all shadow-xs"
                >
                  <Github size={15} /> Frontend <ExternalLink size={13} />
                </a>
              )}
              {project.githubBe && project.githubBe.trim() !== "" && (
                <a 
                  href={project.githubBe} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-primary)] px-3.5 py-2 rounded-xl text-xs font-semibold hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-all shadow-xs"
                >
                  <Github size={15} /> Backend <ExternalLink size={13} />
                </a>
              )}
            </div>
          </motion.div>

          {/* KANAN: TECH STACK BADGES */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 lg:text-right"
          >
            <h3 className="text-base font-bold mb-3 lg:justify-end flex items-center gap-2">
              Tech Stack <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)] block" />
            </h3>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {project.tools.map((tool) => (
                <div
                  key={tool.id}
                  className="flex items-center gap-2 bg-[var(--card-bg)] border border-[var(--border-color)] px-3 py-1.5 rounded-full shadow-xs"
                >
                  <img src={tool.image} alt={tool.title} className="w-3.5 h-3.5 object-contain" />
                  <span className="text-xs font-semibold text-[var(--text-primary)] whitespace-nowrap">{tool.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ================= BARISAN BAWAH: SCREENSHOT SLIDER & DESKRIPSI ACCURATE ================= */}
        <div className="w-full relative mb-16 border-t border-[var(--border-color)] pt-10">
          
          {/* HEADER SHOWCASE & TOMBOL NAVIGASI SLIDER DENGAN BG TIPIS */}
          <div className="flex items-center justify-between mb-8 px-1">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-3">
              Project Showcase <span className="text-sm font-medium text-[var(--text-secondary)]">({project.screenshots.length} Views)</span>
            </h3>
            
            {/* Navigasi Kiri / Kanan */}
            <div className="flex items-center gap-2.5">
              <button 
                onClick={() => scrollToScreenshot(activeScreenshotIndex - 1)}
                disabled={activeScreenshotIndex === 0}
                aria-label="Previous Screenshot"
                className="w-10 h-10 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-primary)] flex items-center justify-center hover:bg-[var(--brand-primary)] hover:text-white hover:border-[var(--brand-primary)] transition-all shadow-xs disabled:opacity-30 disabled:pointer-events-none active:scale-95 cursor-pointer"
              >
                <ArrowLeft size={18} />
              </button>
              <button 
                onClick={() => scrollToScreenshot(activeScreenshotIndex + 1)}
                disabled={activeScreenshotIndex === project.screenshots.length - 1}
                aria-label="Next Screenshot"
                className="w-10 h-10 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-primary)] flex items-center justify-center hover:bg-[var(--brand-primary)] hover:text-white hover:border-[var(--brand-primary)] transition-all shadow-xs disabled:opacity-30 disabled:pointer-events-none active:scale-95 cursor-pointer"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* SCREENSHOT SLIDER */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScrollDetection}
            className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-2 px-1 no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {project.screenshots.map((ss, idx) => (
              <div
                key={ss.id}
                className={`snap-start shrink-0 w-[300px] sm:w-[480px] md:w-[620px] lg:w-[780px] bg-[var(--card-bg)] border rounded-[24px] overflow-hidden p-3 shadow-sm flex flex-col items-center justify-center transition-all duration-300 ${
                  activeScreenshotIndex === idx 
                    ? "border-[var(--brand-primary)] shadow-md" 
                    : "border-[var(--border-color)] opacity-80 hover:opacity-100"
                }`}
              >
                <div className="w-full h-full rounded-[18px] overflow-hidden bg-[var(--bg-main)] border border-[var(--border-color)] flex items-center justify-center">
                  <img
                    src={ss.image}
                    alt={`View ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* DESKRIPSI SCREENSHOT AKURAT SESUAI INDEX YANG AKTIF */}
          <div className="mt-8 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-[20px] p-5 shadow-sm relative overflow-hidden">
            
            {/* Line Progress Bar Dynamic */}
            <div 
              className="absolute top-0 left-0 h-1 bg-[var(--brand-primary)] transition-all duration-300 ease-out" 
              style={{ width: `${((activeScreenshotIndex + 1) / project.screenshots.length) * 100}%` }} 
            />

            <AnimatePresence mode="wait">
              <motion.p 
                key={activeScreenshotIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed"
              >
                <span className="font-bold text-[var(--text-primary)] mr-2.5 uppercase tracking-wider text-[11px] bg-[var(--bg-main)] border border-[var(--border-color)] px-2.5 py-1 rounded-md">
                  View #{activeScreenshotIndex + 1} of {project.screenshots.length}
                </span>
                {project.screenshots[activeScreenshotIndex]?.description}
              </motion.p>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}