import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image, Chip } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { StarIcon } from "@heroicons/react/24/solid";
import type { Product } from "../../hooks/useProducts";
import { port } from "../../config/env";
import { useEffect, useState } from "react";

interface ViewProductModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    product: Product | null;
}

export const ViewProductModal = ({ isOpen, onOpenChange, product }: ViewProductModalProps) => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [isOpen]);

    if (!product) return null;

    return (
        <>
            {/* Fondo animado único */}
            {isOpen && (
                <div className="fixed inset-0 z-40 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 backdrop-blur-sm animate-pulse"></div>
                    <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-bounce delay-100"></div>
                    <div className="absolute top-20 right-20 w-24 h-24 bg-pink-500/10 rounded-full animate-bounce delay-300"></div>
                    <div className="absolute bottom-20 left-20 w-20 h-20 bg-blue-500/10 rounded-full animate-bounce delay-500"></div>
                    <div className="absolute bottom-10 right-10 w-16 h-16 bg-green-500/10 rounded-full animate-bounce delay-700"></div>
                </div>
            )}

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="4xl"
                className="max-h-[90vh] overflow-y-auto"
                scrollBehavior="inside"
            >
                <ModalContent className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative z-50 shadow-2xl border border-white/20">
                    <ModalHeader className={`flex flex-col gap-1 pb-2 transition-all duration-500 ${isVisible ? 'animate-in slide-in-from-top-4 fade-in' : 'opacity-0'}`}>
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                            {product.name}
                        </h2>
                        <Chip
                            color="primary"
                            variant="flat"
                            className={`text-sm transition-all duration-700 delay-200 ${isVisible ? 'animate-in slide-in-from-bottom-4 fade-in' : 'opacity-0'}`}
                        >
                            {product.category.name}
                        </Chip>
                    </ModalHeader>
                    <ModalBody className="px-6 py-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Imagen del producto */}
                            <div className={`flex justify-center transition-all duration-700 delay-300 ${isVisible ? 'animate-in slide-in-from-left-4 fade-in' : 'opacity-0'}`}>
                                <div className="relative group">
                                    <Image
                                        src={`${port}${product.image}` || "/placeholder.jpg"}
                                        alt={product.name}
                                        className="w-full max-w-md h-80 object-cover rounded-xl shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping"></div>
                                </div>
                            </div>

                            {/* Información del producto */}
                            <div className={`space-y-4 transition-all duration-700 delay-500 ${isVisible ? 'animate-in slide-in-from-right-4 fade-in' : 'opacity-0'}`}>
                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                                        {t("Description")}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                            {t("Price")}
                                        </p>
                                        <p className="text-2xl font-bold text-green-600 dark:text-green-400 animate-pulse">
                                            ${product.price}
                                        </p>
                                    </div>

                                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                            {t("Stock")}
                                        </p>
                                        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 animate-pulse">
                                            {product.stock}
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                        {t("Rating")}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <StarIcon
                                                    key={i}
                                                    className={`w-5 h-5 transition-all duration-300 ${i < Math.floor(product.rating)
                                                            ? "text-yellow-400 fill-current animate-pulse"
                                                            : "text-gray-300"
                                                        }`}
                                                    style={{ animationDelay: `${i * 100}ms` }}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                            {product.rating}/5
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter className={`pt-4 transition-all duration-700 delay-700 ${isVisible ? 'animate-in slide-in-from-bottom-4 fade-in' : 'opacity-0'}`}>
                        <Button
                            color="primary"
                            variant="light"
                            onPress={() => onOpenChange(false)}
                            className="font-medium hover:scale-105 transition-transform duration-200"
                        >
                            {t("Close")}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};