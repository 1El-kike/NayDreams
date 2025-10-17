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
        <section className="py-16 px-4 font-serif relative overflow-hidden" data-aos="fade-up">
            {/* Abstract Shapes */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Floating circles */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full animate-bounce opacity-70"></div>
                <div className="absolute top-20 right-20 w-16 h-16 bg-rose-300 rounded-full animate-pulse opacity-60"></div>
                <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-300 rounded-full animate-ping opacity-50"></div>
                <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-rose-200 rounded-full animate-bounce opacity-40"></div>

                {/* Geometric shapes */}
                <div className="absolute top-1/3 left-1/4 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-pink-400 animate-spin opacity-60" style={{ animationDuration: '8s' }}></div>
                <div className="absolute top-2/3 right-1/4 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-rose-500 animate-pulse opacity-50"></div>

                {/* Curved shapes */}
                <div className="absolute top-1/2 left-1/6 w-32 h-16 bg-pink-100 rounded-full animate-pulse opacity-30 transform rotate-45"></div>
                <div className="absolute bottom-1/3 right-1/6 w-24 h-12 bg-rose-100 rounded-full animate-bounce opacity-40 transform -rotate-12"></div>

                {/* Dots pattern */}
                <div className="absolute top-1/4 right-1/6 flex space-x-2">
                    <div className="w-3 h-3 bg-pink-400 rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
                    <div className="w-4 h-4 bg-pink-300 rounded-full animate-bounce"></div>
                </div>
            </div>

            <div className="max-w-7xl  mx-auto relative z-10">
                <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-tr from-rose-400 bg-clip-text text-transparent to-purple-600 mb-4">
                        {t("Why Choose Nay's Dreams?")}
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        {t("Discover what makes our personalized products stand out from the rest")}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100 hover:shadow-2xl hover:shadow-pink-200/30 transition-all duration-500 transform hover:-translate-y-2 border border-pink-200 rounded-3xl overflow-hidden relative"
                            data-aos="fade-up"
                            data-aos-delay={400 + index * 200}
                        >
                            {/* Creative background pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-4 left-4 w-8 h-8 bg-pink-200 rounded-full animate-pulse"></div>
                                <div className="absolute top-8 right-8 w-6 h-6 bg-rose-200 rounded-full animate-bounce"></div>
                                <div className="absolute bottom-6 left-6 w-4 h-4 bg-pink-300 rounded-full animate-ping"></div>
                            </div>

                            <div className="p-8 text-center relative z-10">
                                {/* Icon with creative glow */}
                                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300 relative">
                                    <div className="absolute inset-0 bg-pink-200 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                                    <span className="relative z-10">{card.icon}</span>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-pink-700 transition-colors duration-300">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    {card.description}
                                </p>

                                {/* Enhanced decorative elements */}
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                                <div className="absolute top-2 right-2 w-3 h-3 bg-pink-400 rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};