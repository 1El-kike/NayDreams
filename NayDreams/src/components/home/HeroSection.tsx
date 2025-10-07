import { Button, Image } from "@heroui/react";
import { useTranslation } from "react-i18next";
import NaysDreamsIcon from "../../assets/naysDream.svg";
import MarcoFrame from "../../assets/marco.png";
import fondo from "../../assets/fondo.jpg";

export const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <section
            className="relative bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 pb-20 px-4 overflow-hidden min-h-screen flex items-center"
            data-aos="fade-in"
        >
            <img alt="Nay's Dreams fondo" className="absolute top-0 left-0 w-full h-full object-cover opacity-80 -z-10  mask-radial-[100%100%] mask-radial-from-75% mask-radial-at-left" src={fondo} />

            <div className="max-w-7xl mx-auto text-center">
                <div className="relative z-10">
                    <div className="flex flex-col items-center mb-8">
                        <h1
                            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            {t("Welcome to")}
                        </h1>

                        {/* Logo with frame */}
                        <div
                            className="relative before:absolute before:size-full before:inset-0 before:bg-white before:scale-75 before:content-[''] flex items-center justify-center"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <Image
                                isBlurred
                                className="h-48 md:h-80 w-auto relative z-10"
                                width={"100%"}
                                alt="Frame"
                                src={MarcoFrame}
                            />

                            <img
                                src={NaysDreamsIcon}
                                alt="Nay's Dreams"
                                className="absolute h-24 md:h-40 w-auto z-20"
                                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                            />
                        </div>

                    </div>

                    <p
                        className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        {t("Discover unique personalized products: custom mugs, pullovers and more. Express your style with our premium quality designs.")}
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <Button
                            size="lg"
                            className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            {t("Explore Products")}
                        </Button>
                        <Button
                            size="lg"
                            variant="bordered"
                            className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
                        >
                            {t("Learn More")}
                        </Button>
                    </div>
                </div>


                {/* Decorative elements */}
                <div
                    className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-pulse"
                    data-aos="fade-in"
                    data-aos-delay="800"
                ></div>
                <div
                    className="absolute top-20 right-20 w-16 h-16 bg-white/30 rounded-full animate-bounce"
                    data-aos="fade-in"
                    data-aos-delay="1000"
                ></div>
                <div
                    className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/25 rounded-full animate-pulse"
                    data-aos="fade-in"
                    data-aos-delay="1200"
                ></div>
                <div
                    className="absolute bottom-20 right-1/3 w-24 h-24 bg-white/20 rounded-full animate-bounce"
                    data-aos="fade-in"
                    data-aos-delay="1400"
                ></div>
            </div>

            {/* Background pattern with marker gradient */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700"></div>
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>
        </section >
    );
};