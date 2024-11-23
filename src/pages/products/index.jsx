import React from "react";
import ProductSideBar from "./components/ProductSideBar";
import FilteredProducts from "./components/FilteredProducts";

const Products = () => {
  return (
    <div>
      <div>
        <img src="/IMAGES/CartHeroBanner.png" alt="Banner" className="w-full" />
      </div>
      <div className="flex gap-x-2 items-center text-[28px] leading-6 font-fontPrimary my-6 mx-16">
        <i className="fa-solid fa-caret-left"></i>
        <p>Back</p>
      </div>
      <div className="flex mx-16 gap-x-12">
        <ProductSideBar />
        <FilteredProducts />
      </div>
    </div>
  );
};

export default Products;
