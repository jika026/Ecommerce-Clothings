import React from "react";

const Hero = () => {
  const descriptionHeaderStyles = {
    fontSize: "clamp(44px, 8vw, 96px)",
    backgroundImage: "linear-gradient(to right, #f80000, #ff7c02)",
  };

  return (
    <section
      className="h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url("/IMAGES/heroBanner.png")` }}
    >
      <div className="flex flex-col justify-center items-center h-full">
        <h1
          className="font-extrabold bg-clip-text text-transparent font-fontPrimary text-[100px] leading-[100px]"
          style={descriptionHeaderStyles}
        >
          KALTU’S
        </h1>
        <h2
          className="font-fontPrimary text-white leading-[68px] font-extrabold"
          style={{ fontSize: "clamp(24px, 6vw, 68px)" }}
        >
          COLLECTIBLES
        </h2>
        <h3
          className="font-fontPrimary text-white font-semibold my-8 leading-9"
          style={{ fontSize: "clamp(20px, 3vw, 45px)" }}
        >
          We deliver the best and worthwhile design
        </h3>
        <button
          className="font-fontPrimary text-white rounded-md font-bold border-none px-10 py-4 bg-[#f97a05] leading-5"
          style={{ fontSize: "clamp(12px, 3vw, 22px)" }}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
