import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { port } from "../config/env";

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await axios.delete(`${port}categories/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });

  return {
    deleteCategory: mutation.mutateAsync,
    isLoading: mutation.isPending,
    message:
      mutation.error?.message ||
      (mutation.isSuccess ? "Categoría eliminada exitosamente" : ""),
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
};
