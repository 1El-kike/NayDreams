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
            { name: t("Home"), link: "init" },
            { name: t("Products"), link: 'products' },
            { name: t("Management"), link: 'products/management' },
            { name: t("About"), link: 'info' },
            { name: t("Contact"), link: "contact" },
            { name: t("Wrappers"), link: 'envoltura' },
            { name: t("Log Out"), link: "" },
        ]
        : [
            { name: t("Home"), link: "init" },
            { name: t("Products"), link: 'products' },
            { name: t("About"), link: 'info' },
            { name: t("Contact"), link: "contact" },
            { name: t("Wrappers"), link: 'envoltura' },
            { name: t("Log Out"), link: "" },
        ];
    console.log(currentUser)

    return (
        <Navbar className="bg-gradient-to-r from-pink-500 to-pink-400 text-white">
            <NavbarContent className="sm:hidden " justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>
            <NavbarBrand className="md:mx-5">
                <AcmeLogo />
                <p className="font-bold text-inherit">Nay' Dreams</p>
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
            <NavbarContent justify="end">
                <NavbarItem>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="light" className="text-white ">
                                <span className={` mt-1 fi ${i18n.language === 'es' ? 'fi-es' : 'fi-us'}`}></span> {t("Language")}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Language selection">
                            <DropdownItem className="flex items-center justify-center" key="es" onPress={() => i18n.changeLanguage('es')}>
                                <span className="fi fi-es"></span> Español
                            </DropdownItem>
                            <DropdownItem key="en" className="flex items-center justify-center" onPress={() => i18n.changeLanguage('en')}>
                                <span className="fi fi-us"></span> English
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
            </NavbarContent>
            {currentUser ?
                <NavbarContent as="div" justify="end">
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
                                <p className="font-semibold">{currentUser?.email}</p>

                            </DropdownItem>
                            <DropdownItem onPress={logout} key="logout" color="danger">
                                {t("Log Out")}
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
                :
                <NavbarContent justify="end">
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
                className="bg-gradient-to-br from-pink-500 via-rose-400 to-pink-300 shadow-lg"
                motionProps={{
                    initial: { opacity: 0, y: -20 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -20 },
                    transition: { duration: 0.3 }
                }}
            >
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full flex items-center px-6 py-4 text-gray-900 hover:bg-white/30 transition-all duration-250 border-b border-white/20 hover:border-white/40 hover:translate-x-2 font-medium"
                            to={item.link}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
