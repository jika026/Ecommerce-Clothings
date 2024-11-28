import React from "react";

const RatingBar = ({ rating, percentage }) => {
  return (
    <div className="flex items-center mb-6 gap-x-6">
      <span className="ww-16 text-[#404040] font-fontPrimary font-medium text-[28px] leading-6">
        {rating} Star
      </span>
      <div className="flex-1 bg-gray-200 rounded-lg h-4 overflow-hidden">
        <div
          className="bg-[#F97A05] h-full rounded-lg"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="w-12 text-[#404040] font-fontPrimary font-medium text-[28px] leading-6 text-right">
        {percentage}%
      </span>
    </div>
  );
};

const RatingChart = () => {
  const ratings = [
    { rating: 5, percentage: 80 },
    { rating: 4, percentage: 65 },
    { rating: 3, percentage: 57 },
    { rating: 2, percentage: 40 },
    { rating: 1, percentage: 29 },
  ];

  return (
    <div className="w-[850px] mt-8 p-4">
      {ratings.map((rate, index) => (
        <RatingBar
          key={index}
          rating={rate.rating}
          percentage={rate.percentage}
        />
      ))}
    </div>
  );
};

export default RatingChart;
