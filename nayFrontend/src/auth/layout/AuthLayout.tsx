import { Outlet } from "react-router-dom";
import { Image } from "@heroui/react";
import { PUBLIC_URL } from "../../config/env";

export const AuthLayout = () => {
    return (
        <div className="d-flex flex-column flex-column-fluid flex-lg-row bg-gradient-to-l h-100 from-rose-400 to-rose-300">
            <div className="h-[100%] shadow-red-600 w-full fixed">
                <Image
                    isBlurred
                    className=""
                    width={"100%"}
                    alt="Album Cover"
                    src={`${PUBLIC_URL}pngtree-stunning-3d-render-of-a-modern-supermarket-image_13561321.png`}
                />
            </div>
            <Outlet />
        </div>
    );
};
