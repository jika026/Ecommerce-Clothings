import React from "react";

const FilterOptions = ({ category, setSelectedCategory, selectedCategory }) => {
  return (
    <div className="w-max border-[1px] border-[#737373] py-4 px-8 rounded-[64px] flex gap-x-2">
      <input
        type="radio"
        className="w-4"
        name="productCategory"
        value={category}
        checked={selectedCategory === category || false}
        onChange={() => setSelectedCategory(category)}
      />
      <label className="text-2xl leading-[29px] text-[#575757]">
        {category}
      </label>
    </div>
  );
};

export default FilterOptions;
