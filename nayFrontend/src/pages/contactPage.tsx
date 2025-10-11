import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { HeroSection } from "../components/contacts/heroSection";
import { Section1 } from "../components/contacts/section1";
import { Section2 } from "../components/contacts/section2";
import { FullMap } from "../components/contacts/fullMap";

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});


export const ContactPage = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const position: [number, number] = [40.7439, -96.6458];

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
            {/* Hero Section */}
            <HeroSection />
            {/* Section 1: Contact Info Left, Map Right */}
            <Section1 />
            {/* Section 2: Hours Right, Form Left */}
            <Section2 />
            {/* Full Map Section */}
            <FullMap position={position} />
        </div>
    );
};
