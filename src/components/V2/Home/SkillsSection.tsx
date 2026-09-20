import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { tools } from "../../../pages/data"; // Mengambil data tools static

export default function SkillsSection() {
  // State untuk melacak rotasi sudut orbit (dalam derajat)
  const [rotationAngle, setRotationAngle] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startAngle = useRef(0);

  // Handler Drag Mouse / Touch untuk Menggeser Orbit
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    startX.current = clientX;
    startAngle.current = rotationAngle;
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - startX.current;

    // Kecepatan putar saat kursor digeser
    const sensitivity = 0.4;
    setRotationAngle(startAngle.current + deltaX * sensitivity);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Radius lintasan oval elips (Persis proporsi gambar)
  const radiusX = 260; // Lebar elips (Desktop)
  const radiusY = 75; // Tinggi miring elips (Desktop)
  const totalItems = tools.length;

  const skillCategories = [
    {
      title: "Frontend Development",
      description:
        "Crafting interactive, responsive, and performant user interfaces.",
      skills: [
        "React.js",
        "Vue.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Bootstrap",
        "HTML5/CSS3",
      ],
    },
    {
      title: "Backend & Database",
      description:
        "Building scalable APIs, server logic, and robust database architectures.",
      skills: [
        "Node.js",
        "Laravel (PHP)",
        ".NET / C#",
        "MySQL",
        "PostgreSQL",
        "SQLite",
        "REST APIs",
      ],
    },
    {
      title: "Tools & Ecosystem",
      description:
        "Development tools, version control, and workflow optimization.",
      skills: ["Git", "GitHub", "Vite", "Swagger", "Postman", "JWT Auth"],
    },
  ];

  return (
    <section id="skills" className="w-full py-16 select-none overflow-hidden">
      {/* HEADER SECTION */}
      <div className="mb-8">
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[var(--text-primary)] font-bold tracking-wide">
          [Skills & Tech Stack.]
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-lg">
          Technologies and tools I use to bring ideas to life. Drag to rotate
          the orbit.
        </p>
      </div>

      {/* ================= 1. INTERACTIVE ROTATABLE ORBIT SVG ================= */}
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        className="relative w-full h-[260px] sm:h-[320px] mb-12 bg-transparent rounded-[28px] overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      >
        {/* SVG Garis Lintasan Elips Adaptif Light/Dark Mode */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <ellipse
            cx="50%"
            cy="50%"
            rx={radiusX}
            ry={radiusY}
            fill="none"
            className="stroke-[var(--text-primary)] opacity-40 dark:opacity-60 transition-colors duration-300"
            strokeWidth="1.8"
          />
        </svg>

        {/* CONTAINER IKON-IKON YANG TERSUSUN DI ATAS LINTASAN ELIPS */}
        <div className="relative w-full h-full flex items-center justify-center">
          {tools.map((tool, index) => {
            const baseAngle = (index / totalItems) * 360;
            const currentAngleDeg = baseAngle + rotationAngle;
            const currentAngleRad = (currentAngleDeg * Math.PI) / 180;

            const x = Math.cos(currentAngleRad) * radiusX;
            const y = Math.sin(currentAngleRad) * radiusY;

            const scale = 0.85 + (y / radiusY) * 0.25;
            const zIndex = Math.round((y + radiusY) * 10);

            // Cek apakah logo berjenis GitHub / Git yang butuh penyesuaian kontras tinggi
            const isGithubIcon =
              tool.title.toLowerCase().includes("github") ||
              tool.title.toLowerCase() === "git";

            return (
              <div
                key={tool.id}
                style={{
                  transform: `translate3d(${x}px, ${y}px, 0px) scale(${scale})`,
                  zIndex: zIndex,
                }}
                className="absolute transition-transform duration-75 ease-out pointer-events-auto"
              >
                {/* Kotak Ikon Tool */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-2.5 shadow-md flex items-center justify-center hover:scale-110 transition-all cursor-pointer group">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    draggable={false}
                    className={`w-full h-full object-contain transition-all duration-300 ${
                      /* Di Light Mode diberi sedikit transparansi/hover warna, di Dark Mode di-invert jadi putih */
                      isGithubIcon
                        ? "opacity-80 group-hover:opacity-100 dark:opacity-100 dark:invert"
                        : ""
                    }`}
                  />

                  {/* Tooltip Nama Tool Saat Hover */}
                  <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-[var(--text-primary)] text-[var(--bg-main)] text-[10px] font-semibold px-2.5 py-1 rounded-md shadow-md pointer-events-none whitespace-nowrap z-50">
                    {tool.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= 2. GRID KARTU SKILL ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-[24px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[var(--text-primary)]/30 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--brand-primary)] transition-colors">
                  {category.title}
                </h3>
                <span className="w-2 h-2 rounded-full bg-[var(--brand-primary)]" />
              </div>

              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium bg-[var(--bg-main)] text-[var(--text-primary)] border border-[var(--border-color)] px-3 py-1.5 rounded-xl hover:bg-[var(--brand-primary)] hover:text-white hover:border-[var(--brand-primary)] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
