import React from "react";

const getDates = async () => {
  const res = await fetch("http://localhost:3000/api/dates");

  if (!res) {
    throw new Error("Something isn't right");
  }
  return res.json();
};

const DatesPage = async () => {
  const dates = await getDates();
console.log(dates);
  return <div>Hello here you'll find dates</div>;
};

export default DatesPage;
