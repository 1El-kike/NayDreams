import { useTranslation } from "react-i18next";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";


export const FullMap = ({ position }: { position: [number, number] }) => {
    const { t } = useTranslation();

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div data-aos="zoom-in">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                        {t("Encuéntranos")}
                    </h2>
                    <div className="h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <MapContainer center={position} zoom={14} style={{ height: '100%', width: '100%' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={position}>
                                <Popup>
                                    Nay Dreams<br />
                                    2830 Jameson North #27<br />
                                    Lincoln, NE 68516
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </section>
    )
}