// proptypes
import { PropTypes } from "prop-types";

// style
import "./styles/ChildCard.scss";

function ChildCard({ child }) {
  const { firstname, lastname, birthday, walking, disabled, allergy } = child;
  ChildCard.propTypes = {
    child: PropTypes.object,
  };

  return (
    <article className="childCard">
      <p style={{ color: "red" }}>
        {firstname} {lastname}
      </p>
      <p>est né le {birthday}</p>
      <p>{walking ? "sait marcher" : "ne sait pas marcher"}</p>
      <p>{disabled && "est porteur d'un handicap"}</p>
      <p>{allergy && `est allergique : ${allergy}`}</p>
    </article>
  );
}

export default ChildCard;
