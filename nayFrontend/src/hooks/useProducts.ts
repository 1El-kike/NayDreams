import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { port } from "../config/env";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  rating: number;
  image: string | null;
  categoryId: number;
  category: {
    id: number;
    name: string;
  };
  createdBy: {
    id: number;
    name: string;
  };
}

export const useProducts = (categoryId?: number) => {
  return useQuery({
    queryKey: ["products", categoryId],
    queryFn: async (): Promise<Product[]> => {
      const url = categoryId
        ? `${port}products?categoryId=${categoryId}`
        : `${port}products`;
      const response = await axios.get(url);
      return response.data;
    },
  });
};
