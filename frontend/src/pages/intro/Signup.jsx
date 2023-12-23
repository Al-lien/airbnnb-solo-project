import { useState } from "react";
import { Link } from "react-router-dom";
import { checkEmailFormat, checkPasswordMatch } from "../../helpers";

function Signup() {
  const [email, setEmail] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = { email, firstPassword };
    setEmail("");
    setFirstPassword("");
    setSecondPassword("");
    console.log(newUser);
  }

  return (
    <>
      <main className="connect">
        <h3>Je m&apos;inscris</h3>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <p
            className={
              firstPassword == secondPassword ? "matchingPassword" : undefined
            }
          >
            Les mots de passe ne correspondent pas
          </p>

          <div className="passwordValidation">
            <ul>
              <small
                className={firstPassword.length >= 8 ? "regexValid" : undefined}
              >
                Veuillez écrire au minimun 8 caractères.
              </small>
              <small
                className={
                  /[A-Z]/.test(firstPassword) ? "regexValid" : undefined
                }
              >
                Veuillez écrire au minimun une majuscule.
              </small>

              <small
                className={
                  /[0-9]/.test(firstPassword) ? "regexValid" : undefined
                }
              >
                Veuillez écrire au minimun un chiffre.
              </small>
            </ul>
          </div>
          <div>
            <input type="checkbox" id="okToConditions" />
            J&apos;accepte les conditions
          </div>

          <button
            type="submit"
            className={
              checkEmailFormat(email) &&
              checkPasswordMatch(firstPassword, secondPassword)
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
