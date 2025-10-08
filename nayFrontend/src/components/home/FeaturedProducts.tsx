import { Card, CardBody, Button } from "@heroui/react";
import { useTranslation } from "react-i18next";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

export const FeaturedProducts = () => {
    const { t } = useTranslation();

    // Mock data - replace with real data from API
    const featuredProducts: Product[] = [
        {
            id: 1,
            name: "Personalized Coffee Mug",
            price: 15.99,
            image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400",
            category: "Mugs"
        },
        {
            id: 2,
            name: "Custom Hoodie",
            price: 45.99,
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
            category: "Pullovers"
        },
        {
            id: 3,
            name: "Monogram T-Shirt",
            price: 25.99,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
            category: "T-Shirts"
        },
        {
            id: 4,
            name: "Custom Water Bottle",
            price: 12.99,
            image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
            category: "Accessories"
        }
    ];

    return (
        <section className="py-16 px-4 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100" data-aos="fade-up">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        {t("Featured Products")}
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        {t("Discover our most popular personalized items, loved by customers worldwide")}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProducts.map((product, index) => (
                        <Card
                            key={product.id}
                            className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden"
                            data-aos="zoom-in"
                            data-aos-delay={400 + index * 100}
                        >
                            <CardBody className="p-0">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-2 right-2 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                                        {t(product.category)}
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                                        {t(product.name)}
                                    </h3>
                                    <p className="text-pink-600 font-bold text-lg mb-3">
                                        ${product.price}
                                    </p>
                                    <Button
                                        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full transition-colors duration-300 transform hover:scale-105"
                                        size="sm"
                                    >
                                        {t("View Details")}
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="800">
                    <Button
                        size="lg"
                        className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        {t("View All Products")}
                    </Button>
                </div>
            </div>
        </section>
    );
};