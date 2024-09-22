"use client";

import React from "react";

import { bannerImg } from "@/components/UI/data/data";

import Image from "next/image";

import { Fade } from "react-awesome-reveal";

export default function banner() {
  return (
    <section className="banner">
      <div className="banner__container container">
        {bannerImg.map((item) => {
          return (
            <div className="img">
              <Fade triggerOnce direction={2000} delay={500}>
                <Image
                  src={item.img}
                  alt={"banner"}
                  quality={100}
                  loading="lazy"
                  key={item.id}
                />
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
