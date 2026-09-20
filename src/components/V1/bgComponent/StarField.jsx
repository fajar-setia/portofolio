import { useMemo } from "react";
import { motion } from "framer-motion";

/**
 * Komponen StarField - Background bintang-bintang animasi (versi diperbaiki)
 *
 * Perubahan dari versi sebelumnya:
 * - 3 lapisan bintang (kecil/sedang/besar) dengan kepadatan lebih tinggi
 * - Efek "kerlap-kerlip" (twinkle) yang lebih nyata: setiap bintang punya pola
 *   kedip acak (bukan cuma naik-turun opacity halus), termasuk beberapa
 *   bintang yang tiba-tiba "flash" terang sekilas seperti bintang asli
 * - Bintang besar punya efek sparkle (garis silang tipis) seperti lensa kamera
 * - Tetap ringan: pakai CSS animation untuk bintang kecil (banyak jumlahnya)
 *   dan framer-motion hanya untuk bintang besar (jumlah sedikit)
 *
 * Cara pakai di Beranda.jsx:
 *   import StarField from "./components/StarField";
 *   <StarField mousePosition={mousePosition} starCount={220} />
 *
 * Props:
 * - mousePosition: { x: number, y: number }   → posisi mouse dari state
 * - starCount: number (default: 220)          → jumlah total bintang kecil+sedang
 * - glowColor: string (default: "34, 197, 94")→ warna glow (RGB)
 * - glowIntensity: number (default: 0.15)      → intensitas glow mouse
 */

function StarField({
  mousePosition = { x: 0, y: 0 },
  starCount = 220,
  glowColor = "34, 197, 94",
  glowIntensity = 0.15,
}) {
  // Bintang kecil & sedang (dianimasikan via CSS keyframes, murah untuk jumlah banyak)
  const stars = useMemo(() => {
    return Array.from({ length: starCount }, (_, i) => {
      const rand = Math.random();
      // Sebagian besar bintang kecil, sebagian sedang, sedikit yang "flash" terang
      const type = rand < 0.75 ? "small" : rand < 0.93 ? "medium" : "flash";

      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size:
          type === "small"
            ? Math.random() * 1.2 + 0.5
            : type === "medium"
            ? Math.random() * 1.5 + 1.8
            : Math.random() * 1.8 + 1.5,
        baseOpacity: Math.random() * 0.4 + 0.35,
        duration:
          type === "flash"
            ? Math.random() * 2.5 + 1.5 // kedip cepat & tajam
            : Math.random() * 4 + 2.5, // kedip lembut
        delay: Math.random() * 6,
        type,
      };
    });
  }, [starCount]);

  // Bintang besar dengan sparkle (jumlah sedikit, dianimasikan via framer-motion)
  const bigStars = useMemo(() => {
    const count = Math.max(6, Math.round(starCount / 18));
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 2.5,
      duration: Math.random() * 3 + 3,
      delay: Math.random() * 5,
    }));
  }, [starCount]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Keyframes untuk kedip bintang kecil/sedang/flash */}
      <style>{`
        @keyframes twinkleSoft {
          0%, 100% { opacity: var(--base-op); transform: scale(1); }
          50% { opacity: calc(var(--base-op) * 0.25); transform: scale(0.85); }
        }
        @keyframes twinkleFlash {
          0%, 100% { opacity: calc(var(--base-op) * 0.3); transform: scale(0.8); }
          45% { opacity: calc(var(--base-op) * 0.3); transform: scale(0.8); }
          55% { opacity: 1; transform: scale(1.6); }
          65% { opacity: calc(var(--base-op) * 0.6); transform: scale(1); }
        }
      `}</style>

      {/* === LAYER 1: Background gelap dasar === */}
      <div className="absolute inset-0 bg-black" />

      {/* === LAYER 2: Bintang kecil & sedang (CSS twinkle, banyak jumlahnya) === */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            "--base-op": star.baseOpacity,
            opacity: star.baseOpacity,
            animation: `${
              star.type === "flash" ? "twinkleFlash" : "twinkleSoft"
            } ${star.duration}s ease-in-out ${star.delay}s infinite`,
            boxShadow:
              star.type === "flash"
                ? `0 0 ${star.size * 3}px rgba(255,255,255,0.8)`
                : "none",
          }}
        />
      ))}

      {/* === LAYER 3: Bintang besar dengan sparkle silang === */}
      {bigStars.map((star) => (
        <motion.div
          key={`big-${star.id}`}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size * 6,
            height: star.size * 6,
            marginLeft: -(star.size * 3),
            marginTop: -(star.size * 3),
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.9, 1.15, 0.9],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* inti bintang */}
          <div
            className="absolute rounded-full"
            style={{
              left: "50%",
              top: "50%",
              width: star.size,
              height: star.size,
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)",
              boxShadow: `0 0 ${star.size * 5}px rgba(255,255,255,0.5)`,
            }}
          />
          {/* sparkle garis silang */}
          <div
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              width: star.size * 6,
              height: "1px",
              transform: "translate(-50%, -50%)",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
            }}
          />
          <div
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              width: "1px",
              height: star.size * 6,
              transform: "translate(-50%, -50%)",
              background:
                "linear-gradient(180deg, transparent, rgba(255,255,255,0.7), transparent)",
            }}
          />
        </motion.div>
      ))}

      {/* === LAYER 4: Glow mengikuti mouse === */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${glowColor}, ${glowIntensity}), transparent 40%)`,
        }}
      />

      {/* === LAYER 5: Glow tambahan dekat mouse === */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${glowColor}, 0.05) 0%, transparent 25%)`,
        }}
      />
    </div>
  );
}

export default StarField;