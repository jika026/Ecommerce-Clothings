import React, { useState } from "react";
import Button from "../../components/Button";
import { AuthLayoutHeader } from "../../components/AuthLayout";
import { TextInput } from "../../components";
import "./auth.css";
import * as Yup from "yup";
import { ROUTES } from "../../routes";
import { useNavigate } from "react-router-dom";
import { useUserEmail } from "../../components/AuthContextAPI";

const SignUp = () => {
  const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   agreedToTerm: false,
  // });
  const { formData, setFormData } = useUserEmail();

  const [error, setError] = useState();

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special symbol"
      )
      .matches(/^\S*$/, "Password should not contain spaces"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),

    agreedToTerm: Yup.boolean().oneOf(
      [true],
      "You must agree to the terms before continuing"
    ),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setError(); //remove all errors when submitting
      console.log("Form Submitted", formData);
      navigate(ROUTES.HOME);
    } catch (err) {
      const newError = {};

      err.inner.forEach((err) => {
        newError[err.path] = err.message;
      });

      setError(newError);
    }
  };

  const handleFormValue = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="max-w-[551px] w-full">
      <AuthLayoutHeader title="Create Account" subtitle="Sign Up to Continue" />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-4">
          <div className="mb-4 flex flex-col gap-y-3">
            <TextInput
              id="email"
              label="Email Address"
              type="text"
              placeholder="Enter Email"
              value={formData.email}
              handleFormValue={handleFormValue}
              error={error?.email}
            />
          </div>
          <div className="mb-4 flex flex-col gap-y-3">
            <TextInput
              id="password"
              label="Enter Password"
              type="password"
              placeholder="Enter Password"
              value={formData.password}
              handleFormValue={handleFormValue}
              error={error?.password}
            />
          </div>
          <div className="mb-4 flex flex-col gap-y-3">
            <TextInput
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Enter Password"
              value={formData.confirmPassword}
              handleFormValue={handleFormValue}
              error={error?.confirmPassword}
            />
          </div>
        </div>
        <div className="flex justify-between  items-center gap-2">
          <div>
            <input
              type="checkbox"
              name="agreedToTerm"
              className="mr-2 h-[14px] w-[14px]"
              checked={formData.agreedToTerm}
              onChange={handleFormValue}
            />
            <label
              htmlFor="checkbox"
              className="text-darkGrey text-base font-fontPrimary"
            >
              Agreed to Processing of Data
            </label>
          </div>
          {error && (
            <p className="hidden md:block text-[0.75rem] text-red-500">
              {error.agreedToTerm}
            </p>
          )}
        </div>

        <div className="mt-12">
          <Button
            text="Sign Up"
            type="submit"
            className="bg-[#F97A05] text-white font-semibold font-fontPrimary rounded-lg h-[60px]"
          />
          <p className="orText my-4 text-[22px] leading-5 text-center text-lightGrey w-full flex justify-between items-center">
            OR
          </p>
          <Button
            text="Continue with Google"
            type="submit"
            icon={<i className="fa-brands fa-google"></i>}
            className="bg-transparent text-darkGrey font-medium font-fontPrimary rounded-lg h-[60px] border-solid border-[1px] border-darkGrey"
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
