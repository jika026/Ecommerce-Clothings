import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Banners from "./components/Banners";
import Testimonials from "./components/Testimonials";
import Subscription from "./components/Subscription";
import Qualities from "../../components/Qualities.jsx";
import { useUserEmail } from "../../components/AuthContextAPI";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import HomeProducts from "./components/HomeProducts";

const Home = () => {
  const navigate = useNavigate();

  const { formData } = useUserEmail();

  useEffect(() => {
    if (formData.loggedIn == false) {
      console.log(formData, "You are not logged in");
      navigate(ROUTES.LOGIN);
    }
  }, []);

  return (
    <div id="content">
      <Hero />
      <section className="products mt-8 md:mt-[3.875rem] mx-4 sm:mx-8 md:mx-16 mb-6 grid gap-[14px]">
        <HomeProducts header="Today's Deal" />
        <Banners />
        <HomeProducts header="Trending Products" />
      </section>
      <Testimonials />
      <Subscription />
    </div>
  );
};

export default Home;
