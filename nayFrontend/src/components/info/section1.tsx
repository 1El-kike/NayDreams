import { useTranslation } from "react-i18next";

export const Section1 = ({ fondo }: { fondo: string }) => {
    const { t } = useTranslation();


    return <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                        {t("Our Mission")}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        {t("At Nay's Dreams, we believe that every product should tell a unique story. We specialize in creating high-quality personalized items that reflect your personality and style. From custom mugs to clothing, we turn your ideas into reality.")}
                    </p>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                            {t("Unique and personalized designs")}
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                            {t("Premium quality materials")}
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                            {t("Fast and reliable delivery")}
                        </li>
                    </ul>
                </div>
                <div data-aos="fade-left">
                    <img
                        src={fondo}
                        alt="Productos personalizados"
                        className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                    />
                </div>
            </div>
        </div>
    </section>
}
