/* eslint-disable react-hooks/exhaustive-deps */
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useUpdateProduct } from "../../hooks/useUpdateProduct";
import { useEffect, useState, type FC } from "react";
import type { Product } from "../../hooks/useProducts";
import { addToast, Button, Input, Modal, ModalBody, ModalContent, ModalHeader, Select, SelectItem, Textarea } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { Images } from "../../widget/addImage";
import { useCategories } from "../../hooks/useCategories";


type EditProp = {
    handleEdit: () => void,
    setSelectedProduct: (product: Product | null) => void,
    selectedProduct: Product | null
}

export const EditProduct: FC<EditProp> = ({ setSelectedProduct, selectedProduct, handleEdit }) => {

    const { t } = useTranslation();
    const [editModal, setEditModal] = useState(false);
    const { data: categories } = useCategories();
    const { updateProduct, isLoading, isSuccess, isError, message } = useUpdateProduct();

    const editMethods = useForm({
        defaultValues: {
            name: '',
            description: '',
            price: 0,
            stock: 0,
            categoryId: 0,
            images: [] as File[],
        }
    });
    const img = [
        selectedProduct?.image as string,
        selectedProduct?.image2 as string,
        selectedProduct?.image3 as string,
        selectedProduct?.image4 as string,
    ]
    const imgfilter = img.filter(img => img != null)

    const { handleSubmit, reset, setValue } = editMethods;

    useEffect(() => {
        if (selectedProduct) {
            //const file = imgfilter.map((img, index) => new File([`image${index === 0 ? '' : index + 1}`], img))

            setValue('name', selectedProduct.name);
            setValue('description', selectedProduct.description);
            setValue('price', selectedProduct.price);
            setValue('stock', selectedProduct.stock);
            setValue('categoryId', selectedProduct.categoryId);
            // setValue('images', file)
            setEditModal(true);
        } else {
            setEditModal(false);
        }
    }, [selectedProduct, setValue]);



    const onEditSubmit = async (data: any) => {
        if (!selectedProduct) return;
        const images = [data.images];
        const datosDefault = {
            name: selectedProduct.name,
            description: selectedProduct.description,
            price: selectedProduct.price,
            stock: selectedProduct.stock,
            categoryId: selectedProduct.categoryId,
            images: imgfilter.map((img, index) => new File([`image${index === 0 ? '' : index + 1}`], img))
        }

        console.log(datosDefault, data)
        if (JSON.stringify(datosDefault) === JSON.stringify(data)) {
            addToast({
                title: t("Error!"),
                description: t("No changes"),
                color: "danger",
                timeout: 5000,
            });
            return
        }
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', data.price.toString());
        formData.append('stock', data.stock.toString());
        formData.append('categoryId', data.categoryId.toString());

        if (data.images && images.length > 0) {
            images.forEach((file: File, index: number) => {
                console.log(`image${index === 0 ? '' : index + 1}`)
                formData.append(`image${index === 0 ? '' : index + 1}`, file);
            });
        }

        try {
            await updateProduct(selectedProduct.id, formData);
        } catch (error) {
            // Error handled by hook
        }
    };

    useEffect(() => {
        if (isSuccess) {
            addToast({
                title: t("Success!"),
                description: t("Product updated successfully"),
                color: "success",
                timeout: 5000,
            });
            setEditModal(false);
            setSelectedProduct(null);
            reset();
            handleEdit();
        }
    }, [isSuccess, handleEdit, setSelectedProduct, reset, t]);

    useEffect(() => {
        if (isError) {
            addToast({
                title: t("Error"),
                description: message || t("Error updating product"),
                color: "danger",
                timeout: 5000,
            });
        }
    }, [isError]);




    return (
        <Modal isOpen={editModal} onOpenChange={(isOpen) => {
            setEditModal(isOpen);
            if (!isOpen) {
                setSelectedProduct(null);
                reset();
                handleEdit();
            }
        }} size="5xl" scrollBehavior="inside">
            <ModalContent>
                <ModalHeader>{t("Edit Product")}</ModalHeader>
                <ModalBody>
                    <FormProvider {...editMethods}>
                        <form onSubmit={handleSubmit(onEditSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <Controller
                                        name="name"
                                        rules={{ required: t("Name is required") }}
                                        render={({ field, fieldState }) => (
                                            <Input
                                                {...field}
                                                label={t("Product Name")}
                                                placeholder={t("Enter product name")}
                                                isInvalid={!!fieldState.error}
                                                errorMessage={fieldState.error?.message}
                                                variant="underlined"
                                                color="danger"
                                            />
                                        )}
                                    />

                                    <Controller
                                        name="description"
                                        render={({ field }) => (
                                            <Textarea
                                                {...field}
                                                label={t("Description")}
                                                placeholder={t("Enter product description")}
                                                minRows={3}
                                                variant="underlined"
                                                color="danger"
                                            />
                                        )}
                                    />

                                    <Controller
                                        name="price"
                                        rules={{ required: t("Price is required"), min: { value: 0, message: t("Price must be positive") } }}
                                        render={({ field, fieldState }) => (
                                            <Input
                                                {...field}
                                                type="number"
                                                step="0.01"
                                                label={t("Price")}
                                                placeholder={t("Enter price")}
                                                isInvalid={!!fieldState.error}
                                                errorMessage={fieldState.error?.message}
                                                variant="underlined"
                                                color="danger"
                                                startContent="$"
                                            />
                                        )}
                                    />

                                    <Controller
                                        name="stock"
                                        rules={{ required: t("Stock is required"), min: { value: 0, message: t("Stock must be non-negative") } }}
                                        render={({ field, fieldState }) => (
                                            <Input
                                                {...field}
                                                type="number"
                                                label={t("Stock")}
                                                placeholder={t("Enter stock quantity")}
                                                isInvalid={!!fieldState.error}
                                                errorMessage={fieldState.error?.message}
                                                variant="underlined"
                                                color="danger"
                                            />
                                        )}
                                    />

                                    <Controller
                                        name="categoryId"
                                        rules={{ required: t("Category is required") }}
                                        render={({ field, fieldState }) => (
                                            <Select
                                                {...field}
                                                label={t("Category")}
                                                placeholder={t("Select a category")}
                                                isInvalid={!!fieldState.error}
                                                errorMessage={fieldState.error?.message}
                                                variant="underlined"
                                                color="danger"
                                            >
                                                {(categories || []).map((cat) => (
                                                    <SelectItem key={cat.id} textValue={cat.id.toString()}>
                                                        {cat.name}
                                                    </SelectItem>
                                                ))}
                                            </Select>
                                        )}
                                    />
                                </div>

                                <div>
                                    <Images
                                        data="images"
                                        imagenDefault={imgfilter}
                                        label={t("Product Images")}
                                        multiple={true}
                                        required={false}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 pt-4">
                                <Button
                                    type="button"
                                    variant="light"
                                    onPress={() => {
                                        setEditModal(false);
                                        setSelectedProduct(null);
                                        reset();
                                        handleEdit();
                                    }}
                                >
                                    {t("Cancel")}
                                </Button>
                                <Button
                                    type="submit"
                                    isLoading={isLoading}
                                    className="bg-gradient-to-bl from-pink-400 to-pink-500 text-white"
                                >
                                    {isLoading ? t("Updating...") : t("Update Product")}
                                </Button>
                            </div>
                        </form>
                    </FormProvider>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
