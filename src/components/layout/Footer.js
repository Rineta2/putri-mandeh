"use client";

import React from "react";

import { socilaLink } from "@/components/UI/data/data";

import Link from "next/link";

import { Fade, Zoom } from "react-awesome-reveal";

export default function Footer() {
  return (
    <footer>
      <div className="footer__container container">
        <div className="content">
          <Fade triggerOnce delay={500} duration={2000} direction="down">
            <p>
              &copy; 2024 <Link href="https://rineta.vercel.app/">Rineta</Link>{" "}
              All right reserved
            </p>
          </Fade>

          <div className="social-links">
            {socilaLink.map((item) => {
              return (
                <Zoom triggerOnce delay={item.id * 100} duration={2000}>
                  <Link key={item.id} href={item.path}>
                    {item.icons}
                  </Link>
                </Zoom>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
