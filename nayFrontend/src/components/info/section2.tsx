import { useTranslation } from "react-i18next";

export const Section2 = ({ fondo }: { fondo: string }) => {
    const { t } = useTranslation();

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <img
                            src={fondo}
                            alt="Proceso creativo"
                            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                        />
                    </div>
                    <div data-aos="fade-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            {t("Nuestro Proceso Creativo")}
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            {t("Trabajamos contigo en cada paso del proceso. Desde la conceptualización inicial hasta el producto final, nos aseguramos de que cada detalle sea perfecto. Utilizamos las últimas tecnologías de impresión para garantizar resultados excepcionales.")}
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                                <span className="text-gray-700">{t("Diseña tu idea")}</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                                <span className="text-gray-700">{t("Personaliza los detalles")}</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                                <span className="text-gray-700">{t("Recibe tu producto único")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}