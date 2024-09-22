"use client";

import React from "react";

import Image from "next/image";

import logo from "@/components/assest/logo/logo.png";

import Link from "next/link";

import "@/components/sass/Header.scss";

import { Fade, Zoom } from "react-awesome-reveal";

export default function notFound() {
  return (
    <section className="not-found">
      <div className="notFound__container container">
        <div className="logo">
          <Zoom triggerOnce delay={500} duration={2000}>
            <Image src={logo} alt="logo" quality={100} />
          </Zoom>
        </div>

        <Fade triggerOnce delay={500} duration={2000} direction="down">
          <h1>Ups... Bukan di sini.</h1>
        </Fade>

        <Zoom triggerOnce delay={500} duration={2000}>
          <p>
            Maaf, halaman yang Anda cari mengenai Putri Mandeh Masakan Padang
            tidak ditemukan. Mungkin halaman telah dihapus atau URL yang Anda
            masukkan salah. Silakan kembali ke halaman utama Putri Mandeh Terima
            kasih telah berkunjung!
          </p>
        </Zoom>

        <Fade triggerOnce delay={500} duration={2000} direction="up">
          <div className="btn">
            <Link href="/">Kembali Ke Beranda</Link>
          </div>
        </Fade>
      </div>
    </section>
  );
}
