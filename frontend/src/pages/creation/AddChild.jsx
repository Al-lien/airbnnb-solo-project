// react-router-dom
import { Link } from "react-router-dom";

// react
import { useState } from "react";

// context
import { useParentContext } from "../../hooks/useParentContext";

// library
import { ChevronLeftIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

// assets
import logoAdd from "../../assets/logo_add_mask.svg";
import useCreateChild from "../../hooks/useCreateChild";

function AddChild() {
  const { parent } = useParentContext();
  const [lastname, setlastname] = useState("");
  const [firstname, setfirstname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [walking, setWalking] = useState(false);
  const [disabled, setDisable] = useState(false);
  const [allergy, setAllergy] = useState("");
  const { createChild, error, isLoading } = useCreateChild();


  function handleWalking() {
    setWalking(!walking);
  }
  function handleDisability() {
    setDisable(!disabled);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const parent_id = await parent._id;
    const newChild = {
      parent_id,
      firstname,
      lastname,
      birthday,
      walking,
      disabled,
      allergy,
    };
    console.log(newChild);
    await createChild(newChild);
    setlastname("");
    setfirstname("");
    setBirthday("");
    setWalking("");
    setDisable("");
  }

  return (
    <>
      <div className="createTitle">
        <Link to="/home">
          <ChevronLeftIcon width={35} />
        </Link>
        <h2>Ajouter un enfant</h2>
      </div>

      <img src={logoAdd} alt="" />
      <button type="button">Ajouter une photo</button>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          required
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Prénom"
          required
          value={firstname}
          onChange={(e) => setfirstname(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date de naissance"
          required
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />

        <div className="check">
          <input type="checkbox" id="walk" onChange={handleWalking} />
          <label htmlFor="walk">
            <CheckCircleIcon
              width={30}
              className={walking ? "svgIsClicked" : "svgIsNotClicked"}
            />
            Mon enfant sait marcher.
          </label>
        </div>

        <div className="check">
          <input
            type="checkbox"
            id="disabilities"
            onChange={handleDisability}
          />
          <label htmlFor="disabilities">
            <CheckCircleIcon
              width={30}
              className={disabled ? "svgIsClicked" : "svgIsNotClicked"}
            />
            Mon enfant à un handicap.
          </label>
        </div>

        <input
          type="text"
          placeholder="Allergie"
          value={allergy}
          onChange={(e) => setAllergy(e.target.value)}
        />
        {error && <p>{error}</p>}
        <button disabled={isLoading} type="submit">
          Enregistrer mon enfant
        </button>
      </form>
    </>
  );
}

export default AddChild;
