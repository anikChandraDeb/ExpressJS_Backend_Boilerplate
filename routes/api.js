import express from "express";
const router = express.Router();
import * as taskController from "../app/controllers/taskController.js";
import * as featureController from "../app/controllers/featureController.js";

//Create Route
router.post('/createTask',taskController.createTask);

//Read Route
router.get('/readTask',taskController.readTask);

//Update Route
router.put('/updateTask',taskController.updateTask);

//Delete Route
router.delete('/deleteTask',taskController.deleteTask);

//JWT token encode and decode route
router.get("/feature1/TokenEncode",featureController.TokenEncode);
router.get("/feature2/TokenDecode",featureController.TokenDecode);

//Email route
router.get("/feature3/EmailSend",featureController.Email);

export default router; //export this file