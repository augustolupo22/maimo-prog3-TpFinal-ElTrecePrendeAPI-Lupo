import "dotenv/config";
import express from "express";
import cors from "cors";

// Rutas
import indexRoutes from "./routes/index.js";
import programsRoutes from "./routes/programs.js";
import staffRoutes from "./routes/staff.js";

// DB
import { connectDb } from "./db.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Conexión DB
connectDb();

// PORT
const PORT = process.env.PORT || 4000;

// Rutas
app.use("/", indexRoutes);
app.use("/programs", programsRoutes);
app.use("/staff", staffRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
