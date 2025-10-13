import { useState, useEffect } from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";
import { useTranslation } from "react-i18next";

export const AuthCombinedPage = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        if (location.pathname === '/auth/register') {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    }, [location.pathname]);

    const handleRegisterSuccess = () => {
        setIsLogin(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 relative overflow-hidden">
            {/* Elementos decorativos animados */}
            <div className="absolute inset-0">
                {/* Curvas animadas de fondo */}
                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMid slice">
                    {/* Curva superior izquierda */}
                    <motion.path
                        d="M0,200 Q200,100 400,200 Q600,300 800,200 Q1000,100 1200,200"
                        stroke="rgba(236, 72, 153, 0.1)"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    {/* Curva inferior derecha */}
                    <motion.path
                        d="M200,600 Q400,500 600,600 Q800,700 1000,600 Q1200,500 1400,600"
                        stroke="rgba(219, 39, 119, 0.08)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
                    />
                    {/* Curva central ondulada */}
                    <motion.path
                        d="M0,400 Q150,350 300,400 Q450,450 600,400 Q750,350 900,400 Q1050,450 1200,400"
                        stroke="rgba(244, 114, 182, 0.12)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
                    />
                </svg>

                {/* Círculos flotantes con gradientes rosados */}
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
                <motion.div
                    className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-pink-300/20 to-rose-400/20 rounded-full blur-md"
                    animate={{
                        x: [0, 10, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />

                {/* Partículas brillantes */}
                <motion.div
                    className="absolute top-1/4 right-1/4 w-2 h-2 bg-pink-400 rounded-full"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-rose-400 rounded-full"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                    className="absolute top-3/4 right-1/3 w-1 h-1 bg-pink-500 rounded-full"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                />
            </div>

            <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                        {/* Sección de imagen/branding - Izquierda en desktop */}
                        <motion.div
                            className="hidden lg:flex flex-col items-center justify-center space-y-8 order-2 lg:order-1"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative">
                                {/* Imagen principal con marker */}
                                <div className="relative w-80 h-80 mx-auto">
                                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-rose-500 to-pink-600 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                                    <div className="relative w-full h-full bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/50">
                                        <div className="text-center space-y-4">
                                            <motion.div
                                                className="w-24 h-24 mx-auto bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </motion.div>
                                            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                                                Nay's Dreams
                                            </h2>
                                            <p className="text-gray-600 text-sm max-w-xs mx-auto">
                                                {t("Donde la creatividad se encuentra con la personalización")}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Elementos decorativos alrededor */}
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
                                </div>
                            </div>

                            {/* Texto motivacional */}
                            <motion.div
                                className="text-center space-y-4 max-w-md"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {t("Únete a nuestra comunidad")}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {t("Descubre productos únicos y personalizados que reflejan tu estilo único. Crea tu cuenta y comienza tu viaje creativo con nosotros.")}
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Formularios - Derecha en desktop, arriba en móvil */}
                        <motion.div
                            className="order-1 lg:order-2"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="max-w-md mx-auto">
                                {/* Toggle buttons */}
                                <div className="flex rounded-lg bg-gray-100 p-1 mb-8 shadow-lg">
                                    <Button
                                        className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-300 ${isLogin
                                            ? 'bg-white shadow-md text-pink-600'
                                            : 'text-gray-600 hover:text-gray-800'
                                            }`}
                                        variant="light"
                                        onClick={() => setIsLogin(true)}
                                    >
                                        {t("Login")}
                                    </Button>
                                    <Button
                                        className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-300 ${!isLogin
                                            ? 'bg-white shadow-md text-pink-600'
                                            : 'text-gray-600 hover:text-gray-800'
                                            }`}
                                        variant="light"
                                        onClick={() => setIsLogin(false)}
                                    >
                                        {t("Sign Up")}
                                    </Button>
                                </div>

                                {/* Form container */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={isLogin ? 'login' : 'register'}
                                        initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                                            <CardBody className="p-8">
                                                <div className="text-center mb-8">
                                                    <motion.div
                                                        className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg"
                                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                                        transition={{ type: "spring", stiffness: 300 }}
                                                    >
                                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isLogin ? "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" : "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"} />
                                                        </svg>
                                                    </motion.div>
                                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                                                        {isLogin ? t("Welcome Back") : t("Create Account")}
                                                    </h2>
                                                    <p className="text-gray-600">
                                                        {isLogin ? t("Ingresa tus credenciales para continuar") : t("Regístrate para comenzar tu experiencia")}
                                                    </p>
                                                </div>

                                                {isLogin ? (
                                                    <LoginForm />
                                                ) : (
                                                    <RegisterForm onSuccess={handleRegisterSuccess} />
                                                )}

                                                <div className="mt-6 text-center">
                                                    <p className="text-sm text-gray-600">
                                                        {isLogin ? t("¿No tienes cuenta?") : t("¿Ya tienes cuenta?")}{" "}
                                                        <button
                                                            onClick={() => setIsLogin(!isLogin)}
                                                            className="text-pink-600 hover:text-pink-800 font-medium hover:underline transition-colors"
                                                        >
                                                            {isLogin ? t("Regístrate aquí") : t("Inicia sesión aquí")}
                                                        </button>
                                                    </p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};