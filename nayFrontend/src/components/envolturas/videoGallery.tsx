import { useTranslation } from "react-i18next";
import type { TypeVideo } from "../../pages/envolturaPage";


export const VideoGallery = ({ videos }: { videos: TypeVideo[] }) => {

    const { t } = useTranslation();

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        {t("Galería de Videos")}
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        {t("Explora nuestros videos para ver cómo transformamos tus ideas en productos perfectamente empaquetados")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {videos.map((video, index) => (
                        <div
                            key={video.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                        >
                            <div className="aspect-video">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${video.embedId}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {video.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {video.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
