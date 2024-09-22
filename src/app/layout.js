"use client";

import React from "react";

import "@/components/sass/globals.scss";
import { CartProvider } from "@/components/context/CartContext";

import "@/components/sass/Header.scss";
import "react-toastify/dist/ReactToastify.css";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

import { ToastContainer } from "react-toastify";

import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: false,
});

const Header = dynamic(() => import("@/components/layout/Header"), {
  ssr: false,
});

import Head from "@/components/UI/data/head";

import { usePathname } from "next/navigation";

import "animate.css";

import Loading from "@/components/animation/loading";

import useLoading from "@/components/animation/useLoading";
import useIsClient from "@/components/animation/usClient";

const disableHeader = ["/checkout"];
const disableFooter = ["/checkout"];

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isLoading = useLoading();
  const isClient = useIsClient();
  return (
    <html lang="en">
      <Head />
      <body className={roboto.className}>
        <main>
          {isClient && isLoading ? (
            <Loading />
          ) : (
            <CartProvider>
              <ToastContainer />
              {!disableHeader.includes(pathname) && <Header />}
              {children}
              {!disableFooter.includes(pathname) && <Footer />}
            </CartProvider>
          )}
        </main>
      </body>
    </html>
  );
}
