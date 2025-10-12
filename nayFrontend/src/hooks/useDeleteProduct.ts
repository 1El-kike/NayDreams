import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { port } from "../config/env";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await axios.delete(`${port}products/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return {
    deleteProduct: mutation.mutateAsync,
    isLoading: mutation.isPending,
    message:
      mutation.error?.message ||
      (mutation.isSuccess ? "Producto eliminado exitosamente" : ""),
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
};
