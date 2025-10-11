import { Input, Button } from "@heroui/react";
import { SearchIcon } from "@heroui/shared-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchTerm.trim()) {
            navigate(`/products/watch?q=${encodeURIComponent(searchTerm.trim())}`);
        }
    };

    return (
        <section className="py-12 px-4 bg-white" data-aos="fade-up">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8" data-aos="fade-up" data-aos-delay="200">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        {t("Find Your Perfect Product")}
                    </h2>
                    <p className="text-gray-600 text-lg">
                        {t("Search through our collection of personalized mugs, pullovers and more")}
                    </p>
                </div>

                <div
                    className="flex flex-col md:flex-row gap-4 items-center justify-center"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <div className="relative flex-1 max-w-md">
                        <Input
                            type="text"
                            placeholder={t("Search products...")}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                            className="w-full shadow-lg"
                            startContent={<SearchIcon className="text-gray-400" />}
                        />
                    </div>
                    <Button
                        onPress={handleSearch}
                        className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                        size="lg"
                    >
                        {t("Search")}
                    </Button>
                </div>

                {/* Popular searches */}
                <div className="mt-8 text-center" data-aos="fade-up" data-aos-delay="600">
                    <p className="text-gray-500 mb-3">{t("Popular searches:")}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {["Cup", "Pullovers", "Personalized", "Photo Rock"].map((term, index) => (
                            <Button
                                key={term}
                                variant="light"
                                size="sm"
                                className="text-pink-600 hover:bg-pink-50 rounded-full transition-all duration-300 transform hover:scale-105"
                                onPress={() => setSearchTerm(term)}
                                data-aos="zoom-in"
                                data-aos-delay={800 + index * 100}
                            >
                                {t(term)}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};