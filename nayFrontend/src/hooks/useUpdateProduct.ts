import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { port } from "../config/env";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({
      id,
      formData,
    }: {
      id: number;
      formData: FormData;
    }) => {
      const response = await axios.put(`${port}products/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return {
    updateProduct: (id: number, formData: FormData) =>
      mutation.mutateAsync({ id, formData }),
    isLoading: mutation.isPending,
    message:
      mutation.error?.message ||
      (mutation.isSuccess ? "Producto actualizado exitosamente" : ""),
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
};
