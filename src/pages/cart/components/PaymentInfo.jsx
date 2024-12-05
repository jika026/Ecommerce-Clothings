import React from "react";

const PaymentInfo = () => {
  return (
    <div className=" bg-[#f4f4f4] flex-[0.2] p-10 rounded-3xl h-max">
      <h3 className="font-semibold text-3xl sm:text-4xl leading-8 font-fontPrimary text-center mt-1 sm:mt-2 mb-2 md:mb-4">
        Payment Info
      </h3>
      <div>
        <form>
          <section>
            <h4 className="font-semibold text-2xl sm:text-[28px] leading-6 font-fontPrimary text-[#262626] mt-4 md:mt-8 mb-4 md:mb-6">
              Payment Method
            </h4>
            <div className="ml-4 sm:ml-8 space-y-3">
              <div>
                <input type="radio" name="payment" id="creditCard" />
                <label className="ml-4 font-semibold text-xl leading-6 font-fontPrimary text-[#262626]">
                  Credit Card
                </label>
              </div>
              <div>
                <input type="radio" name="payment" id="payPal" />
                <label className="ml-4 font-semibold text-xl leading-6 font-fontPrimary text-[#262626]">
                  Paypal
                </label>
              </div>
              <div>
                <input type="radio" name="payment" id="chipperCash" />
                <label className="ml-4 font-semibold text-xl leading-6 font-fontPrimary text-[#262626]">
                  Chipper Cash
                </label>
              </div>
            </div>
          </section>
          <section className="my-8 sm:my-12">
            <div className="flex flex-col gap-y-4 mb-4 md:mb-8">
              <label className="text-xl md:text-2xl leading-5 font-medium font-fontPrimary text-[#737373]">
                Card Number
              </label>
              <input
                type="text"
                className="h-[43px] text-[28px] leading-6  font-semibold font-fontPrimary px-4 placeholder-black tracking-[0.2em]"
                placeholder="**********"
                maxLength={16}
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-y-4 justify-between mb-8">
              <div className="flex flex-col gap-y-4">
                <label className="text-xl md:text-2xl leading-5 font-medium font-fontPrimary text-[#737373]">
                  Expiry Date
                </label>
                <input
                  type="text"
                  className="h-[43px] max-w-[188px] w-full text-xl leading-4 font-fontPrimary text-[#737373] tracking-[0.2em] text-center"
                  placeholder="mm | dd | yr"
                  maxLength={8}
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <label className="text-xl md:text-2xl leading-5 font-medium font-fontPrimary text-[#737373]">
                  CVV
                </label>
                <input
                  type="text"
                  className="h-[43px] max-w-[96px] w-full  text-[28px] leading-6  font-semibold font-fontPrimary px-4 placeholder-black tracking-[0.2em] text-center"
                  placeholder="***"
                  maxLength={3}
                />
              </div>
            </div>
          </section>
          <button className="font-fontPrimary font-medium text-lg leading-4 border-[1px] border-[#FF360A] px-[16px] py-[20px] rounded-lg w-full h-[56px] ">
            Check Out
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentInfo;
