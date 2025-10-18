import { Card, CardBody, CardHeader, Image, Button, Spinner } from "@heroui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { port } from "../../config/env";
import { useTranslation } from "react-i18next";
import type { Product } from "../../hooks/useProducts";

interface RelatedProductsProps {
    currentProductId: number;
    categoryId: number;
}

export const RelatedProducts = ({ currentProductId, categoryId }: RelatedProductsProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { data: allProducts, isLoading } = useProducts();

    // Filtrar productos relacionados: misma categoría pero no el producto actual
    const relatedProducts = allProducts?.filter(
        (product: Product) =>
            product.categoryId === categoryId &&
            product.id !== currentProductId &&
            product.stock > 0 // Solo productos con stock disponible
    ).slice(0, 4) || []; // Limitar a 4 productos

    const handleProductClick = (productId: number) => {
        navigate(`/product/${productId}`);
        window.scrollTo(0, 0);
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-12">
                <Spinner size="lg" color="primary" />
            </div>
        );
    }

    if (relatedProducts.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                    {t("No related products found")}
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent mb-4">
                    {t("Related Products")}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    {t("Discover more products from the same category")}
                </p>
            </motion.div>

            <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group cursor-pointer"
                        onClick={() => handleProductClick(product.id)}
                    >
                        <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <CardHeader className="pb-0">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <Image
                                        src={product.image || "/placeholder.jpg"}
                                        alt={product.name}
                                        className="w-full -z-10 h-36 md:h-48 aspect-video object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Badge de categoría */}
                                    <div className="absolute top-3 left-3">
                                        <span className="px-2 py-1 bg-pink-500 text-white text-xs font-medium rounded-full">
                                            {product.category.name}
                                        </span>
                                    </div>

                                    {/* Rating */}
                                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                                        <div className="flex items-center gap-1">
                                            <span className="text-yellow-400 text-xs">★</span>
                                            <span className="text-white text-xs font-medium">
                                                {product.rating.toFixed(1)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>

                            <CardBody className="p-4">
                                <div className="space-y-2 ">
                                    <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 leading-tight group-hover:text-pink-600 transition-colors duration-200">
                                        {product.name}
                                    </h3>

                                    <p className="text-sm hidden md:block text-gray-600 dark:text-gray-300 line-clamp-2">
                                        {product.description}
                                    </p>

                                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                                        <span className="text-lg font-bold text-green-600 dark:text-green-400">
                                            ${product.price.toFixed(2)}
                                        </span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                            Stock: {product.stock}
                                        </span>
                                    </div>

                                    <Button
                                        size="sm"
                                        color="primary"
                                        variant="solid"
                                        className="w-full bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-700 text-white font-medium"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleProductClick(product.id);
                                        }}
                                    >
                                        {t("View Details")}
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Mostrar más productos si hay más de 4 */}
            {allProducts && allProducts.filter(p => p.categoryId === categoryId && p.id !== currentProductId).length > 4 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center"
                >
                    <Button
                        color="secondary"
                        variant="bordered"
                        className="border-pink-500 text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20"
                        onClick={() => navigate(`/products?category=${categoryId}`)}
                    >
                        {t("View All Products in This Category")}
                    </Button>
                </motion.div>
            )}
        </div>
    );
};