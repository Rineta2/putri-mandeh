"use client";

import React, { useEffect, useState } from "react";

import { useCart } from "@/components/context/CartContext";

import Image from "next/image";

import Link from "next/link";

import "@/components/sass/Header.scss";

import { Fade, Zoom } from "react-awesome-reveal";

export default function Checkout() {
  const { cart } = useCart();
  const [hasMounted, setHasMounted] = useState(false);

  const [name, setName] = useState("");
  const [alamat, setAlamat] = useState("");
  const [pesan, setPesan] = useState("");

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const parsePrice = (priceString) => {
    return (
      parseFloat(
        priceString
          .replace(/[Rp. ]/g, "")
          .replace(".", "")
          .replace(",", ".")
      ) || 0
    );
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + parsePrice(item.harga) * (item.quantity || 1);
  }, 0);

  const formatPrice = (price) => {
    return `Rp. ${price.toLocaleString("id-ID")}`;
  };

  if (!hasMounted) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !alamat || !pesan) {
      alert("Silakan isi semua data sebelum mengirimkan pesanan.");
      return;
    }

    const confirmSubmission = window.confirm(
      "Jika Anda sudah mengisi formulir, berikan bukti pembayaran dan klik OK untuk melanjutkan."
    );
    if (!confirmSubmission) return;

    const message = `
    ========== Struck Pesanan ==========

    - Nama: ${name}
    - Product: ${cart
      .map((item) => `${item.name} (Jumlah: ${item.quantity || 1})`)
      .join(", ")}
    - Total Harga: ${formatPrice(totalPrice)}
    - Alamat: ${alamat}
    - Pesan : ${pesan}

===============================
    `;

    const recipient = "6281398632939";
    const whatsappURL = `https://wa.me/${recipient}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");

    setName("");
    setAlamat("");
    setPesan("");
  };

  return (
    <section className="checkout">
      <div className="checkout__container container">
        <div className="top">
          <div className="heading">
            <Fade triggerOnce duration={2000} direction="left" delay={500}>
              <h2>Checkout</h2>
            </Fade>
          </div>
          <Fade triggerOnce duration={2000} direction="right" delay={500}>
            <Link href="/">Back to Home</Link>
          </Fade>
        </div>

        <div className="content">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="checkout__list">
              {cart.map((item, index) => (
                <div className="checkout__item" key={index}>
                  <Zoom triggerOnce delay={index * 100} duration={2000}>
                    <Image src={item.img} alt={item.name} quality={100} />
                  </Zoom>

                  <div className="text">
                    <Fade
                      triggerOnce
                      delay={index * 100}
                      duration={2000}
                      direction="down"
                    >
                      <h3>{item.name}</h3>
                    </Fade>

                    <Fade
                      triggerOnce
                      delay={index * 100}
                      duration={2000}
                      direction="up"
                    >
                      <span className="price">Rp. {item.harga}</span>
                    </Fade>

                    <Fade
                      triggerOnce
                      delay={index * 100}
                      duration={2000}
                      direction="up"
                    >
                      <span className="quantity">
                        Quantity: {item.quantity || 1}
                      </span>
                    </Fade>
                  </div>
                </div>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="box">
              <label>Nama Product</label>
              <textarea
                className="list__name"
                value={cart
                  .map((item) => `${item.name} (Jumlah: ${item.quantity || 1})`)
                  .join("\n")}
                readOnly
              />
            </div>

            <div className="box">
              <label>Total Harga</label>
              <input type="text" value={formatPrice(totalPrice)} readOnly />
            </div>

            <div className="box">
              <label>Nama</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="box">
              <label>Alamat</label>
              <input
                type="text"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                required
              />
            </div>

            <div className="box">
              <label>Pesan</label>
              <textarea
                className="pesan"
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit">Submit Order</button>
          </form>
        </div>
      </div>
    </section>
  );
}
