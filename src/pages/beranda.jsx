import { useState, useEffect, use } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowDown,
  Rocket,
  Code,
  Instagram,
  Facebook,
  Briefcase,
  Award,
  Phone,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";

import CVfile from "../../public/cv/CV.pdf"; // Adjust the path as necessary
import CVPreview from "../assets/cv/fajar-setia-pambudi.png"

import Tools1 from "../assets/tools/tools1.svg"; // Adjust the path as necessary
import Tools2 from "../assets/tools/tools2.svg"; // Adjust the path as necessary
import Tools3 from "../assets/tools/tools3.svg"; // Adjust the path as necessary
import Tools4 from "../assets/tools/tools4.svg"; // Adjust the path as necessary
import HTML from "../assets/tools/html.svg"; // Adjust the path as necessary
import CSS from "../assets/tools/css.svg";

import Foto from "../../public/foto_aku_3.jpg"; // Adjust the path as necessary
import { div } from "framer-motion/client";

function CV({ showCV, setShowCV }) {
  if (!showCV) return null;
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="bg-zinc-900 border border-green-700/50 rounded-4xl shadow-2xl max-w-xl w-lg mx-auto relative text-center max-h-[100vh] flex flex-col sm:mx-6 lg:mx-8 p-6 sm:p-8"
      >
        <button
          onClick={() => setShowCV(false)}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 z-10"
          aria-label="Close CV Download Popup"
        >
          &times;
        </button>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 border-b border-green-700/50 pb-2">
          Pratinjau CV
        </h3>

        {/* AREA PRATINJAU CV (MENGGUNAKAN GAMBAR) */}
        {/* overflow-y-auto memungkinkan gambar discroll jika terlalu tinggi */}
        <div className="flex-grow overflow-y-auto pr-1">
          <img
            // Ganti CVPicture dengan path file gambar Anda (jika ditaruh di public, pakai path relatif)
            src={CVPreview}
            alt="Pratinjau CV Fajar Setia Pambudi"
            loading="lazy"
            // max-w-full dan h-auto memastikan gambar responsif dan tidak melebihi lebar modal
            className="max-w-full mx-auto shadow-lg border border-zinc-700"
          />
        </div>
        {/* END AREA PRATINJAU CV */}

        {/* Tombol Download CV (Tetap di bawah) */}
        <a
          href={CVfile}
          download="Fajar_Setia_Pambudi_CV.pdf"
          target="_blank"
          className="group bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-green-500/40 hover:shadow-xl hover:shadow-green-500/60 w-full mt-4"
          onClick={() => {
            setTimeout(() => setShowCV(false), 500);
          }}
        >
          <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Download Versi PDF Lengkap
        </a>
      </motion.div>
    </div>
  );
}

export default function Beranda() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showCV, setShowCV] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, // Animation only happens once
      offset: 120, // Start animation when element is 100px from viewport
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  //item icons
  const listIcon = [
    {
      id: 1,
      gambar: Tools1,
      nama: "JavaScript",
      ket: "language",
    },
    {
      id: 2,
      gambar: Tools2,
      nama: "React",
      ket: "framework Js",
    },
    {
      id: 3,
      gambar: Tools3,
      nama: "tailwindcss",
      ket: "CSS Framework",
    },
    {
      id: 4,
      gambar: Tools4,
      nama: "C sharp",
      ket: "language",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/fajar-setia",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/setia72/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "fajarsetiapambudi@gmail.com",
      label: "Email",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/fajarpambudiii_/?next=%2Ffajarpambudiii_%2F",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://web.facebook.com/fajar.setia.3998263",
      label: "Facebook",
    },
  ];

  //framer motion variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 3.0 } },
  };

  const image = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100, // Mengatur kekakuan. Nilai lebih tinggi = transisi lebih cepat.
        damping: 15, // Mengatur redaman/gesekan. Nilai lebih tinggi = pantulan lebih sedikit/lemah.
        mass: 0.5, // Mengurangi mass (berat) agar terasa lebih ringan.
      },
    },
  };
  const imageTween = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween", // Bisa dihilangkan karena ini default
        duration: 0.8, // Tentukan durasi dalam detik
        ease: "easeOut", // Mulai cepat, melambat di akhir
      },
    },
  };

  const imageInertia = {
    hidden: { x: -100 },
    show: {
      x: 0,
      transition: {
        type: "inertia",
        velocity: 500, // Kecepatan awal animasi
        power: 1, // Seberapa jauh pergerakan
        bounce: 0.5, // Sedikit pantulan di akhir (opsional)
      },
    },
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Animated Background Elements */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 197, 94, 0.15), transparent 50%)`,
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center py-8">
            {/* Left Side - Content */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              animate="show"
              className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 order-2 md:order-1"
            >
              <motion.h4
                variants={item}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-green-400 via-green-500 to-zinc-200 text-transparent bg-clip-text animate-pulse">
                  fajar setia pambudi
                </span>
              </motion.h4>

              <motion.p
                variants={item}
                className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-2xl"
              >
                Junior Developer
              </motion.p>

              <motion.p
                variants={item}
                className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-xl leading-relaxed"
              >
                I craft beautiful digital experiences with clean code and
                elegant design. Passionate about building products that make a
                difference.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={item}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto pt-4"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(34,197,94,0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="group bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-green-500/40 hover:shadow-xl hover:shadow-green-500/60 hover:scale-105 w-full sm:w-auto"
                >
                  View My Work
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  onClick={() => setShowCV(true)}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(34,197,94,0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-white/10 hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 w-full sm:w-auto"
                >
                  Download CV
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4 justify-center md:justify-start pt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    className="bg-white/5 hover:bg-white/10 p-3 sm:p-4 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-110 group"
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-green-400 transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial="hidden"
              animate="show"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={imageTween}
              className="flex items-center justify-center relative order-1 md:order-2 py-12 md:py-0"
            >
              <div className="absolute w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-green-500/20 blur-3xl rounded-full"></div>
              {/* Foto profil */}
              <img
                src={Foto}
                alt="fajar setia pambudi"
                className="relative z-10 w-40 h-40 sm:w-56 sm:h-56 md:w-115 md:h-115 object-cover rounded-full border-2 border-green-800 shadow-2xl hover:scale-105 hover:shadow-green-400/60 transition-all duration-500 ease-out"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-500" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-0 sm:top-20 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-green-500/25 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-0 sm:bottom-20 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-green-400/20 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* CV Modal */}
      <CV showCV={showCV} setShowCV={setShowCV} />

      {/*about section*/}
      <section
        id="about"
        className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text">
                Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-500 mx-auto rounded-full"></div>
          </div>

          {/* Roadmap Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Winding Path Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 via-green-400/40 to-green-500/20"></div>
            </div>

            {/* Roadmap Items */}
            <div className="space-y-12 md:space-y-24">
              {/* Start Point */}
              <div className="relative flex items-center justify-center">
                <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 rounded-full shadow-lg shadow-green-500/50">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Journey Item 1 - Left */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3 justify-center md:justify-end mb-4">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">
                        The Beginning
                      </h3>
                      <Code className="w-6 h-6 text-green-400" />
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      awal perjalanan saya di dunia pengembangan web dimulai
                      dengan belajar HTML, CSS, dan JavaScript. Saya membuat
                      proyek-proyek kecil untuk memahami dasar-dasar
                      pengembangan web.
                    </p>
                    <div className="mt-4 flex justify-center md:justify-end gap-2">
                      <span className="flex items-center px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-400">
                        <span className="icon w-5 h-5">
                          <img src={HTML} alt="image" />
                        </span>
                        <span className="text">HTML</span>
                      </span>
                      <span className="flex items-center px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-400">
                        <span className="icon w-5 h-5">
                          <img src={CSS} alt="image" />
                        </span>
                        <span className="text">CSS</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center md:justify-start">
                  <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg shadow-green-500/50 ring-4 ring-green-500/20"></div>
                </div>
              </div>

              {/* Journey Item 2 - Right */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center md:justify-end">
                  <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50 ring-4 ring-green-400/20"></div>
                </div>
                <div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3 mb-4">
                      <Briefcase className="w-6 h-6 text-green-400" />
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">
                        Professional Growth
                      </h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Worked on 50+ projects with 30+ happy clients, mastering
                      modern technologies and delivering exceptional user
                      experiences.
                    </p>
                    <div className="mt-4 flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-400">
                        React
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-400">
                        Node.js
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-400">
                        Python
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Journey Item 3 - Left */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3 justify-center md:justify-end mb-4">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">
                        Expertise Mastery
                      </h3>
                      <Award className="w-6 h-6 text-green-400" />
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Built scalable applications, designed intuitive
                      interfaces, and implemented robust backend systems with
                      100% client satisfaction.
                    </p>
                    <div className="mt-4 flex justify-center md:justify-end gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-400">
                        Full Stack
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-400">
                        UI/UX
                      </span>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center md:justify-start">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50 ring-4 ring-yellow-400/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* skills section */}
      <section
        id="skills"
        className="relative xl:px-6 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 bg-zinc-800 "
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text">
                Skills
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-500 mx-auto"></div>
          </div>

          <div
            data-aos="fade-out"
            className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-4"
          >
            {listIcon.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 flex items-center justify-center-safe gap-10 "
              >
                <img
                  src={item.gambar}
                  alt={item.nama}
                  className="w-16 h-16 mb-4"
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.nama}
                  </h3>
                  <p className="text-gray-400">{item.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* contact section */}
      <section
        id="contact"
        className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Get In{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text">
                Touch
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's work together to create something
              amazing!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors"
                    placeholder="type your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors"
                    placeholder="@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors"
                    placeholder="Project Discussion"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-green-500/40 hover:shadow-xl hover:shadow-green-500/60 hover:scale-105"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500/20 p-3 rounded-xl">
                      <Mail className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <p className="text-gray-400">
                        fajarsetiapambudi@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500/20 p-3 rounded-xl">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Phone</h4>
                      <p className="text-gray-400">+62883595329 (WA)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500/20 p-3 rounded-xl">
                      <MapPin className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Location</h4>
                      <p className="text-gray-400">indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Follow Me
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      icon: Github,
                      label: "GitHub",
                      color: "hover:bg-gray-700",
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      color: "hover:bg-blue-700",
                    },
                    {
                      icon: Instagram,
                      label: "Instagram",
                      color: "hover:bg-pink-700",
                    },
                    {
                      icon: Facebook,
                      label: "Facebook",
                      color: "hover:bg-blue-600",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`flex items-center gap-2 bg-white/5 ${social.color} p-3 rounded-xl transition-all duration-300 group`}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
