import { Request, Response } from "express";
import prisma from "../prisma.js";

export const getAllCategories = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving categories" });
  }
};

export const createCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, description } = req.body;

    const category = await prisma.category.create({
      data: {
        name,
        description,
      },
    });

    res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating category" });
  }
};

export const getCategoryById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const category = await prisma.category.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!category) {
      res.status(404).json({ message: "Category not found" });
      return;
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving category" });
  }
};

export const updateCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const category = await prisma.category.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        description,
      },
    });

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error updating category" });
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    await prisma.category.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting category" });
  }
};
