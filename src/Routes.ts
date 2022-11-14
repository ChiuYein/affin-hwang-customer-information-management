// Core
import express from "express";

const Apis = express.Router();

const users = [];

/**
 * @swagger
 * /user:
 *  post:
 *      summary: adds in a new user
 *      requestBody:
 *          description: object of the body
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          firstName:
 *                              type: string
 *                          lastName:
 *                              type: string
 *                          emailAddress:
 *                              type: string
 *                          id:
 *                              type: number
 *      responses:
 *          200:
 *              description: adds in a new user into the DB
 */
Apis.post("/user", (req, res) => {
  users.push({
    id: req?.body?.id,
    firstName: req?.body?.firstName,
    lastName:  req?.body?.lastName,
    emailAddress: req?.body?.emailAddress
  });
  res.status(200).send({
    data: users,
  });
});

export default Apis;