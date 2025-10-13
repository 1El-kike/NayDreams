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
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    // Extraer las imágenes
    const image = files?.image?.[0]
      ? `uploads/${files.image[0].filename}`
      : null;
    const image2 = files?.image2?.[0]
      ? `uploads/${files.image2[0].filename}`
      : null;
    const image3 = files?.image3?.[0]
      ? `uploads/${files.image3[0].filename}`
      : null;
    const image4 = files?.image4?.[0]
      ? `uploads/${files.image4[0].filename}`
      : null;

    const product = await prisma.product.create({
      data: {
        name,
        description,
        image,
        image2,
        image3,
        image4,
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
    if (files && Object.keys(files).length > 0) {
      // Eliminar imágenes existentes si existen
      const imagesToDelete = [
        currentProduct.image,
        currentProduct.image2,
        currentProduct.image3,
        currentProduct.image4,
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

      // Asignar las nuevas imágenes
      if (files?.image?.[0])
        updateData.image = `uploads/${files.image[0].filename}`;
      if (files?.image2?.[0])
        updateData.image2 = `uploads/${files.image2[0].filename}`;
      if (files?.image3?.[0])
        updateData.image3 = `uploads/${files.image3[0].filename}`;
      if (files?.image4?.[0])
        updateData.image4 = `uploads/${files.image4[0].filename}`;
    } else {
      // Si no hay nuevas imágenes, mantener las existentes
      updateData.image = currentProduct.image;
      updateData.image2 = currentProduct.image2;
      updateData.image3 = currentProduct.image3;
      updateData.image4 = currentProduct.image4;
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
    console.error("Error updating product:", error);
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
