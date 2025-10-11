import { NextFunction, Request, Response } from "express";
import prisma from "../prisma.js";

export const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { productId, rating, comment } = req.body;
    const userId = (req as any).user?.id; // Obtener userId del middleware de autenticación

    if (!userId) {
      res.status(401).json({ message: "Authentication required" });
      return;
    }

    // Validar que el producto existe
    const product = await prisma.product.findUnique({
      where: { id: parseInt(productId), deletedAt: null },
    });

    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    // Verificar que el usuario no haya reseñado este producto antes
    const existingReview = await prisma.review.findFirst({
      where: {
        productId: parseInt(productId),
        userId: userId,
      },
    });

    if (existingReview) {
      res
        .status(400)
        .json({ message: "You have already reviewed this product" });
      return;
    }

    // Crear la reseña
    const review = await prisma.review.create({
      data: {
        productId: parseInt(productId),
        userId: userId,
        rating: parseInt(rating),
        comment,
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    // Calcular el nuevo rating promedio del producto
    const allReviews = await prisma.review.findMany({
      where: { productId: parseInt(productId) },
      select: { rating: true },
    });

    const averageRating =
      allReviews.reduce(
        (acc: number, rev: { rating: number }) => acc + rev.rating,
        0
      ) / allReviews.length;

    // Actualizar el rating del producto
    await prisma.product.update({
      where: { id: parseInt(productId) },
      data: { rating: averageRating },
    });

    res.status(201).json({
      message: "Review created successfully",
      review,
      newRating: averageRating,
    });
  } catch (error) {
    console.log(error);
    next(res.status(500).json({ message: "Error creating review" }));
  }
};

export const getReviewsByProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { productId } = req.params;

    const reviews = await prisma.review.findMany({
      where: { productId: parseInt(productId) },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving reviews" });
  }
};
