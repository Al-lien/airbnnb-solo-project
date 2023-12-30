// context
import { useParentContext } from "../hooks/useParentContext";

// style
import "./styles/Topbar.scss";

// proptypes
import { PropTypes } from "prop-types";

// library
import { UserCircleIcon } from "@heroicons/react/24/solid";

function GeoBar({ location }) {
  GeoBar.propTypes = {
    location: PropTypes.number,
  };

  const { parent } = useParentContext();

  return (
    <div className="topbar">
      {location === 2 ? (
        <>
          <UserCircleIcon width={50} />
          <h3>
            {parent.firstname} {parent.lastname}
          </h3>
        </>
      ) : (
        <>
          <p>Colmar - 2 février - 9h</p>
          <p>{location}</p>
        </>
      )}
    </div>
  );
}

export default GeoBar;
