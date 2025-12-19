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


//untuk tampilan awal
export const initialData = [
    {
        id: 1,
        title: "Perkebunan MPTI",
        description: "Sistem informasi perkebunan MPTI yang membantu dalam pengelolaan data tanaman, jadwal perawatan, dan laporan cuplikan data.",
        image: dashboardUser,
        githubBe:" ",
        githubFe: "https://github.com/fajar-setia/Kebun-Wiyono",
        screenshots : [
          {
            id:1,
            image:halamanLogin,
            description:"ini adalah halaman login dari project perkebunan"
          },
          {
            id:2,
            image:dashboardAdmin,
            description:"Halaman dashboard untuk admin yang menyediakan fitur manajemen data perkebunan, termasuk penambahan, pengeditan, dan penghapusan data tanaman serta pengguna."
          },
          {
            id:3,
            image:cuplikanScript,
            description:"iCuplikan kode program yang menunjukkan bagaimana fitur-fitur utama dalam aplikasi diimplementasikan, termasuk logika bisnis dan interaksi dengan database."
          },
          {
            id:4,
            image:cuplikanDatabase,
            description:"Cuplikan struktur database yang digunakan dalam sistem informasi perkebunan MPTI. Database ini menyimpan semua data terkait tanaman, pengguna, dan aktivitas perkebunan."
          }
        ],
        tools: [
          {
            id:1,
            title: "HTML",
            image:HTML
          },
          {
            id:2,
            title: "CSS",
            image: CSS,
          },
          {
            id:3,
            title: "JavaScript",
            image: JS,
          },
          {
            id:4,
            title: "PHP",
            image: php,
          },
          {
            id:5,
            title: "MYSQL",
            image: MYSQL,
          },
          {
            id:6,
            title: "BOOTSTRAP",
            image: BOOTSTRAP,
          }
        ]
    },
    {
        id: 2,
        title: "Aplikasi Kost",
        description: "Aplikasi kost yang memudahkan pengelolaan data kamar, fasilitas, dan pemesanan kost dengan fitur lengkap untuk admin dan pengguna.",
        image: dashboardUserKost,
        githubBe: "https://github.com/fajar-setia/API-for-ReactKost",
        githubFe: "https://github.com/fajar-setia/React-Kost",
        screenshots: [
          {
            id:1,
            image:dashboardAdminKost,
            description: "Halaman dashboard untuk admin yang menyediakan fitur manajemen data kost, termasuk penambahan, pengeditan, dan penghapusan data kamar serta pemesanan."
          },
          {
            id:2,
            image:Database,
            description: "uplikan struktur database yang digunakan dalam aplikasi kost. Database ini menyimpan semua data terkait kamar, fasilitas, pengguna, dan pemesanan."
          },
          {
            id:3,
            image:scriptFrontend,
            description: "Cuplikan kode program frontend yang menunjukkan bagaimana antarmuka pengguna dirancang dan diimplementasikan, termasuk interaksi pengguna dan tampilan data."
          },
          {
            id:4,
            image:scriptBackend,
            description: "Cuplikan kode program backend yang menunjukkan bagaimana server menangani permintaan dari klien, mengelola logika bisnis, dan berinteraksi dengan database."
          },
          {
            id:5,
            image:API,
            description: "API JSON yang digunakan untuk mengelola data kost, termasuk informasi tentang kamar, fasilitas, dan pemesanan. API ini memungkinkan komunikasi antara frontend dan backend."
          }
        ],
        tools: [
          {
            id:1,
            title: "React",
            image:React
          },
          {
            id:2,
            title: "TailwinCSS",
            image:Tailwind
          },
          {
            id:3,
            title: "Node Js",
            image:NODE
          },
          {
            id:4,
            title: "JavaScript",
            image:JS
          },
          {
            id:5,
            title: "C Shap",
            image:CShap
          },
          {
            id:6,
            title: "postgreSQL",
            image:POSTGRES
          },
          {
            id:7,
            title: "Swagger",
            image:SWAGGER
          },
          {
            id:8,
            title: "Vite",
            image:vite
          },
          {
            id:9,
            title: ".Net",
            image:Net
          }
        ]
    },
    {
        id: 3,
        title: "Barbershop Landing Page",
        description: "Landing page untuk barbershop yang menampilkan layanan, galeri, dan informasi kontak dengan desain menarik dan responsif.",
        image: leandingPage,
        githubBe: " ",
        githubFe: "",
        screenshots : [
          {
            id:1,
            image:leandingPage,
            description:"Ini adalah tampilan landing page dari project barbershop"
          },
          {
            id:2,
            image:services,
            description:"Ini adalah tampilan services page dari project barbershop"
          },
          {
            id:3,
            image:excuses,
            description:"Ini adalah tampilan excuses page dari project Barbershop"
          },
          {  
            id:4,
            image:client,
            description:"Ini adalah tampilan client page dari project Barbershop"
          }
        ],
        tools: [
          {
            id:1,
            title: "Vuejs",
            image:Vue,
          },
          {
            id:2, 
            title: "JavaScript",
            image:JS
          },
          {
            id:3,
            title: "Vite",
            image:vite
          },
          {
            id:4,
            title: "TailwinCSS",
            image:Tailwind
          },
          {
            id:5,
            title: "Node Js",
            image:NODE
          }

        ]
          
    }
];
