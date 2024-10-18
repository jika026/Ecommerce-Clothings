import React from "react";
import Button from "../../components/Button";

const Login = () => {
  return (
    <div>
      <AuthLayoutHeader title="Welcome Back" subtitle="Log Into Your Account" />
      <form className="space-y-1" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4"></div>

        <Button
          text="Login"
          type="submit"
          isLoading={isLoading}
          disabled={isLoading}
        />
      </form>
    </div>
  );
};

export default Login;
