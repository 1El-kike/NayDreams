/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, addToast, Spinner } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { useProducts } from "../../hooks/useProducts";
import type { Product } from "../../hooks/useProducts";
import { useDeleteProduct } from "../../hooks/useDeleteProduct";
import { TrashIcon } from "@heroicons/react/24/outline";
import { EditProduct } from "./EditProduct";
import { ViewProductModal } from "./ViewProductModal";
import { ProductCard } from "./ProductCard";

export const ViewProducts = () => {
    const { t } = useTranslation();
    const { data: products, isLoading, error } = useProducts();
    const { deleteProduct, isLoading: deleteLoading, isSuccess: deleteSuccess, isError: deleteError, message: deleteMessage } = useDeleteProduct();
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [viewModal, setViewModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);




    const handleView = (product: Product) => {
        setSelectedProduct(product);
        setViewModal(true);
    };


    const handleEdit = (product: Product) => {
        setSelectedProduct(product);
        setEditModal(true);
    }

    const handleDelete = (product: Product) => {
        setSelectedProduct(product);
        setDeleteModal(true);
    };

    const confirmDelete = async () => {
        if (!selectedProduct) return;
        try {
            await deleteProduct(selectedProduct.id);
        } catch (error) {
            // Error is handled by the hook
        }
        setDeleteModal(false);
        setSelectedProduct(null);
    };

    useEffect(() => {
        if (deleteSuccess) {
            addToast({
                title: t("Success!"),
                description: t("Product deleted successfully"),
                color: "success",
                timeout: 5000,
            });
        }
    }, [deleteSuccess]);

    useEffect(() => {
        if (deleteError) {
            addToast({
                title: t("Error"),
                description: deleteMessage || t("Error deleting product"),
                color: "danger",
                timeout: 5000,
            });
        }
    }, [deleteError]);


    if (isLoading) return <div className="text-center py-8">{t("Loading...")}</div>;
    if (error) return <div className="text-center py-8 text-red-500">{t("Error loading products")}</div>;

    return (
        <div className="w-full">
            <h1 className="text-3xl font-bold text-start mb-8 bg-gradient-to-tr from-rose-400 bg-clip-text text-transparent to-purple-600">{t("View Products")}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products?.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        index={index}
                        onView={handleView}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </div>

            {/* View Modal */}
            <ViewProductModal
                isOpen={viewModal}
                onOpenChange={setViewModal}
                product={selectedProduct}
            />

            {/* Edit Modal */}
            {editModal && (
                <EditProduct
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                    handleEdit={() => setEditModal(false)}
                />
            )}

            {/* Delete Modal */}
            <Modal isOpen={deleteModal} onOpenChange={setDeleteModal}>
                <ModalContent>
                    <ModalHeader>{t("Confirm Deletion")}</ModalHeader>
                    <ModalBody>
                        {t("Are you sure you want to soft delete")} "{selectedProduct?.name}"? {t("This will mark it as deleted.")}
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="light" onPress={() => setDeleteModal(false)}>{t("Cancel")}</Button>
                        <Button startContent={deleteLoading ? <Spinner className="w-4 h-4" /> : <TrashIcon className="w-4 h-4" />} color="danger" onPress={confirmDelete}>{t("Delete")}</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};