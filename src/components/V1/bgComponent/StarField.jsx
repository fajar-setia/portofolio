import { memo, useEffect, useMemo, useRef } from "react";

/**
 * Komponen StarField - Background bintang-bintang animasi (versi diperbaiki)
 *
 * Perubahan dari versi sebelumnya:
 * - 3 lapisan bintang (kecil/sedang/besar) dengan kepadatan lebih tinggi
 * - Efek "kerlap-kerlip" (twinkle) yang lebih nyata: setiap bintang punya pola
 *   kedip acak (bukan cuma naik-turun opacity halus), termasuk beberapa
 *   bintang yang tiba-tiba "flash" terang sekilas seperti bintang asli
 * - Bintang besar punya efek sparkle (garis silang tipis) seperti lensa kamera
 * - Tetap ringan: memakai CSS animation untuk semua layer bintang
 * - Glow pointer diperbarui langsung melalui CSS variables agar tidak memicu render React
 * - Lapisan tetap berada di viewport agar kepadatan dan posisi glow konsisten saat scroll
 *
 * Cara pakai di Beranda.jsx:
 *   import StarField from "./components/StarField";
 *   <StarField starCount={280} />
 *
 * Props:
 * - starCount: number (default: 220)          → jumlah total bintang kecil+sedang
 * - glowColor: string (default: "34, 197, 94")→ warna glow (RGB)
 * - glowIntensity: number (default: 0.15)      → intensitas glow mouse
 */

function StarField({
  starCount = 220,
  glowColor = "34, 197, 94",
  glowIntensity = 0.15,
}) {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return undefined;

    let frameId = null;
    let pointerX = 0;
    let pointerY = 0;

    // Update CSS variables directly instead of re-rendering the whole V1 tree.
    const handleMouseMove = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(() => {
        glow.style.setProperty("--mouse-x", `${pointerX}px`);
        glow.style.setProperty("--mouse-y", `${pointerY}px`);
        frameId = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);
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

  // Bintang besar dengan sparkle (jumlah sedikit, dianimasikan via CSS)
  const bigStars = useMemo(() => {
    // Keep the animated sparkle layer bounded without making the viewport feel empty.
    const count = Math.min(18, Math.max(6, Math.round(starCount / 18)));
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
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
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
        @keyframes bigStarPulse {
          0%, 100% { opacity: 0.5; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
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
        <div
          key={`big-${star.id}`}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size * 6,
            height: star.size * 6,
            marginLeft: -(star.size * 3),
            marginTop: -(star.size * 3),
            animation: `bigStarPulse ${star.duration}s ease-in-out ${star.delay}s infinite`,
            animationFillMode: "both",
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
        </div>
      ))}

      {/* === LAYER 4: Glow mengikuti mouse === */}
      <div
        ref={glowRef}
        className="absolute inset-0"
        style={{ "--mouse-x": "0px", "--mouse-y": "0px" }}
      >
        <div
          className="absolute opacity-25"
          style={{
            left: -480,
            top: -480,
            width: 960,
            height: 960,
            transform: "translate3d(var(--mouse-x), var(--mouse-y), 0)",
            background: `radial-gradient(circle, rgba(${glowColor}, ${glowIntensity}) 0%, transparent 70%)`,
            willChange: "transform",
          }}
        />

        {/* === LAYER 5: Glow tambahan dekat mouse === */}
        <div
          className="absolute opacity-40"
          style={{
            left: -320,
            top: -320,
            width: 640,
            height: 640,
            transform: "translate3d(var(--mouse-x), var(--mouse-y), 0)",
            background: `radial-gradient(circle, rgba(${glowColor}, 0.05) 0%, transparent 70%)`,
            willChange: "transform",
          }}
        />
      </div>
    </div>
  );
}

export default memo(StarField);
