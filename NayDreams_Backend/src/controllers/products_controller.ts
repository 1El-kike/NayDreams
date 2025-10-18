import { NextFunction, Request, Response } from "express";
import prisma from "../prisma.js";
import {
  uploadToCloudinary,
  deleteFromCloudinary,
} from "../middleware/multerFile.js";

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
  let uploadedUrls: string[] = [];

  try {
    const { name, description, price, stock, categoryId, createdById } =
      req.body;
    const files = req.files as Express.Multer.File[];

    // Subir imágenes a Cloudinary y obtener URLs
    if (files && files.length > 0) {
      for (const file of files) {
        const url = await uploadToCloudinary(file.buffer, file.originalname);
        uploadedUrls.push(url);
      }
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        image: uploadedUrls[0] || null,
        image2: uploadedUrls[1] || null,
        image3: uploadedUrls[2] || null,
        image4: uploadedUrls[3] || null,
        image5: uploadedUrls[4] || null,
        image6: uploadedUrls[5] || null,
        image7: uploadedUrls[6] || null,
        image8: uploadedUrls[7] || null,
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

    // Si hay error después de subir imágenes, eliminarlas de Cloudinary
    if (uploadedUrls.length > 0) {
      for (const url of uploadedUrls) {
        try {
          const publicId = url.split("/").pop()?.split(".")[0];
          if (publicId) {
            await deleteFromCloudinary(`products/${publicId}`);
          }
        } catch (deleteError) {
          console.error(
            "Error deleting uploaded image from Cloudinary:",
            deleteError
          );
        }
      }
    }

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
  let newUploadedUrls: string[] = [];

  try {
    const { id } = req.params;
    const { name, description, price, stock, categoryId } = req.body;
    const files = req.files as Express.Multer.File[];

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

    // Si hay nuevas imágenes, subir las nuevas primero
    if (files && files.length > 0) {
      for (const file of files) {
        const url = await uploadToCloudinary(file.buffer, file.originalname);
        newUploadedUrls.push(url);
      }

      // Asignar las nuevas URLs
      updateData.image = newUploadedUrls[0] || null;
      updateData.image2 = newUploadedUrls[1] || null;
      updateData.image3 = newUploadedUrls[2] || null;
      updateData.image4 = newUploadedUrls[3] || null;
      updateData.image5 = newUploadedUrls[4] || null;
      updateData.image6 = newUploadedUrls[5] || null;
      updateData.image7 = newUploadedUrls[6] || null;
      updateData.image8 = newUploadedUrls[7] || null;
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

    // Solo después de que la actualización sea exitosa, eliminar las imágenes antiguas
    if (files && files.length > 0) {
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

      for (const imageUrl of imagesToDelete) {
        if (imageUrl) {
          const publicId = imageUrl.split("/").pop()?.split(".")[0];
          if (publicId) {
            try {
              await deleteFromCloudinary(`products/${publicId}`);
            } catch (error) {
              console.error(`Error deleting old image from Cloudinary:`, error);
            }
          }
        }
      }
    }

    res.status(200).json(product);
  } catch (error) {
    console.log(error);

    // Si hay error después de subir nuevas imágenes, eliminarlas de Cloudinary
    if (newUploadedUrls.length > 0) {
      for (const url of newUploadedUrls) {
        try {
          const publicId = url.split("/").pop()?.split(".")[0];
          if (publicId) {
            await deleteFromCloudinary(`products/${publicId}`);
          }
        } catch (deleteError) {
          console.error(
            "Error deleting newly uploaded image from Cloudinary:",
            deleteError
          );
        }
      }
    }

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
