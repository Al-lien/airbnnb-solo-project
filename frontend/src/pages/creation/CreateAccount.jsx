import logo_creation from "../../assets/logo_creation_mask.svg";

function CreateAccount() {
    return (
        <>
            <h2>Creation de compte</h2>
            <img src={logo_creation} alt="" />
            <form action="">
                <input type="text" placeholder="Nom" />
                <input type="text" placeholder="Prénom" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Adresse, CP, Ville" />
                <input type="tel" placeholder="01 23 45 67 89" />
                <button type="button">Ajouter mes informations</button>
            </form>
        </>
    );
}

export default CreateAccount;