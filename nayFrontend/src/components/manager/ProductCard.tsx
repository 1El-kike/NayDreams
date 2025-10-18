import { Button, Card, CardBody, CardHeader, Chip } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import type { Product } from "../../hooks/useProducts";
import { port } from "../../config/env";

interface ProductCardProps {
    product: Product;
    index: number;
    onView: (product: Product) => void;
    onEdit: (product: Product) => void;
    onDelete: (product: Product) => void;
}

export const ProductCard = ({ product, index, onView, onEdit, onDelete }: ProductCardProps) => {
    const { t } = useTranslation();

    return (
        <Card
            className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <CardHeader className="pb-0 relative">
                <div className="relative overflow-hidden rounded-t-lg w-full">
                    <img
                        src={product.image || "/placeholder.jpg"}
                        alt={product.name}
                        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                        style={{ width: '100%', height: '224px', objectFit: 'cover' }}
                    />

                    {/* Overlay sutil en hover */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Badge de categoría */}
                    <div className="absolute top-3 left-3">
                        <Chip
                            color="default"
                            variant="flat"
                            className="text-xs font-medium bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm"
                        >
                            {product.category.name}
                        </Chip>
                    </div>
                </div>
            </CardHeader>

            <CardBody className="pt-4">
                <div className="space-y-3">
                    {/* Título */}
                    <h3 className="text-lg font-bold leading-tight text-gray-900 dark:text-white">
                        {product.name}
                    </h3>

                    {/* Descripción */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2">
                        {product.description}
                    </p>

                    {/* Información de precio y stock */}
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                {t("Price")}
                            </span>
                            <span className="text-xl font-bold text-green-600 dark:text-green-400">
                                ${product.price}
                            </span>
                        </div>

                        <div className="flex flex-col items-end">
                            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                {t("Stock")}
                            </span>
                            <span className={`text-sm font-semibold px-2 py-1 rounded-full ${product.stock > 10
                                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                : product.stock > 0
                                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                                    : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                                }`}>
                                {product.stock} {t("units")}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Botones de acción */}
                <div className="flex gap-2 mt-4">
                    <Button
                        size="sm"
                        variant="solid"
                        color="primary"
                        onPress={() => onView(product)}
                        startContent={<EyeIcon className="w-4 h-4" />}
                        className="flex-1"
                    >
                        {t("View")}
                    </Button>
                    <Button
                        size="sm"
                        variant="ghost"
                        color="warning"
                        onPress={() => onEdit(product)}
                        startContent={<PencilIcon className="w-4 h-4" />}
                        className="flex-1"
                    >
                        {t("Edit")}
                    </Button>
                    <Button
                        size="sm"
                        variant="ghost"
                        color="danger"
                        onPress={() => onDelete(product)}
                        startContent={<TrashIcon className="w-4 h-4" />}
                        className="flex-1"
                    >
                        {t("Delete")}
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};