import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { AuthLayoutHeader } from "../../components/AuthLayout";
import { TextInput } from "../../components";
import "./auth.css";
import { ROUTES } from "../../routes";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useUserEmail } from "../../components/AuthContextAPI";

const Login = () => {
  const navigate = useNavigate();

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
    rememberMe: Yup.boolean(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setError(); //remove all errors when submitting
      console.log("Form Submitted", formData);
      setFormData({
        ...formData,
        loggedIn: true,
      });

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
      <AuthLayoutHeader title="Welcome Back" subtitle="Log Into Your Account" />
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
              error={error?.email || ""}
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
        </div>
        <div className="flex justify-between">
          <div>
            <input
              type="checkbox"
              className="mr-2 h-[14px] w-[14px]"
              value={formData.rememberMe}
              onChange={handleFormValue}
            />
            <label
              htmlFor="checkbox"
              className="text-darkGrey text-base font-fontPrimary"
            >
              Remember me
            </label>
          </div>
          <Link
            to={ROUTES.FORGOT_PASSWORD}
            className="text-[#F97A05] text-base font-medium font-fontPrimary"
          >
            Forgot Password
          </Link>
        </div>

        <div className="mt-12">
          <Button
            text="Sign In"
            type="submit"
            className="bg-[#F97A05] text-white font-semibold font-fontPrimary rounded-lg h-[60px] "
          />
          <p className="orText my-4 text-center text-lightGrey w-full flex justify-between items-center">
            OR
          </p>
          <Button
            text="Continue with Google"
            type="submit"
            icon={<i className="fa-brands fa-google"></i>}
            className="bg-transparent text-darkGrey font-medium font-fontPrimary rounded-lg h-[60px]border-solid border-[1px] border-darkGrey"
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
