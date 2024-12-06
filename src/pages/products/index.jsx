import React from "react";
import ProductSideBar from "./components/ProductSideBar";
import FilteredProducts from "./components/FilteredProducts";
import BackButton from "../../components/BackButton";

const Products = () => {
  return (
    <div>
      <div
        className="h-[221px] flex justify-center items-center"
        style={{ backgroundImage: "url(/IMAGES/CartHeroBanner.png)" }}
      >
        <h3 className="font-bold text-[45px] leading-9 text-white mt-20">
          Products
        </h3>
      </div>
      <BackButton />
      <div className="flex flex-col md:flex-row mx-4 sm:mx-8 md:mx-16 gap-x-12 ">
        <ProductSideBar />
        <FilteredProducts />
      </div>
    </div>
  );
};

export default Products;
