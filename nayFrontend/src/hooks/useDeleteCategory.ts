import { useState } from "react";
import axios from "axios";
import { port } from "../config/env";

export const useDeleteCategory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const deleteCategory = async (id: number) => {
    setIsLoading(true);
    setMessage("");

    try {
      const response = await axios.delete(`${port}categories/${id}`);
      setMessage("Categoría eliminada exitosamente");
      console.log(response.data);
      return true;
    } catch (error: any) {
      setMessage(
        error.response?.data?.message || "Error al eliminar la categoría"
      );
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    deleteCategory,
    isLoading,
    message,
  };
};
