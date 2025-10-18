import express from "express";
import {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
} from "../controllers/products_controller.js";
import { uploadProductImages } from "../middleware/multerFile.js";
import { superAuthenticateToken } from "../middleware/SuperauthenticateToken.js";

const router = express.Router();

router.get("/search", searchProducts);
router.get("/", getAllProducts);
router.post("/", superAuthenticateToken, uploadProductImages, createProduct);
router.get("/:id", getProductById);
router.put("/:id", superAuthenticateToken, uploadProductImages, updateProduct);
router.delete("/:id", deleteProduct);

export default router;
