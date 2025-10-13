import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem } from "@heroui/react";
import { useState } from "react";
import { useAuth } from "../auth/useAuth";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const AcmeLogo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export const NavBar = () => {

    const [isMenuOpen] = useState(false);
    const { currentUser, logout } = useAuth();
    const { t, i18n } = useTranslation();

    const menuItems = currentUser?.role === "ADMIN" ?
        [
            { name: t("Home"), link: "/init" },
            { name: t("Products"), link: '/products' },
            { name: t("Management"), link: '/products/management' },
            { name: t("About"), link: '/info' },
            { name: t("Contact"), link: "/contact" },
            { name: t("Wrappers"), link: '/envoltura' },
            { name: t("Log Out"), link: "" },
        ]
        : [
            { name: t("Home"), link: "/init" },
            { name: t("Products"), link: '/products' },
            { name: t("About"), link: '/info' },
            { name: t("Contact"), link: "/contact" },
            { name: t("Wrappers"), link: '/envoltura' },
            { name: t("Log Out"), link: "" },
        ];


    return (
        <Navbar className="bg-gradient-to-r from-pink-500 to-pink-400 text-white">
            <NavbarContent className="sm:hidden " justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>
            <NavbarBrand className="md:mx-5">
                <AcmeLogo />
                <p className="font-bold text-inherit">Nay'Dreams</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-10 text-white" justify="center">
                <NavbarItem >
                    <Link aria-current="page" className="text-white" to="/">
                        {t("Home")}
                    </Link>
                </NavbarItem>
                {
                    currentUser?.role === "ADMIN" &&
                    <NavbarItem>
                        <Link className="text-white" to="/products/management">
                            {t("Management")}
                        </Link>
                    </NavbarItem>
                }
                <NavbarItem>
                    <Link className="text-white" to="/products">
                        {t("Products")}
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" to="/info">
                        {t("About")}
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" to="/contact">
                        {t("Contact")}
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" to="/envoltura">
                        {t("Wrappers")}
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" className="hidden sm:flex">
                <NavbarItem>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="light" className="text-white ">
                                <span>{i18n.language === 'es' ? 'ES' : 'EN'}</span> {t("Language")}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Language selection">
                            <DropdownItem className="flex items-center justify-center" key="es" onPress={() => i18n.changeLanguage('es')}>
                                ES Español
                            </DropdownItem>
                            <DropdownItem key="en" className="flex items-center justify-center" onPress={() => i18n.changeLanguage('en')}>
                                EN English
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
            </NavbarContent>
            {currentUser ?
                <NavbarContent as="div" justify="end" className="hidden sm:flex">
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="secondary"
                                name="Jason Hughes"
                                size="sm"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-semibold">{t("Signed in as")}</p>
                                <p className="font-semibold">{String(currentUser?.email)}</p>

                            </DropdownItem>
                            <DropdownItem onPress={logout} key="logout" color="danger">
                                {t("Log Out")}
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
                :
                <NavbarContent justify="end" className="hidden sm:flex">
                    <NavbarItem className="hidden lg:flex text-white">
                        <Link to="/auth/login">{t("Login")}</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="danger" to="/auth/register" variant="shadow">
                            {t("Sign Up")}
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            }

            <NavbarMenu
                className="bg-gradient-to-br from-pink-500/80 via-pink-400/60 to-pink-300 shadow-2xl backdrop-blur-md"
                motionProps={{
                    initial: { opacity: 0, x: -50 },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: -50 },
                    transition: { duration: 0.4, ease: "easeOut" }
                }}
            >
                <div className="px-6 py-4 border-b border-white/20">
                    <div className="flex items-center space-x-3">
                        <Avatar
                            isBordered
                            color="secondary"
                            name={String(currentUser?.name) || "User"}
                            size="sm"
                            src={currentUser ? "https://i.pravatar.cc/150?u=a042581f4e29026704d" : undefined}
                        />
                        <div>
                            <p className="font-semibold text-white">{currentUser ? currentUser.name : t("Welcome")}</p>
                            <p className="text-sm text-pink-100">{currentUser ? String(currentUser.email) : t("Guest")}</p>
                        </div>
                    </div>
                </div>

                <div className="px-6 py-4 space-y-2">
                    <p className="text-white font-medium text-sm uppercase tracking-wider mb-4">{t("Navigation")}</p>
                    {menuItems.filter(item => item.name !== t("Log Out")).map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full flex items-center px-4 py-3 text-white hover:bg-white/20 hover:text-pink-900 transition-all duration-300 rounded-lg border border-transparent hover:border-white/30 hover:shadow-md font-medium group"
                                to={item.link}
                            >
                                <span className="mr-3 text-lg group-hover:scale-110 transition-transform duration-200">
                                    {item.name === t("Home") && "🏠"}
                                    {item.name === t("Products") && "🛍️"}
                                    {item.name === t("Management") && "⚙️"}
                                    {item.name === t("About") && "ℹ️"}
                                    {item.name === t("Contact") && "📞"}
                                    {item.name === t("Wrappers") && "🎁"}
                                </span>
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>

                <div className="px-6 py-4 border-t border-white/20">
                    <p className="text-white font-medium text-sm uppercase tracking-wider mb-4">{t("Language")}</p>
                    <div className="space-y-2">
                        <Button
                            variant="light"
                            className="w-full justify-start text-white hover:bg-white/20"
                            onPress={() => i18n.changeLanguage('es')}
                            startContent={<span className="fi fi-es"></span>}
                        >
                            Español
                        </Button>
                        <Button
                            variant="light"
                            className="w-full justify-start text-white hover:bg-white/20"
                            onPress={() => i18n.changeLanguage('en')}
                            startContent={<span className="fi fi-us"></span>}
                        >
                            English
                        </Button>
                    </div>
                </div>

                {currentUser ? (
                    <div className="px-6 py-4 border-t border-white/20">
                        <Button
                            color="danger"
                            variant="shadow"
                            className="w-full"
                            onPress={logout}
                            startContent="🚪"
                        >
                            {t("Log Out")}
                        </Button>
                    </div>
                ) : (
                    <div className="px-6 py-4 border-t border-white/20 space-y-3">
                        <Button
                            as={Link}
                            to="/auth/login"
                            variant="bordered"
                            className="w-full border-white text-white hover:bg-white hover:text-pink-600"
                        >
                            {t("Login")}
                        </Button>
                        <Button
                            as={Link}
                            to="/auth/register"
                            color="secondary"
                            variant="shadow"
                            className="w-full"
                        >
                            {t("Sign Up")}
                        </Button>
                    </div>
                )}
            </NavbarMenu>
        </Navbar>
    );
}
