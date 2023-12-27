import logo_creation from "../../assets/logo_creation_mask.svg";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import useCreateParent from "../../hooks/useCreateParent";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const { createParent, error, isLoading } = useCreateParent();
  const { user } = useAuthContext();

  const navigate = useNavigate();

  const fetchUser = async () => {
    const response = await fetch("http://localhost:4000/api/user/");
    const json = await response.json();
    const currentUser = await json.find(
      (currentUser) => currentUser.email === user.email
    );
    return currentUser._id;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const user_id = await fetchUser();
    const newParent = { user_id, lastname, firstname, email, address, phone };
    console.log(newParent);
    await createParent(newParent);
    setLastname("");
    setFirstname("");
    setEmail("");
    setAddress("");
    setPhone("");
    navigate("/addchild");
  }

  return (
    <>
      <div className="createTitle">
        <ChevronLeftIcon width={35} />
        <h2>Creation de compte</h2>
      </div>
      <img src={logo_creation} alt="" />
      <button type="button">Ajouter une photo</button>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          required
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Prénom"
          required
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="email"
          placeholder={user ? user.email : "Email"}
          required
          value={user ? user.email : email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Adresse, CP, Ville"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="01 23 45 67 89"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button disabled={isLoading} type="submit">
          Enregrister mes informations
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </>
  );
}

export default CreateAccount;
