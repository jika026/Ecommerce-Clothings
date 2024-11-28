import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "/IMAGES/jalabiya1.png";
import image2 from "/IMAGES/jalabiya2.png";
import image3 from "/IMAGES/abaya1.png";
import image4 from "/IMAGES/abaya2.png";
import image5 from "/IMAGES/abayaFour.png";
import image6 from "/IMAGES/abayaOne.png";
import SingleProduct from "../../home/components/SingleProduct";
import "./SingleProductDetails.css";
import RatingChart from "./RatingChart";

const products = [
  { image: image1, title: "ABAYA", price: 150.0 },
  { image: image2, title: "ABAYA", price: 150.0 },
  { image: image3, title: "JALABIYA", price: 50.0 },
  { image: image4, title: "VEIL", price: 9.99 },
  { image: image5, title: "VEIL", price: 9.99 },
  { image: image6, title: "BESPOKE DRESS", price: 500.0 },
];
const tabs = [
  { id: "description", label: "Description" },
  { id: "info", label: "Additional Information" },
  { id: "review", label: "Reviews" },
];
const details = [
  { feature: "Brand", value: "Dubai Abaya" },
  { feature: "Color", value: "Navy Blue" },
  { feature: "Dimension", value: '24"D X 25"W X 30"H' },
  { feature: "Size", value: "Large" },
  { feature: "Style", value: "Modern" },
];
const userReviews = [
  {
    image: "reviewImage.png",
    user: "Muadh Summayah",
    remark: "Awesome Price, Good Product",
    feedback:
      "The Abaya is of good quality and a blend of tradition, elegance, comfort and flow of silhouette, minimalistic style. The loose-fitting design allows for excellent air circulation, making it and ideal choice for hot climates or long days and also versatile, suitable and casual for wears.",
    dateSubmitted: "September 15, 2024",
  },
  {
    image: "reviewImage.png",
    user: "Muadh Summayah",
    remark: "Awesome Price, Good Product",
    feedback:
      "The Abaya is of good quality and a blend of tradition, elegance, comfort and flow of silhouette, minimalistic style. The loose-fitting design allows for excellent air circulation, making it and ideal choice for hot climates or long days and also versatile, suitable and casual for wears.",
    dateSubmitted: "September 15, 2024",
  },
  {
    image: "reviewImage.png",
    user: "Muadh Summayah",
    remark: "Awesome Price, Good Product",
    feedback:
      "The Abaya is of good quality and a blend of tradition, elegance, comfort and flow of silhouette, minimalistic style. The loose-fitting design allows for excellent air circulation, making it and ideal choice for hot climates or long days and also versatile, suitable and casual for wears.",
    dateSubmitted: "September 15, 2024",
  },
  {
    image: "reviewImage.png",
    user: "Muadh Summayah",
    remark: "Awesome Price, Good Product",
    feedback:
      "The Abaya is of good quality and a blend of tradition, elegance, comfort and flow of silhouette, minimalistic style. The loose-fitting design allows for excellent air circulation, making it and ideal choice for hot climates or long days and also versatile, suitable and casual for wears.",
    dateSubmitted: "September 15, 2024",
  },
  {
    image: "reviewImage.png",
    user: "Muadh Summayah",
    remark: "Awesome Price, Good Product",
    feedback:
      "The Abaya is of good quality and a blend of tradition, elegance, comfort and flow of silhouette, minimalistic style. The loose-fitting design allows for excellent air circulation, making it and ideal choice for hot climates or long days and also versatile, suitable and casual for wears.",
    dateSubmitted: "September 15, 2024",
  },
];

const SingleProductDetails = () => {
  const [activeTab, setActiveTab] = useState("");
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const shuffleProducts = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const similarProducts = shuffleProducts(products).slice(0, 4);

  const content = {
    description: (
      <div>
        <h3 className="mb-2 font-semibold text-[32px] leading-9 text-[#404040] font-fontPrimary">
          Dubai Abaya
        </h3>
        <div>
          <p className="mb-2 font-semibold text-[28px] leading-9 text-[#404040] font-fontPrimary">
            The Abaya is of good quality and a blend of tradition, elegance,
            comfort and flow of silhouette, minimalistic style. The
            loose-fitting design allows for excellent air circulation, making it
            and ideal choice for hot climates or long days and also versatile,
            suitable and casual for wears.
          </p>
          <p className="mb-2 font-semibold text-[28px] leading-9 text-[#404040] font-fontPrimary">
            The Abaya is of good quality and a blend of tradition, elegance,
            comfort and flow of silhouette, minimalistic style. The
            loose-fitting design allows for excellent air circulation, making it
            and ideal choice for hot climates or long days and also versatile,
            suitable and casual for wears.
          </p>
        </div>
      </div>
    ),
    info: (
      <div className="w-full max-w-[1057px] mt-8 bg-transparent">
        <div className="flex bg-[#F1EBE6] mb-12 h-[100px] items-center justify-around rounded-t-3xl rounded-b-2xl">
          <div className="text-center py-2 font-semibold text-4xl font-fontPrimary text-[#404040]">
            Features
          </div>
          <div className="text-center py-2 font-semibold text-4xl font-fontPrimary text-[#404040]">
            Details
          </div>
        </div>

        {details.map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden mt-8">
            <div
              className={`flex border border-[#a6a6a6] rounded-lg h-[80px] justify-around  items-center ${
                index % 2 === 0 ? "bg-[#f4f4f4]" : "bg-[#fcfcfc]"
              }`}
            >
              <div className=" py-2 px-4 text-center text-[32px] leading-10 text-[#404040] font-medium font-fontPrimary">
                {item.feature}
              </div>
              <div className=" py-2 px-4 text-center text-[32px] leading-10 text-[#404040] font-medium font-fontPrimary">
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
    review: (
      <div>
        <div className="mb-12 flex justify-between items-center">
          <div className="ml-12">
            <h2 className="text-[45px] leading-[54px] font-fontPrimary font-medium mb-6">
              Customer Review
            </h2>
            <div className="review flex gap-x-2 items-center">
              <div className="stars">
                <i className="fa-solid fa-star text-[#F97A05] text-[56px]"></i>
                <i className="fa-solid fa-star text-[#F97A05] text-[56px]"></i>
                <i className="fa-solid fa-star text-[#F97A05] text-[56px]"></i>
                <i className="fa-solid fa-star text-[#F97A05] text-[56px]"></i>
                <i className="fa-solid fa-star text-[#a6a6a6] text-[56px]"></i>
              </div>
              <p className="text-[28px] leading-6 font-medium font-fontPrimary text-[#404040]">
                4 out of 5
              </p>
            </div>
          </div>
          <RatingChart />
        </div>
        <main>
          <div className="flex justify-between items-center">
            <h2 className="text-[28px] leading-6 font-medium font-fontPrimary text-[404040]">
              Showing 1-5 of 20 results
            </h2>
            <div>
              <label className="mr-4 text-[28px] leading-6 font-medium font-fontPrimary text-[404040]">
                Sort by
              </label>
              <select
                name="sortType"
                id="sortType"
                className="px-2 py-3 w-[200px] h-[48px] rounded-[4px] text-center"
              >
                <option value="recentView">Recent View</option>
              </select>
            </div>
          </div>
          {userReviews.map((review, index) => (
            <div className="mb-8">
              <div>
                <div className="flex gap-x-6 items-center mb-4">
                  <img src={`/IMAGES/${review.image}`} alt="reviewUser" />
                  <p className="text-[22px] leading-5 font-semibold font-fontPrimary text-[#262626]">
                    {review.user}
                  </p>
                </div>
                <div>
                  <h3 className="text-[22px] leading-5 font-semibold font-fontPrimary text-[#404040] mb-2">
                    {review.remark}
                  </h3>
                  <div className="flex justify-between">
                    <p className="text-base font-semibold font-fontPrimary text-[#404040]">
                      {review.feedback}
                    </p>
                    <p className="text-base font-semibold font-fontPrimary text-[#737373`] ml-8 min-w-fit">
                      {review.dateSubmitted}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div>
            <p className="text-[28px] leading-6 font-medium font-fontPrimary text-[#262626] ml-32">
              1 2 3 ..... 20
            </p>
          </div>
        </main>
      </div>
    ),
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };
  return (
    <div>
      <main>
        <div
          className="h-[221px] flex justify-center items-center"
          style={{ backgroundImage: "url(/IMAGES/CartHeroBanner.png)" }}
        >
          <h3 className="font-bold text-[45px] leading-9 text-white mt-20">
            Products/PRODUCT
          </h3>
        </div>
        <div
          className="flex gap-x-2 items-center text-[28px] leading-6 font-fontPrimary my-6 mx-16"
          onClick={goBack}
        >
          <i className="fa-solid fa-caret-left"></i>
          <p>Back</p>
        </div>
        <div className="flex gap-x-6 mx-16 ">
          <section id="product-image " className="w-[40%]">
            <div className="main-image mb-12">
              <img
                src="/IMAGES/abayaOneFront.png"
                alt=""
                width="100%"
                className="max-h-[650px] h-full"
                id="mainImg"
              />
            </div>

            <div className="small-img-group flex justify-center gap-x-3">
              <div className="small-image cursor-pointer flex-[33%] bg-[#f0f0f0] rounded-[10px]">
                <img
                  src="/IMAGES/abayaOneFront.png"
                  alt=""
                  width="100%"
                  className="smallImg h-full"
                />
              </div>

              <div className="small-imagecursor-pointer flex-[33%] bg-[#f0f0f0] rounded-[10px]">
                <img
                  src="/IMAGES/abayaOneSide.png"
                  alt=""
                  width="100%"
                  className="smallImg"
                />
              </div>
              <div className="small-image cursor-pointer flex-[33%] bg-[#f0f0f0] rounded-[10px]">
                <img
                  src="/IMAGES/abayaOneBack.png"
                  alt=""
                  width="100%"
                  className="smallImg"
                />
              </div>
            </div>
          </section>
          <section className="details flex flex-col gap-y-6 ml-4">
            <p
              className="product-name mb-2 -ml-4"
              style={{ fontSize: "clamp(20px, 5vw, 50px)" }}
            ></p>
            <p
              id="text"
              className="text-[45px] leading-[36px] font-fontSecondary"
            >
              Dubai Jalabiya
            </p>
            <p className="price text-[30px]">$150.00</p>
            <p className="product-code text-[22px]">Product Code : 989898</p>
            <div className="review flex gap-x-2">
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-[18px]">4.0 | 20 Reviews | 30 sold</p>
            </div>
            <div className="colors mt-4 mb-8">
              <label htmlFor="colors" className="text-[18px]">
                Color Available
              </label>
              <div className="flex gap-x-2">
                <div className="bg-black w-[20px] h-[20px]"></div>
                <div className="bg-blue-500 w-[20px] h-[20px]"></div>
                <div className="bg-red-500 w-[20px] h-[20px]"></div>
                <div className="bg-orange-500 w-[20px] h-[20px]"></div>
              </div>
            </div>
            <div className="quantity flex gap-x-3 bg-[#f0f0f0] w-fit py-2 px-4 items-center rounded-[50px]">
              <p
                className="operation bg-white  w-[26px] h-[26px] rounded-[13px] flex justify-center text-2xl cursor-pointer"
                id="decrement"
                onClick={handleDecrement}
              >
                -
              </p>
              <p className="text-2xl" id="quantity-value">
                {quantity}
              </p>
              <p
                className="operation  bg-white  w-[26px] h-[26px] rounded-[13px] flex justify-center text-2xl cursor-pointer"
                id="increment"
                onClick={handleIncrement}
              >
                +
              </p>
            </div>

            <div className="buttons flex gap-x-12 mt-16">
              <button className="font-fontPrimary font-bold text-lg py-4 px-[34px] rounded-md border-none bg-[#f97a05] text-white">
                Buy Now
              </button>
              <button className="addToCart font-fontPrimary font-bold text-lg py-4 px-[34px] rounded-md border-[1px] border-[#ff360a]">
                Add to Cart
              </button>
            </div>
          </section>
        </div>
      </main>
      <section className="w-full my-12">
        <ul className="grid grid-cols-3 gap-4 mx-16">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer border rounded-lg py-4 px-6 text-center max-w-[430px]  text-[20px] leading-6 font-medium ${
                activeTab === tab.id ? "bg-black text-white" : "text-black"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>

        <div className="mt-12 mx-16">{content[activeTab]}</div>
      </section>
      <section className="ml-16">
        <h3 className="leading-[50px] text-[40px] font-normal mb-8">
          Discover Similar Item
        </h3>
        <div
          className="grid gap-x-6 gap-y-12 overflow-x-auto whitespace-nowrap scrollbar-hide"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          {similarProducts.map((product, index) => (
            <SingleProduct
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SingleProductDetails;
