import React from "react";
import SingleProduct from "../../home/components/SingleProduct";
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

const FilteredProducts = () => {
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  const shuffledProducts = shuffleArray(products).slice(0, 9);
  return (
    <section className="w-full">
      <section
        className="grid gap-x-6 gap-y-12 grid-container"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))" }}
      >
        {shuffledProducts.map((product, index) => (
          <SingleProduct
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </section>
    </section>
  );
};

export default FilteredProducts;
