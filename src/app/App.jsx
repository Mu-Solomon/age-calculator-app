"use client";
import Input from "@/components/input";
import Output from "@/components/output";
import React, { useState } from "react";
import Image from "next/image";

const App = () => {
  const [appError, setAppError] = useState("");
  const [inputError, setInputError] = useState("");
  const [invalidDateError, setInvalidDateError] = useState("");

  //INPUT
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  //OUTPUT
  const [days, setDays] = useState(0);
  const [months, setMonths] = useState(0); // MARCH
  const [years, setYears] = useState(0);
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
    const todayDate = new Date();
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
        console.log(
          "Everything has matched both month and day, happy birthday",
          age,
          " years"
        );
        return age;
      } else {
        const age = todayDate.getFullYear() - birthDate.getFullYear() - 1;
        const monthsOld = todayDate.getMonth() - birthDate.getMonth();

        if (todayDay < birthDay) {
          console.log(age, "years", 11, "months", todayDay, "days old");
          console.log("Less than the birthday");
        } else if (todayDay > birthDay) {
          const age = todayDate.getFullYear() - birthDate.getFullYear();
          const daysOld = todayDate.getDate() - birthDate.getDate();

          console.log(age, "years", "00", "months", daysOld, "days old");

          console.log("Greater than the birthday");
        }
      }
    } else if (todayMonth > birthMonth) {
      const age = todayDate.getFullYear() - birthDate.getFullYear();
      var monthsOld = todayDate.getMonth() - birthDate.getMonth();
      var daysOld = 0;
      if (todayDate.getDate() == birthDate.getDate()) {
        console.log(age, "years", monthsOld, "months", "00 days old");
      } else if (todayDate.getDate() > birthDate.getDate()) {
        daysOld = todayDate.getDate() - birthDate.getDate();
        console.log(
          age,
          "age",
          monthsOld,
          "months old and",
          daysOld,
          "days old"
        );
      } else {
        monthsOld -= 1;
        const daysOld = todayDate.getDate();
        console.log(age, "years", monthsOld, "months", daysOld, "days old");
      }
      /* console.log(monthsOld); */
    } else {
      const age = todayDate.getFullYear() - birthDate.getFullYear() - 1;
      const remainingMonths = [];
      for (let month = birthMonth + 1; month <= 12; month++) {
        remainingMonths.push(month);
      }

      console.log(remainingMonths);

      if (todayDay == birthDay) {
        remainingMonths.length += 1;
        console.log(
          age,
          "years",
          remainingMonths.length,
          "months",
          "00 days old"
        );
      } else if (todayDay < birthDay) {
        console.log(
          age,
          "years",
          remainingMonths.length,
          "months",
          todayDay,
          "days old"
        );
      } else {
        console.log(
          age,
          "years",
          remainingMonths.length,
          "months",
          todayDay - birthDay,
          "days old"
        );
      }

      console.log("Today's month is less than birth month!");
    }

    console.log("Birth day", birthDate);
    console.log("Today day", todayDate);
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
