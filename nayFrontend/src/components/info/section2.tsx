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
                            {t("Our Creative Process")}
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            {t("We work with you at every step of the process. From the initial concept to the final product, we ensure that every detail is perfect. We use the latest printing technologies to guarantee exceptional results.")}
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                                <span className="text-gray-700">{t("Design your idea")}</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                                <span className="text-gray-700">{t("Customize the details")}</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                                <span className="text-gray-700">{t("Receive your unique product")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}