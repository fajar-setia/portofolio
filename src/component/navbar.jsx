import React from "react";
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/logo.png";

// Simulasi logo (ganti dengan import logo asli Anda)
const LogoPlaceholder = () => (
  <div className="h-15 w-15 bg-zinc-800/70 rounded-full flex items-center justify-center shadow-sm shadow-green-600/50">
    <img src={logo} alt="image" />
  </div>
);

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      <nav className="fixed w-full top-0 left-0 z-50 px-4 pt-6">
        {/* DESKTOP NAVBAR - Centered */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex mx-auto max-w-xl"
        >
          <div
            className={`flex transition-all duration-500 items-center justify-center px-8 py-3 space-x-6 w-full
              ${scrolled 
                ? "bg-black/20 shadow-xl shadow-green-800/50 backdrop-blur-lg" 
                : "bg-black/10 shadow-lg shadow-green-800/50 backdrop-blur-md"}
              border border-gray-700/50 rounded-full`}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <LogoPlaceholder />
            </motion.div>

            <div className="flex items-center justify-center space-x-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-300 relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layoutId={`desktop-hover-${item.name}`}
                  />
                  <item.icon className="mr-2 h-4 w-4 relative z-10" />
                  <span className="relative z-10">{item.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* MOBILE NAVBAR - Left aligned */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden flex justify-start"
        >
          <div
            className={`relative flex items-center py-2 px-2 transition-all duration-500
              ${scrolled 
                ? "bg-black/20 shadow-xl shadow-green-800/30 backdrop-blur-lg" 
                : "bg-black/10 shadow-lg shadow-green-800/20 backdrop-blur-md"}
              rounded-2xl border border-gray-700/50`}
          >
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white/10 inline-flex items-center justify-center p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <AnimatePresence>
              {isOpen && (
                <>
                  {/* Backdrop blur overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
                    onClick={() => setIsOpen(false)}
                  />
                  
                  {/* Mobile menu */}
                  <motion.div
                    key="mobile-menu"
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ 
                      duration: 0.3, 
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute top-16 left-0 w-64 bg-black/40 backdrop-blur-xl border border-gray-700/60 rounded-2xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-3 flex flex-col space-y-1">
                      {navItems.map((item, index) => (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          onClick={(e) => handleScrollTo(e, item.href)}
                          className="flex items-center text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl text-base font-medium space-x-3 transition-all duration-300 relative group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: 0.05 + index * 0.05,
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          />
                          <item.icon className="h-5 w-5 relative z-10" />
                          <span className="relative z-10">{item.name}</span>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </nav>
    </>
  );
}

export default Navbar;