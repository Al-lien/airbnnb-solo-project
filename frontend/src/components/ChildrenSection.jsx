// proptypes
import { PropTypes } from "prop-types";

// context
import { useEffect, useState } from "react";
import { useChildContext } from "../hooks/useChildContext";
import { useParentContext } from "../hooks/useParentContext";
// component
import ChildCard from "./ChildCard";

// style
import "./styles/ChildrenSection.scss";

// library
import { ChevronLeftIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import AddChildren from "./AddChildren";

function ChildrenSection({ sectionChildrenHidden, setSectionChildrenHidden }) {
  ChildrenSection.propTypes = {
    sectionChildrenHidden: PropTypes.bool,
    setSectionChildrenHidden: PropTypes.func,
  };

  const { children, dispatch } = useChildContext();
  const { parent } = useParentContext();
  const [addChildSectionHidden, setAddChildSectionHidden] = useState(true);

  useEffect(() => {
    const fetchChild = async () => {
      const response = await fetch("http://localhost:4000/api/children");
      const json = await response.json();
      const userChild = await json.filter(
        (child) => child.parent_id === parent._id
      );

      if (response.ok) {
        dispatch({ type: "SET_CHILDREN", payload: userChild });
      }
    };
    fetchChild();
  }, [dispatch, parent._id]);

  const handleSection = () => {
    setSectionChildrenHidden(!sectionChildrenHidden);
  };

  const handleAddChild = () => {
    setAddChildSectionHidden(!addChildSectionHidden);
  };
  return (
    <div
      className={
        sectionChildrenHidden
          ? "childrenSectionContainer"
          : "childrenSectionContainer childrenSectionNotHidden"
      }
    >
      <div className="childList">
        <div className="buttonContainer">
          <button onClick={handleSection}>
            <ChevronLeftIcon width={35} />
          </button>
          <button onClick={handleAddChild}>
            <UserPlusIcon width={40} />
          </button>
        </div>

        {children &&
          children.map((child) => <ChildCard key={child._id} child={child} />)}
      </div>
      <AddChildren
        setAddChildSectionHidden={setAddChildSectionHidden}
        addChildSectionHidden={addChildSectionHidden}
      />
    </div>
  );
}

export default ChildrenSection;
