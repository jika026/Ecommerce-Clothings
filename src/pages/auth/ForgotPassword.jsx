import React, { useState } from "react";
import Button from "../../components/Button";
import { AuthLayoutHeader } from "../../components/AuthLayout";
import { TextInput } from "../../components";
import * as Yup from "yup";
import { ROUTES } from "../../routes";
import { useNavigate } from "react-router-dom";
import { useUserEmail } from "../../components/AuthContextAPI";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { userEmail, setUserEmail } = useUserEmail();

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate({ email: userEmail });

      setError("");
      console.log(
        "Email Submitted Successfully",
        "userEmail:" + "" + userEmail
      );
      navigate(ROUTES.VERIFY_USER);
    } catch (err) {
      setError(err.errors[0]);
      console.log("Validation Email Error:", err.errors[0]);
    }
  };

  const handleFormValue2 = (e) => {
    setUserEmail(e.target.value);
  };
  const handleFormValue = (e) => {
    const { name, value } = e.target;
    setUserEmail(value);
  };
  return (
    <div className="max-w-[551px] w-full pt-16 pb-8 sm:pey-[172px]">
      <AuthLayoutHeader title="Forgot Password?" />
      <p className="text-lg leading-5 font-fontPrimary font-medium text-darkGrey mb-5 text-center">
        Please enter your registered email address. <br /> A confirmation code
        will be sent shortly
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-4">
          <div className="mb-4 flex flex-col gap-y-3">
            <TextInput
              id="email"
              type="text"
              placeholder="Enter Email"
              error={error || ""}
              value={userEmail}
              handleFormValue={handleFormValue}
            />
          </div>
        </div>

        <div className="mt-12">
          <Button
            text="Continue"
            type="submit"
            className="bg-[#F97A05] text-white font-semibold font-fontPrimary rounded-lg h-[60px]"
          />
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
