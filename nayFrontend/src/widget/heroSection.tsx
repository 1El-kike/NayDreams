import type { FC } from "react";
import { useTranslation } from "react-i18next";

interface TypeTitle {
    title: string;
    subTitle: string;
}

export const HeroSection: FC<TypeTitle> = ({ title, subTitle }) => {
    const { t } = useTranslation();

    return (
        <section className="py-20 px-4 bg-gradient-to-r from-pink-400 to-pink-300 text-white">
            <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
                <h1 className="text-4xl font-serif md:text-6xl font-bold mb-4">
                    {t(title)}
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                    {t(subTitle)}
                </p>
            </div>
        </section>
    )
}