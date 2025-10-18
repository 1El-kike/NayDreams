import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { envs } from "../config/env.js";

// Configurar Cloudinary
cloudinary.config({
  cloud_name: envs.CLOUDINARY_CLOUD_NAME,
  api_key: envs.CLOUDINARY_API_KEY,
  api_secret: envs.CLOUDINARY_API_SECRET,
});

// Configuración de multer para memoria (sin guardar localmente)
const storage = multer.memoryStorage();

// Inicializar multer
const upload = multer({
  storage,
  limits: { fileSize: 6000000 }, // Limitar a 6MB
  fileFilter: (req, file, cb) => {
    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validTypes.includes(file.mimetype)) {
      return cb(new Error("Tipo de archivo no válido"));
    }
    cb(null, true);
  },
});

// Función para subir imagen a Cloudinary
export const uploadToCloudinary = (
  buffer: Buffer,
  filename: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "products",
        public_id: `${Date.now()}-${filename}`,
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result!.secure_url);
        }
      }
    );
    uploadStream.end(buffer);
  });
};

// Función para eliminar imagen de Cloudinary
export const deleteFromCloudinary = (publicId: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(publicId, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

// Middleware para múltiples imágenes de producto
export const uploadProductImages = upload.array("images", 8);

export default upload;
