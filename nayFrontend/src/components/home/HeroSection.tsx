import { Button } from "@heroui/react";
import { useTranslation } from "react-i18next";
import NayDreamsIcon from "../../assets/naysDream.svg";
import fondo from "../../assets/fondo.jpg";
import flor from "../../assets/media/flor.png";
import flor2 from "../../assets/media/flor2.png";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()

    return (
        <div>
            <section
                className="relative bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 pb-0 px-4 overflow- min-h-screen flex items-center"
                data-aos="fade-in"
            >

                <img alt="Dreams fondo" className="absolute top-0 left-0 w-full h-full object-cover opacity-80 -z-10  mask-radial-[100%100%] mask-radial-from-75% mask-radial-at-left" src={fondo} />

                <div className="max-w-7xl md:mb-0 mx-auto text-center">
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
                                className="flex items-center justify-center"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <img
                                    src={NayDreamsIcon}
                                    alt="Dreams"
                                    className="h-52 w-auto z-20"
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
                        className="absolute top-16 left-6 w-20 h-20 animate-pulse"
                        data-aos="fade-in"
                        data-aos-delay="800"
                    >
                        <img src={flor} className="w-20 h-20 opacity-50" alt="" />
                    </div>
                    <div
                        className="absolute top-20 right-10  animate-bounce"
                        data-aos="fade-in"
                        data-aos-delay="1000"
                    >
                        <img src={flor2} className="w-24 h-20 opacity-50" alt="" />
                    </div>
                    <div
                        className="absolute bottom-10 left-1/4 w-12 h-12 rounded-full animate-pulse"
                        data-aos="fade-in"
                        data-aos-delay="1200"
                    >

                    </div>
                    <div
                        className="absolute h-20 bottom-20 top-[62%] left-[3%]  animate-spinner-ease-spin"
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
            </section>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffffff" opacity="0.25"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#ffffff" opacity="0.5"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#ffffff"></path>
                </svg>
            </div>
        </div>
    );
};