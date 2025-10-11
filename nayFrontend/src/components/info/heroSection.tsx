import { useTranslation } from "react-i18next";
import NayDreamsIcon from "../../assets/naysDream.svg";


export const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 px-4 bg-gradient-to-r from-pink-400 to-pink-300 text-white">
            <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">

                <img src={NayDreamsIcon} alt="Nay's Dreams" className="h-16 mx-auto mb-6" />
                <h1 className="text-4xl font-serif md:text-6xl font-bold mb-4">
                    {t("Sobre Nay's Dreams")}
                </h1>
                <p className="text-xl  md:text-2xl max-w-3xl mx-auto">
                    {t("Descubre cómo hacemos realidad tus sueños personalizados")}
                </p>
            </div>
        </section>

    )
}