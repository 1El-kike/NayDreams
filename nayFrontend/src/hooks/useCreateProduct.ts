import { useState } from "react";
import axios from "axios";
import { port } from "../config/env";
import { useAuth } from "../auth/useAuth";

export const useCreateProduct = () => {
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const createProduct = async (formData: FormData) => {
    if (!currentUser) {
      setMessage("Usuario no autenticado");
      return false;
    }

    setIsLoading(true);
    setMessage("");

    // Asegurar que createdById esté en el FormData
    if (!formData.has("createdById")) {
      formData.append("createdById", currentUser.id.toString());
    }

    try {
      const response = await axios.post(`${port}products`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Producto creado exitosamente");
      console.log(response.data);
      return true;
    } catch (error: any) {
      setMessage(error.response?.data?.message || "Error al crear el producto");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createProduct,
    isLoading,
    message,
  };
};
