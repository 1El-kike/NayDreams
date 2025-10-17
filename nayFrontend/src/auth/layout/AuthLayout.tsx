import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
    return (
        <div className="d-flex flex-column flex-column-fluid flex-lg-row">

            <Outlet />
        </div>
    );
};
