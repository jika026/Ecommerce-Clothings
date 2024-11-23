import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";
import { ROUTES } from "../routes";

const TopBar = () => {
  const dropDownMenu = document.getElementById("dropDownMenu");

  const hamburgerClick = () => {
    dropDownMenu.classList.toggle("show");
  };
  return (
    <header
      className="topBarHeader flex justify-between items-center px-[2rem] bg-white fixed h-[84px] w-full z-[1000]"
      style={{ boxShadow: "0 0 10px 0 #000" }}
    >
      <div className="hover:cursor-pointer">
        <i
          className="fa-solid fa-bars hamburger text-3xl"
          id="hamburger"
          onClick={hamburgerClick}
        ></i>
      </div>
      <nav
        id="dropDownMenu"
        className={`h-[350px] w-[300px] flex-col justify-between px-6 pt-4 pb-8 z-[1001] absolute top-[83px] left-6 bg-white`}
      >
        <ul className="flex flex-col gap-y-2">
          <li className="text-[22px] cursor-pointer list-none font-serif">
            <Link className="no-underline text-black" to="#">
              Clothes
            </Link>
          </li>
          <li className="text-[22px] cursor-pointer list-none font-serif">
            <Link className="no-underline text-black" to="#">
              Luxurious Scents
            </Link>
          </li>
          <li className="text-[22px] cursor-pointer list-none font-serif">
            <Link className="no-underline text-black" to="#">
              Hijab
            </Link>
          </li>
          <li className="text-[22px] cursor-pointer list-none font-serif">
            <Link className="no-underline text-black" to="#">
              Veils
            </Link>
          </li>
        </ul>
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-4 items-center">
            <i className="fa-solid fa-gear"></i>
            <p className="text-[18px] cursor-pointer list-none font-serif">
              Settings
            </p>
          </div>
          <div className="flex gap-x-4 items-center">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <p className="text-[18px] cursor-pointer list-none font-serif">
              Log out
            </p>
          </div>
        </div>
      </nav>
      <div className="max-w-[130px]">
        <Link to={ROUTES.HOME}>
          <img src="/IMAGES/logo/mainLogo.svg" alt="LOGO" className="w-full" />
        </Link>
      </div>
      <div className="info flex items-center gap-x-12">
        {/* // .info */}
        <input
          type="text"
          className="w-[280px] h-[32px] lg:w-[342px] lg:h-[45px] rounded-2xl p-2 outline-none border-none bg-[#f1f1f1]"
          placeholder="Search"
        />
        <div className="flex gap-x-4 items-center">
          {/* // .icons */}
          <Link to={ROUTES.LOGIN}>
            <i className="fa-solid fa-user text-2xl"></i>
          </Link>
          <div className="relative">
            {/* .cart-items  */}
            <i className="fa-solid fa-cart-shopping text-2xl"></i>
            <div className="absolute top-0 left-3/4 w-[10px] h-[10px] rounded-[50%] bg-[#fe0c0c] flex justify-center items-center p-[2px]">
              <p className="text-[8px] font-bold font-serif text-white">0</p>
            </div>
          </div>
          <i className="fa-solid fa-arrow-right-from-bracket text-2xl"></i>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
