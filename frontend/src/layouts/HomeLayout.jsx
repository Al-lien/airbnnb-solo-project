import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import GeoBar from "../components/GeoBar";

function HomeLayout() {
    return (
        <>
            <div className="homeLayout">
                <GeoBar />
                <main className="homepage">
                    <Outlet />
                </main>
                <Navbar />
            </div>
        </>
    );
}

export default HomeLayout;