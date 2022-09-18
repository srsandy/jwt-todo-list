import express from "express";
const router = express.Router();

import * as authController from "../controllers/auth.controllers.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

router.post("/signup", authController.signup);
router.post("/register", authController.signup);

router.post("/signin", authController.signin);
router.post("/login", authController.signin);

router.get("/signout", verifyToken, authController.signout);
router.get("/logout", verifyToken, authController.signout);

export default router;
