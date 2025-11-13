import express from "express";
const router = express.Router();
import Staff from "../models/staff.js";

// GET: todos los miembros del staff
const findAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    return res.status(200).send(staff);
  } catch (error) {
    return res.status(500).send({ message: "Error al obtener el staff", error });
  }
};

// GET: un miembro por ID
const findStaffById = async (req, res) => {
  const { id } = req.params;
  try {
    const member = await Staff.findById(id);
    if (!member) return res.status(404).send({ message: "Miembro no encontrado" });
    return res.status(200).send(member);
  } catch (error) {
    return res.status(500).send({ message: "Error al buscar miembro", error });
  }
};

// POST: agregar miembro
const addStaff = async (req, res) => {
  const { nombre, rol, area, descripcion, imagen, redes } = req.body;
  try {
    const newMember = new Staff({ nombre, rol, area, descripcion, imagen, redes });
    await newMember.save();
    return res.status(200).send({ message: "Nuevo miembro agregado", member: newMember });
  } catch (error) {
    return res.status(500).send({ message: "Error al agregar miembro", error });
  }
};

// DELETE: borrar miembro
const deleteStaff = async (req, res) => {
  const { id } = req.params;
  try {
    const member = await Staff.findByIdAndDelete(id);
    if (!member) return res.status(404).send({ message: "Miembro no encontrado" });
    return res.status(200).send({ message: "Miembro eliminado", member });
  } catch (error) {
    return res.status(500).send({ message: "Error al eliminar miembro", error });
  }
};

// CRUD endpoints
router.get("/", findAllStaff);
router.get("/:id", findStaffById);
router.post("/", addStaff);
router.delete("/:id", deleteStaff);

export default router;
