import "dotenv/config";
import express from "express";
import cors from "cors";
import indexRoutes from "./routes/index.js";
import programsRoutes from "./routes/programs.js";
import { connectDb } from "./db.js";

console.log("\x1Bc");

const app = express();
connectDb();

app.set("port", process.env.PORT || 4000);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// RUTAS
app.use("/", indexRoutes);
app.use("/programs", programsRoutes);

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
