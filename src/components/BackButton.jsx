import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div
      className="flex gap-x-2 items-center text-[28px] leading-6 font-fontPrimary my-6 mx-16 w-max cursor-pointer"
      onClick={goBack}
    >
      <i className="fa-solid fa-caret-left"></i>
      <p>Back</p>
    </div>
  );
};

export default BackButton;
