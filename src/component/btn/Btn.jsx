import React from "react";

const Btn = () => {
  return (
    <div className="w-[850px] border-2 flex justify-between ml-5">
      <button className="w-[20%] h-[40px] bg-[#87CEEB] border-2 font-bold text-[16px] flex items-center justify-start p-3 rounded-[4px]">
        24 Hours
      </button>
      <button className="w-[20%] h-[40px] bg-[#87CEEB] border-2 font-normal text-[16px] flex items-center justify-start p-3 rounded-[4px]">
        30 Days
      </button>
      <button className="w-[20%] h-[40px] bg-[#87CEEB] border-2 font-normal text-[16px] flex items-center justify-start p-3 rounded-[4px] ">
        3 Months
      </button>
      <button className="w-[20%] h-[40px] bg-[#87CEEB] border-2 font-normal text-[16px] flex items-center justify-start p-3 rounded-[4px]">
        1 Year
      </button>
    </div>
  );
};

export default Btn;
