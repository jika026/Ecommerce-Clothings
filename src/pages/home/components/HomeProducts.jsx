import React from "react";
import SingleProduct from "./SingleProduct";
import "./HomeProducts.css";
import jalabiya1 from "/IMAGES/jalabiya1.png";
import jalabiya2 from "/IMAGES/jalabiya2.png";
import jalabiya3 from "/IMAGES/jalabiya3.png";
import jalabiya4 from "/IMAGES/jalabiya4.png";
import abaya1 from "/IMAGES/abaya1.webp";
import abaya2 from "/IMAGES/abaya2.webp";
import abaya3 from "/IMAGES/abaya3.webp";
import abaya4 from "/IMAGES/abaya4.webp";
import bespokeDress1 from "/IMAGES/bespokeDress1.png";
import bespokeDress2 from "/IMAGES/bespokeDress2.png";
import veil1 from "/IMAGES/veil1.png";
import veil2 from "/IMAGES/veil2.png";

const products = [
  { image: jalabiya1, title: "JALABIYA", price: 50.0 },
  { image: jalabiya2, title: "JALABIYA", price: 50.0 },
  { image: jalabiya3, title: "JALABIYA", price: 50.0 },
  { image: jalabiya4, title: "JALABIYA", price: 50.0 },
  { image: abaya1, title: "ABAYA", price: 150.0 },
  { image: abaya2, title: "ABAYA", price: 150.0 },
  { image: abaya3, title: "ABAYA", price: 150.0 },
  { image: abaya4, title: "ABAYA", price: 150.0 },
  { image: veil1, title: "VEIL", price: 9.99 },
  { image: veil2, title: "VEIL", price: 9.99 },
  { image: bespokeDress1, title: "BESPOKE DRESS", price: 500.0 },
  { image: bespokeDress2, title: "BESPOKE DRESS", price: 500.0 },
];

const HomeProducts = ({ header, Home = true }) => {
  const shuffleProducts = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const todaysDeal = shuffleProducts(products).slice(0, 6);
  const trendingProducts = shuffleProducts(products).slice(0, 6);
  return (
    <div className="pb-12">
      <div className="products-title w-max mb-8 md:mb-[3.875rem]">
        <p className="text-3xl md:text-4xl leading-10 font-fontSecondary rounded-2xl mt-[0.5rem] ml-[6px] flex flex-col">
          {header}
        </p>
      </div>
      <section className="grid gap-x-6 gap-y-12 grid-container">
        {header
          ? todaysDeal.map((product, index) => (
              <SingleProduct
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
                Home={Home}
              />
            ))
          : trendingProducts.map((product, index) => (
              <SingleProduct
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
                Home={Home}
              />
            ))}
      </section>
    </div>
  );
};

export default HomeProducts;
