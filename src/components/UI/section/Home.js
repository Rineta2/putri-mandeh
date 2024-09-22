"use client";

import { useRef } from "react";

import Image from "next/image";

import { homeData } from "@/components/UI/data/data";

import Link from "next/link";

import useHoverAnimation from "@/components/animation/useHoverAnimation";

export default function Home() {
  const imageRefs = useRef([]);

  useHoverAnimation(imageRefs);
  return (
    <section className="home" id="home">
      <div className="home__container container">
        <div className="content">
          {homeData.map((item) => {
            return (
              <div className="text" key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.text}</p>

                <Link href={item.path}>{item.name}</Link>
              </div>
            );
          })}

          {homeData.map((img) => {
            return (
              <div
                className="img"
                key={img.id}
                ref={(el) => {
                  if (el) {
                    imageRefs.current[img.id] = el;
                  }
                }}
              >
                <Image src={img.img} alt={img.title} quality={100} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
