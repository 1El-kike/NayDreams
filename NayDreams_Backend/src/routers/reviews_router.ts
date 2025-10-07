import express from "express";
import {
  createReview,
  getReviewsByProduct,
} from "../controllers/reviews_controller.js";
import { authenticateToken } from "../middleware/authenticateToken.js";

const router = express.Router();

// POST /reviews - Crear una nueva reseña (requiere autenticación)
router.post("/", authenticateToken, createReview);

// GET /reviews/:productId - Obtener todas las reseñas de un producto
router.get("/:productId", getReviewsByProduct);

export default router;
