import { Select, SelectItem } from "@heroui/react";
import { motion } from "framer-motion";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

type TypeCategory = {
    id: number;
    name: string;

}

interface TypeProps {
    selectedCategory: any;
    setSelectedCategory: (item: number) => void;
    categories: TypeCategory[]
}

export const ProductFilter: FC<TypeProps> = ({ selectedCategory, setSelectedCategory, categories }) => {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 flex justify-center"
        >
            <Select
                label={t("Filter by category")}
                placeholder={t("Select a category")}
                selectedKeys={[selectedCategory.toString()]}
                onSelectionChange={(keys) => setSelectedCategory(parseInt(Array.from(keys)[0] as string))}
                className="w-full max-w-xs"
                variant="bordered"
                color="primary"
            >
                {categories.map((category) => (
                    <SelectItem key={category.id} textValue={t(category.name)}>
                        {t(category.name)}
                    </SelectItem>
                ))}
            </Select>
        </motion.div>
    )
}
