import Input from "@/components/input";
import Output from "@/components/output";
import React from "react";
import Image from "next/image";

const App = () => {
  return (
    <div className="bg-[#ffffff] mx-3 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-[100px] md:w-[600px] ">
      <Input />

      <div className="relative">
        <div className="flex justify-center items-center">
          <hr className="w-10/12 md:w-[520px]" />
        </div>
        <img
          src="/images/icon-arrow.svg"
          className="bg-[#854dff] rounded-full p-4 w-14 md:w-[66px] absolute left-[140px] md:left-[495px] md:top-[-32px] top-[-28px]"
        />
      </div>

      <Output />
    </div>
  );
};

export default App;
