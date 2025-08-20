import React from "react";
import shawamaImg from "../images/Fotos de Lanche - Baixe fotos grátis de alta qualidade _ Freepik 1.png";
import minus from "../images/mdi_minus.png";
import plus from "../images/Frame 1000005599.png";
import rate2 from "../images/rate-2.png";
import riceImg from "../images/a85bddf8-14c3-46a4-9fb4-ec6cb841f998 1.png";
import rateImg from "../images/Group.png";
import cartImg from "../images/Frame 1000005634.png";
import personImg from "../images/10491828 1.png";
const ProductDetails = () => {
  return (
    <>
      <div className="py-5 bg-gradient-to-r from-[#BF590440] to-[#BF590440]">
        <h1 className="text-center text-[#000000] font-bold text-[22px]">
          Product Details
        </h1>
        <div className="flex justify-center items-center my-5">
          <img src={shawamaImg} alt="" />
        </div>
      </div>
      <div className="mx-4">
        <div className="flex justify-between items-center my-5">
          <div className="leading-5">
            {" "}
            <p className="text-[20px] font-bold">Sharwama</p>
            <p>Caption Cook</p>
          </div>
          <div className="flex gap-1 bg-[#BF590440] py-1 px-1 gap-1">
            <img
              src={minus}
              alt=""
              className="rounded-full p-0.5 bg-[#FFFFFF]"
            />
            <p className="p-0.5 bg-[#FFFFFF]">01</p>
            <img src={plus} alt="" />
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <p>Related Items</p>
          <a href="" className="text-[#BF5904BF] underline">
            See all
          </a>
        </div>
        <div className="my-1 grid grid-cols-3 gap-2 ">
          {" "}
          <div className=" rounded-xl px-2 relative shadow-lg">
            <img src={riceImg} alt="" className="py-4 " />
            <div className="absolute top-20 left-14">
              {" "}
              <img
                src={cartImg}
                className="rounded-full p-1 bg-[#FFFFFF] "
                width={40}
                alt=""
              />
            </div>
            <p className="text-[15px] font-bold pt-1">Rice & Meat</p>
            <div className="flex gap-1">
              <img src={rateImg} alt="" />
              <p className="text-[12px]">4.8 (210)</p>
            </div>
            <p className="text-[15px] pb-3 ">$2.50</p>
          </div>{" "}
          <div className="shadow-lg  rounded-xl px-2 relative">
            <img src={riceImg} alt="" className="py-4 " />
            <div className="absolute top-20 left-14">
              {" "}
              <img
                src={cartImg}
                className="rounded-full p-1 bg-[#FFFFFF] "
                width={40}
                alt=""
              />
            </div>
            <p className="text-[15px] font-bold pt-1">Rice & Meat</p>
            <div className="flex gap-1">
              <img src={rateImg} alt="" />
              <p className="text-[12px]">4.8 (210)</p>
            </div>
            <p className="text-[15px]  pb-3">$2.50</p>
          </div>{" "}
          <div className="shadow-lg  rounded-xl px-2 relative">
            <img src={riceImg} alt="" className="py-4 " />
            <div className="absolute top-20 left-14">
              {" "}
              <img
                src={cartImg}
                className="rounded-full p-1 bg-[#FFFFFF] "
                width={40}
                alt=""
              />
            </div>
            <p className="text-[15px] font-bold pt-1">Rice & Meat</p>
            <div className="flex gap-1">
              <img src={rateImg} alt="" />
              <p className="text-[12px]">4.8 (210)</p>
            </div>
            <p className="text-[15px] pb-3  ">$2.50</p>
          </div>{" "}
        </div>{" "}
        <div className="">
          {" "}
          <p className="text-[#BF5904] text-lg pt-3 font-bold">Customer Review</p>
          <div className="l">
            <div className="flex justify- items- flex-co ">
              <div>
                {" "}
                <img src={personImg} className="rounded-full mt-1" alt="" />
              </div>
              <div className="mt-2">
                <p className="font-bold">Gbadeyanka Hammed</p>
                <img src="" alt="" />
                <div className="flex">
                  <img src={rateImg} alt="" />
                  <img src={rateImg} alt="" />
                  <img src={rateImg} alt="" />
                  <img src={rate2} alt="" />
                </div>
                <p className="text-[10px] w-[250px]">
                  "I ordered Jollof rice and grilled chicken from Iya Gbolahan
                  and it was delivered hot and fresh in just 20 minutes! The
                  portion was worth the price, and the delivery guy was polite.
                  Definitely ordering again
                </p>
              </div>
              <div className="mt-2">
                <p>01 Jul 25</p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
