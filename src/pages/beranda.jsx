import { useState, useEffect, use } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { AnimatePresence, motion, scale } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { initialData } from "./data";
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
  ListIcon,
  X,
  Tag,
  ExternalLink,
} from "lucide-react";

//import cv dan foto hero image
import CVfile from "../../public/cv/CV.pdf"; // Adjust the path as necessary
import CVPreview from "../assets/cv/fajar-setia-pambudi.png";
import Foto from "../../public/foto_aku_3.jpg";

//import gambar
import Tools1 from "../assets/tools/tools1.svg"; // Adjust the path as necessary
import Tools2 from "../assets/tools/tools2.svg"; // Adjust the path as necessary
import Tools3 from "../assets/tools/tools3.svg"; // Adjust the path as necessary
import Tools4 from "../assets/tools/tools4.svg"; // Adjust the path as necessary
import HTML from "../assets/tools/html.svg"; // Adjust the path as necessary
import CSS from "../assets/tools/css.svg";
import PHP from "../assets/tools/php.svg";
import MYSQL from "../assets/tools/MYSQL.svg";
import POSTGRES from "../assets/tools/POSTGRES.svg";
import GIT from "../assets/tools/git.svg";
import GITHUB from "../assets/tools/github.svg";
import NODE from "../assets/tools/node.svg";
import BOOTSTRAP from "../assets/tools/bootstrap.svg";
import { i, s } from "framer-motion/client";

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

function ContactForm({ socialLinks }) {
  const [state, handleSubmit] = useForm("mjkaaayv");

  if (state.succeeded) {
    return (
      <div className="text-center text-green-400 py-20">
        Thanks for joining!
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Get In{" "}
          <span className="bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text">
            Touch
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-500 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Have a project in mind? Let&apos;s work together to create something
          amazing!
        </p>
      </div>

      {/* Grid Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Form */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Send Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 mb-2 text-sm font-medium"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors"
                placeholder="Type your name"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 mb-2 text-sm font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors"
                placeholder="@example.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-gray-300 mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors"
                placeholder="Project Discussion"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-green-500/40 hover:shadow-xl hover:shadow-green-500/60 hover:scale-105"
            >
              Send Message
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          {/* Info Section */}
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
                  <p className="text-gray-400">fajarsetiapambudi@gmail.com</p>
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
                  <p className="text-gray-400">Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Me Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target={social.label === "Email" ? "_self" : "_blank"}
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
  );
}

function Project({ socialLinks, Data = [] }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = () => setSelectedProject(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="max-w-7xl py-10 mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          My Recent{" "}
          <span className="bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text">
            Projects
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-500 mx-auto rounded-full"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Here are a few projects I've worked on recently. Want to see more?{" "}
          <a
            href={socialLinks[0].href}
            className="text-green-400 hover:underline"
          >
            Check out my GitHub.
          </a>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {Data.map((project, index) => (
          <motion.div
            key={project.id || index}
            // Animasi saat kartu masuk ke viewport
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            // Efek Hover yang lebih menawan (naik dan shadow hijau)
            whileHover={{
              y: -5,
              boxShadow: "0 10px 20px rgba(52, 211, 153, 0.2)",
              transition: { duration: 0.3 },
            }}
            // Styling Kartu Utama
            className="bg-zinc-800/70 backdrop-blur-md border border-zinc-700/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 flex flex-col shadow-xl"
          >
            {/* 1. GAMBAR PROYEK */}
            <img
              src={project.image}
              alt={project.title}
              // Meningkatkan radius sudut, menambahkan shadow
              className="w-full h-48 object-cover rounded-xl mb-6 shadow-lg border border-zinc-700/50"
              loading="lazy"
            />

            {/* 2. JUDUL PROYEK */}
            <h3 className="text-2xl font-extrabold text-white mb-3 text-center">
              {project.title}
            </h3>

            {/* 3. DESKRIPSI (Teks lebih jelas) */}
            <p className="text-gray-400 text-justify leading-relaxed flex-grow mb-4">
              {project.description}
            </p>

            {/* 4. TEKNOLOGI YANG DIPAKAI (Menggunakan perbaikan ikon kecil) */}
            <div className="mt-4 flex gap-2 flex-wrap items-center justify-center border-t border-zinc-700/50 pt-4">
              {project.tools?.map((item, idx) => (
                <motion.span
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }} // Gunakan 'animate' karena sudah di dalam whileInView
                  transition={{ delay: idx * 0.05 + 0.3 }}
                  // Styling Tag yang direvisi (flex items-center)
                  className="flex items-center gap-1 px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-400 font-medium"
                >
                  {/* Wadah Ikon Kecil (4x4) */}
                  <span className="w-4 h-4 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </span>
                  {/* Nama Teknologi */}
                  <span className="text-white/80">{item.title}</span>
                </motion.span>
              ))}
            </div>

            {/* 5. TOMBOL AKSI */}
            <div className="flex gap-4 mt-6 items-center justify-center">
              <a
                // Menggunakan onClick untuk modal
                onClick={() => setSelectedProject(project)}
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-5 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-green-500/40 hover:shadow-xl hover:shadow-green-500/60 cursor-pointer"
              >
                View Details
                <Rocket className="w-4 h-4" />
              </a>
              <a
                href={project.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 px-5 py-3 text-green-400 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-green-500/40 gap-2"
              >
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            // OVERLAY
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[100] p-4"
            onClick={closeModal} // Tutup modal ketika klik di luar
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 50 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                damping: 20,
                stiffness: 300,
              }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-800 border-2 border-green-600/50 py-6 px-6 rounded-4xl shadow-2xl shadow-green-500/20"
            >
              <motion.div
                // KONTEN MODAL
                className="bg-zinc-900 rounded-4xl max-w-4xl w-full p-8 text-white relative overflow-y-auto max-h-[90vh] shadow-2xl shadow-green-500/20"
                initial={{ scale: 0.95, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 50 }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                }}
                onClick={(e) => e.stopPropagation()} // Mencegah penutupan saat klik di dalam modal
              >
                {/* Tombol Tutup */}
                <button
                  className="absolute top-4 right-4 p-2 rounded-full text-gray-400 bg-zinc-800 hover:bg-zinc-700 hover:text-white transition-colors z-10"
                  onClick={closeModal}
                >
                  <X className="w-6 h-6" />
                </button>

                {/* HEADER & JUDUL */}
                <div className="border-b border-zinc-700/50 pb-4 mb-6">
                  <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                    {selectedProject.title}
                  </h2>

                  {/* TAMPILAN TAGS/TOOLS */}
                  {selectedProject.tools && (
                    <div className="flex flex-wrap gap-4 mt-2 text-gray-400 text-sm items-center">
                      <Tag className="w-7 h-7 text-green-500" />
                      {selectedProject.tools.map((tool, index) => (
                        <span
                          key={tool.id || index}
                          className="flex px-3 py-1.5 bg-green-500/10 rounded-full font-medium justify-center items-center"
                        >
                          <span className="w-7 h-7 flex items-center justify-center">
                            <img
                              src={tool.image}
                              alt={tool.title}
                              className="w-full h-full object-contain"
                              loading="lazy"
                            />
                          </span>
                          <span>{tool.title}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* DESKRIPSI & RINGKASAN */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-200 mb-2">
                    Project Overview
                  </h3>
                  <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                    {/* Gunakan deskripsi yang lebih panjang jika ada field 'fullDescription', jika tidak pakai 'description' */}
                    {selectedProject.fullDescription ||
                      selectedProject.description}
                  </p>
                </div>

                {/* 🟢 KODE TOMBOL AKSI CEPAT (HARUS ADA DI SINI) 🟢 */}
                <div className="flex gap-4 border-t border-zinc-700/50 pt-4 items-center justify-center">
                  {selectedProject.githubBe && ( // Asumsi link Live Demo ada di field 'link'
                    <a
                      href={selectedProject.githubBe}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors shadow-md shadow-green-500/30"
                    >
                      Code Backend <Github className="w-4 h-4" />
                    </a>
                  )}
                  {selectedProject.githubFe && (
                    <a
                      href={selectedProject.githubFe}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors shadow-md shadow-green-500/30"
                    >
                      Code Frontend <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* GALERI SCREENSHOTS */}
                {selectedProject.screenshots &&
                selectedProject.screenshots.length > 0 ? (
                  <div className="mt-4 pt-4 border-t border-zinc-700/50">
                    <h3 className="text-xl font-bold text-gray-200 mb-4">
                      Screenshots ({selectedProject.screenshots.length})
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedProject.screenshots.map((shot, idx) => (
                        <motion.div
                          key={shot.id || idx}
                          className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg border border-zinc-700/70"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                          <img
                            src={shot.src || shot.image} // Mendukung field 'src' atau 'image'
                            alt={shot.caption || shot.description}
                            className="w-full h-auto object-cover border-b border-zinc-700/70"
                            loading="lazy"
                            whileHover={{ scale: 0 }}
                          />
                          <p className="p-3 text-sm text-gray-400 text-center italic">
                            {shot.caption || shot.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-400 italic mt-4 border-t border-zinc-700/50 pt-4">
                    No detailed screenshots available for this project.
                  </p>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Beranda() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showCV, setShowCV] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  //array about 2
  const listIconPro = [
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
    {
      id: 5,
      gambar: HTML,
      nama: "HTML",
      ket: "markup language",
    },
    {
      id: 6,
      gambar: CSS,
      nama: "CSS",
      ket: "style sheet language",
    },
    {
      id: 7,
      gambar: PHP,
      nama: "PHP",
      ket: "language",
    },
    {
      id: 8,
      gambar: MYSQL,
      nama: "MySQL",
      ket: "database",
    },
    {
      id: 9,
      gambar: POSTGRES,
      nama: "PostgreSQL",
      ket: "database",
    },
    {
      id: 10,
      gambar: BOOTSTRAP,
      nama: "BOOTSTRAP",
      ket: "CSS Framework",
    },
  ];

  //array about 3
  const listIconTech = [
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
    {
      id: 5,
      gambar: HTML,
      nama: "HTML",
      ket: "markup language",
    },
    {
      id: 6,
      gambar: CSS,
      nama: "CSS",
      ket: "style sheet language",
    },
    {
      id: 7,
      gambar: PHP,
      nama: "PHP",
      ket: "language",
    },
    {
      id: 8,
      gambar: MYSQL,
      nama: "MySQL",
      ket: "database",
    },
    {
      id: 9,
      gambar: POSTGRES,
      nama: "PostgreSQL",
      ket: "database",
    },
    {
      id: 10,
      gambar: GIT,
      nama: "Git",
      ket: "version control",
    },
    {
      id: 11,
      gambar: GITHUB,
      nama: "GitHub",
      ket: "repository hosting",
    },
    {
      id: 12,
      gambar: NODE,
      nama: "Node.js",
      ket: "runtime environment",
    },
  ];

  //data media social
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
      href: "#contact",
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
  //herosection
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

  //container skils
  const containerSkills = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Jeda waktu antara setiap kartu (0.1 detik)
      },
    },
  };

  const itemSkills = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring", // Menggunakan jenis pegas untuk efek pantulan ringan
        damping: 10,
        stiffness: 100,
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

  //about section
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "BreaseOut",
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
      <section
        id="home"
        className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20"
      >
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
                  onClick={() => {
                    const workSection = document.getElementById("projects");
                    workSection?.scrollIntoView({ behavior: "smooth" });
                  }}
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
                    target={social.label === "Email" ? "_self" : "_blank"}
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
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text">
                Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Roadmap Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Winding Path Line */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 h-full hidden md:block pointer-events-none"
              style={{ width: "600px" }}
            >
              <svg
                className="w-full h-full"
                viewBox="0 0 600 1200"
                preserveAspectRatio="xMidYMid meet"
              >
                <motion.path
                  d="M 300 80 C 450 150, 480 280, 400 400 C 320 520, 150 600, 200 750 C 250 900, 420 980, 300 1150"
                  stroke="#12AD2B"
                  strokeWidth="7"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.8 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  style={{
                    filter:
                      "drop-shadow(0 0 8px rgba(18, 173, 43, 0.6)) drop-shadow(0 0 16px rgba(18, 173, 43, 0.4)) drop-shadow(0 0 24px rgba(18, 173, 43, 0.2))",
                  }}
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#34d399" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* Roadmap Items */}
            <div className="space-y-10 md:space-y-15">
              {/* Roadmap Items */}
              <motion.div
                className="space-y-12 md:space-y-24 relative"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              ></motion.div>
              {/* Start Point */}
              <motion.div
                variants={itemVariants}
                className="relative flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-r from-green-600 to-green-500 p-4 rounded-full shadow-lg shadow-green-500/50"
                >
                  <Rocket className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>

              {/* Journey Item 1 - Left */}
              <motion.div
                className="relative grid md:grid-cols-2 gap-8 items-center"
                variants={itemVariants}
              >
                <div className="md:text-right order-2 md:order-1">
                  <motion.div
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
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
                    <div className="mt-4 flex justify-center md:justify-end gap-2 flex-wrap">
                      {listIconPro
                        .filter(
                          (item) =>
                            item.id === 1 || item.id === 5 || item.id === 6
                        )
                        .map((item, idx) => (
                          <motion.span
                            key={item.id}
                            className="flex items-center px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-400"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 + 0.3 }}
                          >
                            <span className="icon w-5 h-5">
                              <img
                                src={item.gambar}
                                alt="image"
                                className="w-5 h-5 object-contain"
                              />
                            </span>
                            <span className="text">{item.nama}</span>
                          </motion.span>
                        ))}
                    </div>
                  </motion.div>
                </div>
                <div className="order-1 md:order-2 flex justify-center md:justify-start">
                  <motion.div
                    className="w-4 h-4 bg-green-500 rounded-full shadow-lg shadow-green-500/50 ring-4 ring-green-500/20"
                    variants={dotVariants}
                  />
                </div>
              </motion.div>

              {/* Journey Item 2 - Right */}
              <motion.div
                variants={itemVariants}
                className="relative grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="flex justify-center md:justify-end">
                  <motion.div
                    variants={dotVariants}
                    className="w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50 ring-4 ring-green-400/20"
                  ></motion.div>
                </div>
                <div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Briefcase className="w-6 h-6 text-green-400" />
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">
                        Professional Growth
                      </h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Saya pernah mengerjakan project e-commerce perkebunan pada
                      mata kuliah MPTI menggunakan HTML, CSS, Bootstrap,
                      JavaScript, PHP, dan MySQL. Selain itu, saya juga membuat
                      project mandiri berupa website kosan dengan React.js dan
                      Tailwind CSS di bagian frontend, C# sebagai backend, serta
                      PostgreSQL untuk database.
                    </p>
                    <div className="mt-4 flex gap-2 flex-wrap">
                      {listIconPro.map((item, idx) => (
                        <motion.span
                          key={item.id}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 + 0.3 }}
                          className="flex items-center px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-400"
                        >
                          <span className="icon w-5 h-5">
                            <img src={item.gambar} alt="image" />
                          </span>
                          <span className="text">{item.nama}</span>
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Journey Item 3 - Left */}
              <motion.div
                variants={itemVariants}
                className="relative grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="md:text-right order-2 md:order-1">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center gap-3 justify-center md:justify-end mb-4">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">
                        Technical Skills
                      </h3>
                      <Award className="w-6 h-6 text-green-400" />
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Berfokus pada pengembangan web di sisi frontend dan
                      backend. Pada bagian frontend, menggunakan React.js,
                      Tailwind CSS, HTML, CSS, JavaScript, serta Bootstrap untuk
                      membangun tampilan yang responsif dan modern. Untuk
                      backend, berpengalaman dengan PHP dan C# (ASP.NET Core)
                      menggunakan basis data MySQL dan PostgreSQL. Juga terbiasa
                      menggunakan Git dan GitHub untuk version control, serta
                      memahami konsep API dan autentikasi JWT dalam pengembangan
                      aplikasi web.
                    </p>
                    <div className="mt-4 flex justify-center md:justify-end gap-2 flex-wrap">
                      {listIconTech.map((item, idx) => (
                        <motion.span
                          key={item.id}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 + 0.3 }}
                          className="flex items-center px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-400"
                        >
                          <span className="icon w-5 h-5">
                            <img src={item.gambar} alt="image" />
                          </span>
                          <span className="text">{item.nama}</span>
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                <div className="order-1 md:order-2 flex justify-center md:justify-start">
                  <motion.div
                    variants={dotVariants}
                    className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50 ring-4 ring-yellow-400/20"
                  />
                </div>
              </motion.div>
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
          <motion.div
            variants={containerSkills}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-4"
          >
            {listIconTech.map((item) => (
              <motion.div
                variants={itemSkills}
                key={item.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 flex items-center justify-center-safe gap-10 "
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 15px rgba(52, 211, 153, 0.4)", // Shadow hijau
                  transition: { duration: 0.2 },
                }}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* project section */}
      <section
        id="projects"
        className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24"
      >
        <Project socialLinks={socialLinks} Data={initialData} />
      </section>

      {/* contact section */}
      <section
        id="contact"
        className=" px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28"
      >
        <ContactForm socialLinks={socialLinks} />
      </section>
    </div>
  );
}
