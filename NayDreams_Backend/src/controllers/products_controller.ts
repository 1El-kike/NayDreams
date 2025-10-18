import { NextFunction, Request, Response } from "express";
import prisma from "../prisma.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await prisma.product.findMany({
      where: {
        deletedAt: null,
      },
      include: {
        category: true,
        createdBy: true,
      },
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving products" });
  }
};

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, description, price, stock, categoryId, createdById } =
      req.body;
    const files = req.files as Express.Multer.File[];

    // Extraer las imágenes (hasta 8)
    const images = files ? files.map((file) => `uploads/${file.filename}`) : [];
    const image = images[0] || null;
    const image2 = images[1] || null;
    const image3 = images[2] || null;
    const image4 = images[3] || null;
    const image5 = images[4] || null;
    const image6 = images[5] || null;
    const image7 = images[6] || null;
    const image8 = images[7] || null;

    const product = await prisma.product.create({
      data: {
        name,
        description,
        image,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        price: parseFloat(price),
        stock: parseInt(stock),
        categoryId: parseInt(categoryId),
        createdById: parseInt(createdById),
      },
      include: {
        category: true,
        createdBy: true,
      },
    });

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    next(res.status(500).json({ message: "Error creating product" }));
  }
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: {
        id: parseInt(id),
        deletedAt: null,
      },
      include: {
        category: true,
        createdBy: true,
      },
    });

    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving product" });
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, description, price, stock, categoryId } = req.body;
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    // Obtener el producto actual para saber qué imágenes eliminar
    const currentProduct = await prisma.product.findUnique({
      where: {
        id: parseInt(id),
        deletedAt: null,
      },
    });

    if (!currentProduct) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    const updateData: any = {
      name,
      description,
      price: price ? parseFloat(price) : undefined,
      stock: stock ? parseInt(stock) : undefined,
      categoryId: categoryId ? parseInt(categoryId) : undefined,
    };

    // Si hay nuevas imágenes, eliminar las antiguas del sistema de archivos
    if (files && Array.isArray(files) && files.length > 0) {
      // Eliminar imágenes existentes si existen
      const imagesToDelete = [
        currentProduct.image,
        currentProduct.image2,
        currentProduct.image3,
        currentProduct.image4,
        currentProduct.image5,
        currentProduct.image6,
        currentProduct.image7,
        currentProduct.image8,
      ].filter((img) => img !== null);

      imagesToDelete.forEach((imagePath: string) => {
        const fullPath = path.join(__dirname, "../../", imagePath);
        if (fs.existsSync(fullPath)) {
          try {
            fs.unlinkSync(fullPath);
          } catch (error) {
            console.error(`Error deleting file ${fullPath}:`, error);
          }
        }
      });

      // Limpiar todas las imágenes en la base de datos
      updateData.image = null;
      updateData.image2 = null;
      updateData.image3 = null;
      updateData.image4 = null;
      updateData.image5 = null;
      updateData.image6 = null;
      updateData.image7 = null;
      updateData.image8 = null;

      // Asignar las nuevas imágenes (hasta 8)
      const newImages = files.map((file) => `uploads/${file.filename}`);
      updateData.image = newImages[0] || null;
      updateData.image2 = newImages[1] || null;
      updateData.image3 = newImages[2] || null;
      updateData.image4 = newImages[3] || null;
      updateData.image5 = newImages[4] || null;
      updateData.image6 = newImages[5] || null;
      updateData.image7 = newImages[6] || null;
      updateData.image8 = newImages[7] || null;
    } else {
      // Si no hay nuevas imágenes, mantener las existentes
      updateData.image = currentProduct.image;
      updateData.image2 = currentProduct.image2;
      updateData.image3 = currentProduct.image3;
      updateData.image4 = currentProduct.image4;
      updateData.image5 = currentProduct.image5;
      updateData.image6 = currentProduct.image6;
      updateData.image7 = currentProduct.image7;
      updateData.image8 = currentProduct.image8;
    }

    const product = await prisma.product.update({
      where: {
        id: parseInt(id),
        deletedAt: null,
      },
      data: updateData,
      include: {
        category: true,
        createdBy: true,
      },
    });

    res.status(200).json(product);
  } catch (error) {
    next(res.status(500).json({ message: "Error updating product" }));
  }
};

export const searchProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { q } = req.query;
    const searchTerm = q as string;

    if (!searchTerm) {
      res.status(400).json({ message: "Search term is required" });
      return;
    }

    const products = await prisma.product.findMany({
      where: {
        deletedAt: null,
        OR: [
          {
            name: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            category: {
              name: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
        ],
      },
      include: {
        category: true,
        createdBy: true,
      },
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error searching products" });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    await prisma.product.update({
      where: {
        id: parseInt(id),
      },
      data: {
        deletedAt: new Date(),
      },
    });

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
};
