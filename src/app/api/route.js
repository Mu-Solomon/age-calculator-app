import { Date } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDb();
    const dates = await Date.find();
    return NextResponse.json(dates);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch dates ");
  }
};
