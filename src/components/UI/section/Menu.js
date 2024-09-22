"use client";

import React, { useState } from "react";
import { menuItem } from "@/components/UI/data/menu";
import "@/components/sass/Home.scss";
import Image from "next/image";
import { useCart } from "@/components/context/CartContext";
import { RiShoppingCartLine } from "@remixicon/react";
import { toast } from "react-toastify";
import { RiCloseLine } from "@remixicon/react";

import { Zoom, Fade } from "react-awesome-reveal";

export default function Menu() {
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.name} berhasil ditambahkan ke keranjang!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  //=============== Modal ================//

  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleChange = (setter) => (e) => setter(e.target.value);

  //=============== Form Checkout ================//

  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [harga, setHarga] = useState("");
  const [alamat, setAlamat] = useState("");
  const [pesan, setPesan] = useState("");
  const [quantity, setQuantity] = useState(1);

  //=============== Checkout ================//

  const handleCheckout = (product) => {
    setSelectedProduct(product);
    setOpen(true);
    setHarga(product.harga);
    setProduct(product.name);
    setQuantity(1);
  };

  //=============== Quantity ================//

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    setQuantity(quantity);
    const totalHarga = selectedProduct?.harga * quantity;
    const formattedHarga = isNaN(totalHarga)
      ? ""
      : totalHarga.toLocaleString("id-ID", { minimumFractionDigits: 3 });
    setHarga(formattedHarga);
  };

  //=============== Details ================//

  const closeModal = () => {
    setSelectedProduct(null);
  };

  //=============== Form ================//

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !product || !harga || !alamat || !pesan || !quantity) {
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
    - Product: ${product}
    - Jumlah : ${quantity}
    - Harga: ${harga}
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
    setHarga("");
    setAlamat("");
    setProduct("");
    setPesan("");
    setQuantity(1);
    setSelectedProduct(null);
  };

  return (
    <section className="menu" id="menu">
      <div className="menu__container container">
        <div className="heading">
          <Fade triggerOnce direction={"down"} delay={500} duration={2000}>
            <h1>Menu Kami</h1>
          </Fade>
        </div>

        <div className="content">
          {menuItem.map((item) => (
            <div className="box" key={item.id}>
              <div className="img">
                <Zoom triggerOnce delay={item.id * 100} duration={2000}>
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={500}
                    height={500}
                  />
                </Zoom>
              </div>

              <div className="text">
                <Fade
                  triggerOnce
                  delay={item.id * 100}
                  duration={2000}
                  direction={"down"}
                >
                  <h1>{item.name}</h1>
                </Fade>

                <Fade
                  triggerOnce
                  direction={"up"}
                  delay={item.id * 100}
                  duration={2000}
                >
                  <span>Rp. {item.harga}</span>
                </Fade>
              </div>

              <div className="button">
                <Fade
                  triggerOnce
                  delay={item.id * 100}
                  duration={2000}
                  direction={"left"}
                >
                  <button onClick={() => handleCheckout(item)}>
                    Beli Sekarang
                  </button>
                </Fade>

                <Fade
                  triggerOnce
                  direction={"right"}
                  delay={item.id * 100}
                  duration={2000}
                >
                  <i onClick={() => handleAddToCart(item)}>
                    <RiShoppingCartLine size={30} />
                  </i>
                </Fade>
              </div>
            </div>
          ))}
        </div>

        {open && selectedProduct ? (
          <div className={`modal ${open ? "open" : ""}`}>
            <div className="modal__container">
              <Image
                src={selectedProduct.img}
                alt={selectedProduct.name}
                width={500}
                height={500}
              />

              <form onSubmit={handleSubmit}>
                <div className="double">
                  <input
                    type="text"
                    placeholder="Nama"
                    value={name}
                    onChange={handleChange(setName)}
                  />

                  <input
                    type="text"
                    placeholder="Alamat"
                    value={alamat}
                    onChange={handleChange(setAlamat)}
                  />
                </div>

                <div className="triple">
                  <input
                    readOnly
                    value={product}
                    onChange={handleChange(setProduct)}
                  />

                  <input
                    value={harga}
                    readOnly
                    onChange={handleChange(setHarga)}
                  />

                  <input
                    type="number"
                    value={quantity}
                    min="1"
                    onChange={handleQuantityChange}
                  />
                </div>

                <textarea
                  value={pesan}
                  onChange={handleChange(setPesan)}
                  placeholder="Pesan"
                  rows={3}
                  cols={30}
                ></textarea>

                <button type="submit">Kirim Pesanan</button>

                <div className="close" onClick={closeModal}>
                  <RiCloseLine size={30} />
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
