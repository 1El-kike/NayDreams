import { Navigate, Route, Routes } from "react-router-dom";
import { Product } from "../components/products/ProductComponent";
import { ProductDetail } from "../components/products/ProductDetail";

export const Productpage = () => {

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50/10 to-white py-12 px-4 sm:px-6 lg:px-8">
            <Routes>
                <Route index element={<Navigate to="/products/watch" replace />} />
                <Route path="watch" element={<Product />} />
                <Route path="watch/:id" element={<ProductDetail />} />
            </Routes>
        </div>
    );
};
