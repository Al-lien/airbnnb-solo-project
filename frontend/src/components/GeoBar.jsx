// context
import { useParentContext } from "../hooks/useParentContext";

// proptypes
import { PropTypes } from "prop-types";

function GeoBar({ location }) {
  GeoBar.propTypes = {
    location: PropTypes.number,
  };

  const { parent } = useParentContext();

  return (
    <div className="geoBar">
      {location === 2 ? (
        <h3>
          {parent.firstname} {parent.lastname}
        </h3>
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
