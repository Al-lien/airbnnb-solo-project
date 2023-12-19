import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <h3>Je me connecte</h3>
            <form action="">
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Mot de passe" />
                <div><input type="checkbox" />Se souvenir de moi</div>
                <button>Se connecter</button>
            </form>
            <Link to="/signup">Signup -{">"}</Link>
        </>
    );
}

export default Login;