import React from "react";
import Button from "./Button";

import "./AuthLayout.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";

const AuthLayout = ({ children, hideLeftLayout, SignUp }) => {
  return (
    <div
      className="h-screen flex bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url("/IMAGES/Authentication.png")` }}
    >
      {!hideLeftLayout && <LayoutLeft SignUp={SignUp} />}
      <div
        className={`relative  ${
          hideLeftLayout
            ? "flex-1"
            : "flex-1 sm:flex-[0.75] md:flex-[0.55] lg:flex-[0.45] bg-transparent md:bg-white"
        } p-5 grid place-items-center mx-auto`}
      >
        <div
          className={`lg:max-w-[500px] w-full grid place-items-center  ${hideLeftLayout ? "bg-white !max-w-[864px] w-full h-fit px-[2rem]" : ""} `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

export const AuthLayoutHeader = ({ title, subtitle }) => {
  return (
    <header className="mb-8 text-center">
      <h1
        className="leading-[2.5rem] mb-4"
        style={{
          fontFamily: `"HeadlandOne", serif`,
          fontSize: "clamp(38px, 6vw, 57px)",
        }}
      >
        {title}
      </h1>
      <p
        className=" leading-6"
        style={{
          fontFamily: `"HeadlandOne", serif`,
          fontSize: "clamp(18px, 4vw, 28px)",
        }}
      >
        {subtitle}
      </p>
    </header>
  );
};

const LayoutLeft = ({ SignUp }) => {
  const navigate = useNavigate();

  return (
    <div className="hidden md:flex-[0.45] lg:flex-[0.55] md:flex flex-col items-center justify-center text-center p-8">
      <img src="/IMAGES/logo/footerLogo.png" alt="LOGO" />
      <p
        className="text-[28px] leading-6 mb-5"
        style={{
          fontFamily: `"Amethysta", serif`,
        }}
      >
        We deliver the best and worthwhile product
      </p>

      <div className="w-[275px] h-14 border-[1px] border-black rounded flex items-center">
        {SignUp ? (
          <Button
            text="Sign In"
            type="submit"
            className="font-fontPrimary font-semibold text-lg leading-[16px]  w-fit bg-transparent  hover:opacity-100"
            onClick={() => {
              navigate(ROUTES.LOGIN);
            }}
          />
        ) : (
          <Button
            text="Sign Up"
            type="submit"
            className="font-fontPrimary font-semibold text-lg leading-[16px]  w-fit bg-transparent  hover:opacity-100"
            onClick={() => {
              navigate(ROUTES.SIGN_UP);
            }}
          />
        )}
      </div>
    </div>
  );
};
