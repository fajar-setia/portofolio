// /home/fajar-setia-pambudi/project-portofolio/my-porto/src/pages/data.js

// project perkebunan MPTI
import cuplikanDatabase from "../assets/project_porto/perkebunan_MPTI/cuplikanDatabase.png";
import cuplikanScript from "../assets/project_porto/perkebunan_MPTI/cuplikanScript.png";
import dashboardAdmin from "../assets/project_porto/perkebunan_MPTI/halamanDashboardAdmin.png";
import dashboardUser from "../assets/project_porto/perkebunan_MPTI/halamanHomeUser.png";
import halamanLogin from "../assets/project_porto/perkebunan_MPTI/tampilanLoginProject.png";

// kost
import API from "../assets/project_porto/Kost/API_JSON.png";
import scriptBackend from "../assets/project_porto/Kost/cuplikanScriptBackend.png";
import scriptFrontend from "../assets/project_porto/Kost/cuplikanScriptFrontend.png";
import Database from "../assets/project_porto/Kost/Database.png";
import dashboardAdminKost from "../assets/project_porto/Kost/halamanAdmin.png";
import dashboardUserKost from "../assets/project_porto/Kost/halamanBerandaKost.png";

//Barbershop
import leandingPage from "../assets/project_porto/Barber/landingpage.png";
import services from "../assets/project_porto/Barber/servicespage.png";
import excuses from "../assets/project_porto/Barber/excuses.png";
import client from "../assets/project_porto/Barber/clientpage.png";

//re-design website PMB
import leandingPagePMB from "../assets/project_porto/re-designPMB/tampilan-landingPage.png";
import HomeAfterLogin from "../assets/project_porto/re-designPMB/tampilan-afterLoginHome.png";
import RegistrationAfterLogin from "../assets/project_porto/re-designPMB/registrationAfterLogin.png";
import ServiceMaba from "../assets/project_porto/re-designPMB/serviceMaba.png";
import UploadBerkas from "../assets/project_porto/re-designPMB/uploadBerkas.png";
import Mbkm from "../assets/project_porto/re-designPMB/mbkm.png";
import HasilSeleksi from "../assets/project_porto/re-designPMB/resultSelection.png";

//Orders Management System
//admin
import DashboardAdmin from "../assets/project_porto/orders_management_system/admin/adminDashboard.png";
import KitchenAdmin from "../assets/project_porto/orders_management_system/admin/kitchenOrders.png";
import MenuAdmin from "../assets/project_porto/orders_management_system/admin/menuManagement.png";
import CategoryAdmin from "../assets/project_porto/orders_management_system/admin/category.png";
//users
import DashboardUser from "../assets/project_porto/orders_management_system/users/berandaUsers.png";
import CartUser from "../assets/project_porto/orders_management_system/users/cart.png";
import CheckoutUser from "../assets/project_porto/orders_management_system/users/formOrder.png";
import UserOrder from "../assets/project_porto/orders_management_system/users/userOrder.png";

//tools
import HTML from "../assets/tools/html.svg";
import CSS from "../assets/tools/css.svg";
import JS from "../assets/tools/tools1.svg";
import php from "../assets/tools/php.svg";
import MYSQL from "../assets/tools/MYSQL.svg";
import BOOTSTRAP from "../assets/tools/bootstrap.svg";
import React from "../assets/tools/tools2.svg"; // Adjust the path as necessary
import Tailwind from "../assets/tools/tools3.svg"; // Adjust the path as necessary
import CShap from "../assets/tools/tools4.svg"; // Adjust the path as necessary
import POSTGRES from "../assets/tools/POSTGRES.svg";
import GIT from "../assets/tools/git.svg";
import GITHUB from "../assets/tools/github.svg";
import NODE from "../assets/tools/node.svg";
import SWAGGER from "../assets/tools/swagger.svg";
import vite from "../assets/tools/vite.svg";
import Net from "../assets/tools/dotNet.svg";
import Vue from "../assets/tools/vuejs.svg";
import Typescript from "../assets/tools/typescript.svg";
import laravel from "../assets/tools/laravel.svg";
import SQLITE from "../assets/tools/sqlite.svg";

//untuk tampilan awal
export const initialData = [
  {
    id: 1,
    title: "Perkebunan MPTI",
    description:
      "Sistem informasi perkebunan MPTI yang membantu dalam pengelolaan data tanaman, jadwal perawatan, dan laporan cuplikan data.",
    image: dashboardUser,
    githubBe: " ",
    githubFe: "https://github.com/fajar-setia/Kebun-Wiyono",
    screenshots: [
      {
        id: 1,
        image: halamanLogin,
        description: "ini adalah halaman login dari project perkebunan",
      },
      {
        id: 2,
        image: dashboardAdmin,
        description:
          "Halaman dashboard untuk admin yang menyediakan fitur manajemen data perkebunan, termasuk penambahan, pengeditan, dan penghapusan data tanaman serta pengguna.",
      },
      {
        id: 3,
        image: cuplikanScript,
        description:
          "iCuplikan kode program yang menunjukkan bagaimana fitur-fitur utama dalam aplikasi diimplementasikan, termasuk logika bisnis dan interaksi dengan database.",
      },
      {
        id: 4,
        image: cuplikanDatabase,
        description:
          "Cuplikan struktur database yang digunakan dalam sistem informasi perkebunan MPTI. Database ini menyimpan semua data terkait tanaman, pengguna, dan aktivitas perkebunan.",
      },
    ],
    tools: [
      {
        id: 1,
        title: "HTML",
        image: HTML,
      },
      {
        id: 2,
        title: "CSS",
        image: CSS,
      },
      {
        id: 3,
        title: "JavaScript",
        image: JS,
      },
      {
        id: 4,
        title: "PHP",
        image: php,
      },
      {
        id: 5,
        title: "MYSQL",
        image: MYSQL,
      },
      {
        id: 6,
        title: "BOOTSTRAP",
        image: BOOTSTRAP,
      },
    ],
  },
  {
    id: 2,
    title: "Aplikasi Kost",
    description:
      "Aplikasi kost yang memudahkan pengelolaan data kamar, fasilitas, dan pemesanan kost dengan fitur lengkap untuk admin dan pengguna.",
    image: dashboardUserKost,
    githubBe: "https://github.com/fajar-setia/API-for-ReactKost",
    githubFe: "https://github.com/fajar-setia/React-Kost",
    screenshots: [
      {
        id: 1,
        image: dashboardAdminKost,
        description:
          "Halaman dashboard untuk admin yang menyediakan fitur manajemen data kost, termasuk penambahan, pengeditan, dan penghapusan data kamar serta pemesanan.",
      },
      {
        id: 2,
        image: Database,
        description:
          "uplikan struktur database yang digunakan dalam aplikasi kost. Database ini menyimpan semua data terkait kamar, fasilitas, pengguna, dan pemesanan.",
      },
      {
        id: 3,
        image: scriptFrontend,
        description:
          "Cuplikan kode program frontend yang menunjukkan bagaimana antarmuka pengguna dirancang dan diimplementasikan, termasuk interaksi pengguna dan tampilan data.",
      },
      {
        id: 4,
        image: scriptBackend,
        description:
          "Cuplikan kode program backend yang menunjukkan bagaimana server menangani permintaan dari klien, mengelola logika bisnis, dan berinteraksi dengan database.",
      },
      {
        id: 5,
        image: API,
        description:
          "API JSON yang digunakan untuk mengelola data kost, termasuk informasi tentang kamar, fasilitas, dan pemesanan. API ini memungkinkan komunikasi antara frontend dan backend.",
      },
    ],
    tools: [
      {
        id: 1,
        title: "React",
        image: React,
      },
      {
        id: 2,
        title: "TailwinCSS",
        image: Tailwind,
      },
      {
        id: 3,
        title: "Node Js",
        image: NODE,
      },
      {
        id: 4,
        title: "JavaScript",
        image: JS,
      },
      {
        id: 5,
        title: "C Shap",
        image: CShap,
      },
      {
        id: 6,
        title: "postgreSQL",
        image: POSTGRES,
      },
      {
        id: 7,
        title: "Swagger",
        image: SWAGGER,
      },
      {
        id: 8,
        title: "Vite",
        image: vite,
      },
      {
        id: 9,
        title: ".Net",
        image: Net,
      },
    ],
  },
  {
    id: 3,
    title: "Barbershop Landing Page",
    description:
      "Landing page untuk barbershop yang menampilkan layanan, galeri, dan informasi kontak dengan desain menarik dan responsif.",
    image: leandingPage,
    githubBe: "https://github.com/fajar-setia/Barber-shop",
    githubFe: "https://github.com/fajar-setia/Barber-shop",
    screenshots: [
      {
        id: 1,
        image: leandingPage,
        description: "Ini adalah tampilan landing page dari project barbershop",
      },
      {
        id: 2,
        image: services,
        description:
          "Ini adalah tampilan services page dari project barbershop",
      },
      {
        id: 3,
        image: excuses,
        description: "Ini adalah tampilan excuses page dari project Barbershop",
      },
      {
        id: 4,
        image: client,
        description: "Ini adalah tampilan client page dari project Barbershop",
      },
    ],
    tools: [
      {
        id: 1,
        title: "Vuejs",
        image: Vue,
      },
      {
        id: 2,
        title: "JavaScript",
        image: JS,
      },
      {
        id: 3,
        title: "Vite",
        image: vite,
      },
      {
        id: 4,
        title: "TailwinCSS",
        image: Tailwind,
      },
      {
        id: 5,
        title: "Node Js",
        image: NODE,
      },
    ],
  },
  {
    id: 4,
    title: "Re-design Website PMB",
    description:
      "Re-design website PMB dengan tampilan modern dan responsif untuk meningkatkan pengalaman pengguna dalam mengakses informasi pendaftaran mahasiswa baru.",
    image: leandingPagePMB,
    githubBe: "https://github.com/fajar-setia/re-Design-website-PMB-UAD",
    githubFe: "https://github.com/fajar-setia/re-Design-website-PMB-UAD",
    screenshots: [
      {
        id: 1,
        image: leandingPagePMB,
        description:
          "Ini adalah tampilan landing page dari project re-design website PMB, yang menampilkan informasi penting dan fitur utama untuk calon mahasiswa baru yang ingin mendaftar ke perguruan tinggi melalui sistem PMB. Tampilan ini dirancang dengan desain yang menarik dan responsif untuk memberikan pengalaman pengguna yang optimal saat mengakses informasi pendaftaran. ",
      },
      {
        id: 2,
        image: HomeAfterLogin,
        description:
          "Ini adalah tampilan home after login dari project re-design website PMB yang menampilkan informasi penting dan fitur utama untuk pengguna yang sudah login.",
      },
      {
        id: 3,
        image: RegistrationAfterLogin,
        description:
          "Ini adalah tampilan registration after login dari project re-design website PMB yang menyediakan formulir pendaftaran yang mudah digunakan dan responsif untuk calon mahasiswa baru.",
      },
      {
        id: 4,
        image: ServiceMaba,
        description:
          "Ini adalah tampilan service maba dari project re-design website PMB yang menampilkan berbagai layanan dan informasi penting untuk mahasiswa baru, seperti jadwal kegiatan, pengumuman, dan panduan pendaftaran.",
      },
      {
        id: 5,
        image: UploadBerkas,
        description:
          "Ini adalah tampilan upload berkas dari project re-design website PMB yang memungkinkan mahasiswa baru untuk mengunggah dokumen yang diperlukan dalam proses pendaftaran.",
      },
      {
        id: 6,
        image: Mbkm,
        description:
          "Ini adalah tampilan halaman MBKM dari project re-design website PMB yang menyediakan informasi dan layanan terkait program Merdeka Belajar Kampus Merdeka (MBKM) untuk mahasiswa baru, termasuk panduan, jadwal, dan pengumuman terkait program tersebut.",
      },
      {
        id: 7,
        image: HasilSeleksi,
        description:
          "Ini adalah tampilan halaman hasil seleksi dari project re-design website PMB yang menampilkan informasi tentang hasil seleksi calon mahasiswa baru. Halaman ini memberikan akses mudah bagi calon mahasiswa untuk melihat status pendaftaran mereka, termasuk apakah mereka diterima, ditolak, atau masuk dalam daftar tunggu, serta informasi terkait langkah selanjutnya yang perlu diambil.",
      },
    ],
    tools: [
      {
        id: 1,
        title: "React",
        image: React,
      },
      {
        id: 2,
        title: "Typescript",
        image: Typescript,
      },
      {
        id: 3,
        title: "Vite",
        image: vite,
      },
      {
        id: 4,
        title: "TailwinCSS",
        image: Tailwind,
      },
      {
        id: 5,
        title: "Node Js",
        image: NODE,
      },
    ],
  },
  {
    id: 5,
    title: "Orders Management System",
    description:
      "Sistem manajemen pesanan yang membantu bisnis dalam mengelola pesanan, inventaris, dan laporan penjualan dengan fitur lengkap untuk admin dan pengguna.",
    image: DashboardUser,
    githubBe: "https://github.com/fajar-setia/ordering_website",
    githubFe: "https://github.com/fajar-setia/ordering_website",
    screenshots: [
      {
        id: 1,
        image: DashboardAdmin,
        description:
          "Halaman dashboard untuk admin yang menyediakan fitur manajemen pesanan, termasuk penambahan, pengeditan, dan penghapusan pesanan serta laporan penjualan.",
      },
      {
        id: 2,
        image: KitchenAdmin,
        description:
          "Cuplikan struktur database yang digunakan dalam sistem manajemen pesanan. Database ini menyimpan semua data terkait pesanan, inventaris, dan pengguna.",
      },
      {
        id: 3,
        image: MenuAdmin,
        description:
          "Cuplikan struktur database yang digunakan dalam sistem manajemen pesanan. Database ini menyimpan semua data terkait pesanan, inventaris, dan pengguna.",
      },
      {
        id: 4,
        image: CategoryAdmin,
        description:
          "Cuplikan struktur database yang digunakan dalam sistem manajemen pesanan. Database ini menyimpan semua data terkait pesanan, inventaris, dan pengguna.",
      },
      {
        id: 5,
        image: DashboardUser,
        description:
          "Halaman dashboard untuk pengguna yang menyediakan fitur manajemen pesanan, termasuk penambahan, pengeditan, dan penghapusan pesanan serta laporan penjualan.", 
      },
      {
        id: 6,
        image: CartUser,
        description:
          "Cuplikan struktur database yang digunakan dalam sistem manajemen pesanan. Database ini menyimpan semua data terkait pesanan, inventaris, dan pengguna.",
      },
      {
        id: 7,
        image: CheckoutUser,
        description:
          "Cuplikan struktur database yang digunakan dalam sistem manajemen pesanan. Database ini menyimpan semua data terkait pesanan, inventaris, dan pengguna.",
      },
      {
        id: 8,
        image: UserOrder,
        description:
          "Cuplikan struktur database yang digunakan dalam sistem manajemen pesanan. Database ini menyimpan semua data terkait pesanan, inventaris, dan pengguna.",
      },
    ],  
    tools: [
      {
        id: 1,
        title: "React",
        image: React,
      },
      {
        id: 2,
        title: "Typescript",
        image: Typescript,
      },
      {
        id: 3,
        title: "Vite",
        image: vite,
      },
      {
        id: 4,
        title: "TailwinCSS",
        image: Tailwind,
      },
      {
        id: 5,
        title: "Node Js",
        image: NODE,
      },
      {
        id: 6,
        title: "PHP",
        image: php,
      },
      {
        id: 7,
        title: "Laravel",
        image: laravel, 
      },
      {
        id: 8,
        title: "SQLite",
        image: SQLITE,
      }
    ]
  },
];

export const tools = [
  {
    id: 1,
    title: "HTML",
    image: HTML,
  },
  {
    id: 2,
    title: "CSS",
    image: CSS,
  },
  {
    id: 3,
    title: "JavaScript",
    image: JS,
  },
  {
    id: 4,
    title: "PHP",
    image: php,
  },
  {
    id: 5,
    title: "MYSQL",
    image: MYSQL,
  },
  {
    id: 6,
    title: "BOOTSTRAP",
    image: BOOTSTRAP,
  },
  {
    id: 7,
    title: "React",
    image: React,
  },
  {
    id: 8,
    title: "TailwinCSS",
    image: Tailwind,
  },
  {
    id: 9,
    title: "C Shap",
    image: CShap,
  },
  {
    id: 10,
    title: "postgreSQL",
    image: POSTGRES,
  },
  {
    id: 11,
    title: "git",
    image: GIT,
  },
  {
    id: 12,
    title: "github",
    image: GITHUB,
  },
  {
    id: 13,
    title: "Node Js",
    image: NODE,
  },
  {
    id: 14,
    title: "Swagger",
    image: SWAGGER,
  },
  {
    id: 15,
    title: "Vite",
    image: vite,
  },
  {
    id: 16,
    title: ".Net",
    image: Net,
  },
  {
    id: 17,
    title: "Vuejs",
    image: Vue,
  },
  {
    id: 18,
    title: "Typescript",
    image: Typescript,
  },
  {
    id: 19,
    title: "Laravel",
    image: laravel,
  },
  {
    id: 20,
    title: "SQLite",
    image: SQLITE,
  }, 
];
