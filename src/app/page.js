import React from "react";

import "@/components/sass/Home.scss";

import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/components/UI/section/Home"), {
  ssr: false,
});

const About = dynamic(() => import("@/components/UI/section/About"), {
  ssr: false,
});

const Menu = dynamic(() => import("@/components/UI/section/Menu"), {
  ssr: false,
});

const Contact = dynamic(() => import("@/components/UI/section/Contact"), {
  ssr: false,
});

const Banner = dynamic(() => import("@/components/UI/section/banner"), {
  ssr: false,
});

export default function page() {
  return (
    <div>
      <Home />
      <About />
      <Banner />
      <Menu />
      <Contact />
    </div>
  );
}
