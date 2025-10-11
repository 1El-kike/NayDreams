
import { useTranslation } from "react-i18next";
import img from '../../assets/contact/empresa.webp'


export const Section1 = () => {
    const { t } = useTranslation();

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            {t("Información de Contacto")}
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                                    📍
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{t("Dirección")}</h3>
                                    <p className="text-gray-600">
                                        2830 Jameson North #27<br />
                                        Lincoln, NE 68516<br />
                                        Estados Unidos
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                                    📞
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{t("Teléfono")}</h3>
                                    <p className="text-gray-600">
                                        +1 (402) 770-0227
                                    </p>
                                </div>
                            </div>
                            {/* <div className="flex items-start">
                                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                                    ✉️
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{t("Email")}</h3>
                                    <p className="text-gray-600">
                                        contacto@naydreams.com
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div data-aos="fade-left" className="h-96 rounded-2xl overflow-hidden shadow-2xl bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${img})` }}>
                    </div>
                </div>
            </div>
        </section>
    )
}