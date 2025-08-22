import React from "react";
import checkoutImg from "../images/frame-1.png";
const Checkout = () => {
  return (
    <>
      <div className="bg-[#ffffff] mx-4 rounded-lg shadow-2xl px-4 flex flex-col  justify-center items-center mt-[100px]">
        <img src={checkoutImg} alt="" width={150} className="mt-[90px] mb-6" />
        <button className="bg-[#BF5904]  bottom-96 w-full  text-[#FFFFFF] 3px-9 py-4 mb-5 rounded-2xl">
          Order Completed
        </button>
        <a href="" className="underline text-[#BF5904] pb-8">
          Leave Feedback
        </a>
      </div>
    </>
  );
};

export default Checkout;
