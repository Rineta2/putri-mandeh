import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import logo from "@/components/assest/logo/logo.png"; // Update with your logo path
import "@/components/sass/Header.scss";
const Loading = () => {
  const logoRef = useRef(null); // Initialize useRef
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    ).fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5"
    );

    tl.to([logoRef.current, titleRef.current], {
      opacity: 0,
      duration: 1,
      delay: 1,
    });
  }, []);

  return (
    <div className="loading">
      <div ref={logoRef} className="logo">
        <Image src={logo} alt="Logo" quality={100} />
      </div>

      <div ref={titleRef} className="title">
        Putri Mandeh
      </div>
    </div>
  );
};

export default Loading;
