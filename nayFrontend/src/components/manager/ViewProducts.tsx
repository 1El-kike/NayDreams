import { useState } from "react";
import { Button, Card, CardBody, CardHeader, Image, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, addToast } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { useProducts } from "../../hooks/useProducts";
import type { Product } from "../../hooks/useProducts";
import { useDeleteProduct } from "../../hooks/useDeleteProduct";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

export const ViewProducts = () => {
    const { t } = useTranslation();
    const { data: products, isLoading, error } = useProducts();
    const { deleteProduct, isLoading: deleteLoading, message: deleteMessage } = useDeleteProduct();
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [viewModal, setViewModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const handleView = (product: Product) => {
        setSelectedProduct(product);
        setViewModal(true);
    };

    const handleEdit = (product: Product) => {
        setSelectedProduct(product);
        setEditModal(true);
    };

    const handleDelete = (product: Product) => {
        setSelectedProduct(product);
        setDeleteModal(true);
    };

    const confirmDelete = async () => {
        if (!selectedProduct) return;
        const success = await deleteProduct(selectedProduct.id);
        if (success) {
            addToast({
                title: t("Success!"),
                description: t("Product deleted successfully"),
                color: "success",
                timeout: 5000,
            });
        } else {
            addToast({
                title: t("Error"),
                description: deleteMessage || t("Error deleting product"),
                color: "danger",
                timeout: 5000,
            });
        }
        setDeleteModal(false);
        setSelectedProduct(null);
    };

    if (isLoading) return <div className="text-center py-8">{t("Loading...")}</div>;
    if (error) return <div className="text-center py-8 text-red-500">{t("Error loading products")}</div>;

    return (
        <div className="w-full">
            <h1 className="text-3xl font-bold text-start mb-8 bg-gradient-to-tr from-rose-400 bg-clip-text text-transparent to-purple-600">{t("View Products")}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products?.map((product) => (
                    <Card key={product.id} className="shadow-lg">
                        <CardHeader className="pb-0">
                            <Image
                                src={product.image || "/placeholder.jpg"}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                        </CardHeader>
                        <CardBody className="pt-4">
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                            <p className="text-lg font-bold text-pink-500 mb-4">${product.price}</p>
                            <div className="flex gap-2">
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    onPress={() => handleView(product)}
                                    startContent={<EyeIcon className="w-4 h-4" />}
                                >
                                    {t("View")}
                                </Button>
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    color="warning"
                                    onPress={() => handleEdit(product)}
                                    startContent={<PencilIcon className="w-4 h-4" />}
                                >
                                    {t("Edit")}
                                </Button>
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    color="danger"
                                    onPress={() => handleDelete(product)}
                                    startContent={<TrashIcon className="w-4 h-4" />}
                                >
                                    {t("Delete")}
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>

            {/* View Modal */}
            <Modal isOpen={viewModal} onOpenChange={setViewModal} size="2xl">
                <ModalContent>
                    <ModalHeader>{selectedProduct?.name}</ModalHeader>
                    <ModalBody>
                        {selectedProduct && (
                            <div className="space-y-4">
                                <Image
                                    src={selectedProduct.image || "/placeholder.jpg"}
                                    alt={selectedProduct.name}
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                                <p><strong>{t("Description")}:</strong> {selectedProduct.description}</p>
                                <p><strong>{t("Price")}:</strong> ${selectedProduct.price}</p>
                                <p><strong>{t("Stock")}:</strong> {selectedProduct.stock}</p>
                                <p><strong>{t("Category")}:</strong> {selectedProduct.category.name}</p>
                                <p><strong>{t("Rating")}:</strong> {selectedProduct.rating}/5</p>
                            </div>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button onPress={() => setViewModal(false)}>{t("Close")}</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* Edit Modal - Placeholder */}
            <Modal isOpen={editModal} onOpenChange={setEditModal} size="2xl">
                <ModalContent>
                    <ModalHeader>{t("Edit Product")}</ModalHeader>
                    <ModalBody>
                        <p>{t("Edit form coming soon...")}</p>
                        {/* TODO: Add edit form */}
                    </ModalBody>
                    <ModalFooter>
                        <Button onPress={() => setEditModal(false)}>{t("Close")}</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* Delete Modal */}
            <Modal isOpen={deleteModal} onOpenChange={setDeleteModal}>
                <ModalContent>
                    <ModalHeader>{t("Confirm Deletion")}</ModalHeader>
                    <ModalBody>
                        {t("Are you sure you want to soft delete")} "{selectedProduct?.name}"? {t("This will mark it as deleted.")}
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="light" onPress={() => setDeleteModal(false)}>{t("Cancel")}</Button>
                        <Button color="danger" onPress={confirmDelete}>{t("Delete")}</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};