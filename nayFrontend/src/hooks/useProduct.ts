import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { port } from "../config/env";
import type { Product } from "./useProducts";

export const useProduct = (id: string | undefined) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async (): Promise<Product> => {
      const response = await axios.get(`${port}products/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};
