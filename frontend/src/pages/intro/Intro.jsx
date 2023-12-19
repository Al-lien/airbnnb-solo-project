import { Link } from "react-router-dom";

function Intro() {
    return (
        <>
            <h1>Welcome to intro</h1>
            <Link to="/login">Login -{">"}</Link>
        </>
    );
}

export default Intro;