import React, { useState } from "react";

import jalabiya1 from "/IMAGES/products/jalabiya1.png";
import jalabiya2 from "/IMAGES/products/jalabiya2.png";
import jalabiya3 from "/IMAGES/products/jalabiya3.png";
import jalabiya4 from "/IMAGES/products/jalabiya4.png";
import abaya2 from "/IMAGES/products/abaya2.webp";
import abaya1 from "/IMAGES/products/abaya1.webp";
import abaya3 from "/IMAGES/products/abaya3.webp";
import abaya4 from "/IMAGES/products/abaya4.webp";
import bespokeDress1 from "/IMAGES/products/bespokeDress1.png";
import bespokeDress2 from "/IMAGES/products/bespokeDress2.png";
import veil1 from "/IMAGES/products/veil1.png";
import veil2 from "/IMAGES/products/veil2.png";

const products = [
  // {
  //   image: jalabiya1,
  //   title: "JALABIYA",
  //   price: 50.0,
  //   title: "Egytian Jalabiya 1",
  // },
  // {
  //   image: jalabiya2,
  //   title: "JALABIYA",
  //   price: 50.0,
  //   title: "Egytian Jalabiya 2",
  // },
  // {
  //   image: jalabiya3,
  //   title: "JALABIYA",
  //   price: 50.0,
  //   title: "Egytian Jalabiya 3",
  // },
  // {
  //   image: jalabiya4,
  //   title: "JALABIYA",
  //   price: 50.0,
  //   title: "Egytian Jalabiya 4",
  // },
  { image: abaya1, title: "ABAYA", price: 150.0, title: "Dubai Abaya 1" },
  { image: abaya2, title: "ABAYA", price: 150.0, title: "Dubai Abaya 2" },
  { image: abaya3, title: "ABAYA", price: 150.0, title: "Dubai Abaya 3" },
  { image: abaya4, title: "ABAYA", price: 150.0, title: "Dubai Abaya 4" },
  // { image: veil1, title: "VEIL", price: 9.99, title: "Arabian Veil 1" },
  // { image: veil2, title: "VEIL", price: 9.99, title: "Arabian Veil 1" },
  // {
  //   image: bespokeDress1,
  //   title: "BESPOKE DRESS",
  //   price: 500.0,
  //   title: "Moroccan Bespoke 1",
  // },
  // {
  //   image: bespokeDress2,
  //   title: "BESPOKE DRESS",
  //   price: 500.0,
  //   title: "Moroccan Bespoke 1",
  // },
];

const CartListing = () => {
  const shuffleProducts = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // const items = shuffleProducts(products).slice(0, 4);
  const items = [...products];
  const [subtotals, setSubtotals] = useState(Array(items.length).fill(0));

  // Function to update individual subtotals
  const updateSubtotal = (index, subtotal) => {
    setSubtotals((prevSubtotals) => {
      const updatedSubtotals = [...prevSubtotals];
      updatedSubtotals[index] = subtotal;
      return updatedSubtotals;
    });
  };

  // Calculate total subtotal
  const totalSubtotal = subtotals.reduce(
    (total, subtotal) => total + subtotal,
    0
  );

  return (
    <div className="flex-[0.8] rounded-3xl bg-[#fcfcfc]  overflow-x-scroll">
      <table className="w-full">
        <thead>
          <tr className="border-b-[1px] border-[#000]">
            <th className="font-fontPrimary text-[28px] leading-6 uppercase font-normal pt-12 pb-2 text-start pl-12">
              product
            </th>
            <th className="font-fontPrimary text-[28px] leading-6 uppercase font-normal pt-12 pb-2 text-center">
              quantity
            </th>
            <th className="font-fontPrimary text-[28px] leading-6 uppercase font-normal pt-12 pb-2 text-center">
              Price
            </th>
            <th className="font-fontPrimary text-[28px] leading-6 uppercase font-normal pt-12 pb-2 text-center">
              subtotal
            </th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => {
            return (
              <ProductInCart
                key={index}
                image={item.image}
                title={item.title}
                price={item.price}
                updateSubtotal={(subtotal) => updateSubtotal(index, subtotal)}
              />
            );
          })}

          <tr className="bg-[#F1EBE6] border-b-[1px] border-[#7C4E23]">
            <td></td>
            <td></td>
            <td className="font-fontPrimary text-2xl leading-5 text-start font-normal py-4">
              Subtotal
            </td>
            <td className="font-fontPrimary text-2xl leading-5 text-start font-normal py-4">
              ${totalSubtotal.toFixed(2)}
            </td>
          </tr>
          <tr className="bg-[#F1EBE6]">
            <td></td>
            <td></td>
            <td className="font-fontPrimary text-2xl leading-5 text-start font-normal py-4">
              Shipping fee
            </td>
            <td className="font-fontPrimary text-2xl leading-5 text-start font-normal py-4">
              $150.00
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartListing;

export const ProductInCart = ({ image, title, price, updateSubtotal }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateSubtotal(newQuantity * price);
  };

  const handleDecrement = () => {
    const newQuantity = Math.max(quantity - 1, 0);
    setQuantity(newQuantity);
    updateSubtotal(newQuantity * price);
  };
  return (
    <tr>
      <td className="py-4 px-4 font-fontPrimary text-2xl leading-5 text-center font-semibold">
        <div className="flex items-center gap-x-4 ml-8">
          <div className="w-[100px] h-[80px] bg-[#F1EBE6] rounded-[5px] p-1">
            <img src={image} alt="productImage" className="w-full h-full" />
          </div>

          <p>{title}</p>
        </div>
      </td>
      <td className="py-4 px-2">
        <div className="quantity flex gap-x-3 bg-[#404040] w-fit px-4 py-2 items-center rounded-[33px]">
          <p
            className="operation bg-white w-[26px] h-[26px] rounded-[13px] flex justify-center items-center text-2xl cursor-pointer"
            id="decrement"
            onClick={handleDecrement}
          >
            -
          </p>
          <p className="text-2xl text-white" id="quantity-value">
            {quantity}
          </p>
          <p
            className="operation bg-white w-[26px] h-[26px] rounded-[13px] flex justify-center items-center text-2xl cursor-pointer"
            onClick={handleIncrement}
          >
            +
          </p>
        </div>
      </td>
      <td className="font-fontPrimary text-2xl leading-5 text-start font-normal py-4 px-2">
        ${price.toFixed(2)}
      </td>
      <td className="font-fontPrimary text-2xl leading-5 text-start font-normal py-4 px-2">
        ${(quantity * price).toFixed(2)}
      </td>
    </tr>
  );
};
