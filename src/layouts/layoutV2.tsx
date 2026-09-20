import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/V2/Navbar";
import Footer from "../components/V2/Footer";
import { motion, useScroll, useSpring } from "framer-motion";


export default function LayoutV2() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme_v2") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme_v2", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`v2-wrapper min-h-screen w-full transition-colors duration-300 bg-[var(--bg-main)] text-[var(--text-primary)] ${darkMode ? "dark" : ""}`}>

      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[var(--brand-primary)] origin-left z-[60] pointer-events-none"
        style={{ scaleX }}
      />

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="w-full pt-[var(--nav-h)]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}