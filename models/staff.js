import mongoose from "mongoose";

const Schema = mongoose.Schema;

const staffSchema = new Schema({
  nombre: { type: String, required: true },
  rol: { type: String, required: true },
  area: { type: String },
  descripcion: { type: String },
  imagen: { type: String },
  redes: {
    instagram: { type: String },
    twitter: { type: String },
    linkedin: { type: String },
  },
});

export default mongoose.model("Staff", staffSchema, "staff");
