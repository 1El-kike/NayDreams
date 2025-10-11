import { useState } from "react";
import axios from "axios";
import { port } from "../config/env";

export const useDeleteProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const deleteProduct = async (id: number) => {
    setIsLoading(true);
    setMessage("");

    try {
      const response = await axios.delete(`${port}products/${id}`);
      setMessage("Producto eliminado exitosamente");
      console.log(response.data);
      return true;
    } catch (error: any) {
      setMessage(
        error.response?.data?.message || "Error al eliminar el producto"
      );
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    deleteProduct,
    isLoading,
    message,
  };
};
