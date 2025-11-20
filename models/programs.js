import mongoose from "mongoose";
const Schema = mongoose.Schema;

const programSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  horario: { type: String },
  tipo: { type: String },
  categoria: { type: String },
  imagen: { type: String },
  conductores: [{ nombre: String, rol: String, foto: String}],
  redes: {
    instagram: String,
    youtube: String,
    tiktok: String,
  },
});

export default mongoose.model("Program", programSchema, "programs");