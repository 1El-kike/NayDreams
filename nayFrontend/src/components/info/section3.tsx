import { useTranslation } from "react-i18next";


export const Section3 = ({ fondo }: { fondo: string }) => {
    const { t } = useTranslation();

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            {t("Calidad que Importa")}
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            {t("No comprometemos en calidad. Cada producto es inspeccionado cuidadosamente antes de ser enviado. Utilizamos tintas ecológicas y materiales sostenibles para cuidar del medio ambiente mientras creamos productos duraderos.")}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-pink-50 rounded-lg">
                                <div className="text-2xl font-bold text-pink-600">100%</div>
                                <div className="text-sm text-gray-600">{t("Satisfacción")}</div>
                            </div>
                            <div className="text-center p-4 bg-rose-50 rounded-lg">
                                <div className="text-2xl font-bold text-rose-600">24h</div>
                                <div className="text-sm text-gray-600">{t("Producción")}</div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left">
                        <img
                            src={fondo}
                            alt="Calidad premium"
                            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}