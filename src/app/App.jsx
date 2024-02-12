"use client";
import Input from "@/components/input";
import Output from "@/components/output";
import React, { useState } from "react";
import Image from "next/image";

const App = () => {
  const [appError, setAppError] = useState("");
  const [inputError, setInputError] = useState("");
  const [invalidDateError, setInvalidDateError] = useState("");

  const [day, setDay] = useState(12);
  const [month, setMonth] = useState(2); // MAY
  const [year, setYear] = useState(2004);

  const handleDay = (e) => {
    setDay(e.target.value);
  };
  const handleMonth = (e) => {
    setMonth(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const calculateAge = () => {
    const todayDate = new Date("2024-08-24");
    const birthDate = new Date(`${year}-0${month}-${day}`);

    //Todays initials
    const todayYear = todayDate.getFullYear();
    const todayMonth = todayDate.getMonth();
    const todayDay = todayDate.getDate();

    //Todays initials
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();

    if (todayMonth == birthMonth) {
      if (todayDay == birthDay) {
        const age = todayDate.getFullYear() - birthDate.getFullYear();
        console.log("Everything has matched both month and day", age, " years");
        return age;
      } else {
        const age = todayDate.getFullYear() - birthDate.getFullYear() - 1;
        for (let month = 0; month < todayMonth; month++) {
          console.log(month);
        }
        console.log(
          "Month has matched but the days ain't the same!",
          age,
          "years"
        );
      }
    } else {
      console.log("Month ain't matched either!");
      var totalDays = 0;
      for (let month = 0; month < todayMonth; month++) {
        //Getting days in each month!
        const numberOfDays = new Date(todayYear, month + 1, 0).getDate();
        totalDays += numberOfDays;
        console.log(month + 1, numberOfDays, " days");
      }
      console.log(totalDays);
    }

    /*  console.log("Birth day", birthDate);
    console.log("Today day", todayDate); */
  };

  return (
    <div className="bg-[#ffffff] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-[100px] md:w-[600px] ">
      <Input
        appError={appError}
        inputError={inputError}
        invalidDateError={invalidDateError}
        handleDay={handleDay}
        handleMonth={handleMonth}
        handleYear={handleYear}
      />

      <div className="relative">
        <div className="flex justify-center items-center">
          <hr className="w-10/12 md:w-[520px]" />
        </div>
        <img
          onClick={calculateAge}
          src="/images/icon-arrow.svg"
          className="bg-[#854dff] hover:bg-[#141414] hover:cursor-pointer rounded-full p-4 w-14 md:w-[66px] absolute left-[140px] md:left-[495px] md:top-[-32px] top-[-28px]"
        />
      </div>

      <Output />
    </div>
  );
};

export default App;
