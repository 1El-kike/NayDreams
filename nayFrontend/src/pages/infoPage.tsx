
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import fondo from "../assets/info/fotoRoca.jpg";
import fondo2 from "../assets/info/jarra.jpg";
import fondo3 from "../assets/info/pullover.jpg";
import { Section1 } from "../components/info/section1";
import { Section2 } from "../components/info/section2";
import { Section3 } from "../components/info/section3";
import { FinalCard } from "../components/info/finalCard";
import { HeroSection } from "../widget/heroSection";

export const InfoPage = () => {


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
            {/* Hero Section */}
            <HeroSection
                title="Sobre Nay's Dreams"
                subTitle="Descubre cómo hacemos realidad tus sueños personalizados" />
            {/* Section 1: Text Left, Image Right */}
            <Section1 fondo={fondo} />
            {/* Section 2: Image Left, Text Right */}
            <Section2 fondo={fondo2} />
            {/* Section 3: Text Left, Image Right */}
            <Section3 fondo={fondo3} />
            {/* Final Card */}
            <FinalCard />
        </div>
    );
};
