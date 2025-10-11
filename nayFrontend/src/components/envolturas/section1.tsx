import { useTranslation } from "react-i18next";
import type { TypeVideo } from "../../pages/envolturaPage";

export const Section1 = ({ videos }: { videos: TypeVideo }) => {
    const { t } = useTranslation();

    return (
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
                            src={`https://www.youtube.com/embed/${videos.embedId}`}
                            title={videos.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
