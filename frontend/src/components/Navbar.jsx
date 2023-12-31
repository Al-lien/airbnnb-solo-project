// react
import { useState } from "react";

// proptypes
import { PropTypes } from "prop-types";

// react-router
import { useNavigate } from "react-router-dom";

// style
import "./styles/Navbar.scss";

// library
import { UserIcon, BellIcon } from "@heroicons/react/24/solid";
import {
  Squares2X2Icon,
  MagnifyingGlassIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

function Navbar({ setLocation }) {
  Navbar.propTypes = {
    setLocation: PropTypes.func,
  };

  const [select, setSelect] = useState(0);
  const [position, setPosition] = useState(0);

  const navigate = useNavigate();

  function handleActive(e, i) {
    setPosition(e);
    setSelect(i);
    setLocation(i);
    navigate("/home");
  }

  return (
    <div className="primary-navbar">
      <button onClick={() => handleActive(0, 0)}>
        <Squares2X2Icon
          className={
            select == 0 ? "icon outline outline-focus" : "icon outline"
          }
          width={30}
        />
        <div
          className="emptyBlock"
          style={{ transform: `translateX(${position}%)` }}
        ></div>
      </button>
      <button onClick={() => handleActive(150, 1)}>
        <MagnifyingGlassIcon
          className={
            select == 1 ? "icon outline outline-focus" : "icon outline"
          }
          width={30}
        />
      </button>
      <button onClick={() => handleActive(300, 2)}>
        <UserIcon
          className={select == 2 ? "icon solid solid-focus" : "icon solid"}
          width={30}
        />
      </button>
      <button onClick={() => handleActive(450, 3)}>
        <BellIcon
          className={select == 3 ? "icon solid solid-focus" : "icon solid"}
          width={30}
        />
      </button>
      <button onClick={() => handleActive(600, 4)}>
        <ChatBubbleOvalLeftEllipsisIcon
          className={
            select == 4 ? "icon outline outline-focus" : "icon outline"
          }
          width={30}
        />
      </button>
    </div>
  );
}

export default Navbar;
