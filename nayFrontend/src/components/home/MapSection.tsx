import { useTranslation } from "react-i18next";

export const MapSection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-rose-50" data-aos="fade-up">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
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
                                <p><strong>{t("Address:")}</strong> Calle Principal 123, Ciudad, País</p>
                                <p><strong>{t("Phone:")}</strong> +1 (555) 123-4567</p>
                                <p><strong>{t("Hours:")}</strong> Mon-Fri 9AM-7PM, Sat 10AM-5PM</p>
                                <p><strong>{t("Email:")}</strong> info@naydreams.com</p>
                            </div>
                        </div>

                        <div className="bg-pink-500 text-white p-6 rounded-2xl hover:bg-pink-600 transition-colors duration-300">
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDAuNzAwMDAwLCAtNzMuOTAwMDAw!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
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