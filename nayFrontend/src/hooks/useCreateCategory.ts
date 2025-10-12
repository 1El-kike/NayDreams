import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { port } from "../config/env";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: { name: string; description: string }) => {
      const response = await axios.post(`${port}categories`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });

  return {
    createCategory: mutation.mutateAsync,
    isLoading: mutation.isPending,
    message:
      mutation.error?.message ||
      (mutation.isSuccess ? "Categoría creada exitosamente" : ""),
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
};
