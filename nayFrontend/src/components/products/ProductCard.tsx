import { Button, Card, CardBody, CardFooter, Image } from "@heroui/react";
import { motion } from "framer-motion";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { port } from "../../config/env";
import { useTranslation } from "react-i18next";
import type { Product } from "../../hooks/useProducts";



interface TypeProduct {
    filteredProducts: Product[] | undefined
}

export const ProductCard: FC<TypeProduct> = ({ filteredProducts }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
                {filteredProducts?.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
                            <CardBody className="p-0">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={product.image ? `${port}${product.image}` : `${port}description/image(2).png`}
                                        alt={product.name}
                                        className="w-full h-full rounded-none object-cover aspect-[4/3] hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                            </CardBody>
                            <CardFooter className="flex flex-col items-start p-6 bg-white">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                    {product.name}
                                </h3>
                                <div className="flex items-center mb-2">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <span key={i} className={`text-lg ${i < ((product.id % 5) + 1) ? 'text-yellow-400' : 'text-gray-300'}`}>
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                                    {product.description}
                                </p>
                                <div className="flex items-center justify-between w-full">
                                    <span className="text-2xl font-bold text-pink-600">
                                        ${product.price.toFixed(2)}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        Stock: {product.stock}
                                    </span>
                                </div>
                                <div className="flex gap-2 mt-4 w-full">
                                    <Button
                                        color="primary"
                                        variant="solid"
                                        className="flex-1 bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                                    >
                                        {t("To Order")}
                                    </Button>
                                    <Button
                                        color="secondary"
                                        variant="bordered"
                                        className="flex-1 border-pink-500 text-pink-500 hover:bg-pink-50 font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                                        onClick={() => navigate(`/products/watch/${product.id}`)}
                                    >
                                        {t("See More Details")}
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>

            {filteredProducts?.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center py-12"
                >
                    <p className="text-xl text-gray-500">{t("No products available in this category")}</p>
                </motion.div>
            )}
        </>
    )
}
