import { useState } from "react";
import axios from "axios";
import { port } from "../config/env";

export const useUpdateProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const updateProduct = async (id: number, formData: FormData) => {
    setIsLoading(true);
    setMessage("");

    try {
      const response = await axios.put(`${port}products/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Producto actualizado exitosamente");
      console.log(response.data);
      return true;
    } catch (error: any) {
      setMessage(
        error.response?.data?.message || "Error al actualizar el producto"
      );
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateProduct,
    isLoading,
    message,
  };
};
