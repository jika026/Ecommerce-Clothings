import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SingleProductDetails = () => {
  const [quantity, setQuantity] = useState(0);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };
  return (
    <div>
      <div
        className="h-[221px] flex justify-center items-center"
        style={{ backgroundImage: "url(/IMAGES/CartHeroBanner.png)" }}
      >
        <h3 className="font-bold text-[45px] leading-9 text-white mt-20">
          Products/PRODUCTNAME
        </h3>
      </div>
      <div
        className="flex gap-x-2 items-center text-[28px] leading-6 font-fontPrimary my-6 mx-16"
        onClick={goBack}
      >
        <i className="fa-solid fa-caret-left"></i>
        <p>Back</p>
      </div>
      <div className="flex gap-x-6 mx-16 ">
        <section id="product-image " className="w-[50%]">
          <div className="main-image mb-12">
            <img
              src="/IMAGES/abayaOneFront.png"
              alt=""
              width="100%"
              className="max-h-[753px] h-full"
              id="mainImg"
            />
          </div>

          <div className="small-img-group flex justify-center gap-x-3">
            <div className="small-image cursor-pointer flex-[33%] bg-[#f0f0f0] rounded-[10px]">
              <img
                src="/IMAGES/abayaOneFront.png"
                alt=""
                width="100%"
                className="smallImg h-full"
              />
            </div>

            <div className="small-imagecursor-pointer flex-[33%] bg-[#f0f0f0] rounded-[10px]">
              <img
                src="/IMAGES/abayaOneSide.png"
                alt=""
                width="100%"
                className="smallImg"
              />
            </div>
            <div className="small-image cursor-pointer flex-[33%] bg-[#f0f0f0] rounded-[10px]">
              <img
                src="/IMAGES/abayaOneBack.png"
                alt=""
                width="100%"
                className="smallImg"
              />
            </div>
          </div>
        </section>
        <section className="details flex flex-col gap-y-3 ml-4">
          <p
            className="product-name mb-2 -ml-4"
            style={{ fontSize: "clamp(20px, 5vw, 50px)" }}
          ></p>
          <p
            id="text"
            className="text-[45px] leading-[36px] font-fontSecondary"
          >
            Dubai Jalabiya
          </p>
          <p className="price text-[30px]">$150.00</p>
          <p className="product-code text-[22px]">Product Code : 989898</p>
          <div className="review flex gap-x-2">
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className="text-[18px]">4.0 | 20 Reviews | 30 sold</p>
          </div>
          <div className="colors mt-4 mb-8">
            <label htmlFor="colors" className="text-[18px]">
              Color Available
            </label>
            <div className="flex gap-x-2">
              <div className="bg-black w-[20px] h-[20px]"></div>
              <div className="bg-blue-500 w-[20px] h-[20px]"></div>
              <div className="bg-red-500 w-[20px] h-[20px]"></div>
              <div className="bg-orange-500 w-[20px] h-[20px]"></div>
            </div>
          </div>
          <div className="quantity flex gap-x-3 bg-[#f0f0f0] w-fit py-2 px-4 items-center rounded-[50px]">
            <p
              className="operation bg-white  w-[26px] h-[26px] rounded-[13px] flex justify-center text-2xl cursor-pointer"
              id="decrement"
              onClick={handleDecrement}
            >
              -
            </p>
            <p className="text-2xl" id="quantity-value">
              {quantity}
            </p>
            <p
              className="operation  bg-white  w-[26px] h-[26px] rounded-[13px] flex justify-center text-2xl cursor-pointer"
              id="increment"
              onClick={handleIncrement}
            >
              +
            </p>
          </div>

          <div className="buttons flex gap-x-12 mt-4">
            <button className="font-fontPrimary font-bold text-lg py-4 px-[34px] rounded-md border-none bg-[#f97a05] text-white">
              Buy Now
            </button>
            <button className="addToCart font-fontPrimary font-bold text-lg py-4 px-[34px] rounded-md border-[1px] border-[#ff360a]">
              Add to Cart
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingleProductDetails;
