import { useState } from "react";
import axios from "axios";
import { port } from "../config/env";

export const useCreateCategory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const createCategory = async (data: {
    name: string;
    description: string;
  }) => {
    setIsLoading(true);
    setMessage("");

    try {
      const response = await axios.post(`${port}categories`, data);
      setMessage("Categoría creada exitosamente");
      console.log(response.data);
      return true;
    } catch (error: any) {
      setMessage(
        error.response?.data?.message || "Error al crear la categoría"
      );
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createCategory,
    isLoading,
    message,
  };
};
