import React, { useEffect, useRef, useState } from "react";
import { Sun, Moon, ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Set --nav-h tetap sama seperti punyamu
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const setNavHeight = () => {
      document.documentElement.style.setProperty("--nav-h", `${el.offsetHeight}px`);
    };

    setNavHeight();
    const resizeObserver = new ResizeObserver(setNavHeight);
    resizeObserver.observe(el);
    window.addEventListener("resize", setNavHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", setNavHeight);
    };
  }, []);

  // Klik link → smooth scroll via Lenis (dengan fallback)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setMenuOpen(false);

    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(href, {
        offset: -20, // sedikit napas di atas section
        duration: 1.2,
      });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Project", href: "#projects" },
    { label: "Skills", href: "#skills" },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-2 md:px-12 lg:px-16 flex items-center justify-between bg-[var(--bg-main)]/80 backdrop-blur-md"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="text-xl font-bold tracking-tight"
        >
          FajarSty<span className="text-[var(--brand-primary)]">.</span>
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[var(--text-primary)]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:opacity-70 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-primary)] shadow-sm hover:scale-105 transition-all cursor-pointer"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden sm:flex items-center gap-2 bg-[var(--brand-primary)] text-xs text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition-all shadow-md"
          >
            Contact
            <span className="bg-white/20 p-1 rounded-full">
              <ArrowUpRight size={14} />
            </span>
          </a>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-primary)] shadow-sm cursor-pointer"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-[var(--nav-h)] left-0 right-0 z-40 bg-[var(--bg-main)]/95 backdrop-blur-md border-b border-[var(--border-color)] px-6 py-4 flex flex-col gap-1"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-3 px-3 rounded-xl text-[15px] font-medium text-[var(--text-primary)] hover:bg-[var(--card-bg)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="mt-2 flex items-center justify-center gap-2 bg-[var(--brand-primary)] text-white px-4 py-3 rounded-xl font-medium"
            >
              Contact
              <ArrowUpRight size={16} />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}