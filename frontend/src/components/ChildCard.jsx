// proptypes
import { PropTypes } from "prop-types";

// style
import "./styles/ChildCard.scss";

function ChildCard({ child }) {
  ChildCard.propTypes = {
    child: PropTypes.object,
  };

  return (
    <article className="childCard">
      <p style={{ color: "red" }}>
        {child.firstname} {child.lastname}
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        tenetur?
      </p>
    </article>
  );
}

export default ChildCard;
