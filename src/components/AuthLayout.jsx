import "./AuthLayout.css";

// change the content
export const AuthLayout = ({ children }) => {
  return (
    <div
      className="h-screen flex bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url("/IMAGES/Authentication.png")` }}
    >
      <LayoutLeft />
      <div className="relative lg:flex-[0.45] p-5 grid place-items-center mx-auto">
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
    <div className="hidden flex-[0.55] md:flex flex-col items-center justify-center text-center p-8">
      <img src="/IMAGES/logo/footerLogo.png" alt="LOGO" />
      <p
        className="text-[28px] leading-6 mb-5"
        style={{
          fontFamily: `"Amethysta", serif`,
        }}
      >
        We deliver the best and worthwhile product
      </p>
      <button className="font-fontPrimary font-semibold text-lg leading-[16px] border-[1px] border-black px-20 py-3 bg-transparent rounded">
        Sign Up
      </button>
    </div>
  );
};
