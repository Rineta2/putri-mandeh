"use client";

import React from "react";

import { aboutData } from "@/components/UI/data/data";

import Image from "next/image";

import Link from "next/link";

import { Fade, Zoom } from "react-awesome-reveal";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__container container">
        <div className="content">
          {aboutData.map((img) => {
            return (
              <div className="img" key={img.id}>
                <Zoom duration={2000} triggerOnce delay={500}>
                  <Image src={img.img} alt="images" quality={100} />
                </Zoom>
              </div>
            );
          })}

          {aboutData.map((item) => {
            return (
              <div className="text" key={item.id}>
                <Fade triggerOnce delay={500} duration={2000} direction="down">
                  <h1>{item.text}</h1>
                </Fade>

                <Zoom triggerOnce delay={500} duration={2000}>
                  <p>{item.desc}</p>
                </Zoom>

                <Fade triggerOnce delay={500} duration={2000} direction="up">
                  <div className="btn">
                    <Link href={item.path}>{item.name}</Link>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
