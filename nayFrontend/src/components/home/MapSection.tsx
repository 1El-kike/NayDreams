import { useTranslation } from "react-i18next";

export const MapSection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-rose-50" data-aos="fade-up">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-tr from-rose-400 bg-clip-text text-transparent to-purple-600 mb-4">
                        {t("Visit Our Store")}
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        {t("Find us at our physical location. We're excited to welcome you and show you our personalized products in person.")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6" data-aos="fade-right" data-aos-delay="400">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100 hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                {t("Store Information")}
                            </h3>
                            <div className="space-y-2 text-gray-600">
                                <p><strong>{t("Address:")}</strong> 2830 jameson North #27 Lincoln NE zip code 68516</p>
                                <p><strong>{t("Phone:")}</strong> +1 (402) 770-0227</p>
                                <p><strong>{t("Hours:")}</strong> Open 24 hours</p>
                                <p><strong>{t("Email:")}</strong> sabrinamador2001@gmail.com</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-bl from-pink-500 to-pink-400 text-white p-6 rounded-2xl hover:bg-pink-600 transition-colors duration-300">
                            <h3 className="text-xl font-semibold mb-3">
                                {t("Why Visit Us?")}
                            </h3>
                            <ul className="space-y-2">
                                <li>• {t("See products in person")}</li>
                                <li>• {t("Get personalized recommendations")}</li>
                                <li>• {t("Custom design consultations")}</li>
                                <li>• {t("Pickup your orders")}</li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="bg-white p-4 rounded-2xl shadow-lg border border-pink-100 hover:shadow-xl transition-shadow duration-300"
                        data-aos="fade-left"
                        data-aos-delay="600"
                    >
                        <iframe
                            src="https://maps.google.com/maps?q=2830+jameson+North+%2327+Lincoln+NE+68516&output=embed"
                            width="100%"
                            height="400"
                            style={{ border: 0, borderRadius: '1rem' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Store Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};