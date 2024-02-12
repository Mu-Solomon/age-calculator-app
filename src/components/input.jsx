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
    <div className="flex  p-8 py-14 md:mx-3">
      <div className="flex flex-col gap-[2px]">
        <p
          className={`${
            appError || inputError || invalidDateError
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
            appError || inputError || invalidDateError
              ? "border border-[#ff5757]"
              : "border"
          } w-20 md:w-28  h-12 rounded-lg p-3 mr-3 font-bold text-xl text-[#141414] hover:border-[#854dff] hover:cursor-pointer  focus:outline-none`}
        />
        {appError ? (
          <p className="text-[8px] text-[#ff5757] md:text-[10px] italic">
            This field is required
          </p>
        ) : (
          ""
        )}
        {inputError ? (
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
            appError || inputError || invalidDateError
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
            appError || inputError || invalidDateError
              ? "border border-[#ff5757]"
              : "border"
          } w-20 md:w-28  h-12 rounded-lg p-3 mr-3 font-bold text-xl text-[#141414] hover:border-[#854dff] hover:cursor-pointer  focus:outline-none`}
        />
        {appError ? (
          <p className="text-[8px] text-[#ff5757] md:text-[10px] italic">
            This field is required
          </p>
        ) : (
          ""
        )}
        {inputError ? (
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
            appError || inputError || invalidDateError
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
            appError || inputError || invalidDateError
              ? "border border-[#ff5757]"
              : "border"
          } w-20 md:w-28  h-12 rounded-lg p-3 mr-3 font-bold text-xl text-[#141414] hover:border-[#854dff] hover:cursor-pointer  focus:outline-none`}
        />
        {appError ? (
          <p className="text-[8px] text-[#ff5757] md:text-[10px] italic">
            This field is required
          </p>
        ) : (
          ""
        )}
        {inputError ? (
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
