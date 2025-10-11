import { useState } from "react";
import axios from "axios";
import { port } from "../config/env";

interface UsePostReturn<T> {
  postData: (url: string, data: any) => Promise<T>;
  isLoading: boolean;
  error: string | null;
}

export const usePost = <T = any>(): UsePostReturn<T> => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const postData = async (endpoint: string, data: any): Promise<T> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post<T>(`${port}${endpoint}`, data);
      return response.data;
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Error making request";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    postData,
    isLoading,
    error,
  };
};
