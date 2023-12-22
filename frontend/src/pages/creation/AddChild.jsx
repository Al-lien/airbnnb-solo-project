import { Link } from "react-router-dom";
import logoAdd from "../../assets/logo_add_mask.svg";
import { ChevronLeftIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function AddChild() {
  const [isWalking, setIsWalking] = useState(false);
  const [isDisabled, setIsDisable] = useState(false);

  function handleWalking() {
    setIsWalking(!isWalking);
  }
  function handleDisability() {
    setIsDisable(!isDisabled);
  }

  return (
    <>
      <div className="createTitle">
        <ChevronLeftIcon width={35} />
        <h2>Ajouter un enfant</h2>
      </div>

      <img src={logoAdd} alt="" />
      <button type="button">Ajouter une photo</button>

      <form action="">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Prénom" />
        <input type="date" placeholder="Date de naissance" />

        <div className="check">
          <input type="checkbox" id="walk" onClick={handleWalking} />
          <label htmlFor="walk">
            <CheckCircleIcon
              width={30}
              className={isWalking ? "svgIsClicked" : "svgIsNotClicked"}
            />
            Mon enfant sait marcher.
          </label>
        </div>

        <div className="check">
          <input type="checkbox" id="disabilities" onClick={handleDisability} />
          <label htmlFor="disabilities">
            <CheckCircleIcon
              width={30}
              className={isDisabled ? "svgIsClicked" : "svgIsNotClicked"}
            />
            Mon enfant à un handicap.
          </label>
        </div>

        <input type="text" placeholder="Allergie" />
        <Link to="/accountcreation">
          <button type="button">Enregistrer mon enfant</button>
        </Link>
      </form>
    </>
  );
}

export default AddChild;
