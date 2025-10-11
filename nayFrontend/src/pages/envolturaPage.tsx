import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const EnvolturaPage = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const videos = [
        {
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
            <section className="py-20 px-4 bg-gradient-to-r from-pink-400 to-rose-500 text-white">
                <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        {t("Nuestro Proceso de Empaquetado")}
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        {t("Descubre cómo cuidamos cada detalle en la preparación de tus productos personalizados")}
                    </p>
                </div>
            </section>

            {/* Section 1: Text Left, Video Right */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                {t("Cuidado Artesanal")}
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                {t("Cada producto personalizado recibe atención individual. Nuestros artesanos seleccionan los mejores materiales de empaquetado para proteger tus artículos durante el envío. Utilizamos técnicas tradicionales combinadas con tecnología moderna para garantizar que llegue en perfectas condiciones.")}
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                                    <span className="text-gray-700">{t("Materiales ecológicos")}</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                                    <span className="text-gray-700">{t("Protección anti-golpes")}</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                                    <span className="text-gray-700">{t("Sellado hermético")}</span>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${videos[0].embedId}`}
                                title={videos[0].title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Video Left, Text Right */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-right" className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${videos[1].embedId}`}
                                title={videos[1].title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                        <div data-aos="fade-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                {t("Proceso Paso a Paso")}
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                {t("Desde la recepción del pedido hasta el envío final, cada paso es documentado y ejecutado con precisión. Nuestros videos muestran el cuidado que ponemos en cada detalle para que puedas ver la calidad de nuestro trabajo.")}
                            </p>
                            <div className="bg-pink-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">{t("¿Por qué importa el empaquetado?")}</h3>
                                <p className="text-gray-600">
                                    {t("Un buen empaquetado no solo protege el producto, sino que también crea una experiencia memorable para el cliente. Es la última impresión que dejamos antes de que llegue a tus manos.")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Gallery */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            {t("Galería de Videos")}
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            {t("Explora nuestros videos para ver cómo transformamos tus ideas en productos perfectamente empaquetados")}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {videos.map((video, index) => (
                            <div
                                key={video.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 200}
                            >
                                <div className="aspect-video">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${video.embedId}`}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                                        {video.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {video.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
