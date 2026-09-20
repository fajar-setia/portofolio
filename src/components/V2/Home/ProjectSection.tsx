import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link untuk navigasi
import { initialData } from "../../../pages/data";

export default function ProjectSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="w-full py-12 select-none">
      {/* HEADER SECTION */}
      <div className="flex items-center justify-between mb-8 px-2">
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[var(--text-primary)] font-bold tracking-wide">
          [Projects.]
        </h2>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleScroll("left")}
            aria-label="Previous Project"
            className="w-11 h-11 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-primary)] flex items-center justify-center hover:bg-[var(--brand-primary)] hover:text-white hover:border-[var(--brand-primary)] transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={() => handleScroll("right")}
            aria-label="Next Project"
            className="w-11 h-11 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-primary)] flex items-center justify-center hover:bg-[var(--brand-primary)] hover:text-white hover:border-[var(--brand-primary)] transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* PROJECT SLIDER CONTAINER */}
      <div
        ref={scrollContainerRef}
        className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-4 px-2 no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {initialData.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="snap-start shrink-0 w-[310px] sm:w-[380px] lg:w-[420px] bg-[var(--card-bg)] border border-[var(--border-color)] rounded-[28px] p-4 sm:p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            {/* GAMBAR PREVIEW PROJECT */}
            <div className="relative w-full h-[210px] sm:h-[240px] rounded-[20px] overflow-hidden bg-[var(--bg-main)] mb-4">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="text-[10px] font-semibold text-white tracking-wider uppercase">
                  {project.tools[0]?.title || "Web App"}
                </span>
              </div>
            </div>

            {/* INFORMASI PROJECT */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight mb-1 group-hover:text-[var(--brand-primary)] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] line-clamp-2 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* FOOTER CARD */}
              <div className="flex items-center justify-between pt-3 border-t border-[var(--border-color)] mt-auto">
                <span className="text-xs font-medium text-[var(--text-secondary)] truncate max-w-[180px]">
                  {project.tools.slice(0, 3).map((t) => t.title).join(", ")}
                </span>

                {/* Mengarah ke Halaman Detail Project berdasarkan ID */}
                <Link
                  to={`/v2/projects/${project.id}`}
                  className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--brand-primary)] transition-colors group/link"
                >
                  Learn more
                  <ArrowUpRight
                    size={16}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}