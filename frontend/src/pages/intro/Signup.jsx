import { Link } from "react-router-dom";

function Signup() {
    return (
        <>
            <h3>Je m&apos;inscris</h3>
            <form action="">
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Mot de passe" />
                <input type="password" placeholder="Confirmer le mot de passe" />
                <div><input type="checkbox" />Jaccepte les conditions</div>
                <button>S&apos;inscrire</button>
            </form>
            <Link to="/login">Login</Link>
        </>
    );
}

export default Signup;