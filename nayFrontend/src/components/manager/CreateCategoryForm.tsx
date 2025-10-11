import { useForm, Controller, FormProvider } from "react-hook-form";
import { Input, Button, Textarea, addToast } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { useCreateCategory } from "../../hooks/useCreateCategory";

interface CategoryForm {
    name: string;
    description: string;
}

export const CreateCategoryForm = () => {
    const { t } = useTranslation();
    const methods = useForm<CategoryForm>();
    const { handleSubmit, formState: { errors }, reset } = methods;
    const { createCategory, isLoading, message } = useCreateCategory();

    const onSubmit = async (data: CategoryForm) => {
        const success = await createCategory(data);
        if (success) {
            addToast({
                title: t("Success!"),
                description: t("Category created successfully"),
                color: "success",
                timeout: 5000,
            });
            reset();
        } else {
            addToast({
                title: t("Error"),
                description: message || t("Error creating category"),
                color: "danger",
                timeout: 5000,
            });
        }
    };

    return (
        <FormProvider {...methods}>
            <div className="w-full max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-start mb-8 bg-gradient-to-tr from-rose-400 bg-clip-text text-transparent to-purple-600">{t("Create Category")}</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                        {isLoading ? t("Creating...") : t("Create Category")}
                    </Button>
                </form>
            </div>
        </FormProvider>
    );
};