import express from "express";
import Program from "../models/programs.js";

const router = express.Router();

// GET → todos los programas
router.get("/", async (req, res) => {
  try {
    const programs = await Program.find();
    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener programas", error });
  }
});

// GET → un programa por ID
router.get("/:id", async (req, res) => {
  try {
    const program = await Program.findOne({ _id: req.params.id });
    if (!program) {
      return res.status(404).json({ message: "Programa no encontrado" });
    }
    res.status(200).json(program);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener programa", error });
  }
});

export default router;
