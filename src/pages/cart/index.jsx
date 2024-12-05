import React from "react";
import PaymentInfo from "./components/PaymentInfo";
import CartListing from "./components/CartListing";
import BackButton from "../../components/BackButton";

const Cart = () => {
  return (
    <div>
      <div
        className="h-[221px] flex justify-center items-center"
        style={{ backgroundImage: "url(/IMAGES/CartHeroBanner.png)" }}
      >
        <h3 className="font-bold text-[45px] leading-9 text-white mt-20">
          Shopping Cart
        </h3>
      </div>
      <BackButton />
      <div className="flex xl:flex-row flex-col mx-4 sm:mx-8 md:mx-16 gap-12">
        <CartListing />
        <PaymentInfo />
      </div>
    </div>
  );
};

export default Cart;
