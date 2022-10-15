import mongoose, { model, Schema } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: false },
    categorie: { type: String, required: false },
    price: { type: Number, required: true },
    status: {type: Boolean, require: true}
  },
  {
    timestamps: true
  }
);

export default mongoose.model("product", productSchema);
