import { Link, useLocation } from "react-router-dom";

const menuItems = [
    { path: "/products/management/create", label: "Crear Producto" },
    { path: "/products/management/category", label: "Crear Categoría" },
    { path: "/products/management/see", label: "Ver Productos" },
];

export const ManagerSidebar = () => {
    const location = useLocation();

    return (
        <div className="hidden md:block w-64 bg-pink-50 min-h-screen p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-pink-700 mb-8">Gestión</h2>
            <nav className="space-y-4">
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-4 py-2 rounded-lg transition-colors ${location.pathname.includes(item.path)
                            ? "bg-pink-200 text-pink-800"
                            : "text-pink-600 hover:bg-pink-100"
                            }`}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
};