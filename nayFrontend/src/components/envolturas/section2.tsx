import { useTranslation } from "react-i18next";
import type { TypeVideo } from "../../pages/envolturaPage";

export const Section2 = ({ videos }: { videos: TypeVideo }) => {

    const { t } = useTranslation();

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right" className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
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
    )
}
