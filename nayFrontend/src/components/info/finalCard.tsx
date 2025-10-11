import { Button } from "@heroui/react"
import { useNavigate } from "react-router-dom"


export const FinalCard = () => {
    const navigate = useNavigate()

    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div
                    className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-3xl p-12 text-center shadow-2xl transform hover:scale-105 transition-transform duration-500"
                    data-aos="zoom-in"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        ¿Listo para crear algo increíble?
                    </h2>
                    <p className="text-xl mb-8 leading-relaxed">
                        Contáctanos hoy mismo y cuéntanos sobre tu proyecto. Estamos aquí para ayudarte a hacerlo realidad.
                    </p>
                    <Button
                        size="lg"
                        onPress={() => navigate('/contact')}
                        className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Contáctanos
                    </Button>
                </div>
            </div>
        </section>
    )
}

