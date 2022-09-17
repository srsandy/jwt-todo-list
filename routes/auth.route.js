import express from "express";
const router = express.Router();

import * as authController from "../controllers/auth.controllers.js";

router.post("/signup", authController.signup);
router.post("/register", authController.signup);

router.post("/signin", authController.signin);
router.post("/login", authController.signin);

router.post("/signout", authController.signout);
router.post("/logout", authController.signout);

export default router;
