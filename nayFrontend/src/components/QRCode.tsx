import QRCode from 'react-qr-code';
import { useTranslation } from 'react-i18next';

interface QRCodeProps {
    url?: string;
    size?: number;
}

export const QRCodeComponent = ({ url = window.location.origin, size = 128 }: QRCodeProps) => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center space-y-2">
            <QRCode
                value={url}
                size={size}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                viewBox={`0 0 ${size} ${size}`}
            />
            <p className="text-xs text-gray-300 text-center">
                {t("Escanea para acceder a Nay's Dreams")}
            </p>
        </div>
    );
};