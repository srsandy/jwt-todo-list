import express from "express";
const router = express.Router();

import * as todoController from "../controllers/todo.controllers.js";

router.post("/", todoController.createTodo);

export default router;
