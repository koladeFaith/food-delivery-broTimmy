import React from "react";
import pepperImg from "../images/download (11) 1.png";
import pepper2Img from "../images/Frame 1000005680.png";
import foodstuffImg from "../images/Frame 1000005681.png";
import beveragesImg from "../images/Frame 1000005682.png";
import fruitImg from "../images/Frame 1000005683.png";
import tomatoesImg from "../images/download (9) 1.png";
import riceImg from "../images/13 cabai merah besar 1.png";
import garriImg from "../images/Maize flour in the bag stock photo_ Image of lots, wooden - 21571186 1.png";
import rice2Img from "../images/Big Bull Parboiled Premium Rice - 50kg 1.png";
import yamImg from "../images/Is Yam Good For Ulcer Patient 1.png";
import cartImg from "../images/Frame 1000005634.png";
import rateImg from "../images/Group.png";
const MarketPlace = () => {
  return (
    <>
      <div className="mx-4 mt-4">
        <div className="flex gap-6 ">
          <img src={pepper2Img} alt="" />
          <img src={foodstuffImg} alt="" />
          <img src={beveragesImg} alt="" />
          <img src={fruitImg} alt="" />
        </div>

        <div className="mt-6">
          {" "}
          <div className="">
            <p className="text-[#BF5904] text-xl font-bold">Categories</p>
            <div className="flex justify-between items-center mt-1">
              <p>Peppers</p>
              <a href="" className="text-[#BF5904BF] underline">
                See all
              </a>
            </div>
            <div className="my-3 grid grid-cols-3 gap-2 ">
              {" "}
              <div className="shadow-lg  rounded-xl px-2 relative">
                <img src={pepperImg} alt="" className="py-4 " />
                <div className="absolute top-20 left-14">
                  {" "}
                  <img
                    src={cartImg}
                    className="rounded-full p-1 bg-[#FFFFFF] "
                    width={40}
                    alt=""
                  />
                </div>
                <p className="text-[15px] font-bold pt-1">Rodo</p>
                <div className="flex gap-1">
                  <img src={rateImg} alt="" />
                  <p className="text-[12px]">4.8 (210)</p>
                </div>
                <p className="text-[15px] pb-3 ">#500</p>
              </div>{" "}
              <div className="shadow-lg  rounded-xl px-2 relative">
                <img src={tomatoesImg} alt="" className="py-4 " />
                <div className="absolute top-20 left-14">
                  {" "}
                  <img
                    src={cartImg}
                    className="rounded-full p-1 bg-[#FFFFFF] "
                    width={40}
                    alt=""
                  />
                </div>
                <p className="text-[15px] font-bold">Tomatoes</p>
                <div className="flex gap-1">
                  <img src={rateImg} alt="" />
                  <p className="text-[12px]">4.8 (210)</p>
                </div>
                <p className="text-[15px] pb-3 ">#500</p>
              </div>{" "}
              <div className="shadow-lg  rounded-xl px-2 relative">
                <img src={riceImg} alt="" className="py-3 pb-8 pt-7" />
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
                <p className="text-[15px] pb-3 ">#500</p>
              </div>{" "}
            </div>{" "}
            <div className="flex justify-between items-center mt-1">
              <p>Foodstuffs</p>
              <a href="" className="text-[#BF5904BF] underline">
                See all
              </a>
            </div>
            <div className="my-3 grid grid-cols-3 gap-2 ">
              {" "}
              <div className="shadow-lg  rounded-xl px-2 relative">
                <img src={garriImg} alt="" className="py-4 " />
                <div className="absolute top-20 left-14">
                  {" "}
                  <img
                    src={cartImg}
                    className="rounded-full p-1 bg-[#FFFFFF] "
                    width={40}
                    alt=""
                  />
                </div>
                <p className="text-[15px] font-bold pt-3">Rodo</p>
                <div className="flex gap-1">
                  <img src={rateImg} alt="" />
                  <p className="text-[12px]">4.8 (210)</p>
                </div>
                <p className="text-[15px] ">#500</p>
              </div>{" "}
              <div className="shadow-lg  rounded-xl px-2 relative">
                <img src={rice2Img} alt="" className="py-4 " />
                <div className="absolute top-20 left-14">
                  {" "}
                  <img
                    src={cartImg}
                    className="rounded-full p-1 bg-[#FFFFFF] "
                    width={40}
                    alt=""
                  />
                </div>
                <p className="text-[15px] font-bold">Tomatoes</p>
                <div className="flex gap-1">
                  <img src={rateImg} alt="" />
                  <p className="text-[12px]">4.8 (210)</p>
                </div>
                <p className="text-[15px] pb-3 ">#500</p>
              </div>{" "}
              <div className="shadow-lg  rounded-xl px-2 relative">
                <img src={yamImg} alt="" className="py-3 pb-8 pt-7" />
                <div className="absolute top-20 left-14">
                  {" "}
                  <img
                    src={cartImg}
                    className="rounded-full p-1 bg-[#FFFFFF] "
                    width={40}
                    alt=""
                  />
                </div>
                <p className="text-[15px] font-bold pt-3">Rice & Meat</p>
                <div className="flex gap-1">
                  <img src={rateImg} alt="" />
                  <p className="text-[12px]">4.8 (210)</p>
                </div>
                <p className="text-[15px] pb-3 ">#500</p>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketPlace;
