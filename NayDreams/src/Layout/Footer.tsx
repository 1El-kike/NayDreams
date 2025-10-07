import NaysDreamsIcon from "../assets/naysDreams.svg";
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="md:col-span-1">
                        <div className="flex items-center mb-4">
                            <img src={NaysDreamsIcon} alt="Nay's Dreams" className="h-10 w-auto mr-2" />
                            <span className="text-xl font-bold">Nay's Dreams</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                            {t("Footer Description")}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t("Quick Links")}</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-300 hover:text-white transition-colors">{t("Home Link")}</a></li>
                            <li><a href="/productos" className="text-gray-300 hover:text-white transition-colors">{t("Products Link")}</a></li>
                            <li><a href="/sobre-nosotros" className="text-gray-300 hover:text-white transition-colors">{t("About Us")}</a></li>
                            <li><a href="/contacto" className="text-gray-300 hover:text-white transition-colors">{t("Contact Link")}</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t("Contact Us")}</h3>
                        <div className="text-gray-300 text-sm space-y-2">
                            <p>2830 Jameson North apto 27</p>
                            <p>Lincoln NE zip code: 68516</p>
                            <p>+1 (402) 770-0227</p>
                            <p>sabrinamador2001@gmail.com</p>
                        </div>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t("Business Hours")}</h3>
                        <p className="text-gray-300 text-sm">{t("Open 24 hours")}</p>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-300 text-sm">{t("Copyright")}</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="/privacidad" className="text-gray-300 hover:text-white transition-colors text-sm">{t("Privacy Policy")}</a>
                        <a href="/terminos" className="text-gray-300 hover:text-white transition-colors text-sm">{t("Terms and Conditions")}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};