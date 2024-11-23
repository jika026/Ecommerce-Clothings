import React from "react";

const Subscription = () => {
  const handleSubsribers = (e) => {
    e.preventDefault();
  };
  return (
    <section className="my-12 mx-16">
      <div
        className="h-[536px] rounded-[64px] flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url("/IMAGES/subscriptionBanner.png")` }}
      >
        <p
          className="font-bold text-[48px] leading-[64px] text-[#fff504]"
          style={{ fontFamily: `"Inknut Antiqua", serif` }}
        >
          SUBSCRIPTION
        </p>
        <p
          className="font-bold text-[64px] leading-[72px] text-white"
          style={{ fontFamily: `"Kaisei Tokumin", serif` }}
        >
          Get Notified Once
        </p>
        <p
          className="font-bold text-[32px] leading-[52.13px] text-white"
          style={{ fontFamily: `"Kaisei Tokumin", serif` }}
        >
          An Items Goes On Sale
        </p>
        <form className="relative mt-6 w-fit" onSubmit={handleSubsribers}>
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className="w-[280px] sm:w-[420px] md:w-[648px] xl:w-[802px]  h-[89px] rounded-2xl border-none outline-none px-4 text-2xl leading-[29.05px] font-fontPrimary text-darkGrey"
          />
          <button className="h-[41px] w-[110px] sm:w-[130px] md:w-[150px] xl:w-[170px] md:text-sm text-base leading-[19.36px] text-white font-semibold bg-[#a40808] border-none outline-none absolute right-5 top-[22px] rounded-lg">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscription;
