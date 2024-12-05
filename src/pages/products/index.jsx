import React from "react";
import ProductSideBar from "./components/ProductSideBar";
import FilteredProducts from "./components/FilteredProducts";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
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
      <div
        className="flex gap-x-2 items-center text-[28px] leading-6 font-fontPrimary my-6 mx-8 md:mx-16"
        onClick={goBack}
      >
        <i className="fa-solid fa-caret-left"></i>
        <p>Back</p>
      </div>
      <div className="flex mx-8 md:mx-16 gap-x-12">
        <div className="hidden md:block">
          <ProductSideBar />
        </div>
        <FilteredProducts />
      </div>
    </div>
  );
};

export default Products;
