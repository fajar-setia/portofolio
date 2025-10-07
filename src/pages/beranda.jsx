import { useState, useEffect, use } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
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
} from "lucide-react";

import Tools1 from "../assets/tools/tools1.svg"; // Adjust the path as necessary
import Tools2 from "../assets/tools/tools2.svg"; // Adjust the path as necessary
import Tools3 from "../assets/tools/tools3.svg"; // Adjust the path as necessary
import Tools4 from "../assets/tools/tools4.svg"; // Adjust the path as necessary

export default function Beranda() {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, // Animation only happens once
      offset: 120, // Start animation when element is 100px from viewport
    });
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
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
      href: "#", 
      label: "GitHub" 
    },
    { 
      icon: Linkedin, 
      href: "#", 
      label: "LinkedIn" 
    },
    { 
      icon: Mail, 
      href: "#", 
      label: "Email" 
    },
    { 
      icon: Instagram, 
      href: "#", 
      label: "Instagram" 
    },
    { 
      icon: Facebook, 
      href: "#", 
      label: "Facebook" 
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-400 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

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
            <div
              data-aos="fade-right"
              className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 order-2 md:order-1"
            >
              <h4 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-green-400 via-green-500 to-yellow-400 text-transparent bg-clip-text animate-pulse">
                  fajar setia pambudi
                </span>
              </h4>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-2xl">
                Full Stack Developer & Creative Designer
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-xl leading-relaxed">
                I craft beautiful digital experiences with clean code and
                elegant design. Passionate about building products that make a
                difference.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto pt-4">
                <button className="group bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-green-500/40 hover:shadow-xl hover:shadow-green-500/60 hover:scale-105 w-full sm:w-auto">
                  View My Work
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 w-full sm:w-auto">
                  Download CV
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4 justify-center md:justify-start pt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-white/5 hover:bg-white/10 p-3 sm:p-4 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-110 group"
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-green-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div
              data-aos="fade-left"
              className="flex items-center justify-center relative order-1 md:order-2 py-12 md:py-0"
            >
              <div className="absolute w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-green-500/20 blur-3xl rounded-full"></div>
              {/* Foto profil */}
              <img
                src="/foto_aku_3.jpg"
                alt="fajar setia pambudi"
                className="relative z-10 w-40 h-40 sm:w-56 sm:h-56 md:w-115 md:h-115 object-cover rounded-full border-2 border-green-800 shadow-2xl hover:scale-105 hover:shadow-green-400/60 transition-all duration-500 ease-out"
                loading="lazy"
              />
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                  <Code className="w-6 h-6 text-green-400" />
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  As a passionate Full Stack Developer, I transform ideas into
                  elegant digital solutions. With years of experience in modern
                  web technologies, I specialize in creating responsive,
                  user-friendly applications that deliver exceptional user
                  experiences.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                  <Rocket className="w-6 h-6 text-green-400" />
                  What I Do
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I build scalable web applications, design intuitive user
                  interfaces, and implement robust backend systems. My approach
                  combines technical excellence with creative problem-solving to
                  deliver products that exceed expectations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { number: "50+", label: "Projects Completed", icon: Briefcase },
                { number: "30+", label: "Happy Clients", icon: Award },
                { number: "5+", label: "Years Experience", icon: Code },
                { number: "100%", label: "Satisfaction Rate", icon: Rocket },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300 text-center"
                >
                  <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </h4>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
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
