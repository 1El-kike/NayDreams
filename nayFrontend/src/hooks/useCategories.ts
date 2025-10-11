import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { port } from "../config/env";

export interface Category {
  id: number;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async (): Promise<Category[]> => {
      const response = await axios.get(`${port}categories`);
      return response.data;
    },
  });
};
