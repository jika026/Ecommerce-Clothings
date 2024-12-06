import React, { useState } from "react";
import FilterOptions from "./FilterOptions";

const ProductSideBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [value, setValue] = useState(0);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const productFilterOptions = [
    "Jalambia",
    "Kaftan",
    "Thobes",
    "Abaya",
    "Bespoke Dress",
    "Hijab",
    "Veil",
    "Male Cap",
  ];
  return (
    <div className="flex-[0.20] space-y-8 h-screen mb-8">
      <div>
        <h2 className="font-semibold text-4xl leading-8 font-fontPrimary mb-6">
          Filter Option
        </h2>
        <div className="rounded-2xl md:p-8 md:border-[1px] md:border-[#a6a6a6]">
          <h3 className="font-medium text-[28px] leading-6 mb-4">Category</h3>
          <form className="flex md:flex-col overflow-x-scroll gap-y-4 gap-x-2">
            {productFilterOptions.map((productFilterOption, index) => (
              <FilterOptions
                key={index}
                category={productFilterOption}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            ))}
          </form>
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-4xl leading-8 font-fontPrimary mb-6">
          Price Range
        </h2>
        <div className="flex flex-col items-center">
          <div className="max-w-80 w-full self-center">
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={handleInputChange}
              className="mt-4 w-full appearance-none focus:outline-none"
              style={{
                background: `linear-gradient(to right, orange ${value}%, #ddd ${value}%)`,
              }}
            />
            <div className="flex justify-between mt-2 text-sm text-gray-700">
              <span>$0</span>
              <span>$50</span>
              <span>$100</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx="true">{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background-color: orange;
          border-radius: 50%;
          cursor: pointer;
        }

        input[type="range"]::-moz-range-thumb,
        input[type="range"]::-ms-thumb {
          width: 16px;
          height: 16px;
          background-color: orange;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ProductSideBar;
