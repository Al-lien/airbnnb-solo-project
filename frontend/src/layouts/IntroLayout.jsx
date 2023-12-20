// components
import { Outlet } from "react-router-dom";

import "./styles/IntroLayout.css"
import Intro from "../pages/intro/Intro";
import useScreenSize from "../hooks/useScreenSize";

function IntroLayout() {
    const screenSize = useScreenSize()

    return (
        <>
            <div className="container">

                {screenSize.width > 705 &&
                    <section className="introLayout">
                        <Intro screenSize={screenSize} />
                    </section>}

                <section className="introLayout">
                    <Outlet />
                </section>
            </div>
        </>
    );
}

export default IntroLayout;