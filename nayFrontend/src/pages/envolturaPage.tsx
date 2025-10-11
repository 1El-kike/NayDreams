import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HeroSection } from "../components/envolturas/HeroSection";
import { Section1 } from "../components/envolturas/section1";
import { Section2 } from "../components/envolturas/section2";
import { VideoGallery } from "../components/envolturas/videoGallery";

export interface TypeVideo {
    id: number;
    title: string;
    description: string;
    embedId: string
}
export const EnvolturaPage = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


    const videoSection: TypeVideo[] = [{
        id: 1,
        title: t("Preparación de Productos Personalizados"),
        description: t("Vemos cómo seleccionamos y preparamos cada artículo personalizado antes del empaquetado."),
        embedId: "dQw4w9WgXcQ" // Placeholder - Rick Roll
    },
    {
        id: 2,
        title: t("Proceso de Empaquetado"),
        description: t("Descubre nuestro meticuloso proceso de empaquetado para proteger tus productos."),
        embedId: "dQw4w9WgXcQ"
    },]

    const videos: TypeVideo[] = [

        {
            id: 1,
            title: t("Control de Calidad Final"),
            description: t("Cada paquete pasa por un riguroso control de calidad antes de salir de nuestras instalaciones."),
            embedId: "dQw4w9WgXcQ"
        },
        {
            id: 2,
            title: t("Preparación para Envío"),
            description: t("Cómo preparamos tus pedidos para un envío seguro y rápido."),
            embedId: "dQw4w9WgXcQ"
        },
        {
            id: 3,
            title: t("Control de Calidad Final"),
            description: t("Cada paquete pasa por un riguroso control de calidad antes de salir de nuestras instalaciones."),
            embedId: "dQw4w9WgXcQ"
        },
        {
            id: 4,
            title: t("Preparación para Envío"),
            description: t("Cómo preparamos tus pedidos para un envío seguro y rápido."),
            embedId: "dQw4w9WgXcQ"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
            {/* Hero Section */}
            <HeroSection />

            {/* Section 1: Text Left, Video Right */}
            <Section1 videos={videoSection[0]} />

            {/* Section 2: Video Left, Text Right */}
            <Section2 videos={videoSection[1]} />

            {/* Video Gallery */}
            <VideoGallery videos={videos} />

            {/* Final CTA */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div
                        className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-3xl p-12 text-center shadow-2xl transform hover:scale-105 transition-transform duration-500"
                        data-aos="zoom-in"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            {t("¿Listo para ver tu producto empaquetado?")}
                        </h2>
                        <p className="text-xl mb-8 leading-relaxed">
                            {t("Contáctanos hoy y comienza tu proyecto personalizado. Te mostraremos cómo cuidamos cada detalle.")}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                                {t("Ver Productos")}
                            </button>
                            <button className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg">
                                {t("Contáctanos")}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
