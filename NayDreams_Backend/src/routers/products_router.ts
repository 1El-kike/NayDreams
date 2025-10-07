import express from "express";
import {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/products_controller.js";
import upload, {
  uploadProductImages,
  errorHandle,
} from "../middleware/multerFile.js";
import { superAuthenticateToken } from "../middleware/SuperauthenticateToken.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post(
  "/",
  superAuthenticateToken,
  uploadProductImages,
  createProduct,
  errorHandle
);
router.get("/:id", getProductById);
router.put("/:id", superAuthenticateToken, uploadProductImages, updateProduct);
router.delete("/:id", deleteProduct);

export default router;
