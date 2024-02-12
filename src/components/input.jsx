import React from "react";

const Input = () => {
  return (
    <div className="flex  p-8 py-14">
      <div className="flex flex-col gap-[2px]">
        <p className="text-[#716f6f] text-sm font-bold tracking-[2px]">DAY</p>
        <input
          type="text"
          name="day"
          placeholder="DD"
          value={24}
          className="w-20 h-12 rounded-lg border p-3 mr-3 font-bold text-xl text-[#141414]"
        />
      </div>
      <div className="flex flex-col gap-[2px]">
        <p className="text-[#716f6f] text-sm font-bold tracking-[2px]">MONTH</p>
        <input
          type="text"
          name="month"
          placeholder="MM"
          value={"09"}
          className="w-20 h-12 rounded-lg border p-3 mr-3 font-bold text-xl text-[#141414]"
        />
      </div>
      <div className="flex flex-col gap-[2px]">
        <p className="text-[#716f6f] text-sm font-bold tracking-[2px]">YEAR</p>
        <input
          type="text"
          name="year"
          placeholder="YYYY"
          value={1984}
          className="w-20 h-12 rounded-lg border p-3 mr-3 font-bold text-xl text-[#141414]"
        />
      </div>
    </div>
  );
};

export default Input;
