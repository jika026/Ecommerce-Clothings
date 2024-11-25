import React from "react";
import SingleProduct from "./SingleProduct";
import "./HomeProducts.css";
import image1 from "/IMAGES/jalabiya1.png";
import image2 from "/IMAGES/jalabiya2.png";
import image3 from "/IMAGES/abaya1.png";
import image4 from "/IMAGES/abaya2.png";
import image5 from "/IMAGES/abayaFour.png";
import image6 from "/IMAGES/abayaOne.png";

const products = [
  { image: image1, title: "ABAYA", price: 150.0 },
  { image: image2, title: "ABAYA", price: 150.0 },
  { image: image3, title: "JALABIYA", price: 50.0 },
  { image: image4, title: "VEIL", price: 9.99 },
  { image: image5, title: "VEIL", price: 9.99 },
  { image: image6, title: "BESPOKE DRESS", price: 500.0 },
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
      <div className="products-title w-max mb-[3.875rem]">
        <p className="text-4xl leading-10 font-fontSecondary rounded-2xl mt-[0.5rem] ml-[6px] flex flex-col">
          {header}
        </p>
      </div>
      <section
        className="grid gap-x-6 gap-y-12"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))" }}
      >
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
