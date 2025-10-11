import { addToast, Button, Input, Textarea } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";



export const Section2 = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        nombre: '',
        mensaje: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { nombre, mensaje } = formData;
        if (!nombre || !mensaje) {
            addToast({
                title: t("Error!"),
                description: t("LLene todo los campos"),
                color: "danger",
                timeout: 5000,
            });
            return
        }
        const whatsappMessage = `Nombre: ${nombre}\nMensaje: ${mensaje}`;
        const whatsappUrl = `https://wa.me/14027700227?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            {t("Horarios de Atención")}
                        </h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                <span className="text-gray-700 font-medium">{t("Lunes - Viernes")}</span>
                                <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                <span className="text-gray-700 font-medium">{t("Sábado")}</span>
                                <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <span className="text-gray-700 font-medium">{t("Domingo")}</span>
                                <span className="text-gray-600">{t("Cerrado")}</span>
                            </div>
                        </div>
                        <div className="mt-8 p-4 bg-pink-50 rounded-lg">
                            <p className="text-gray-700">
                                <strong>{t("Nota:")}</strong> {t("Para pedidos personalizados, contáctanos con anticipación.")}
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            {t("Envíanos un Mensaje")}
                        </h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <Input
                                name="nombre"
                                label={t("Nombre")}
                                placeholder={t("Tu nombre completo")}
                                variant="bordered"
                                className="w-full"
                                value={formData.nombre}
                                onChange={handleInputChange}
                            />
                            <Textarea
                                name="mensaje"
                                label={t("Mensaje")}
                                placeholder={t("Cuéntanos sobre tu proyecto...")}
                                variant="bordered"
                                className="w-full"
                                rows={4}
                                value={formData.mensaje}
                                onChange={handleInputChange}
                            />
                            <Button
                                type="submit"
                                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                            >
                                {t("Enviar Mensaje")}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}