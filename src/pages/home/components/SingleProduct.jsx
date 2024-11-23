import React from "react";

const SingleProduct = ({ image, title, price }) => {
  return (
    <div className="flex flex-col bg-[#f0f0f0] px-4 rounded-[32px] relative">
      <div className="self-center pt-6 pb-16">
        <img src={image} alt={title} />
      </div>
      <div className="flex justify-between py-3 absolute w-full bottom-0 pr-8">
        <div className="space-y-2">
          <h3 className="text-[32px] w-max leading-[28px] font-fontSecondary">
            {title}
          </h3>
          <p className="text-2xl leading-[24px] font-fontSecondary">
            ${price.toFixed(2)}
          </p>
        </div>
        <button className="font-fontPrimary font-medium text-lg leading-4 border-[1px] border-[#FF360A] px-[16px] py-[20px] rounded-lg w-[203px] h-[56px] ">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
