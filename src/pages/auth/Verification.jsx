import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import AuthVerificationCode from "./components/AuthVerificationCode";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { useUserEmail } from "../../components/AuthContextAPI";

const Verification = () => {
  const numInputs = 5;
  const [verificationCode, setVerificationCode] = useState("");
  const navigate = useNavigate();
  const { userEmail } = useUserEmail();

  const handleVerificationButton = (e) => {
    const isCodeValid =
      verificationCode.toString().length === numInputs &&
      !isNaN(verificationCode);

    console.log("Is Code Valid:", isCodeValid);

    if (isCodeValid) {
      navigate(ROUTES.CHANGE_PASSWORD);
    } else {
      alert("Please enter a valid verification code.");
    }
  };

  useEffect(() => {
    if (!userEmail) {
      navigate(ROUTES.FORGOT_PASSWORD);
    }
  }, []);

  return (
    <div>
      <div className="my-24">
        <AuthVerificationCode
          numInputs={numInputs}
          setVerificationCode={setVerificationCode}
        />
        <p className="text-lg leading-5 font-fontPrimary font-medium text-darkGrey mb-8 text-center">
          Code has been sent to {userEmail}
        </p>
        <Button
          text="Continue"
          type="submit"
          onClick={handleVerificationButton}
          className="bg-[#F97A05] text-white font-semibold font-fontPrimary rounded-lg h-[60px]"
        />
      </div>
    </div>
  );
};

export default Verification;
