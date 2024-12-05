import React from "react";
import "./HomeProducts.css";

const Banners = () => {
  const textStyles = {
    fontFamily: `"HeadlandOne", serif`,
    fontSize: "clamp(28px, 4vw, 64px)",
  };

  return (
    <div className="grid gap-6 mb-16 bannerContainer">
      <div className="max-w-full max-h-[400px] relative">
        <img
          src="IMAGES/NewAbayaBanner.png"
          alt="New Abaya"
          className="w-full h-full"
        />
        <div className="px-8 absolute top-[25%] sm:top-[30%] lg:top-[40%]  flex flex-col items-center right-[0vmax]">
          <p style={textStyles} className="leading-[80.16px]  lg:mb-4">
            ONGOING SALES
          </p>
          <button className="font-fontPrimary font-semibold text-sm border-[1px] border-black px-14 py-3 bg-transparent rounded">
            Shop Now
          </button>
        </div>
      </div>
      <div className="max-w-full max-h-[400px] relative">
        <img
          src="IMAGES/NewArrivalBanner.png"
          alt="New Arrival"
          className="w-full h-full"
        />
        <div className="px-8 absolute top-[25%] sm:top-[30%] md:top-[35%] lg:top-[40%]  flex flex-col items-center">
          <p style={textStyles} className="leading-[80.16px]  lg:mb-4">
            NEW ARRIVALS
          </p>
          <button className="font-fontPrimary font-semibold text-sm border-[1px] border-black px-14 py-3 bg-transparent rounded">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banners;
