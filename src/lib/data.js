const { connectToDb } = require("./utils");

export const getDates = async () => {
  try {
    connectToDb();
    const dates = await Date.find();
    return dates;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to show dates ");
  }
};
