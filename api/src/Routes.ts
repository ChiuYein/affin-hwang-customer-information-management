// Core
import express from "express";

// Information Management
import { UserDetailInterface, UserService } from "@services/user.services";

const Apis = express.Router();

/**
 * @swagger
 * /register:
 *  post:
 *      summary: register new user
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
 *      responses:
 *          200:
 *              description: register new user
 */
Apis.post("/register", async(req, res) => {
  try {
    const userService = new UserService();
    const userDetails: UserDetailInterface = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAddress: req.body.emailAddress
    }
    const newUser = await userService.createNewUser(userDetails)
    res.status(200).send({
      data: newUser
    })
  } catch (error) {
    console.error(error)
  }
});

/**
 * @swagger
 * /user-details/{userId}:
 *  get:
 *      summary: Gets the details of the user by id
 *      parameters:
 *          - name: userId
 *            in: path
 *      responses:
 *          200:
 *              description: Gets the details of the user by id
 */
Apis.get("/user-details/:userId", async(req, res) => {
  try {
    const { userId } = req.params
    const userService = new UserService();
    const userDetails = await userService.getUserDetails(userId);
    res.status(200).send({
      data: userDetails
    })
  } catch (error) {
    throw new Error(error)
  }
});

/**
 * @swagger
 * /update/user-details:
 *  put:
 *      summary: update the user details
 *      requestBody:
 *          description: object of the body
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: string
 *                          firstName:
 *                              type: string
 *                          lastName:
 *                              type: string
 *                          emailAddress:
 *                              type: string
 *      responses:
 *          200:
 *              description: update the user details
 */
Apis.put("/update/user-details", async(req, res) => {
  try {
    const userService = new UserService();
    const userDetails: UserDetailInterface = {
      id: req.body.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAddress: req.body.emailAddress
    }
    const newUser = await userService.updateUserDetails(userDetails)
    res.status(200).send({
      data: newUser
    })
  } catch (error) {
    console.error(error)
  }
});

/**
 * @swagger
 * /delete/user-details/{userId}:
 *  delete:
 *      summary: delete the user by id
 *      parameters:
 *          - name: userId
 *            in: path
 *      responses:
 *          200:
 *              description: delete the user by id
 */
Apis.delete("/delete/user-details/:userId", async(req, res) => {
  try {
    const { userId } = req.params;  
    const userService = new UserService();
    const deletedUser = await userService.deleteUserById(userId)
    res.status(200).send({
      data: deletedUser
    })
  } catch (error) {
    console.error(error)
  }
});

export default Apis;