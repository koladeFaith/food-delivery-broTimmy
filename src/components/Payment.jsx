import React from "react";
import remittaImg from "../images/Frame 1000005697.png";
import walletImg from "../images/Frame 1000005698.png";
import masterCardImg from "../images/Frame 1000005470.png";
import TransferImg from "../images/Frame 1000005470 (2).png";
import paymentImg from "../images/Frame 1000005470 (3).png";
const Payment = () => {
  return (
    <>
      <div className="mx-4 mt-7">
        <p className="text-[23px] text-[#333333BF]">Select payment method</p>
        <div className="bg-[#BF5904]  px-9 py-4 rounded-lg mt-16">
          <button className="  w-full  text-[#FFFFFF] flex justify-center items-center">
            <img src={remittaImg} alt="" className="w-[130px]" />
          </button>{" "}
        </div>
        <div className="bg-[#FFFFFF] border border-[#BF5904]  px-9 py-4 rounded-lg mt-6">
          <button className="  w-full  text-[#FFFFFF] flex justify-center items-center">
            <img src={walletImg} alt="" className="w-[130px]" />
          </button>{" "}
        </div>
        <div className="flex justify-between items-center mt-7 ">
          <hr className="w-[110px] text-[#333333BF]" />
          <p className="text-[#00000033]">Or paying with</p>
          <hr className="w-[110px] text-[#333333BF]" />
        </div>
        <h3 className="font-bold text-[20px] pb-4 pt-5">Saved</h3>
        <div className="flex justify-between items-center shadow-lg px-4 py-5">
          <div className="flex gap-3">
            {" "}
            <img src={masterCardImg} alt="" />
            <p className="text-[20px] font-medium text-[#000000]">***** 7654</p>
          </div>
          <a href="" className="text-[#BF5904BF] underline">
            View more
          </a>
        </div>{" "}
        <h3 className="font-bold text-[20px] pb-3 pt-7">
          Other payment method
        </h3>
        <div className="flex gap-10  shadow-lg px-4 py-5">
          <div className="flex gap-3">
            {" "}
            <img src={TransferImg} alt="" />
            <p className="text-[20px] font-medium text-[#000000]">
              Bank Transfer
            </p>
          </div>
        </div>{" "}
        <div className="flex gap-10  shadow-lg mt-2 px-4 py-5">
          <div className="flex gap-3">
            {" "}
            <img src={paymentImg} alt="" />
            <p className="text-[20px] font-medium text-[#000000]">
              Payment on Delivery
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
