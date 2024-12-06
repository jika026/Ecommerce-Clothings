import React from "react";

const FilterOptions = ({ category, setSelectedCategory, selectedCategory }) => {
  const handleDivClick = () => {
    setSelectedCategory(category);
  };

  return (
    <div
      className="w-max border-[1px] border-[#737373] py-2 px-4 md:py-4 md:px-8 rounded-[64px] flex gap-x-2 items-center"
      onClick={handleDivClick}
    >
      <input
        type="radio"
        className="w-4"
        name="productCategory"
        value={category}
        checked={selectedCategory === category || false}
        onChange={() => setSelectedCategory(category)}
        onClick={(e) => e.stopPropagation()} // Prevents the click from propagating to the parent div
      />
      <label className="text-2xl leading-[29px] text-[#575757] w-max">
        {category}
      </label>
    </div>
  );
};

export default FilterOptions;
