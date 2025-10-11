import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { port } from "../config/env";

export interface Review {
  id: number;
  productId: number;
  userId: number;
  rating: number;
  comment: string;
  createdAt: string;
  user: {
    name: string;
    email: string;
  };
}

export const useReviews = (productId: string | undefined) => {
  return useQuery({
    queryKey: ["reviews", productId],
    queryFn: async (): Promise<Review[]> => {
      const response = await axios.get(`${port}reviews/${productId}`);
      return response.data;
    },
    enabled: !!productId,
  });
};

export const useCreateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (reviewData: {
      productId: number;
      rating: number;
      comment: string;
    }) => {
      const response = await axios.post(`${port}reviews`, reviewData);
      return response.data;
    },
    onSuccess: (data) => {
      // Invalidar las queries relacionadas
      queryClient.invalidateQueries({
        queryKey: ["reviews", data.review.productId.toString()],
      });
      queryClient.invalidateQueries({
        queryKey: ["product", data.review.productId.toString()],
      });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};
