import { Link } from "react-router-dom";
import logo_creation from "../../assets/logo_creation_mask.svg";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function CreateAccount() {
  return (
    <>
      <div className="createTitle">
        <ChevronLeftIcon width={35} />
        <h2>Creation de compte</h2>
      </div>
      <img src={logo_creation} alt="" />
      <button type="button">Ajouter une photo</button>
      <form action="">
        <input type="text" placeholder="Nom" required/>
        <input type="text" placeholder="Prénom" required/>
        <input type="email" placeholder="Email" required/>
        <input type="text" placeholder="Adresse, CP, Ville" required/>
        <input type="tel" placeholder="01 23 45 67 89" required/>
        <Link to="/accountcreation/addchild">
          <button type="button">Enregrister mes informations</button>
        </Link>
      </form>
    </>
  );
}

export default CreateAccount;
