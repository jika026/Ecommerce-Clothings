import React from "react";
import image1 from "/IMAGES/jalabiya1.png";
import image2 from "/IMAGES/jalabiya2.png";
import image3 from "/IMAGES/abaya1.png";
import image4 from "/IMAGES/abaya2.png";
import image5 from "/IMAGES/abayaFour.png";
import image6 from "/IMAGES/abayaOne.png";
import image8 from "/IMAGES/abayaTwo.png";
import image9 from "/IMAGES/abayaThree.png";
import SingleProduct from "../../home/components/SingleProduct";

const products = [
  { image: image1, title: "ABAYA", price: 150.0 },
  { image: image2, title: "ABAYA", price: 150.0 },
  { image: image3, title: "JALABIYA", price: 50.0 },
  { image: image4, title: "VEIL", price: 9.99 },
  { image: image5, title: "VEIL", price: 9.99 },
  { image: image6, title: "BESPOKE DRESS", price: 500.0 },
  { image: image8, title: "VEIL", price: 9.99 },
  { image: image9, title: "VEIL", price: 9.99 },
  { image: image6, title: "BESPOKE DRESS", price: 500.0 },
];

const FilteredProducts = () => {
  console.log(products);
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
    <section className="flex-[0.8]">
      <section
        className="grid gap-x-6 gap-y-12"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))" }}
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
