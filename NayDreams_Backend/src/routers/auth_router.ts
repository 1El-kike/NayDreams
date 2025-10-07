import express from "express";
import {
  login,
  refreshToken,
  register,
  verifyToken,
} from "../controllers/auth_controller.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/verify_token", verifyToken);
router.post("/refresh_token", refreshToken);

export default router;
