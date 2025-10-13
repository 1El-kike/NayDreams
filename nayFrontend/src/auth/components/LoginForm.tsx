import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Link, Spinner } from "@heroui/react";
import { login } from "../core/_requests";
import { useAuth } from "../useAuth";
import { useNavigate } from "react-router-dom";
import { FormInput } from "./FormInput";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

interface LoginFormData {
    email: string;
    password: string;
}

export const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { saveAuth } = useAuth();
    const navigate = useNavigate();
    const form = useForm<LoginFormData>();
    const { t } = useTranslation();

    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true);
        try {
            const response = await login(data);
            const authData = {
                api_token: response.data.accessToken,
                refreshToken: response.data.refreshToken,
            };
            saveAuth(authData);
            Cookies.set("refreshtoken", response.data.refreshToken, { expires: 7 }); // Guardar refresh token en cookies por 7 días
            navigate("/");
        } catch (error: any) {
            console.error("Login error:", error);
            const message = error.response?.data?.message || "Login failed";
            form.setError("root", { message });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <FormInput
                label={t("Email")}
                name="email"
                type="email"
                placeholder={t("Enter your email")}
                register={form.register}
                errors={form.formState.errors}
                validation={{ required: t("Email is required") }}
            />

            <FormInput
                label={t("Password")}
                name="password"
                type="password"
                placeholder={t("Enter your password")}
                register={form.register}
                errors={form.formState.errors}
                validation={{ required: t("Password is required") }}
            />

            <div className="flex justify-between items-center">
                <Link href="#" size="sm" className="text-blue-600">
                    {t("Forgot password?")}
                </Link>
            </div>

            <Button type="submit" color="danger" className="w-full" isLoading={isLoading}>
                {isLoading ? <Spinner size="sm" /> : t("Sign In")}
            </Button>

            {form.formState.errors.root && (
                <p className="text-red-500 text-sm">{form.formState.errors.root.message}</p>
            )}
        </form>
    );
};