import mongoose from "mongoose";
import chalk from "chalk";
import "dotenv/config";

// DB Connection
const connectDb = async () => {
  let connectionString = process.env.DB_PROTOCOL;

  if (process.env.DB_USER && process.env.DB_PASS) {
    connectionString += `${process.env.DB_USER}:${process.env.DB_PASS}@`;
  }

  connectionString += `${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(chalk.green("Conectado a la base de datos")))
    .catch((err) =>
      console.log(
        chalk.bgRed.white("Database not connected"),
        err.code,
        err.message
      )
    );
};

const disconnectDb = async () => {
  try {
    await mongoose.connection.close();
    console.log(chalk.green("Disconnected from Database"));
  } catch (err) {
    console.log(err);
  }
};

export { connectDb, disconnectDb };

