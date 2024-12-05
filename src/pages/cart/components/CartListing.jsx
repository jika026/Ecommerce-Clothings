import React, { useState } from "react";

const CartListing = () => {
  const items = [
    { image: "/IMAGES/abayaThree.webp", title: "Dubai Abaya 1", price: 150.0 },
    { image: "/IMAGES/abaya3.webp", title: "Dubai Abaya 2", price: 120.0 },
    { image: "/IMAGES/abayaTwo.webp", title: "Dubai Abaya 3", price: 170.0 },
    { image: "/IMAGES/abaya1.webp", title: "Dubai Abaya 4", price: 250.0 },
  ];
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
    <div className="flex-[0.8] rounded-3xl bg-[#fcfcfc]  overflow-scroll">
      <table className="w-full">
        <thead>
          <tr className="border-b-[1px] border-[#000]">
            <th className="font-fontPrimary text-[28px] leading-6 uppercase font-normal pt-12 pb-2 text-center">
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
