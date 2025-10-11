import { useTranslation } from "react-i18next";

export const InfoCards = () => {
    const { t } = useTranslation();

    const cards = [
        {
            title: t("Custom Design"),
            description: t("Create unique products with your personal touch. Choose colors, add text, upload images and make it truly yours."),
            icon: "🎨",
            color: "from-pink-400 to-rose-500"
        },
        {
            title: t("Premium Quality"),
            description: t("We use only the finest materials and printing techniques to ensure your personalized items last for years to come."),
            icon: "⭐",
            color: "from-rose-400 to-pink-500"
        },
        {
            title: t("Fast Delivery"),
            description: t("Quick production and shipping times. Get your custom products delivered to your door in record time."),
            icon: "🚚",
            color: "from-pink-500 to-rose-400"
        }
    ];

    return (
        <section className="py-16 px-4 bg-white" data-aos="fade-up">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        {t("Why Choose Nay Dreams?")}
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        {t("Discover what makes our personalized products stand out from the rest")}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="group bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 rounded-2xl overflow-hidden relative"
                            data-aos="fade-up"
                            data-aos-delay={400 + index * 200}
                        >
                            {/* Background gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                            <div className="p-8 text-center relative z-10">
                                {/* Icon */}
                                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                    {card.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-pink-600 transition-colors duration-300">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {card.description}
                                </p>

                                {/* Decorative element */}
                                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-pink-100 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};