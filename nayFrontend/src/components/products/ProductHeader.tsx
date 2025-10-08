import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


export const ProductHeader = () => {
    const { t } = useTranslation();
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
        >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t("Our Products")}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t("Discover our collection of high-quality personalized products")}
            </p>
        </motion.div>

    )
}
