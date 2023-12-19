// components
import { Outlet } from "react-router-dom";

function IntroLayout() {


    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default IntroLayout;