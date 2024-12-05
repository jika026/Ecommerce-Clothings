import React from "react";

const Subscription = () => {
  const handleSubsribers = (e) => {
    e.preventDefault();
  };
  return (
    <section className="my-12 mx-4 sm:mx-8 md:mx-16">
      <div
        className="h-[536px] rounded-[32px] md:rounded-[64px] flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url("/IMAGES/subscriptionBanner.png")` }}
      >
        <p
          className="font-bold md:leading-[64px] text-[#fff504]"
          style={{
            fontSize: "clamp(22px, 4vw, 48px)",
            fontFamily: `"Inknut Antiqua", serif`,
          }}
        >
          SUBSCRIPTION
        </p>
        <p
          className="font-bold text-[64px] leading-10 md:leading-[72px] text-white"
          style={{
            fontSize: "clamp(32px, 5vw, 64px)",
            fontFamily: `"Kaisei Tokumin", serif`,
          }}
        >
          Get Notified Once
        </p>
        <p
          className="font-bold text-[32px] md:leading-[52.13px] text-white"
          style={{
            fontSize: "clamp(28px, 3vw, 32px)",
            fontFamily: `"Kaisei Tokumin", serif`,
          }}
        >
          An Items Goes On Sale
        </p>
        <form className="relative mt-6 w-fit px-4" onSubmit={handleSubsribers}>
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className="w-full sm:min-w-[280px] md:w-[648px] xl:w-[802px] h-[72px] md:h-[89px] rounded-2xl border-none outline-none px-4 text-lg md:text-2xl leading-[29.05px] font-fontPrimary text-darkGrey"
          />
          <button className="h-[41px] px-2 sm:min-w-[100px] md:w-[150px] xl:w-[170px] md:text-sm text-base leading-[19.36px] text-white font-semibold bg-[#a40808] border-none outline-none absolute right-5 sm:right-7 md:right-9 top-[16px] md:top-[22px] rounded-lg">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscription;
