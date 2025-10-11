import { useTranslation } from "react-i18next";


export const HeroSection = () => {

    const { t } = useTranslation();


    return (
        <section className="py-20 px-4 bg-gradient-to-r from-pink-400 to-pink-300 text-white">
            <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {t("Nuestro Proceso de Empaquetado")}
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                    {t("Descubre cómo cuidamos cada detalle en la preparación de tus productos personalizados")}
                </p>
            </div>
        </section>
    )
}
