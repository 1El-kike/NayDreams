import { Navigate, Route, Routes } from "react-router-dom";
import { Product } from "../components/products/ProductComponent";
import { ProductDetail } from "../components/products/ProductDetail";
import { HeroSection } from "../widget/heroSection";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import flor1 from "../assets/media/flor.png";
import flor2 from "../assets/media/flor2.png";
import flor3 from "../assets/media/flor4.png";

export const Productpage = () => {
    const { t } = useTranslation();

    return (
        <div className="relative">
            {/* Imágenes de flores como fondo */}
            <motion.img
                src={flor3}
                alt="Flor 1"
                className="fixed z-50 top-10 left-10 w-24 h-24 opacity-20 object-contain"
                animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.img
                src={flor2}
                alt="Flor 2"
                className="absolute z-30 -bottom-0 left-1/2 w-32 h-32 opacity-15 object-contain"
                animate={{
                    rotate: [0, -10, 10, 0],
                    scale: [1, 0.95, 1],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
            <motion.img
                src={flor1}
                alt="Flor 3"
                className="absolute top-1/2 left-[90%] z-30 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 opacity-25 object-contain"
                animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />
            <HeroSection
                title={t("Our Products")}
                subTitle={t("Discover our collection of high-quality personalized products")}
            />
            <div className="min-h-screen  bg-pink-200/50 pt-12 pb-32 md:py-12 px-4 sm:px-6 lg:px-8">
                <Routes>
                    <Route index element={<Navigate to="/products/watch" replace />} />
                    <Route path="watch" element={<Product />} />
                    <Route path="watch/:id" element={<ProductDetail />} />
                </Routes>
            </div>
        </div>
    );
};
