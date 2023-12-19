import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import GeoBar from "../components/GeoBar";

function HomeLayout() {
    return (
        <>
            <GeoBar />
            <main className="homepage">
            <Outlet />
            </main>
            <Navbar />
        </>
    );
}

export default HomeLayout;