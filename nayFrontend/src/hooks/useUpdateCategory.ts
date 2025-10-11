import { useState } from "react";
import axios from "axios";
import { port } from "../config/env";

export const useUpdateCategory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const updateCategory = async (
    id: number,
    data: { name: string; description: string }
  ) => {
    setIsLoading(true);
    setMessage("");

    try {
      const response = await axios.put(`${port}categories/${id}`, data);
      setMessage("Categoría actualizada exitosamente");
      console.log(response.data);
      return true;
    } catch (error: any) {
      setMessage(
        error.response?.data?.message || "Error al actualizar la categoría"
      );
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateCategory,
    isLoading,
    message,
  };
};
