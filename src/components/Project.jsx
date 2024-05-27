import React from "react";

import Poto1 from "../assets/Project/Screenshot 2024-05-26 235256.png";
import Poto2 from "../assets/Project/Screenshot 2024-05-27 004219.png";
import Poto3 from "../assets/Project/Screenshot 2024-05-27 060339.png";
import Poto4 from "../assets/Project/Screenshot 2024-05-27 145230.png";
import Poto5 from "../assets/Project/Screenshot 2024-05-27 151138.png";

export const Project = () => {
  const Projek = [
    {
      Gambar: Poto1,
      Title: "Web Personal Profile",
      Keterangan:
        "Website yang digunakan oleh para pencari kerja, dan beberapa perusahaan yang sedang mencari pekerja. Dimana mereka dapat melihat CV milik pelamar, sebagai personal brandingnya",
      Button: "Github",
      Link: "https://github.com/ghifariwandanaa/Proyek3_WP7.git",
    },
    {
      Gambar: Poto2,
      Title: "Aplikasi Mobile",
      Keterangan:
        "Salah satu aplikasi mobile yang di rancang untuk mengelola keuangan pribadi agar mencapai financial freedom",
      Button: "Github",
      Link: "https://github.com/agistadivab/Proyek4Mobile.git",
    },
    {
      Gambar: Poto3,
      Title: "Web Admin FoodRescue",
      Keterangan:
        "Website ini dibuat untuk memenuhi tugas PRPL yang mana membuat suatu aplikasi web yang digunakan untuk penyaluran makanan yang masih tersisa kepada mitra mitra di bandung.",
      Button: "Github",
      Link: "https://github.com/syrrkhrnsaa/FOODRESCUE.git",
    },
    {
      Gambar: Poto4,
      Title: "Web Pengelolaan Barang",
      Keterangan:
        "Website ini dibuat untuk memenuhi tugas PPL yang mana membuat suatu aplikasi web yang digunakan untuk mengelola barang yang mana akan masuk ke database, menggunakan php dan codeigniter",
      Button: "Github",
      Link: "https://github.com/agistadivab/PPL-TE.git",
    },
    {
      Gambar: Poto5,
      Title: "Web E-Commerce",
      Keterangan:
        "Website ini dibuat untuk memenuhi tugas PPL yang mana membuat suatu aplikasi web e-commerce yang masih berjalan dikerjakan hingga sampai checkout",
      Button: "Github",
      Link: "https://github.com/agistadivab/PPL-TE.git",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Works Project</p>
      </div>
      <div className="flex items-center justify-center my-10 mx-auto container">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Projek?.map((projek, i) => (
            <div className="rounded-md shadow-md bg-cyan-800" key={i}>
              <div className="p-5 flex flex-col">
                <div className="rounded-sm overflow-hidden">
                  <img src={projek.Gambar} alt="" />
                </div>
                <div className="title pt-6 ">
                  <h4 className="text-xl md:text-lg font-bold uppercase">
                    {projek.Title}
                  </h4>
                  <p className="text-sm pt-2 text-slate-400">
                    {projek.Keterangan}
                  </p>
                </div>
                <a
                  href={projek.Link}
                  className="text-center bg-slate-500 text-slate-50x py-3 rounded-md font-semibold mt-4 hover:text-cyan-500 hover:bg-slate-300 focus:scale-95 transition-all duration-300 ease-out"
                >
                  {projek.Button}
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* last Grid */}
      </div>
    </section>
  );
};
export default Project;
