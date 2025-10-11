import { useForm, Controller, FormProvider } from "react-hook-form";
import { Input, Button, Textarea, Select, SelectItem, addToast } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useCategories } from "../../hooks/useCategories";
import { useUpdateCategory } from "../../hooks/useUpdateCategory";

interface CategoryForm {
    id: number;
    name: string;
    description: string;
}

export const EditCategoryForm = () => {
    const { t } = useTranslation();
    const methods = useForm<CategoryForm>();
    const { handleSubmit, formState: { errors }, reset, setValue } = methods;
    const [selectedCategory, setSelectedCategory] = useState<CategoryForm | null>(null);
    const { data: categories, isLoading: categoriesLoading } = useCategories();
    const { updateCategory, isLoading, message } = useUpdateCategory();

    const handleCategorySelect = (id: number) => {
        const cat = categories?.find(c => c.id === id);
        if (cat) {
            setSelectedCategory(cat);
            setValue("id", cat.id);
            setValue("name", cat.name);
            setValue("description", cat.description || "");
        }
    };

    const onSubmit = async (data: CategoryForm) => {
        const success = await updateCategory(data.id, { name: data.name, description: data.description });
        if (success) {
            addToast({
                title: t("Success!"),
                description: t("Category updated successfully"),
                color: "success",
                timeout: 5000,
            });
            reset();
            setSelectedCategory(null);
        } else {
            addToast({
                title: t("Error"),
                description: message || t("Error updating category"),
                color: "danger",
                timeout: 5000,
            });
        }
    };

    return (
        <FormProvider {...methods}>
            <div className="w-full max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-start mb-8 bg-gradient-to-tr from-rose-400 bg-clip-text text-transparent to-purple-600">{t("Edit Category")}</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <Select
                        label={t("Select Category")}
                        placeholder={t("Choose a category to edit")}
                        isLoading={categoriesLoading}
                        onSelectionChange={(keys) => handleCategorySelect(parseInt(Array.from(keys)[0] as string))}
                    >
                        {(categories || []).map((cat) => (
                            <SelectItem key={cat.id} textValue={cat.name}>
                                {cat.name}
                            </SelectItem>
                        ))}
                    </Select>

                    {selectedCategory && (
                        <>
                            <Controller
                                name="name"
                                rules={{ required: t("Name is required") }}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        label={t("Category Name")}
                                        placeholder={t("Enter the category name")}
                                        isInvalid={!!errors.name}
                                        variant="underlined"
                                        color="danger"
                                        errorMessage={errors.name?.message}
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

                            <Button
                                type="submit"
                                size="lg"
                                isLoading={isLoading}
                                className="w-full text-white bg-gradient-to-bl from-pink-400 to-pink-500"
                            >
                                {isLoading ? t("Updating...") : t("Update Category")}
                            </Button>
                        </>
                    )}
                </form>
            </div>
        </FormProvider>
    );
};