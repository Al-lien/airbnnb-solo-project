import logo_creation from "../../assets/logo_creation_mask.svg";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function CreateAccount() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const newParent = { lastname, firstname, email, address, phone };
    console.log(newParent);
    const response = await fetch("http://localhost:4000/api/parents", {
      method: "POST",
      body: JSON.stringify(newParent),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setLastname("");
      setFirstname("");
      setEmail("");
      setAddress("");
      setPhone("");
      setError(null);
      console.log("New parent added", json);
    }
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
          placeholder="Email"
          required
          value={email}
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
        <button type="submit">Enregrister mes informations</button>
        {error && <div className="error">{error}</div>}
      </form>
    </>
  );
}

export default CreateAccount;
