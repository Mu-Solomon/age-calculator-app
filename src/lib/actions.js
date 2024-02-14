"use server";
export const testServer = async (prevState, formData) => {
  const { day, month, year } = Object.fromEntries(formData);
  const userDate = new Date(year - 1, month, day);
  console.log("Here are they", day, month, year);
  console.log(userDate.toDateString())
};
