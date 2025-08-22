import React from "react";
import shawamaImg from "../images/Fotos de Lanche - Baixe fotos grátis de alta qualidade _ Freepik 1.png";
import rate2 from "../images/vector-4.png";
import rateImg from "../images/Vector.png";
const Feedback = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-16">
        <div className="bg-[#FAFAFA] rounded-xl p-4 w-[110px]">
          <img src={shawamaImg} alt="" width={110} />
        </div>
        <div className="w-[200px] text-center ">
          {" "}
          <p className="text-[18px] leading-5 pb-2 pt-4 font-medium">
            How was the delivery of your order?
          </p>
          <p className="text-[13px] leading-5">
            Did our rider deliver a good service and how was meal
          </p>
        </div>
        <div className="flex gap-2 shadow-xl py-10 my-10 justify-center items-center px-4">
          <img src={rateImg} alt="" className="w-[50px]" />
          <img src={rateImg} alt="" className="w-[50px]" />
          <img src={rateImg} alt="" className="w-[50px]" />
          <img src={rateImg} alt="" className="w-[50px]" />
          <img src={rate2} alt="" className="w-[50px]" />
        </div>
        <div className="border border-black mx-4 rounded-xl">
          {" "}
          <p className="">
            Yes, the food was delicious and the rider was fast, polite and
            friendly.
          </p>
        </div>
      </div>
    </>
  );
};

export default Feedback;
