import React from "react";
import remittaImg from "../images/Frame 1000005697.png";
import walletImg from "../images/wallet.png";
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
      </div>
    </>
  );
};

export default Payment;
