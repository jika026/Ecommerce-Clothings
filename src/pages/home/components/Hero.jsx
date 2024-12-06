import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes.js";

const Hero = () => {
  const descriptionHeaderStyles = {
    fontSize: "clamp(56px, 10vw, 96px)",
    lineHeight: "clamp(1.2, 1.5vw, 1.5)",
    backgroundImage: "linear-gradient(to right, #f80000, #ff7c02)",
  };

  const navigate = useNavigate();

  return (
    <section
      className="h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-screen bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url("/IMAGES/heroBanner.png")`,
        backgroundColor: "#404040",
      }}
    >
      <div className="flex flex-col justify-center items-center h-full">
        <h1
          className="font-extrabold bg-clip-text text-transparent font-fontPrimary text-[100px] sm:leading-[56px] md:leading-[100px]"
          style={descriptionHeaderStyles}
        >
          KALTU’S
        </h1>
        <h2
          className="font-fontPrimary text-white md:leading-[68px] font-extrabold"
          style={{
            fontSize: "clamp(32px, 6vw, 68px)",
            lineHeight: "clamp(1.2, 1.4vw, 1.4)",
          }}
        >
          COLLECTIBLES
        </h2>
        <h3
          className="font-fontPrimary text-white font-semibold mb-4 lg:my-8 leading-9 text-center"
          style={{
            fontSize: "clamp(20px, 3vw, 45px)",
            lineHeight: "clamp(1.3, 1.6vw, 1.6)",
          }}
        >
          We deliver the best and worthwhile design
        </h3>
        <button
          aria-label="Shop Now"
          className="font-fontPrimary text-white rounded-md font-bold border-none px-10 py-4 bg-[#f97a05] leading-5"
          style={{ fontSize: "clamp(12px, 3vw, 22px)" }}
          onClick={() => navigate(ROUTES.PRODUCTS)}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
