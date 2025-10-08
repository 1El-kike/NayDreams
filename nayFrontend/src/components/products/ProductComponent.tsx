import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useProducts } from "../../hooks/useProducts";
import { Spinner } from "@heroui/react";
import { ProductHeader } from "./ProductHeader";
import { ProductFilter } from "./ProductFilter";
import { ProductCard } from "./ProductCard";

const categories = [
    { id: 0, name: "All" },
    { id: 1, name: "Mugs" },
    { id: 2, name: "Pullovers" },
    { id: 3, name: "Accessories" },
];


export const Product = () => {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState<number>(0);
    const { data: products, isLoading, error } = useProducts();

    const filteredProducts = selectedCategory === 0
        ? products
        : products?.filter(product => product.categoryId === selectedCategory);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Spinner size="lg" color="primary" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500 text-xl">{t("Error loading products")}</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto">
            <ProductHeader />
            <ProductFilter
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory} />

            <ProductCard filteredProducts={filteredProducts} />
        </div>
    )
}