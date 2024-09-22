"use client";

import React, { useEffect, useState, Fragment } from "react";

import { IoMdCart } from "react-icons/io";

import { useCart } from "@/components/context/CartContext";

import { navLinks } from "@/components/UI/data/data";

import { GiHamburgerMenu } from "react-icons/gi";

import Cart from "@/components/context/Cart";

import { RiCloseLine } from "@remixicon/react";

import Link from "next/link";

import { Fade, Zoom } from "react-awesome-reveal";

export default function Header() {
  const [openCart, setOpenCart] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLink, SetActiveLink] = useState("home");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  }, []);

  const { cart } = useCart();

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - 50 &&
          scrollPosition < sectionTop + sectionHeight - 50
        ) {
          SetActiveLink(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <header className={`header ${fixed ? "fixed" : ""}`}>
        <nav className="nav container">
          <Fade triggerOnce delay={500} duration={2000} direction="left">
            <a className="profile" href="#home">
              Putri Mandeh
            </a>
          </Fade>

          <ul className={`nav__list ${open ? "open" : ""}`}>
            {navLinks.map((item) => (
              <li className="nav__item" key={item.id}>
                <Zoom triggerOnce delay={item.id * 100} duration={2000}>
                  <Link
                    href={item.link}
                    className={`nav__link ${
                      activeLink === item.active ? "active" : ""
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                </Zoom>
              </li>
            ))}

            <div className="close" onClick={() => setOpen(!open)}>
              <RiCloseLine size={30} />
            </div>
          </ul>

          <div className="nav__toggle">
            <div className="cart" onClick={() => setOpenCart(!openCart)}>
              <Fade triggerOnce delay={500} duration={2000} direction="left">
                <IoMdCart className="cart__icon" />
              </Fade>

              <Fade triggerOnce delay={500} duration={2000} direction="right">
                <span className="cart__count">{cartCount}</span>
              </Fade>
            </div>

            <div className="hamburger" onClick={() => setOpen(!open)}>
              <Fade triggerOnce delay={500} duration={2000} direction="right">
                <GiHamburgerMenu className="hamburger__icon" />
              </Fade>
            </div>
          </div>
        </nav>
      </header>

      <div className={`model ${openCart ? "show" : ""}`}>
        <Cart />

        <div className="close" onClick={() => setOpenCart(!openCart)}>
          <RiCloseLine size={30} />
        </div>
      </div>
    </Fragment>
  );
}
