import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Banners from "./components/Banners";
import Testimonials from "./components/Testimonials";
import Subscription from "./components/Subscription";
import Qualities from "./components/Qualities";
import { useUserEmail } from "../../components/AuthContextAPI";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";

const Home = () => {
  const navigate = useNavigate();

  const { formData } = useUserEmail();

  useEffect(() => {
    if (!formData.email != "") {
      console.log(formData, "You are not logged in");
      navigate(ROUTES.LOGIN);
    }
  }, []);

  return (
    <div id="content">
      <Hero />
      <section className="products mt-[3.875rem] mx-16 mb-6 grid gap-[14px]">
        {/* <div className="products-title">
          <p>Today's Deal</p>
        </div> */}
        {/* <div className="products-container" id="productContainerOne"></div> */}
        <Banners />
        {/* <div className="products-container" id="productContainerTwo"></div> */}
      </section>
      <Testimonials />
      <Subscription />
      <Qualities />
    </div>
  );
};

export default Home;
