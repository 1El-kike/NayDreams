import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Spinner } from "@heroui/react";
import { register as registerUser } from "../core/_requests";
import { FormInput } from "./FormInput";
import { useTranslation } from "react-i18next";

interface RegisterFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface RegisterFormProps {
    onSuccess?: () => void;
}

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<RegisterFormData>();
    const { t } = useTranslation();

    const onSubmit = async (data: RegisterFormData) => {
        if (data.password !== data.confirmPassword) {
            form.setError("confirmPassword", { message: t("Passwords do not match") });
            return;
        }

        setIsLoading(true);
        try {
            await registerUser({
                name: data.name,
                email: data.email,
                password: data.password,
            });
            onSuccess?.();
        } catch (error: any) {
            console.error("Register error:", error);
            const message = error.response?.data?.message || "Registration failed";
            form.setError("root", { message });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <FormInput
                label={t("Full Name")}
                name="name"
                placeholder={t("Enter your full name")}
                register={form.register}
                errors={form.formState.errors}
                validation={{ required: t("Name is required") }}
            />

            <FormInput
                label={t("Email")}
                name="email"
                type="email"
                placeholder={t("Enter your email")}
                register={form.register}
                errors={form.formState.errors}
                validation={{
                    required: t("Email is required"),
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t("Invalid email address"),
                    },
                }}
            />

            <FormInput
                label={t("Password")}
                name="password"
                type="password"
                placeholder={t("Enter your password")}
                register={form.register}
                errors={form.formState.errors}
                validation={{
                    required: t("Password is required"),
                    minLength: {
                        value: 6,
                        message: t("Password must be at least 6 characters"),
                    },
                }}
            />

            <FormInput
                label={t("Confirm Password")}
                name="confirmPassword"
                type="password"
                placeholder={t("Confirm your password")}
                register={form.register}
                errors={form.formState.errors}
                validation={{ required: t("Please confirm your password") }}
            />

            <Button type="submit" color="primary" className="w-full" isLoading={isLoading}>
                {isLoading ? <Spinner size="sm" /> : t("Create")}
            </Button>

            {form.formState.errors.root && (
                <p className="text-red-500 text-sm">{form.formState.errors.root.message}</p>
            )}
        </form>
    );
};