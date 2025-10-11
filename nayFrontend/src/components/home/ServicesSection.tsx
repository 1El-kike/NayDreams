import { Card, CardBody } from "@heroui/react";
import { TruckIcon, ClockIcon, ShieldCheckIcon, CubeIcon, UserIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

export const ServicesSection = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: TruckIcon,
            title: t("Shipping Service"),
            description: t("Delivery throughout Lincoln")
        },
        {
            icon: ClockIcon,
            title: t("Fast Delivery Service"),
            description: t("2-3 business days")
        },
        {
            icon: ShieldCheckIcon,
            title: t("Secure Service"),
            description: t("Tracking included")
        },
        {
            icon: CubeIcon,
            title: t("Packaging Service"),
            description: t("Special care")
        },
        {
            icon: UserIcon,
            title: t("Attention Service"),
            description: t("Personalized Service")
        }
    ];

    return (
        <section className="py-16 px-4 bg-gray-50 ">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t("Our Services")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" key={index} className="shadow-lg bg-gradient-to-r from-pink-100 to-transparent hover:shadow-xl transition-shadow duration-300">
                            <CardBody className="text-center p-6">
                                <div className="flex justify-center mb-4">
                                    <service.icon className="h-12 w-12 text-pink-500" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};