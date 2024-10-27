import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { AuthLayoutHeader } from "../../components/AuthLayout";
import { TextInput } from "../../components";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useUserEmail } from "../../components/AuthContextAPI";
import { ROUTES } from "../../routes";

const NewPassword = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { userEmail, formData, setFormData } = useUserEmail();

  // const [formData, setformData] = useState({
  //   password: "",
  //   rememberMe: false,
  // });

  const validationSchema = Yup.object({
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

  useEffect(() => {
    if (!userEmail) {
      navigate(ROUTES.FORGOT_PASSWORD);
    }
  }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await validationSchema.validate(
  //       { email: formData.email },
  //       { abortEarly: false }
  //     );

  //     setError({}); // remove all errors when submitting
  //     alert("Password changed Successfully");
  //     navigate(ROUTES.HOME);
  //   } catch (err) {
  //     const newError = {};
  //     err.inner.forEach((err) => {
  //       newError[err.path] = err.message;
  //     });
  //     setError(newError);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(
        { email: formData.email, password: formData.password },
        { abortEarly: false }
      );

      setError({}); // remove all errors when submitting
      alert("Password changed successfully");
    } catch (err) {
      const newError = {};

      if (err.inner) {
        err.inner.forEach((error) => {
          newError[error.path] = error.message;
        });
      }

      setError(newError);
    } finally {
      navigate(ROUTES.HOME);
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
    <div className="max-w-[551px] w-full py-12 sm:py-[172px]">
      <AuthLayoutHeader title="Create New Password" />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-4">
          <div className="mb-4 flex flex-col gap-y-3">
            <TextInput
              id="email"
              label="Email Address"
              type="email"
              placeholder="Enter Email"
              value={userEmail}
              handleFormValue={handleFormValue}
              error={error?.email}
            />
          </div>
          <div className="mb-4 flex flex-col gap-y-3">
            <TextInput
              id="password"
              label="Email Password"
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
        </div>

        <div className="mt-12">
          <Button
            text="Verify"
            type="submit"
            className="bg-[#F97A05] text-white font-semibold font-fontPrimary rounded-lg h-[60px]"
          />
        </div>
      </form>
    </div>
  );
};

export default NewPassword;
