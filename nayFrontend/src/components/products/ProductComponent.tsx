import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useProducts } from "../../hooks/useProducts";
import { useSearchProducts } from "../../hooks/useSearchProducts";
import { useSearchParams } from "react-router-dom";
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
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get('q') || '';

    const { data: products, isLoading: isLoadingProducts, error: errorProducts } = useProducts();
    const { data: searchResults, isLoading: isLoadingSearch, error: errorSearch } = useSearchProducts(searchTerm);

    const isSearch = !!searchTerm;
    const data = isSearch ? searchResults : products;
    const isLoading = isSearch ? isLoadingSearch : isLoadingProducts;
    const error = isSearch ? errorSearch : errorProducts;

    const filteredProducts = isSearch
        ? data
        : (selectedCategory === 0
            ? products
            : products?.filter(product => product.categoryId === selectedCategory));

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
            {isSearch ? (
                <div className="mb-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {t("Search results for")}: "{searchTerm}"
                    </h2>
                </div>
            ) : (
                <ProductFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory} />
            )}

            <ProductCard filteredProducts={filteredProducts} />
        </div>
    )
}