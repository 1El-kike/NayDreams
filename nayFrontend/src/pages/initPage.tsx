
import { HeroSection } from "../components/home/HeroSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { SearchBar } from "../components/home/SearchBar";
import { InfoCards } from "../components/home/InfoCards";
import { MapSection } from "../components/home/MapSection";
import { FeaturedProducts } from "../components/home/FeaturedProducts";

export const Init = () => {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <SearchBar />
            <InfoCards />
            <MapSection />
            <FeaturedProducts />
            <ServicesSection />
        </div>
    )
}
