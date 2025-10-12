import express from "express";
import {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
} from "../controllers/products_controller.js";
import upload, {
  uploadProductImages,
  errorHandle,
} from "../middleware/multerFile.js";
import { superAuthenticateToken } from "../middleware/SuperauthenticateToken.js";

const router = express.Router();

router.get("/search", searchProducts);
router.get("/", getAllProducts);
router.post(
  "/",
  superAuthenticateToken,
  uploadProductImages,
  createProduct,
  errorHandle
);
router.get("/:id", getProductById);
router.put(
  "/:id",
  superAuthenticateToken,
  uploadProductImages,
  updateProduct,
  errorHandle
);
router.delete("/:id", deleteProduct);

export default router;
