import homeImg from "@/components/assest/home/home.png";

import aboutImg from "@/components/assest/about/about.png";

import banner from "@/components/assest/swipper/Nasi_Padang.png";

import contactImg from "@/components/assest/contact/img.png";

import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

//================= Header =================//
export const navLinks = [
  {
    id: 1,
    name: "Home",
    link: "#home",
    active: "home",
  },

  {
    id: 2,
    name: "About",
    link: "#about",
    active: "about",
  },

  {
    id: 3,
    name: "Menu",
    link: "#menu",
    active: "menu",
  },

  {
    id: 4,
    name: "Contact",
    link: "#contact",
    active: "contact",
  },
];

//================= Home =================//
export const homeData = [
  {
    id: 1,
    img: homeImg,
    title: "Putri Mandeh",
    text: "Menyajikan kelezatan autentik masakan Padang yang bikin nagih! Nikmati rendang empuk, ayam goreng krispi, dan aneka lauk pauk lainnya dengan sambal yang menggugah selera.",
    name: "Tentang Kami",
    path: "#about",
  },
];

//================= About =================//
export const aboutData = [
  {
    id: 1,
    img: aboutImg,
    text: "Tentang Putri Mandeh",
    desc: "Rumah makan nasi padang yang menyajikan masakan khas Minangkabau dengan cita rasa autentik dan bumbu yang kaya rempah",
    name: "Menu Kami",
    path: "#menu",
  },
];

//================= Swipper =================//
export const bannerImg = [
  {
    id: 1,
    img: banner,
  },
];

//================= Contact =================//
export const contactData = [
  {
    id: 1,
    img: contactImg,
    title: "Buka Jam",
    desc: [
      {
        id: 1,
        desc: "Senin - Jumat: 8 Pagi - 9 Malam ​​",
      },

      {
        id: 2,
        desc: "Sabtu: 8 Pagi - 9 Malam",
      },

      {
        id: 3,
        desc: "Minggu: 8 Pagi - 9 Malam",
      },
    ],
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.599308404867!2d106.6323332760174!3d-6.572148193421241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69db6c16d52c9b%3A0x9ad49328edd3bace!2srineta!5e0!3m2!1sid!2sid!4v1726673483928!5m2!1sid!2sid",
  },
];

//================= Footer =================//
export const socilaLink = [
  {
    id: 1,
    icons: <FaFacebookF />,
    path: "",
  },

  {
    id: 2,
    icons: <FaInstagram />,
    path: "",
  },

  {
    id: 3,
    icons: <FaTiktok />,
    path: "",
  },
];
