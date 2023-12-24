import { Outlet } from "react-router-dom";

// styles
import "./styles/AccountCreationLayout.scss"


function AccountCreationLayout() {
    return (
        <div className="accountCreationContainer">
            <section className="accountCreationLayout">
                <Outlet />
            </section>
        </div>
    );
}

export default AccountCreationLayout;