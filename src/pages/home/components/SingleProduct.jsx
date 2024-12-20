import React from "react";

const SingleProduct = ({ image, title, price, Home }) => {
  return (
    <div className="flex flex-col bg-gray-100 px-2 sm:px-4 md:px-6 pt-6 pb-3 rounded-2xl shadow-md justify-between h-auto">
      <div className="self-center py-4 flex justify-center items-center w-full h-[50vw] sm:h-[40vw] md:h-[30vw] lg:h-[25vw]">
        <img
          src={image}
          alt={`Product image of ${title}`}
          className="mb-4 object-contain w-full h-full"
        />
      </div>

      <div className="flex flex-row justify-between items-center pt-3 w-full">
        <div className="truncate">
          <h3 className="font-normal truncate text-xl sm:text-2xl md:text-4xl  w-max leading-[28px] font-fontSecondary">
            {title}
          </h3>
          <p className="font-normal text-xl md:text-2xl xl:text-3xl md:leading-[24px] font-fontSecondary">
            ${price.toFixed(2)}
          </p>
        </div>

        <button
          className={`font-fontPrimary font-medium text-sm md:text-lg px-4 h-[42px] w-[
           120px] sm:w-[160px] md:w-[203px] md:h-[56px] border-2 rounded-lg transition-all ${
             Home
               ? "border-[#FF360A] text-orange-500 hover:border-[#FF360A] hover:scale-95"
               : "border-black text-black hover:bg-black hover:text-white"
           }`}
        >
          <p className="w-max mx-auto">Buy Now</p>
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
