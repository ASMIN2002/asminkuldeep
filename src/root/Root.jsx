import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import useReveal from "../hooks/useReveal";
import "../rootStyle/Root.css";
export default function Root() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    useReveal(pathname);
    return (
        <div className="root">
            <Navbar />
            <main className="root-main">
                <Outlet />
            </main>
            <Footer />
            <ScrollTop />
        </div>
    );
}