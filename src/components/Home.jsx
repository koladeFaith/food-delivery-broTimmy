import React from "react";
import { FaBell, FaHeadphones, FaUser } from "react-icons/fa";
import personImg from "../images/ep_avatar.png";
import bellImg from "../images/Group-2.png";
import earphoneImg from "../images/Vector-2.png";
import MarketImg from "../images/Frame 1686556122.png";
import foodImg from "../images/Frame 1686556123.png";
import orderImg from "../images/Banner.png";
import market from "../images/streamline-ultimate-color_farmers-market-kiosk-1.png";

const Home = () => {
  return (
    <>
      {/* Home section */}
      <section className=" my-3">
        {" "}
        {/* Header */}
        <header className="flex justify-between items-center mx-4">
          <div className="flex gap-1 justify-center items-center">
            <img
              src={personImg}
              className="border border-[#BF5904] p-2 rounded-full"
              alt=""
            />
            <div className="leading-4">
              <p>Welcome👋</p>
              <p className="font-bold">Gbadeyanka Hammed</p>
            </div>
          </div>
          <div className="flex gap-3">
            <img src={earphoneImg} width={20} alt="" />
            <img src={bellImg} width={20} alt="" />
          </div>
        </header>
        <hr className="mx-0 mt-2 text-[#BF5904]" />
        <div className="flex justify-between items-center mt-8 mx-4">
          <img src={MarketImg} className="w-1/2 shadow-lg" alt="" />
          <img src={foodImg} className="w-1/2 shadow-lg" alt="" />
        </div>
        <div className="mt-7 mx-4">
          <img src={orderImg} alt="" />
        </div>
        <div className="mx-3 mt-4">
          <p className="text-[#BF5904] text-xl font-bold">Explore</p>
          <div className="flex justify-between items-center mt-1">
            <p>Restaurant/Supermarket</p>
            <a href="" className="text-[#FF4D00] underline">
              See all
            </a>
          </div>
          <div className="grid grid-cols-4 mt-5 gap-1">
            {" "}
            <div className="flex jusifty-center items-center flex-col">
              {" "}
              <img src={market} alt="" />
              <p className="text-[12px] my-4">Owode Market</p>
            </div>{" "}
            <div className="flex jusifty-center items-center flex-col">
              {" "}
              <img src={market} alt="" />
              <p className="text-[12px] my-4">Owode Market</p>
            </div>{" "}
            <div className="flex jusifty-center items-center flex-col">
              {" "}
              <img src={market} alt="" />
              <p className="text-[12px] my-4">Owode Market</p>
            </div>{" "}
            <div className="flex jusifty-center items-center flex-col">
              {" "}
              <img src={market} alt="" />
              <p className="text-[12px] my-4 ">Owode Market</p>
            </div>{" "}
            <div className="flex jusifty-center items-center flex-col">
              {" "}
              <img src={market} alt="" />
              <p className="text-[12px] my-4 ">Owode Market</p>
            </div>{" "}
            <div className="flex jusifty-center items-center flex-col">
              {" "}
              <img src={market} alt="" />
              <p className="text-[12px] my-4 ">Owode Market</p>
            </div>{" "}
            <div className="flex jusifty-center items-center flex-col">
              {" "}
              <img src={market} alt="" />
              <p className="text-[12px] my-4">Owode Market</p>
            </div>{" "}
            <div className="flex jusifty-center items-center flex-col">
              {" "}
              <img src={market} alt="" />
              <p className="text-[12px] my-4">Owode Market</p>
            </div>{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
