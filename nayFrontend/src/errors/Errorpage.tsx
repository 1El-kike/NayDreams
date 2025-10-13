import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@heroui/react';
import { useTranslation } from 'react-i18next';

export const ErrorsPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleBack = () => {
        navigate(-2);
    };

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 relative overflow-hidden flex items-center justify-center p-4">
            {/* Elementos decorativos animados */}
            <div className="absolute inset-0">
                {/* Curvas animadas de fondo */}
                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMid slice">
                    <motion.path
                        d="M0,200 Q200,100 400,200 Q600,300 800,200 Q1000,100 1200,200"
                        stroke="rgba(236, 72, 153, 0.1)"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M200,600 Q400,500 600,600 Q800,700 1000,600 Q1200,500 1400,600"
                        stroke="rgba(219, 39, 119, 0.08)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
                    />
                </svg>

                {/* Círculos flotantes */}
                <motion.div
                    className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-rose-300/30 rounded-full blur-xl"
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-br from-rose-200/25 to-pink-300/25 rounded-full blur-lg"
                    animate={{
                        y: [0, 15, 0],
                        scale: [1, 0.9, 1],
                    }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </div>

            <motion.div
                className="relative z-10 text-center max-w-md mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Número 404 animado */}
                <motion.div
                    className="text-9xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-8"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
                >
                    404
                </motion.div>

                {/* Icono animado */}
                <motion.div
                    className="mb-8"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 150 }}
                >
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-2xl">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-.98-5.5-2.5M12 2l3 3-3 3-3-3 3-3z" />
                        </svg>
                    </div>
                </motion.div>

                {/* Título */}
                <motion.h1
                    className="text-3xl font-bold text-gray-800 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    {t("Página no encontrada")}
                </motion.h1>

                {/* Descripción */}
                <motion.p
                    className="text-gray-600 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    {t("Lo sentimos, la página que buscas no existe o ha sido movida. No te preocupes, te ayudamos a volver al camino correcto.")}
                </motion.p>

                {/* Botones */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <Button
                        onClick={handleGoHome}
                        className="bg-gradient-to-r from-pink-500 to-rose-600 text-white font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                        {t("Ir al inicio")}
                    </Button>
                    <Button
                        onClick={handleBack}
                        variant="bordered"
                        className="border-pink-500 text-pink-600 font-medium px-8 py-3 rounded-lg hover:bg-pink-50 transition-all duration-300 hover:scale-105"
                    >
                        {t("Volver atrás")}
                    </Button>
                </motion.div>

                {/* Elementos decorativos adicionales */}
                <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                    <span className="text-white text-xs">✨</span>
                </motion.div>
                <motion.div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                    <span className="text-white text-xs">💫</span>
                </motion.div>
            </motion.div>
        </div>
    );
};