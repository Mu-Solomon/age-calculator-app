"use server";

import { DateModel } from "./models";
import { connectToDb } from "./utils";
import { revalidatePath } from "next/cache";

export const testServer = async (prevState, formData) => {
  const { day, month, year } = Object.fromEntries(formData);

  if (!year || !parseInt(year)) {
    return null;
  } else if (!month || !parseInt(month)) {
    return null;
  } else if (!day || !parseInt(day)) {
    return null;
  } else {
    try {
      connectToDb();
      const newDate = new DateModel({ year, month, day });
      await newDate.save();
      revalidatePath("/dates");
      console.log("Saved to Db");
    } catch (error) {
      console.log("Failed to save to DB", error);
      return { error: "Something went wrong!" };
    }
    console.log("Everything is correct");
  }
  /*  const userDate = new Date(year - 1, month, day);

  console.log("Here are they", day, month, year);
  console.log(userDate.toDateString()); */
};
