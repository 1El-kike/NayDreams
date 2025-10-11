import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { port } from "../config/env";
import type { Product } from "./useProducts";

export const useSearchProducts = (searchTerm: string) => {
  return useQuery({
    queryKey: ["searchProducts", searchTerm],
    queryFn: async (): Promise<Product[]> => {
      const response = await axios.get(
        `${port}products/search?q=${encodeURIComponent(searchTerm)}`
      );
      return response.data;
    },
    enabled: !!searchTerm,
  });
};
