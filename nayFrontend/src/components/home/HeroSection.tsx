import { Button, Image } from "@heroui/react";
import { useTranslation } from "react-i18next";
import NayDreamsIcon from "../../assets/naysDream.svg";
import MarcoFrame from "../../assets/marco.png";
import fondo from "../../assets/fondo.jpg";
import flor from "../../assets/Nueva carpeta/flor.jpg";
import flor2 from "../../assets/Nueva carpeta/flor2.png";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()

    return (
        <section
            className="relative bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 pb-20 px-4 overflow- min-h-screen flex items-center"
            data-aos="fade-in"
        >

            <img alt="Dreams fondo" className="absolute top-0 left-0 w-full h-full object-cover opacity-80 -z-10  mask-radial-[100%100%] mask-radial-from-75% mask-radial-at-left" src={fondo} />

            <div className="max-w-7xl md:mb-52 mx-auto text-center">
                <div className="relative z-10">
                    <div className="flex flex-col items-center mb-8">
                        <h1
                            className="playwrite-de-sas text-5xl md:text-7xl font-bold text-white mt-2 mb-8 leading-tight drop-shadow-lg"
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
                                src={NayDreamsIcon}
                                alt="Dreams"
                                className="absolute h-24 md:h-40 w-auto z-20"
                                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                            />
                        </div>

                    </div>

                    <p
                        className="playwrite-de-sas text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md"
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
                            onPress={() => navigate('/products')}
                            className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            {t("Explore Products")}
                        </Button>
                        <Button
                            size="lg"
                            variant="bordered"
                            onPress={() => navigate('/info')}
                            className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
                        >
                            {t("Learn More")}
                        </Button>
                    </div>
                </div>


                {/* Decorative elements */}
                <div
                    className="absolute top-16 left-6 w-20 h-20 bg-white/20 animate-pulse"
                    data-aos="fade-in"
                    data-aos-delay="800"
                >
                    <img src={flor} className="w-20 h-20 opacity-50" alt="" />
                </div>
                <div
                    className="absolute top-20 right-10  bg-white/30  animate-bounce"
                    data-aos="fade-in"
                    data-aos-delay="1000"
                >
                    <img src={flor2} className="w-24 h-20 opacity-50" alt="" />
                </div>
                <div
                    className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/25 rounded-full animate-pulse"
                    data-aos="fade-in"
                    data-aos-delay="1200"
                >

                </div>
                <div
                    className="absolute h-20 bottom-20 top-[62%] left-[3%]  bg-white animate-spinner-ease-spin"
                    data-aos="fade-in"
                    data-aos-delay="1400"
                >
                    <img src={flor2} className="w-24 h-20 opacity-50" alt="" />
                </div>
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