import { Outlet } from "react-router-dom";
import { NavBar } from "./navBar";
import { Footer } from "./Footer";

export const Layout = () => {


    return (
        <>
            <div className="flex w-full font-sans overflow-x-clip">
                {/* fondo de color calido */}
                <div
                    className="fixed inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                    aria-hidden="true"
                >
                    <div className="relative clip-fondo left-1/2 -z-10 aspect-[1155/778]  w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ee48dd] to-[#e7087b] opacity-10 sm:left-[calc(90%-40rem)] sm:w-[102.1875rem]"></div>
                </div>
                {/*   <Menu />  */}
                <div className="w-full min-h-screen relative flex flex-col">
                    <NavBar />
                    <main className="flex-1">
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
};
