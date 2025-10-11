import { Tabs, Tab } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { CreateCategoryForm } from "./CreateCategoryForm";
import { EditCategoryForm } from "./EditCategoryForm";
import { DeleteCategoryForm } from "./DeleteCategoryForm";

export const CategoryManagement = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full">
            <h1 className="text-3xl font-bold text-start mb-8 bg-gradient-to-tr from-rose-400 bg-clip-text text-transparent to-purple-600">{t("Category Management")}</h1>
            <Tabs color="danger" variant="underlined" className="w-full">
                <Tab key="create" title={t("Create Category")}>
                    <div className="p-4">
                        <CreateCategoryForm />
                    </div>
                </Tab>
                <Tab key="edit" title={t("Edit Category")}>
                    <div className="p-4">
                        <EditCategoryForm />
                    </div>
                </Tab>
                <Tab key="delete" title={t("Delete Category")}>
                    <div className="p-4">
                        <DeleteCategoryForm />
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};