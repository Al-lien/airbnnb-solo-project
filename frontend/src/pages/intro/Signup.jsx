import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(false);

  const validEmailRegex = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  function handleEmail(e) {
    setEmail(e);
    setValidEmail(validEmailRegex.test(email));
  }

  function handlePasswords(firstPassword, secondPassword) {
    if (
      (firstPassword !== "" || secondPassword !== "") &&
      firstPassword === secondPassword
    ) {
      return true;
    }
  }

  return (
    <>
      <main className="connect">
        <h3>Je m&apos;inscris</h3>
        <form action="">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => handleEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={firstPassword}
            onChange={(e) => setFirstPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            value={secondPassword}
            onChange={(e) => setSecondPassword(e.target.value)}
          />
          <p className={firstPassword == secondPassword && "matchingPassword"}>
            Les mots de passe ne correspondent pas
          </p>

          <div className="passwordValidation">
            <ul>
              <small className={firstPassword.length >= 8 && "regexValid"}>
                Veuillez écrire au minimun 8 caractères.
              </small>
              <small className={/[A-Z]/.test(firstPassword) && "regexValid"}>
                Veuillez écrire au minimun une majuscule.
              </small>

              <small className={/[0-9]/.test(firstPassword) && "regexValid"}>
                Veuillez écrire au minimun un chiffre.
              </small>
            </ul>
          </div>
          <div>
            <input type="checkbox" />
            J&apos;accepte les conditions
          </div>

          <button
            type="submit"
            className={
              validEmail && handlePasswords(firstPassword, secondPassword)
                ? "submitButton"
                : "deadButton"
            }
          >
            S&apos;inscrire
          </button>
        </form>
        <Link to="/login">
          Vous avez déjà un compte ? <span>Se connecter</span>
        </Link>
      </main>
    </>
  );
}

export default Signup;
