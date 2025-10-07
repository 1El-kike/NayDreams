import { Input } from "@heroui/react";
import type { UseFormRegister, FieldErrors } from "react-hook-form";

interface FormInputProps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    register: UseFormRegister<any>;
    errors: FieldErrors;
    validation?: object;
}

export const FormInput = ({
    label,
    name,
    type = "text",
    placeholder,
    register,
    errors,
    validation,
}: FormInputProps) => {
    return (
        <Input
            {...register(name, validation)}
            label={label}
            placeholder={placeholder}
            type={type}
            isInvalid={!!errors[name]}
            errorMessage={errors[name]?.message as string}
        />
    );
};