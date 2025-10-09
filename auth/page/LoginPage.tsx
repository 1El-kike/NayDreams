import { Card, CardBody, CardHeader } from "@heroui/react";
import { LoginForm } from "../components/LoginForm";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const LoginPage = () => {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 to-rose-100 flex items-center justify-center p-4">
            <Card className="w-full max-w-md shadow-2xl border-0">
                <CardHeader className="text-center pb-2">
                    <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-rose-600 bg-clip-text text-transparent">
                        {t("Login")}
                    </h1>
                    <p className="text-gray-600 ml-5 mt-2">
                        Ingresa tus credenciales
                    </p>
                </CardHeader>
                <CardBody className="pt-0">
                    <LoginForm />
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            ¿No tienes cuenta?{" "}
                            <Link
                                to="/auth/register"
                                className="text-rose-600 hover:text-rose-800 font-medium hover:underline transition-colors"
                            >
                                Regístrate aquí
                            </Link>
                        </p>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};