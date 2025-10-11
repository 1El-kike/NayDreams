import express from "express";
import {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/categories_controller.js";
import { superAuthenticateToken } from "../middleware/SuperauthenticateToken.js";

const router = express.Router();

router.get("/", getAllCategories);
router.post("/", superAuthenticateToken, createCategory);
router.get("/:id", getCategoryById);
router.put("/:id", superAuthenticateToken, updateCategory);
router.delete("/:id", superAuthenticateToken, deleteCategory);

export default router;
