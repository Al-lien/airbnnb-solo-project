import { useState } from "react";
import { Link } from "react-router-dom";
import { checkEmailFormat } from "../../helpers";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <main className="connect">
        <header>
          <button>pro</button>
        </header>
        <h3>Je me connecte</h3>
        <form action="">
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="check">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Se souvenir de moi</label>
          </div>
          <button
            type="submit"
            disabled={password && checkEmailFormat(email)}
            className={
              password && checkEmailFormat(email)
                ? "submitButton"
                : "deadButton"
            }
          >
            Se connecter
          </button>
        </form>
        <Link to="/signup">
          Pas de compte ? <span>S&apos;inscrire</span>
        </Link>
      </main>
    </>
  );
}

export default Login;
