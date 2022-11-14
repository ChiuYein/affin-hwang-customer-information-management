// Core
import express from "express";
import { json } from "body-parser";
import cors from "cors";

// swagger
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

// import DB
import "./database";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Affin Hwang - Customer Information Management",
      version: "1.0.0",
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./**/*.ts", "./**/**/*.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

function server() {
  const expressApp = express();
  expressApp.use(json());
  expressApp.use(cors());

  expressApp.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
  expressApp.all("*", () => {
    throw new Error("Api not found");
  });

  return expressApp;
}

(function () {
  const app = server();
  const port = 3000;
  app.listen(port, () => {
    console.log(`the server is listening on port: ${port}`);
  });
})();