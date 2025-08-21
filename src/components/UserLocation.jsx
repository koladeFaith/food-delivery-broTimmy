import React from "react";

const UserLocation = () => {
  return (
    <>
      <div className="mx-4 ">
        <h3 className="text-[30px] font-bold pt-8 pb-1">
          Choose your Location
        </h3>
        <p className="text-[#00000033] text-[20px]">
          Search for your prefer Location{" "}
        </p>

        <input
          type="text"
          placeholder="Select your City/State"
          className="text-[#00000033] my-10 text-[22px] border-t-[#FFFFFF] p-4 w-full rounded-lg border border-b-[#BF5904]"
        />
        <p className="text-[#BF5904] font-bold text-[22px]">
          Areas within the jurisdiction
        </p>
        <button className="bg-[#BF5904] mt-[100px] bottom-96 w-full  text-[#FFFFFF] px-9 py-3 rounded-lg">
          Proceed
        </button>
      </div>
    </>
  );
};

export default UserLocation;
