import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-gray-300 relative overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-800 to-transparent opacity-70 pointer-events-none"></div>

      <div className="relative container mx-auto px-6 py-10 flex flex-col items-center space-y-6">
        {/* Nama / Brand */}
        <h2 className="text-2xl font-bold text-white tracking-wide">
          Fajar Setia Pambudi
        </h2>

        {/* Deskripsi singkat */}
        <p className="max-w-md text-center text-gray-400 text-sm leading-relaxed">
          Terima kasih sudah mengunjungi portofolio saya. Saya senang berbagi karya, ide, dan pengalaman dalam dunia pengembangan web.
        </p>

        {/* Ikon Sosial */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transform transition duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transform transition duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:fajarsetia@example.com"
            className="hover:text-white hover:scale-110 transform transition duration-300"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Garis pembatas */}
        <div className="border-t border-zinc-700 w-full mt-6"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} Fajar Setia Pambudi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
