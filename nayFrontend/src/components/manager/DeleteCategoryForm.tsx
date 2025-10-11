import { Button, Select, SelectItem, addToast, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useCategories } from "../../hooks/useCategories";
import { useDeleteCategory } from "../../hooks/useDeleteCategory";

export const DeleteCategoryForm = () => {
    const { t } = useTranslation();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedCategory, setSelectedCategory] = useState<{ id: number; name: string } | null>(null);
    const { data: categories, isLoading } = useCategories();
    const { deleteCategory, isLoading: deleteLoading, message } = useDeleteCategory();

    const handleCategorySelect = (id: number) => {
        const cat = categories?.find(c => c.id === id);
        if (cat) {
            setSelectedCategory({ id: cat.id, name: cat.name });
            onOpen();
        }
    };

    const confirmDelete = async () => {
        if (!selectedCategory) return;
        const success = await deleteCategory(selectedCategory.id);
        if (success) {
            addToast({
                title: t("Success!"),
                description: t("Category deleted successfully"),
                color: "success",
                timeout: 5000,
            });
        } else {
            addToast({
                title: t("Error"),
                description: message || t("Error deleting category"),
                color: "danger",
                timeout: 5000,
            });
        }
        onOpenChange();
        setSelectedCategory(null);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-start mb-8 bg-gradient-to-tr from-rose-400 bg-clip-text text-transparent to-purple-600">{t("Delete Category")}</h1>
            <Select
                label={t("Select Category")}
                placeholder={t("Choose a category to delete")}
                isLoading={isLoading}
                onSelectionChange={(keys) => handleCategorySelect(parseInt(Array.from(keys)[0] as string))}
            >
                {(categories || []).map((cat) => (
                    <SelectItem key={cat.id} textValue={cat.name}>
                        {cat.name}
                    </SelectItem>
                ))}
            </Select>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    <ModalHeader>{t("Confirm Deletion")}</ModalHeader>
                    <ModalBody>
                        {t("Are you sure you want to delete the category")} "{selectedCategory?.name}"? {t("This action cannot be undone.")}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="default" variant="light" onPress={onOpenChange}>
                            {t("Cancel")}
                        </Button>
                        <Button color="danger" onPress={confirmDelete}>
                            {t("Delete")}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};