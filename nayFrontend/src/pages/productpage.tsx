import { Navigate, Route, Routes } from "react-router-dom";
import { Product } from "../components/products/ProductComponent";
import { ProductDetail } from "../components/products/ProductDetail";
import { HeroSection } from "../widget/heroSection";
import { useTranslation } from "react-i18next";

export const Productpage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <HeroSection
                title={t("Our Products")}
                subTitle={t("Discover our collection of high-quality personalized products")}
            />
            <div className="min-h-screen bg-gradient-to-br from-rose-50/10 to-white py-12 px-4 sm:px-6 lg:px-8">
                <Routes>
                    <Route index element={<Navigate to="/products/watch" replace />} />
                    <Route path="watch" element={<Product />} />
                    <Route path="watch/:id" element={<ProductDetail />} />
                </Routes>
            </div>
        </div>
    );
};
