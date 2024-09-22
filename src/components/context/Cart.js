"use client";

import React, { useEffect, useState } from "react";

import { useCart } from "@/components/context/CartContext";

import Image from "next/image";

import { useRouter } from "next/navigation";

import { RiAddLine, RiSubtractLine, RiDeleteBin5Line } from "@remixicon/react";

import { Fade, Zoom } from "react-awesome-reveal";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [localCart, setLocalCart] = useState([]);
  const router = useRouter();

  const handleCheckout = () => {
    router.push("/checkout");
  };

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  const parsePrice = (priceString) => {
    if (!priceString || typeof priceString !== "string") {
      return 0;
    }
    return (
      parseFloat(
        priceString
          .replace(/[Rp. ]/g, "")
          .replace(".", "")
          .replace(",", ".")
      ) || 0
    );
  };

  const totalPrice = localCart.reduce((total, item) => {
    const itemPrice = parsePrice(item.harga);
    return total + itemPrice * (item.quantity || 1);
  }, 0);

  const formatPrice = (price) => {
    return `Rp. ${price.toLocaleString("id-ID")}`;
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...localCart];
    updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
    setLocalCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...localCart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setLocalCart(updatedCart);
    }
  };

  return (
    <div className="cart">
      <Zoom triggerOnce duration={2000} delay={500}>
        <h2>Shopping Cart</h2>
      </Zoom>
      {localCart.length === 0 ? (
        <Fade triggerOnce duration={2000} delay={500} direction="up">
          <p>Cart is empty</p>
        </Fade>
      ) : (
        <div className="cart__list">
          {localCart.map((item, index) => (
            <div className="cart__item" key={index}>
              <div className="img">
                <Zoom triggerOnce duration={2000} delay={index * 100}>
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                </Zoom>
              </div>

              <div className="text">
                <Fade
                  triggerOnce
                  duration={2000}
                  delay={index * 100}
                  direction="down"
                >
                  <h3>{item.name}</h3>
                </Fade>

                <Zoom triggerOnce duration={2000} delay={index * 100}>
                  <span>Rp. {item.harga}</span>
                </Zoom>

                <Fade
                  triggerOnce
                  duration={2000}
                  delay={index * 100}
                  direction="up"
                >
                  <span>Quantity: {item.quantity || 1}</span>
                </Fade>
              </div>

              <div className="button">
                <Fade
                  triggerOnce
                  duration={2000}
                  delay={index * 100}
                  direction="left"
                >
                  <RiAddLine
                    onClick={() => increaseQuantity(index)}
                    size={20}
                  />
                </Fade>

                <Zoom triggerOnce duration={2000} delay={index * 100}>
                  <RiSubtractLine
                    onClick={() => decreaseQuantity(index)}
                    size={20}
                  />
                </Zoom>

                <Fade
                  triggerOnce
                  duration={2000}
                  delay={index * 100}
                  direction="right"
                >
                  <RiDeleteBin5Line
                    onClick={() => removeFromCart(index)}
                    size={20}
                  />
                </Fade>
              </div>
            </div>
          ))}

          <div className="cart__total">
            <Fade triggerOnce duration={2000} delay={500} direction="down">
              <span>Total: {formatPrice(totalPrice)}</span>
            </Fade>
          </div>

          <Fade triggerOnce duration={2000} delay={500} direction="up">
            <button onClick={handleCheckout}>Checkout</button>
          </Fade>
        </div>
      )}
    </div>
  );
};

export default Cart;
