import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "../Layout/layout";
import { AdminProtectedRoute } from "./AdminProtectedRoute";
import { SuspensedView } from "../widget/suspensedView";



export const PrivateRoutes = () => {
    const InitPage = lazy(() =>
        import("../pages/initPage").then((module) => ({
            default: module.Init, // Asegúrate de que component sea la exportación nombrada
        }))
    );
    const ProductsPage = lazy(() =>
        import("../pages/productpage").then((module) => ({
            default: module.Productpage,
        }))
    );
    const InfoPage = lazy(() =>
        import("../pages/infoPage").then((module) => ({
            default: module.InfoPage,
        }))
    );
    const ContactPage = lazy(() =>
        import("../pages/contactPage").then((module) => ({
            default: module.ContactPage,
        }))
    );
    const EnvolturaPage = lazy(() =>
        import("../pages/envolturaPage").then((module) => ({
            default: module.EnvolturaPage,
        }))
    );
    const CreateProductPage = lazy(() =>
        import("../pages/CreateProductPage").then((module) => ({
            default: module.CreateProductPage,
        }))
    );



    return (
        <Routes>
            <Route element={<Layout />}>

                {/* Pages */}

                <Route
                    path="init/*"
                    element={
                        <SuspensedView>
                            <InitPage />
                        </SuspensedView>
                    }
                ></Route>
                <Route
                    path="products/management/*"
                    element={
                        <AdminProtectedRoute>
                            <SuspensedView>
                                <CreateProductPage />
                            </SuspensedView>
                        </AdminProtectedRoute>
                    }
                ></Route>
                <Route
                    path="products/*"
                    element={
                        <SuspensedView>
                            <ProductsPage />
                        </SuspensedView>
                    }
                ></Route>
                <Route
                    path="info/*"
                    element={
                        <SuspensedView>
                            <InfoPage />
                        </SuspensedView>
                    }
                ></Route>
                <Route
                    path="contact/*"
                    element={
                        <SuspensedView>
                            <ContactPage />
                        </SuspensedView>
                    }
                ></Route>
                <Route
                    path="envoltura/*"
                    element={
                        <SuspensedView>
                            <EnvolturaPage />
                        </SuspensedView>
                    }
                ></Route>
                <Route path="*" element={<Navigate to="/error/404" />} />
            </Route>
        </Routes>
    );
};
