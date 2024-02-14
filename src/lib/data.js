const { connectToDb } = require("./utils");

export const getDates = async () => {
  try {
    connectToDb();
    console.log("Connected to Db");
    const dates = await Date.find();
    return dates;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to show dates ");
  }
};
