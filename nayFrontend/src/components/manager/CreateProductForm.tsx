import { useForm, Controller, FormProvider } from "react-hook-form";
import { Input, Button, Select, SelectItem, Textarea, addToast } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { useCreateProduct } from "../../hooks/useCreateProduct";
import { useCategories } from "../../hooks/useCategories";
import { Images } from "../../widget/addImage";

interface ProductForm {
    name: string;
    description: string;
    price: number;
    stock: number;
    categoryId: number;
    images: FileList;
}

export const CreateProductForm = () => {
    const { t } = useTranslation();
    const { createProduct, isLoading, message } = useCreateProduct();
    const { data: categories, isLoading: categoriesLoading } = useCategories();
    const methods = useForm<ProductForm>();
    const { handleSubmit, formState: { errors }, reset } = methods;

    const onSubmit = async (data: ProductForm) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description || '');
        formData.append('price', data.price.toString());
        formData.append('stock', data.stock.toString());
        formData.append('categoryId', data.categoryId.toString());
        formData.append('createdById', '1'); // TODO: Get from auth context

        // Agregar las imágenes como array
        if (data.images) {
            Array.from(data.images).forEach((file) => {
                formData.append('images', file);
            });
        }

        const success = await createProduct(formData);
        if (success) {
            addToast({
                title: t("Success!"),
                description: t("Product created successfully"),
                color: "success",
                timeout: 5000,
            });
            reset();
        } else {
            addToast({
                title: t("Error"),
                description: message || t("Error creating product"),
                color: "danger",
                timeout: 5000,
            });
        }
    };

    return (
        <FormProvider {...methods}>
            <div className="w-full">
                <h1 className="text-3xl font-bold text-start mb-8 bg-gradient-to-tr from-rose-400 bg-clip-text text-transparent to-purple-600">{t("Create Product")}</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <Controller
                            name="name"
                            rules={{ required: "El nombre es requerido" }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    label={t("Product Name")}
                                    placeholder={t("Enter the name")}
                                    isInvalid={!!errors.name}
                                    variant="underlined"
                                    color="danger"
                                    errorMessage={t("Name is required")}
                                />
                            )}
                        />

                        <Controller
                            name="description"
                            render={({ field }) => (
                                <Textarea
                                    {...field}
                                    label={t("Description")}
                                    placeholder={t("Enter the description")}
                                    minRows={3}
                                    variant="underlined"
                                    color="danger"
                                />
                            )}
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <Controller
                                name="price"
                                rules={{ required: "El precio es requerido", min: { value: 0, message: "El precio debe ser positivo" } }}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        type="number"
                                        step="0.01"
                                        label={t("Price")}
                                        placeholder="0.00"
                                        variant="underlined"
                                        color="danger"
                                        value={field.value?.toString() || ""}
                                        isInvalid={!!errors.price}
                                        errorMessage={t("Price is required")}
                                        onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                    />
                                )}
                            />

                            <Controller
                                name="stock"
                                rules={{ required: t("Stock is required"), min: { value: 0, message: t("Stock must be positive") } }}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        type="number"
                                        label={t("Stock")}
                                        placeholder="0"
                                        value={field.value?.toString() || ""}
                                        isInvalid={!!errors.stock}
                                        variant="underlined"
                                        color="danger"
                                        errorMessage={errors.stock?.message}
                                        onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                    />
                                )}
                            />
                        </div>

                        <Controller
                            name="categoryId"
                            rules={{ required: "Seleccione una categoría" }}
                            render={({ field }) => (
                                <Select
                                    label={t("Category")}
                                    placeholder={t("Select a category")}
                                    selectedKeys={field.value ? [field.value.toString()] : []}
                                    isInvalid={!!errors.categoryId}
                                    isLoading={categoriesLoading}
                                    variant="underlined"
                                    color="danger"
                                    errorMessage={t("Select a category")}
                                    onSelectionChange={(keys) => field.onChange(parseInt(Array.from(keys)[0] as string))}
                                >
                                    {(categories || []).map((cat) => (
                                        <SelectItem key={cat.id} textValue={cat.name}>
                                            {cat.name}
                                        </SelectItem>
                                    ))}
                                </Select>
                            )}
                        />


                        {message && (
                            <p className={`text-center ${message.includes("exitosamente") ? "text-green-600" : "text-red-600"}`}>
                                {message}
                            </p>
                        )}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <Images
                            data="images"
                            label={t("Upload Images")}
                            required={true}
                            multiple={true}
                        />
                    </div>

                    <Button
                        type="submit"

                        size="lg"
                        isLoading={isLoading}
                        className="w-full text-white bg-gradient-to-bl from-pink-400 to-pink-500"
                    >
                        {isLoading ? t("Creating...") : t("Create Product")}
                    </Button>
                </form>
            </div>
        </FormProvider>
    );
};