"use client";
import React from "react";

const Input = ({
  appError,
  inputError,
  invalidDateError,
  handleDay,
  handleMonth,
  handleYear,
}) => {
  return (
    <div className="flex  p-8 py-14 md:gap-4 md:mx-3">
      <div className="flex flex-col gap-[2px]">
        <p
          className={`${
            appError.day ||
            inputError.day ||
            inputError.month ||
            inputError.year ||
            invalidDateError
              ? "text-[#ff5757]"
              : "text-[#716f6f]"
          } text-sm font-bold tracking-[2px]`}
        >
          DAY
        </p>
        <input
          onChange={handleDay}
          type="text"
          name="day"
          placeholder="DD"
          className={`${
            appError.day ||
            inputError.day ||
            inputError.month ||
            inputError.year ||
            invalidDateError
              ? "border border-[#ff5757]"
              : "border"
          } w-20 md:w-28  h-12 rounded-lg p-3 mr-3 font-bold text-xl text-[#141414] hover:border-[#854dff] hover:cursor-pointer  focus:outline-none`}
        />
        {appError.day ? (
          <p className="text-[8px] text-[#ff5757] md:text-[10px] italic">
            This field is required
          </p>
        ) : (
          ""
        )}
        {inputError.day ? (
          <p className="text-[8px] text-[#ff5757] md:text-[10px] italic">
            Must be a valid day
          </p>
        ) : (
          ""
        )}
        {invalidDateError ? (
          <p className="text-[8px] text-[#ff5757] md:text-[10px] italic">
            Must be a valid date
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col gap-[2px]">
        <p
          className={`${
            appError.month ||
            inputError.day ||
            inputError.month ||
            inputError.year ||
            invalidDateError
              ? "text-[#ff5757]"
              : "text-[#716f6f]"
          } text-sm font-bold tracking-[2px]`}
        >
          MONTH
        </p>
        <input
          onChange={handleMonth}
          type="text"
          name="month"
          placeholder="MM"
          className={`${
            appError.month ||
            inputError.day ||
            inputError.month ||
            inputError.year ||
            invalidDateError
              ? "border border-[#ff5757]"
              : "border"
          } w-20 md:w-28  h-12 rounded-lg p-3 mr-3 font-bold text-xl text-[#141414] hover:border-[#854dff] hover:cursor-pointer  focus:outline-none`}
        />
        {appError.month ? (
          <p className="text-[8px] text-[#ff5757] md:text-[10px] italic">
            This field is required
          </p>
        ) : (
          ""
        )}
        {inputError.month ? (
          <p className="text-[8px] text-[#ff5757] md:text-[10px] italic">
            Must be a valid month
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col gap-[2px]">
        <p
          className={`${
            appError.year ||
            inputError.day ||
            inputError.month ||
            inputError.year ||
            invalidDateError
              ? "text-[#ff5757]"
              : "text-[#716f6f]"
          } text-sm font-bold tracking-[2px]`}
        >
          YEAR
        </p>
        <input
          onChange={handleYear}
          type="text"
          name="year"
          placeholder="YYYY"
          className={`${
            appError.year ||
            inputError.day ||
            inputError.month ||
            inputError.year ||
            invalidDateError
              ? "border border-[#ff5757]"
              : "border"
          } w-20 md:w-28  h-12 rounded-lg p-3 mr-3 font-bold text-xl text-[#141414] hover:border-[#854dff] hover:cursor-pointer  focus:outline-none`}
        />
        {appError.year ? (
          <p className="text-[8px] text-[#ff5757] md:text-[10px] italic">
            This field is required
          </p>
        ) : (
          ""
        )}
        {inputError.year ? (
          <p className="text-[8px] text-[#ff5757] md:text-[10px] italic">
            Must be in the past
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Input;
