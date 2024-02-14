import { mongoose } from "mongoose";

const dateSchema = mongoose.Schema({
  day: { type: String, required: true },
  month: { type: String, required: true },
  year: { type: String, required: true },
});

export const Date = mongoose.models.Date || mongoose.model("Date", dateSchema);
