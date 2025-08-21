import React from "react";
import shawamaImg from "../images/Fotos de Lanche - Baixe fotos grátis de alta qualidade _ Freepik 1.png";
import minus from "../images/mdi_minus.png";
import plus from "../images/Frame 1000005599.png";
import order from "../images/order.png";
const OrderReview = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] ">
        <div className="bg-gradient-to-r from-[#BF590440] to-[#BF590440] mt-3 mx-3 rounded-lg px-4 ">
          {" "}
          <div className="flex justify-between items-center my-5">
            <div className="flex gap-1 justify-center items-center">
              <img
                src={shawamaImg}
                width={100}
                alt=""
                className="p-1 rounded-full bg-[#FFFFFF] my-2"
              />
              <div className="leading-5">
                {" "}
                <p className="text-[20px] ">Sharwama</p>
                <p className="text-[14px]">Captain Cook Restuarant</p>
                <p className="text-[14px]">#1,500.00</p>
              </div>
            </div>{" "}
            <div className=" flex flex-col gap-2  py-1 px-1 ">
              <img
                src={minus}
                width={15}
                alt=""
                className="rounded-full p-0.5 bg-[#FFFFFF]"
              />
              <p className="p-0.5 bg-[#FFFFFF] text-[10px]">01</p>
              <img src={plus} width={15} alt="" />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#BF590440] to-[#BF590440] mt-7 mx-3 rounded-lg px-4 ">
          {" "}
          <div className="flex justify-between items-center my-5">
            <div className="flex gap-1 justify-center items-center">
              <img
                src={shawamaImg}
                width={100}
                alt=""
                className="p-1 rounded-full bg-[#FFFFFF] my-2"
              />
              <div className="leading-5">
                {" "}
                <p className="text-[20px] ">Sharwama</p>
                <p className="text-[14px]">Captain Cook Restuarant</p>
                <p className="text-[14px]">#1,500.00</p>
              </div>
            </div>{" "}
            <div className=" flex flex-col gap-2 py-1 px-1 ">
              <img
                src={minus}
                width={15}
                alt=""
                className="rounded-full p-0.5 bg-[#FFFFFF]"
              />
              <p className="p-0.5 bg-[#FFFFFF] text-[10px]">01</p>
              <img src={plus} width={15} alt="" />
            </div>
          </div>
        </div>{" "}
        <div className="bg-gradient-to-r from-[#BF590440] to-[#BF590440] my-7 mx-3 rounded-lg px-4 ">
          {" "}
          <div className="flex justify-between items-center my-5">
            <div className="flex gap-1 justify-center items-center">
              <img
                src={shawamaImg}
                width={100}
                alt=""
                className="p-1 rounded-full bg-[#FFFFFF] my-2"
              />
              <div className="leading-5">
                {" "}
                <p className="text-[20px] ">Sharwama</p>
                <p className="text-[14px]">Captain Cook Restuarant</p>
                <p className="text-[14px]">#1,500.00</p>
              </div>
            </div>{" "}
            <div className=" flex flex-col gap-2  py-1 px-1 ">
              <img
                src={minus}
                width={15}
                alt=""
                className="rounded-full p-0.5 bg-[#FFFFFF]"
              />
              <p className="p-0.5 bg-[#FFFFFF] text-[10px]">01</p>
              <img src={plus} width={15} alt="" />
            </div>
          </div>
        </div>
        <div className="border border-[#4CAF50BF] rounded-lg flex justify-between items-center py-2 mx-4 px-5">
          <div className="flex gap-4  ">
            {" "}
            <img src={order} alt="" width={50} />
            <p className="text-[#4CAF50BF] font-bold text-[15px]">
              Promo Coupon
            </p>{" "}
          </div>
          <button className=" px-7 text=[#FFFFFF] rounded-lg bg-[#4CAF50BF]">
            Use
          </button>
        </div>
        <div className="bg-[#FFFFFF] shadow-lg  mt-6">
          <div className="flex justify-between px-4 pt-4 pb-5">
            <p className="text-[18px]">Items Price</p>
            <p className="text-[18px]">10,000.00</p>
          </div>
          <hr className="text-[#D9D9D9]" />
          <div className="flex justify-between px-4 pt-4 pb-5">
            <p className="text-[18px]">Delivery Amount</p>
            <p className="text-[18px]">1,500.00</p>
          </div>
          <hr className="text-[#D9D9D9]" />
          <div className="flex justify-between px-4 pt-4 pb-5">
            <p className="text-[18px] font-bold">Total Amount</p>
            <p className="text-[18px] font-bold">#11,500.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderReview;
