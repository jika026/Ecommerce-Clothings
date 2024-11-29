// import React from "react";

// const SingleProduct = ({ image, title, price, Home }) => {
//   return (
//     <div className="flex flex-col bg-[#f0f0f0] px-4 rounded-[32px] relative">
//       <div className="self-center pt-6 pb-16">
//         <img src={image} alt={title} className="mb-6" />
//       </div>
//       <div className="flex justify-between py-3 absolute w-full bottom-0 pr-8">
//         <div className="space-y-2">
//           <h3 className="text-[32px] w-max leading-[28px] font-fontSecondary">
//             {title}
//           </h3>
//           <p className="text-2xl leading-[24px] font-fontSecondary">
//             ${price.toFixed(2)}
//           </p>
//         </div>
//         <button
// className={`mt-4 md:mt-0 font-medium text-sm md:text-base px-4 py-2 border-2 rounded-lg transition-all ${
//             Home
//               ? "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
//               : "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
//           }`}
//           className={`font-fontPrimary font-medium text-lg leading-4 border-[1px] border-[#FF360A px-[16px] py-[20px] rounded-lg w-[203px] h-[56px] ${Home ? "border-[#FF360A]" : "border-black"}`}
//         >
//           Buy Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;

import React from "react";

const SingleProduct = ({ image, title, price, Home }) => {
  return (
    <div className="flex flex-col bg-gray-100 px-4 md:px-6 py-6 rounded-2xl relative shadow-lg justify-between">
      <div className="self-center pt-4 pb-12 flex justify-center items-center">
        <img
          src={image}
          alt={`Product image of ${title}`}
          className="mb-4 w-40 h-auto md:w-60 object-contain"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center py-3  w-full ">
        <div className="space-y-1 text-center md:text-left truncate">
          <h3 className=" font-normal truncate text-lg md:text-3xl lg:text-4xl  w-max leading-[28px] font-fontSecondary">
            {title}
          </h3>
          <p className="font-normal text-md md:text-2xl xl:text-3xl md:leading-[24px] font-fontSecondary">
            ${price.toFixed(2)}
          </p>
        </div>

        <button
          className={`font-fontPrimary mt-4 md:mt-0 font-medium text-sm md:text-lg px-4 w-[203px] h-[56px] border-2 rounded-lg transition-all ${
            Home
              ? "border-[#FF360A] text-orange-500 hover:border-[#FF360A] hover:text-white"
              : "border-black text-black hover:bg-black hover:text-white"
          }`}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
