"use client";

import localFont from "next/font/local";

import "@/components/sass/globals.scss";

import { CartProvider } from "@/components/context/CartContext";

import "@/components/sass/Header.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: false,
});

const Header = dynamic(() => import("@/components/layout/Header"), {
  ssr: false,
});

import Head from "@/components/UI/data/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

import { usePathname } from "next/navigation";

const disableHeader = ["/checkout"];
const disableFooter = ["/checkout"];
import "animate.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Head />
        <main>
          <CartProvider>
            <ToastContainer />
            {!disableHeader.includes(pathname) && <Header />}
            {children}
            {!disableFooter.includes(pathname) && <Footer />}
          </CartProvider>
        </main>
      </body>
    </html>
  );
}
