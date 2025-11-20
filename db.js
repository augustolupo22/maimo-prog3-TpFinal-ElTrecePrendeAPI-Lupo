import mongoose from "mongoose";
import chalk from "chalk";
import "dotenv/config";

const connectDb = async () => {
  try {
    let connectionString = process.env.DB_PROTOCOL;

    if (process.env.DB_USER && process.env.DB_PASS) {
      connectionString += `${process.env.DB_USER}:${process.env.DB_PASS}@`;
    }

    connectionString += `${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(chalk.green("Conectado a la base de datos"));
  } catch (err) {
    console.log(
      chalk.bgRed.white("Error conectando a la base de datos"),
      err.code,
      err.message
    );
  }
};

const disconnectDb = async () => {
  try {
    await mongoose.connection.close();
    console.log(chalk.green("Desconectado de la base de datos"));
  } catch (err) {
    console.log("Error al desconectar DB", err);
  }
};

export { connectDb, disconnectDb };
