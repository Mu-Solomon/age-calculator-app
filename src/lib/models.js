import mongoose from "mongoose";

const dateSchema = mongoose.Schema(
  {
    day: { type: String, required: true },
    month: { type: String, required: true },
    year: { type: String, required: true },
    timeCreated: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const DateModel =
  mongoose.models.DateModel || mongoose.model("DateModel", dateSchema);
