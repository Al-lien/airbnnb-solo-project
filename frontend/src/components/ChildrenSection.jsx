// proptypes
import { PropTypes } from "prop-types";

// style
import "./styles/ChildrenSection.scss";

// library
import { ChevronLeftIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import AddChildren from "./AddChildren";
import { useState } from "react";

function ChildrenSection({ sectionChildrenHidden, setSectionChildrenHidden }) {
  ChildrenSection.propTypes = {
    sectionChildrenHidden: PropTypes.bool,
    setSectionChildrenHidden: PropTypes.func,
  };

  const [addChildSectionHidden, setAddChildSectionHidden] = useState(true);

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
      <button onClick={handleSection}>
        <ChevronLeftIcon width={35} />
      </button>
      <button onClick={handleAddChild}>
        <UserPlusIcon width={30} />
        Ajouter un enfant
      </button>
      <AddChildren
        setAddChildSectionHidden={setAddChildSectionHidden}
        addChildSectionHidden={addChildSectionHidden}
      />
    </div>
  );
}

export default ChildrenSection;
