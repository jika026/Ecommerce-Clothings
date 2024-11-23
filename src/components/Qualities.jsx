import React from "react";

const Qualities = () => {
  return (
    <section
      className="m-16 grid gap-x-12 gap-y-[1.4rem]"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
    >
      <div className="flex items-center w-full justify-center">
        <i className="fa-solid fa-truck text-[21px] bg-[#F97A05] p-2 rounded-lg"></i>
        <p
          className="font-fontPrimary ml-[0.335rem]"
          style={{ fontSize: "clamp(14px, 4vw, 21px)" }}
        >
          Seven Day Shipping
        </p>
      </div>
      <div className="flex items-center w-full justify-center">
        <i className="fa-solid fa-money-bills text-[21px] bg-[#F97A05] p-2 rounded-lg"></i>
        <p
          className="font-fontPrimary ml-[0.335rem]"
          style={{ fontSize: "clamp(14px, 4vw, 21px)" }}
        >
          Secure Payments
        </p>
      </div>
      <div className="flex items-center w-full justify-center">
        <i className="fa-solid fa-money-bill text-[21px] bg-[#F97A05] p-2 rounded-lg"></i>
        <p
          className="font-fontPrimary ml-[0.335rem]"
          style={{ fontSize: "clamp(14px, 4vw, 21px)" }}
        >
          Money Gurantee
        </p>
      </div>
      <div className="flex items-center w-full justify-center">
        <i className="fa-solid fa-stopwatch text-[21px] bg-[#F97A05] p-2 rounded-lg"></i>
        <p
          className="font-fontPrimary ml-[0.335rem]"
          style={{ fontSize: "clamp(14px, 4vw, 21px)" }}
        >
          24/7 Support System
        </p>
      </div>
    </section>
  );
};

export default Qualities;
