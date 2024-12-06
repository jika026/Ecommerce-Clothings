import React from "react";
import "./Banner.css";

const Banners = () => {
  const textStyles = {
    fontFamily: `"HeadlandOne", serif`,
    fontSize: "clamp(28px, 4vw, 64px)",
  };

  return (
    <div className="grid gap-6 mb-16 bannerContainer">
      <div
        className="relative w-full h-[30vh] md:h-[40vh] lg:h-[50vh] min-h-[200px]"
        style={{
          backgroundImage: "url('IMAGES/NewAbayaBanner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-end justify-center h-full px-8 ">
          <p
            style={textStyles}
            className="leading-[32px] text-center sm:leading-[80.16px] lg:mb-4 text-black"
          >
            ONGOING SALES
          </p>
          <button className="font-fontPrimary font-semibold text-sm border-[1px] border-black px-14 py-3 bg-transparent rounded self-center">
            Shop Now
          </button>
        </div>
      </div>

      <div
        className="relative w-full h-[30vh] md:h-[40vh] lg:h-[50vh] min-h-[200px]"
        style={{
          backgroundImage: "url('IMAGES/NewArrivalBanner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-start justify-center h-full px-8 w-max">
          <p
            style={textStyles}
            className="leading-[32px] text-center sm:leading-[80.16px] lg:mb-4 text-black"
          >
            NEW ARRIVALS
          </p>
          <button className="font-fontPrimary font-semibold text-sm border-[1px] border-black px-14 py-3 bg-transparent rounded self-center">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banners;
