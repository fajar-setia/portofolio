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


//untuk tampilan awal
export const initialData = [
    {
        id: 1,
        title: "Perkebunan MPTI",
        description: "Sistem informasi perkebunan MPTI yang membantu dalam pengelolaan data tanaman, jadwal perawatan, dan laporan cuplikan data.",
        image: dashboardUser,
        link: "",
        github: "",
    },
    {
        id: 2,
        title: "Aplikasi Kost",
        description: "Aplikasi kost yang memudahkan pengelolaan data kamar, fasilitas, dan pemesanan kost dengan fitur lengkap untuk admin dan pengguna.",
        image: dashboardUserKost,
        link: "",
        github: "", 
    }
];



//project perkebunan MPTI
export const dataPerkebunanMPTI = [
  {
    id: 1,
    image: halamanLogin,
    title: "Halaman Login",
    description:
      "Halaman login yang digunakan untuk mengakses sistem informasi perkebunan MPTI. Pengguna dapat memasukkan kredensial mereka untuk masuk ke dalam aplikasi.",
  },
  {
    id: 2,
    image: dashboardUser,
    title: "Dashboard User",
    description:
      "Halaman dashboard untuk pengguna yang menampilkan informasi penting tentang perkebunan, termasuk data tanaman, jadwal perawatan, dan laporan cuplikan data.",
  },
  {
    id: 3,
    image: dashboardAdmin,
    title: "Dashboard Admin",
    description:
      "Halaman dashboard untuk admin yang menyediakan fitur manajemen data perkebunan, termasuk penambahan, pengeditan, dan penghapusan data tanaman serta pengguna.",
  },
  {
    id: 4,
    image: cuplikanDatabase,
    title: "Cuplikan Database",
    description:
      "Cuplikan struktur database yang digunakan dalam sistem informasi perkebunan MPTI. Database ini menyimpan semua data terkait tanaman, pengguna, dan aktivitas perkebunan.",
  },
  {
    id: 5,
    image: cuplikanScript,
    title: "Cuplikan Script",
    description:
      "Cuplikan kode program yang menunjukkan bagaimana fitur-fitur utama dalam aplikasi diimplementasikan, termasuk logika bisnis dan interaksi dengan database.",
  },
];

//project kost
export const dataKost = [
  {
    id: 1,
    image: API,
    title: "API JSON",
    description:
      "API JSON yang digunakan untuk mengelola data kost, termasuk informasi tentang kamar, fasilitas, dan pemesanan. API ini memungkinkan komunikasi antara frontend dan backend.",
  },
  {
    id: 2,
    image: scriptBackend,
    title: "Cuplikan Script Backend",
    description:
      "Cuplikan kode program backend yang menunjukkan bagaimana server menangani permintaan dari klien, mengelola logika bisnis, dan berinteraksi dengan database.",
  },
  {
    id: 3,
    image: scriptFrontend,
    title: "Cuplikan Script Frontend",
    description:
      "Cuplikan kode program frontend yang menunjukkan bagaimana antarmuka pengguna dirancang dan diimplementasikan, termasuk interaksi pengguna dan tampilan data.",
  },
  {
    id: 4,
    image: Database,
    title: "Cuplikan Database",
    description:
      "Cuplikan struktur database yang digunakan dalam aplikasi kost. Database ini menyimpan semua data terkait kamar, fasilitas, pengguna, dan pemesanan.",
  },
  {
    id: 5,
    image: dashboardAdminKost,
    title: "Dashboard Admin",
    description:
      "Halaman dashboard untuk admin yang menyediakan fitur manajemen data kost, termasuk penambahan, pengeditan, dan penghapusan data kamar serta pemesanan.",
  },
  {
    id: 6,
    image: dashboardUserKost,
    title: "Dashboard User",
    description:
      "Halaman dashboard untuk pengguna yang menampilkan informasi penting tentang kost, termasuk daftar kamar yang tersedia, fasilitas, dan status pemesanan.",
  },
];