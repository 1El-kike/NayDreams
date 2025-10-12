import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { port } from "../config/env";

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: { name: string; description: string };
    }) => {
      const response = await axios.put(`${port}categories/${id}`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });

  return {
    updateCategory: (id: number, data: { name: string; description: string }) =>
      mutation.mutateAsync({ id, data }),
    isLoading: mutation.isPending,
    message:
      mutation.error?.message ||
      (mutation.isSuccess ? "Categoría actualizada exitosamente" : ""),
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
};
