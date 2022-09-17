import express from "express";
const router = express.Router();

import * as todoController from "../controllers/todo.controllers.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

router.post("/", verifyToken, todoController.createTodo);

export default router;
