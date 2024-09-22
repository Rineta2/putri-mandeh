"use client";

import React, { useRef } from "react";

import { contactData } from "@/components/UI/data/data";

import Image from "next/image";

import { Fade, Zoom } from "react-awesome-reveal";

import useHoverAnimation from "@/components/animation/useHoverAnimation";

export default function Contact() {
  const imageRefs = useRef([]);

  useHoverAnimation(imageRefs);
  return (
    <section className="contact" id="contact">
      <div className="contact__container container">
        <div className="content">
          {contactData.map((item) => {
            return (
              <div className="text" key={item.id}>
                <Fade triggerOnce delay={500} duration={2000} direction="down">
                  <h1>{item.title}</h1>
                </Fade>
                {item.desc.map((item) => {
                  return (
                    <Fade
                      triggerOnce
                      delay={item.id * 100}
                      duration={2000}
                      key={item.id}
                      direction="up"
                    >
                      <p key={item.id}>{item.desc}</p>
                    </Fade>
                  );
                })}
                <Fade triggerOnce delay={500} duration={2000}>
                  <iframe
                    src={item.src}
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen="allowFullScreen"
                    loading="lazy"
                    title="map putri mandeh"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Fade>
              </div>
            );
          })}

          {contactData.map((img) => {
            return (
              <div
                className="img"
                key={img.id}
                ref={(el) => (imageRefs.current[img.id] = el)}
              >
                <Zoom triggerOnce delay={500} duration={2000}>
                  <Image
                    src={img.img}
                    alt="contact"
                    quality={100}
                    key={img.id}
                  />
                </Zoom>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
