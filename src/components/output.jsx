import React from "react";

const Output = ({ years, months, days }) => {
  const format = (number) => {
    if (number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  };

  const formatSingular = (text) => {
    if (text == 1) {
      return "";
    } else {
      return "s";
    }
  };

  return (
    <div className="py-16 ml-5 md:mx-9">
      <h1 className="text-5xl md:text-7xl font-[900] italic my-2 md:my-2">
        {" "}
        <span className="text-[#854dff]">
          {years || years === 0 ? format(years) : "--"}
        </span>{" "}
        <span className="text-[#141414]">year{formatSingular(years)}</span>
      </h1>
      <h1 className="text-5xl md:text-7xl font-[900] italic my-2 md:my-2">
        {" "}
        <span className="text-[#854dff]">
          {months || months === 0 ? format(months) : "--"}
        </span>{" "}
        <span className="text-[#141414]">month{formatSingular(months)}</span>
      </h1>
      <h1 className="text-5xl md:text-7xl font-[900] italic my-2 md:my-2">
        {" "}
        <span className="text-[#854dff]">
          {days || days === 0 ? format(days) : "--"}
        </span>{" "}
        <span className="text-[#141414]">day{formatSingular(days)}</span>
      </h1>
    </div>
  );
};

export default Output;
