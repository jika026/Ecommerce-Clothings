import React from "react";
import "./Testimonial.css";

const Testimonials = () => {
  return (
    <section className="m-4 sm:m-8 md:m-16">
      <h1
        className="font-fontPrimary text-center leading-8 mb-10"
        style={{
          fontSize: "clamp(24px, 6vw, 57px)",
          fontFamily: `"HeadlandOne", serif`,
        }}
      >
        Who We Are
      </h1>
      <section className="grid gap-5 mt-2 mb-[60px]">
        <div className="grid gap-y-8 gap-x-5 testimonialRemarks">
          <div>
            <div className="blog-banner">
              <img
                src="/IMAGES/blogimage1.png"
                alt=""
                className="w-full rounded-3xl"
              />
            </div>
            <div className="blog-content my-4 mx-[0.335rem] flex gap-x-3  items-center">
              <p className="text-2xl leading-6 md:text-[36px] md:leading-[43.57px] font-medium font-fontPrimary">
                Our Commitment
              </p>
            </div>
            <p className="font-fontPrimary text-base">
              Modesty is the brainchild of what we base our stunning designs on.
              We are committed to providing sustainable bespoke outfits to
              empower women and men & promote modesty.
            </p>
          </div>
          <div>
            <div className="blog-banner">
              <img
                src="/IMAGES/blogimage2.png"
                alt=""
                className="w-full rounded-3xl"
              />
            </div>
            <div className="blog-content my-4 mx-[0.335rem] flex gap-x-3  items-center">
              <p className="text-2xl leading-6 md:text-[36px] md:leading-[43.57px] font-medium font-fontPrimary ">
                Our Mission
              </p>
            </div>
            <p className="font-fontPrimary text-base">
              Kaltu’s Collectibles was founded to provide a platform where women
              and men slay in style effortlessly. We believe everyone has a
              unique way of expressing their identity through their fashion
              choice. We are poised to make brilliant bespoke outfits for both
              Women and Men to dress modestly.
            </p>
          </div>
          <div>
            <div className="blog-banner">
              <img
                src="/IMAGES/blogimage3.png"
                alt=""
                className="w-full rounded-3xl"
              />
            </div>
            <div className="blog-content my-4 mx-[0.335rem] flex gap-x-3  items-center">
              <p className="text-2xl leading-6 md:text-[36px] md:leading-[43.57px] font-medium font-fontPrimary ">
                For the Community
              </p>
            </div>
            <p className="font-fontPrimary text-base">
              To foster the ties among the modest fashion tribe, we uphold
              modest values, individual style, inclusion and unity.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
