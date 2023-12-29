import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import { checkEmailFormat } from "../../helpers";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    setEmail("");
    setPassword("");
  };
  const test = "test";
  return (
    <>
      <main className="connect">
        <header>
          <button>pro</button>
        </header>
        <h3>Je me connecte</h3>
        <form action="" onSubmit={handleSubmit}>
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
            disabled={isLoading}
            className={
              password && checkEmailFormat(email)
                ? "submitButton"
                : "deadButton"
            }
          >
            Se connecter
          </button>
          {error && <div className="error">{error}</div>}
        </form>
        <Link to="/signup" test={test}>
          Pas de compte ? <span>S&apos;inscrire</span>
        </Link>
      </main>
    </>
  );
}

export default Login;
