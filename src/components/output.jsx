import React from "react";

const Output = () => {
  return (
    <div className="py-16 ml-5 md:mx-9">
      <h1 className="text-5xl md:text-7xl font-[900] italic my-2 md:my-2">
        {" "}
        <span className="text-[#854dff]">--</span>{" "}
        <span className="text-[#141414]">years</span>
      </h1>
      <h1 className="text-5xl md:text-7xl font-[900] italic my-2 md:my-2">
        {" "}
        <span className="text-[#854dff]">--</span>{" "}
        <span className="text-[#141414]">months</span>
      </h1>
      <h1 className="text-5xl md:text-7xl font-[900] italic my-2 md:my-2">
        {" "}
        <span className="text-[#854dff]">--</span>{" "}
        <span className="text-[#141414]">days</span>
      </h1>
    </div>
  );
};

export default Output;
