import type { FC } from "react";
import { useTranslation } from "react-i18next";

interface TypeTitle {
    title: string;
    subTitle: string;
}

export const HeroSection: FC<TypeTitle> = ({ title, subTitle }) => {
    const { t } = useTranslation();

    return (
        <section className="relative py-12 md:py-20 px-4 overflow-hidden bg-gradient-to-br from-pink-600 via-pink-500 to-pink-400 text-white min-h-[60vh] md:min-h-[40vh]">
            {/* Elementos decorativos animados */}
            <div className="absolute inset-0">
                {/* Curvas elegantes en lugar de rayas */}
                <div className="absolute top-0 left-0 w-full h-full hidden md:block">
                    {/* Curva superior izquierda */}
                    <svg className="absolute top-10 left-10 w-32 h-16 " viewBox="0 0 128 64" fill="none">
                        <path
                            d="M0,32 Q32,0 64,32 Q96,64 128,32"
                            stroke="rgba(255,255,255,0.15)"
                            strokeWidth="2"
                            fill="none"
                            className="animate-pulse"
                        />
                    </svg>

                    {/* Curva superior derecha */}
                    <svg className="absolute top-20 right-20 w-24 h-12" viewBox="0 0 96 48" fill="none">
                        <path
                            d="M0,24 Q24,0 48,24 Q72,48 96,24"
                            stroke="rgba(255,255,255,0.12)"
                            strokeWidth="1.5"
                            fill="none"
                            className="animate-pulse delay-300"
                        />
                    </svg>

                    {/* Curva inferior izquierda */}
                    <svg className="absolute bottom-20 left-1/4 w-40 h-20" viewBox="0 0 160 80" fill="none">
                        <path
                            d="M0,40 Q40,0 80,40 Q120,80 160,40"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="2"
                            fill="none"
                            className="animate-pulse delay-500"
                        />
                    </svg>

                    {/* Curva inferior derecha */}
                    <svg className="absolute bottom-10 right-1/3 w-28 h-14" viewBox="0 0 112 56" fill="none">
                        <path
                            d="M0,28 Q28,0 56,28 Q84,56 112,28"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="1.5"
                            fill="none"
                            className="animate-pulse delay-700"
                        />
                    </svg>
                </div>

                {/* Círculos flotantes - responsive */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-white/5 rounded-full animate-bounce delay-100"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 md:w-48 md:h-48 bg-white/8 rounded-full animate-bounce delay-500"></div>
                <div className="absolute top-1/2 right-4 md:right-10 w-16 h-16 md:w-32 md:h-32 bg-white/6 rounded-full animate-bounce delay-300"></div>

                {/* Curvas SVG animadas - responsive */}
                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 600" fill="none" preserveAspectRatio="xMidYMid slice">
                    <path
                        d="M0,300 Q250,200 500,300 T1000,300"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="1.5"
                        fill="none"
                        className="animate-pulse"
                    />
                    <path
                        d="M0,400 Q300,300 600,400 T1000,400"
                        stroke="rgba(255,255,255,0.06)"
                        strokeWidth="1"
                        fill="none"
                        className="animate-pulse delay-300"
                    />
                    <path
                        d="M0,200 Q200,250 400,200 T800,200"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="1.5"
                        fill="none"
                        className="animate-pulse delay-500"
                    />
                </svg>

                {/* Partículas brillantes - responsive */}
                <div className="absolute top-1/3 left-1/3 w-1 h-1 md:w-2 md:h-2 bg-white rounded-full animate-ping opacity-60"></div>
                <div className="absolute top-2/3 right-1/3 w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full animate-ping delay-300 opacity-50"></div>
                <div className="absolute bottom-1/3 left-2/3 w-0.5 h-0.5 md:w-1 md:h-1 bg-white rounded-full animate-ping delay-500 opacity-70"></div>
                <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-white rounded-full animate-ping delay-700 opacity-40"></div>
            </div>

            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>

            {/* Contenido principal */}
            <div className="relative max-w-7xl mx-auto text-center z-10" data-aos="fade-up">
                <div className="relative">
                    {/* Título con efecto de brillo */}
                    <h1 className="text-4xl font-serif md:text-6xl font-bold mb-4 relative">
                        <span className="relative z-10 bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent animate-pulse">
                            {t(title)}
                        </span>
                        {/* Efecto de brillo detrás del texto */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse delay-300 blur-sm"></div>
                    </h1>

                    {/* Subtítulo */}
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed">
                        {t(subTitle)}
                    </p>
                </div>

                {/* Elemento decorativo inferior */}
                <div className="mt-8 flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full animate-pulse"></div>
                </div>
            </div>

            {/* Bordes brillantes animados */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse delay-300"></div>
        </section>
    )
}