import "./AuthLayout.css";

// change the content
export const AuthLayout = ({ children }) => {
  return (
    <div className="h-screen flex">
      <LayoutLeft />
      <div className="relative lg:flex-[0.45] p-5 grid place-items-center mx-auto">
        <img
          src={"/logo.svg"}
          className="h-8 absolute top-5 left-5 md:top-8 md:left-12"
        />

        <div className="max-w-[400px] w-full">{children}</div>
      </div>
    </div>
  );
};

export const AuthLayoutHeader = ({ title, subtitle }) => {
  return (
    <header>
      <h1 className="font-semibold w-80 text-[2.375rem] leading-[2.875rem]">
        {title}
      </h1>
      <p className="mt-1 text-grey mb-6">{subtitle}</p>
    </header>
  );
};

const LayoutLeft = () => {
  return (
    <div className="hidden flex-[0.55] bg-primaryLight md:flex flex-col items-center justify-center text-center p-8">
      <div className="w-full max-w-[600px] flex flex-col items-center">
        <img src="/images/auth/currency-exchange.svg" className="h-[360px]" />
        <h1 className="font-extrabold text-[2.75rem] leading-[3.875rem] py-4">
          Instantly Buy Yuan into Your{" "}
          <span className="text-decoration">Alipay</span> Account
        </h1>
        <p className="text-base leading-6 text-[#333333] max-w-[500px] mx-auto">
          No more searching for Chinese Yuan/RMB holders. Buy Yuan instantly and
          send money to China.
        </p>
      </div>
    </div>
  );
};
