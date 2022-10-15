import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: false },
    password: { type: String, required: true },
  },
  {
    timestamps: true
  }
);

export default mongoose.model("user", userSchema);
