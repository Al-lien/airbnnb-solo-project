// proptypes
import { PropTypes } from "prop-types";

// react
import { useState } from "react";

// hooks
import useCreateChild from "../hooks/useCreateChild";

// context
import { useParentContext } from "../hooks/useParentContext";

// style
import "./styles/AddChildren.scss";

// library
import { ChevronLeftIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

// assets
import logoAdd from "../assets/logo_add_mask.svg";

function AddChildren({ addChildSectionHidden, setAddChildSectionHidden }) {
  AddChildren.propTypes = {
    addChildSectionHidden: PropTypes.bool,
    setAddChildSectionHidden: PropTypes.func,
  };

  const { parent } = useParentContext();
  const [lastname, setlastname] = useState("");
  const [firstname, setfirstname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [walking, setWalking] = useState(false);
  const [disabled, setDisable] = useState(false);
  const [allergy, setAllergy] = useState("");
  const { createChild, error, isLoading } = useCreateChild();

  const handleWalking = () => {
    setWalking(!walking);
  };
  const handleDisability = () => {
    setDisable(!disabled);
  };

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
    setAddChildSectionHidden(true);
  }

  const handleSection = () => {
    setAddChildSectionHidden(!addChildSectionHidden);
  };

  return (
    <div
      className={
        addChildSectionHidden
          ? "addChildrenContainer"
          : "addChildrenContainer addChildrenContainerNotHidden"
      }
    >
      <div className="header">
        <button className="createTitle" onClick={handleSection}>
          <ChevronLeftIcon width={35} />
        </button>

        <img src={logoAdd} alt="" />
      </div>

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
    </div>
  );
}

export default AddChildren;
