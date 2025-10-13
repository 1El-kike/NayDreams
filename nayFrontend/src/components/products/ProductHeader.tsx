import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";



export const ProductHeader = () => {
    const { t } = useTranslation();
    return (
        <section className="py-20 px-4 bg-gradient-to-r from-pink-400 to-pink-300 text-white">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >

                <h1 className="text-4xl font-serif md:text-6xl font-bold mb-4">
                    {t("Our Products")}
                </h1>
                <p className="text-xl  md:text-2xl max-w-3xl mx-auto">
                    {t("Discover our collection of high-quality personalized products")}
                </p>
            </motion.div>
        </section>

    )
}
