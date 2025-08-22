import React from "react";
import checkoutImg from "../images/Frame 1000005746.png";
import downloadImg from "../images/material.png";
import trackImg from "../images/gg_track.png";
const CheckoutDetails = () => {
  return (
    <>
      <div className="relative">
        <img
          src={checkoutImg}
          alt=""
          className="absolute top-15 left-[35%] "
          width={95}
        />{" "}
        <h2 className="text-[23px] text-[#333333BF] mb-16 mt-5 text-center">
          Checkout Details{" "}
        </h2>
        <div className="bg-[#ffffff] shadow-2xl rounded-xl mx-4 text-center">
          <h3 className="pt-16 pb-4 text-[24px] font-medium">
            Payment Success!
          </h3>
          <p className="text-[16px] px-2">
            Your payment has been successfully done.
          </p>
          <hr className="mx-5 my-7" />
          <p className="text-[18px] text-[#333333BF]">Total Payment</p>
          <p className="text-[26px] font-bold">#25, 876.00</p>
          <div className="grid grid-cols-2 gap-3 mx-4 pb-16 pt-10">
            <div className="border border-[#D9D9D9] rounded-lg px-3 py-2 text-[#D9D9D9]">
              <p className="font-bold">Ref Number</p>
              <p className="font-extrabold">000085752257</p>
            </div>{" "}
            <div className="border border-[#D9D9D9] rounded-lg px-3 py-2 text-[#D9D9D9]">
              <p className="font-bold">Payment Time</p>
              <p className="font-extrabold">25 Feb 2025, 09:41</p>
            </div>{" "}
            <div className="border border-[#D9D9D9] rounded-lg px-3 py-2 text-[#D9D9D9]">
              <p className="font-bold">Payment Method</p>
              <p className="font-extrabold">Credit Card</p>
            </div>{" "}
            <div className="border border-[#D9D9D9] rounded-lg px-3 py-2 text-[#D9D9D9]">
              <p className="font-bold">Order Type</p>
              <p className="font-extrabold">Foods</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 flex-col mx-4 mt-[80px]">
          {" "}
          <div className="bg-[#BF5904]  bottom-96 w-full py-4 rounded-xl px-9 flex gap-2 justify-center items-center">
            {" "}
            <img src={downloadImg} alt="" />
            <button className="  text-[20px] text-[#FFFFFF]  ">
              Download Pdf
            </button>{" "}
          </div>
          <div className="border border-[#BF5904]  bottom-96 w-full py-4 rounded-xl px-9 flex gap-2 justify-center items-center">
            {" "}
            <img src={trackImg} alt="" />
            <button className=" text-[#BF5904] text-[20px] ">
              Track Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutDetails;
