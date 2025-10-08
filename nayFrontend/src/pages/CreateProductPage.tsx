import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { ManagerSidebar } from "../components/manager/ManagerSidebar";
import { CreateProductForm } from "../components/manager/CreateProductForm";
import { Tabs, Tab } from "@heroui/react";
import { useTranslation } from "react-i18next";

export const CreateProductPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const getActiveTab = () => {
        if (location.pathname.includes("create")) return "/products/management/create";
        if (location.pathname.includes("category")) return "/products/management/category";
        if (location.pathname.includes("see")) return "/products/management/see";
        return "create";
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Desktop Sidebar */}
            <div className="hidden lg:flex">
                <ManagerSidebar />
                <div className="flex-1 p-8">
                    <Routes>
                        <Route index element={<Navigate to="create" replace />} />
                        <Route path="create" element={<CreateProductForm />} />
                        <Route path="category" element={<div>{t("Create Category - Coming Soon")}</div>} />
                        <Route path="see" element={<div>{t("View Products - Coming Soon")}</div>} />
                    </Routes>
                </div>
            </div>

            {/* Mobile Tabs */}
            <div className="lg:hidden">
                <div className="py-5">
                    <Tabs
                        color="danger"
                        variant="underlined"
                        selectedKey={getActiveTab()}
                        onSelectionChange={(key) => navigate(key as string)}
                        className="w-full"
                    >
                        <Tab key="/products/management/create" title={t("Create Product")}>
                            <div className="p-4">
                                <CreateProductForm />
                            </div>
                        </Tab>
                        <Tab key="/products/management/category" title={t("Create Category")}>
                            <div className="p-4">
                                <div>{t("Create Category - Coming Soon")}</div>
                            </div>
                        </Tab>
                        <Tab key="/products/management/see" title={t("View Products")}>
                            <div className="p-4">
                                <div>{t("View Products - Coming Soon")}</div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};