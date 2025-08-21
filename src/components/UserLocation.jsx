import React from "react";
import shawamaImg from "../images/Fotos de Lanche - Baixe fotos grátis de alta qualidade _ Freepik 1.png";
import minus from "../images/mdi_minus.png";
import plus from "../images/Frame 1000005599.png";
const UserLocation = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] ">
        <div className="bg-gradient-to-r from-[#BF590440] to-[#BF590440] my-10 mx-3 rounded-lg px-4 ">
          {" "}
          <div className="flex justify-between items-center my-5">
            <div className="flex gap-1 justify-center items-center">
              <img
                src={shawamaImg}
                width={100}
                alt=""
                className="p-1 rounded-full bg-[#FFFFFF]"
              />
              <div className="leading-5">
                {" "}
                <p className="text-[20px] ">Sharwama</p>
                <p>Captain Cook Restuarant</p>
                <p>#1,500.00</p>
              </div>
            </div>{" "}
            <div className=" flex flex-col gap-2 bg-[#BF590440] py-1 px-1 ">
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
        <div></div>
      </div>
    </>
  );
};

export default UserLocation;
