import React from "react";
import { Github, Linkedin, Mail,Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="bg-zinc-900 text-gray-300">
      <div className="container mx-auto px-6 py-10 md:py-16 relative">
        {/* Konten Utama Footer - Menggunakan Flex untuk Kolom di MD ke atas */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0 md:space-x-12">
          {/* Kolom KIRI: Identitas & Deskripsi Padat */}
          <div className="md:w-1/3 space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight">
              {/* Nama dengan aksen gradient */}
              <span className="bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text">
                Fajar Setia Pambudi
              </span>
            </h2>

            <p className="text-gray-400 text-justify leading-snug">
              Terima kasih telah mengunjungi. Saya bersemangat untuk berbagi
              karya terbaru saya dan selalu terbuka untuk proyek kolaboratif
              yang menarik.
            </p>

            {/* Tombol Aksi Cepat (Email) */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-md shadow-green-600/30 hover:shadow-lg"
            >
              <Mail size={20} />
              Hubungi Saya
            </a>
          </div>

          <div className="md:w-1/3 flex flex-col items-center space-y-4 ">
            <h3 className="font-semibold text-white text-xl">Kata - Kata</h3>
            <p className="text-gray-400 text-justify">
              "Jangan bandingkan kamu dengan orang lain, tapi bandingkan dengan
              diri kamu sendiri kemarin, bulan lalu, tahun lalu. Sebab,
              satu-satunya perlombaan yang harus kamu menangkan adalah menjadi
              lebih baik dari dirimu yang dulu."
            </p>
          </div>

          {/* Kolom KANAN: Tautan Sosial & Navigasi Cepat */}
          <div className="md:w-1/3 flex flex-col items-center space-y-4">
            <h3 className="text-xl font-semibold text-white mb-2">Connect</h3>

            {/* Ikon Sosial */}
            <div className="grid-cols-3 grid justify-start md:justify-end gap-6">
              {/* GitHub */}
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

            {/* Anda bisa menambahkan Link Navigasi Cepat di sini jika diperlukan */}
            {/* <div className="flex flex-col items-start md:items-end space-y-2 text-gray-400">
              <a href="#about" className="hover:text-green-400 transition">About Me</a>
              <a href="#projects" className="hover:text-green-400 transition">Projects</a>
            </div> */}
          </div>
        </div>

        {/* Garis pembatas dan Copyright */}
        <div className="border-t border-zinc-700 w-full pt-6 mt-10">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} Fajar Setia Pambudi. All rights reserved. Built with
            React and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
