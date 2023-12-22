import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");

  const validEmailRegex = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$" // regex correspond syntax email
  );

  function handleEmail(e) {
    setEmail(e);
    setValidEmail(validEmailRegex.test(email));
  }

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
            onChange={(e) => handleEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="check">
            <input type="checkbox" id="rememberMe"/>
            <label htmlFor="rememberMe">Se souvenir de moi</label>
          </div>
          <button
            type="submit"
            disabled={password && validEmail}
            className={password && validEmail ? "submitButton" : "deadButton"}
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
