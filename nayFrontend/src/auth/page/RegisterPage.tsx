import { Card, CardBody, CardHeader } from "@heroui/react";
import { RegisterForm } from "../components/RegisterForm";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const RegisterPage = () => {
    const handleRegisterSuccess = () => {
        // Podrías redirigir al login o mostrar un mensaje
        console.log("Registro exitoso");
    };
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center p-4">
            <Card className="w-full max-w-md shadow-2xl border-0">
                <CardHeader className="text-center pb-2">
                    <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {t("Sign Up")}
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Crea tu cuenta y comienza tu experiencia
                    </p>
                </CardHeader>
                <CardBody className="pt-0">
                    <RegisterForm onSuccess={handleRegisterSuccess} />
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            ¿Ya tienes cuenta?{" "}
                            <Link
                                to="/auth/login"
                                className="text-purple-600 hover:text-purple-800 font-medium hover:underline transition-colors"
                            >
                                Inicia sesión aquí
                            </Link>
                        </p>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};