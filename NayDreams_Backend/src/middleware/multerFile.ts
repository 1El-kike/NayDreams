import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

// Configuración del almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), "uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Inicializar multer
const upload = multer({
  storage,
  limits: { fileSize: 6000000 }, // Limitar a 3MB
  fileFilter: (req, file, cb) => {
    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validTypes.includes(file.mimetype)) {
      return cb(new Error("Tipo de archivo no válido"));
    }
    cb(null, true);
  },
});

export const errorHandle = (
  err: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // Limpiar archivos subidos en caso de error
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  if (files) {
    Object.values(files).forEach((fileArray) => {
      fileArray.forEach((file) => {
        const filePath = path.join(process.cwd(), "uploads", file.filename);
        try {
          fs.unlinkSync(filePath);
        } catch (error) {
          console.error("Error deleting file:", error);
        }
      });
    });
  } else if (req.file) {
    const filePath = path.join(process.cwd(), "uploads", req.file.filename);
    try {
      fs.unlinkSync(filePath);
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  }
  next(err);
};

// Middleware para múltiples imágenes de producto
export const uploadProductImages = upload.fields([
  { name: "image", maxCount: 1 },
  { name: "image2", maxCount: 1 },
  { name: "image3", maxCount: 1 },
  { name: "image4", maxCount: 1 },
]);

// funcion pendiente a hacer para e;iminar las imagenes que se cambian a la hora de actualizar
export const updateHandle = (req: Request, res: Response) => {};

export default upload;
