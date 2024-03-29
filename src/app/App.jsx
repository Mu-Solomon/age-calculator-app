"use client";
import React, { useState } from "react";
import { useFormState } from "react-dom";

import { testServer } from "@/lib/actions";

import Input from "@/components/input";
import Output from "@/components/output";

const App = () => {
  const [appError, setAppError] = useState({
    day: false,
    month: false,
    year: false,
  });
  const [inputError, setInputError] = useState({
    day: false,
    month: false,
    year: false,
  });
  const [invalidDateError, setInvalidDateError] = useState(false);

  //INPUT
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  //OUTPUT
  const [days, setDays] = useState("");
  const [months, setMonths] = useState("");
  const [years, setYears] = useState("");
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
    //0759 882003
    //Todays initials
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();

    //Check if it's a valid date
    var validationDate = new Date(year, parseFloat(month), 0);
    var numberOfDays = validationDate.getDate();
    //Check if empty
    if (!year || !parseInt(year)) {
      setInputError({
        day: false,
        month: false,
        year: false,
      });
      setAppError((prevErrors) => ({ ...prevErrors, year: true }));
      setInvalidDateError(false);
    } else if (!month || !parseInt(month)) {
      setInputError({
        day: false,
        month: false,
        year: false,
      });
      setAppError((prevErrors) => ({ ...prevErrors, month: true }));
      setInvalidDateError(false);
    } else if (!day || !parseInt(day)) {
      setInputError({
        day: false,
        month: false,
        year: false,
      });
      setAppError((prevErrors) => ({ ...prevErrors, day: true }));
      setInvalidDateError(false);
    } else {
      if (parseFloat(day) > 31) {
        setInputError((prevErrors) => ({ ...prevErrors, day: true }));
        setAppError({ day: false, month: false, year: false });
        setInvalidDateError(false);
        setYears("");
        setMonths("");
        setDays("");
        return;
      } else if (parseFloat(month) > 12) {
        setInputError((prevErrors) => ({ ...prevErrors, month: true }));
        setAppError({ day: false, month: false, year: false });
        setInvalidDateError(false);
        setYears("");
        setMonths("");
        setDays("");
        return;
      } else if (parseFloat(year) > todayYear) {
        setInputError((prevErrors) => ({ ...prevErrors, year: true }));
        setAppError({ day: false, month: false, year: false });
        setInvalidDateError(false);
        setYears("");
        setMonths("");
        setDays("");
        return;
      } else {
        //Checking whether the day is not in that month
        if (parseFloat(day) > numberOfDays) {
          setInvalidDateError(true);
          setYears("");
          setMonths("");
          setDays("");
          return null;
        }
        setInputError({
          day: false,
          month: false,
          year: false,
        });
        setAppError({ day: false, month: false, year: false });
        setInvalidDateError(false);
      }
    }

    if (todayMonth == birthMonth) {
      if (todayDay == birthDay) {
        const age = todayDate.getFullYear() - birthDate.getFullYear();
        setYears(age);
        setMonths(0);
        setDays(0);

        return age;
      } else {
        const age = todayDate.getFullYear() - birthDate.getFullYear() - 1;
        const monthsOld = todayDate.getMonth() - birthDate.getMonth();

        if (todayDay < birthDay) {
          setYears(age);
          setMonths(11);
          setDays(todayDay);
        } else if (todayDay > birthDay) {
          const age = todayDate.getFullYear() - birthDate.getFullYear();
          const daysOld = todayDate.getDate() - birthDate.getDate();

          setYears(age);
          setMonths(0);
          setDays(daysOld);
        }
      }
    } else if (todayMonth > birthMonth) {
      const age = todayDate.getFullYear() - birthDate.getFullYear();
      var monthsOld = todayDate.getMonth() - birthDate.getMonth();
      var daysOld = 0;
      if (todayDate.getDate() == birthDate.getDate()) {
        setYears(age);
        setMonths(monthsOld);
        setDays(0);
      } else if (todayDate.getDate() > birthDate.getDate()) {
        daysOld = todayDate.getDate() - birthDate.getDate();
        setYears(age);
        setMonths(monthsOld);
        setDays(daysOld);
      } else {
        monthsOld -= 1;
        const daysOld = todayDate.getDate();
        setYears(age);
        setMonths(monthsOld);
        setDays(daysOld);
      }
    } else {
      const age = todayDate.getFullYear() - birthDate.getFullYear() - 1;
      const remainingMonths = [];
      for (let month = birthMonth + 1; month <= 12; month++) {
        remainingMonths.push(month);
      }

      if (todayDay == birthDay) {
        remainingMonths.length += 1;
        setYears(age);
        setMonths(remainingMonths.length);
        setDays(0);
      } else if (todayDay < birthDay) {
        setYears(age);
        setMonths(remainingMonths.length);
        setDays(todayDay);
      } else {
        setYears(age);
        setMonths(remainingMonths.length);
        setDays(todayDay - birthDay);
      }
    }
  };

  //Handling the server side

  const [state, formAction] = useFormState(testServer, undefined);

  return (
    <div className="bg-[#ffffff] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-[100px] md:w-[600px] ">
      {/* <h1>Disabling cache</h1>{" "} */}
      <form action={formAction}>
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
          <button>
            <img
              onClick={calculateAge}
              src="/images/icon-arrow.svg"
              className="bg-[#854dff] hover:bg-[#141414] hover:cursor-pointer rounded-full p-4 w-14 md:w-[66px] absolute left-[140px] md:left-[495px] md:top-[-32px] top-[-28px]"
            />
          </button>
        </div>
        <Output years={years} months={months} days={days} />
      </form>{" "}
    </div>
  );
};

export default App;
