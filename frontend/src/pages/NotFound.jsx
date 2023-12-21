import { Link } from "react-router-dom";

import notFound from "../assets/notFound.svg";

function NotFound() {
  return (
    <div className="notFoundContainer">
      <div>
        <h2>Oulah, vous êtes perdu !</h2>
        <small>
          J&apos;espère que vous faites davantage <br /> attention avec vos
          enfants ...
        </small>
      </div>
      <img src={notFound} alt="Not Found" />
      <Link to="/">
        <button type="button">Retourner à la maison</button>
      </Link>
    </div>
  );
}

export default NotFound;
