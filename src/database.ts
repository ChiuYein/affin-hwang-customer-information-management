// Core
import dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";

// Model
import Users from "./models/Users.model";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "postgres",
  database: "affin-hwang-customer-information-management",
  username: "chiuyein",
  password: "password123",
  host: "127.0.0.1",
  models: [__dirname + "/**/*.model.ts"],
});

sequelize.addModels([Users]);

export default sequelize;