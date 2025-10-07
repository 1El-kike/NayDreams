import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

interface AdminProtectedRouteProps {
    children: React.ReactNode;
}

export const AdminProtectedRoute: React.FC<AdminProtectedRouteProps> = ({ children }) => {
    const { currentUser } = useAuth();
    console.log(currentUser)

    if (!currentUser || currentUser?.role !== "ADMIN") {
        return <Navigate to="/error/403" replace />;
    }

    return <>{children}</>;
};