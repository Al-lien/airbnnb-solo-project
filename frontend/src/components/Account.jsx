// hooks
import { useLogout } from "../hooks/useLogout";
import { useState } from "react";

// components
import ChildrenSection from "./ChildrenSection";
import FavoriteSection from "./FavoriteSection";

// style
import "./styles/Account.scss"

// library
import {
  ArrowRightEndOnRectangleIcon,
  HeartIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

function Account() {
  const [sectionChildrenHidden, setSectionChildrenHidden] = useState(true);
  const [sectionFavoriteHidden, setSectionFavoriteHidden] = useState(true);
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  const handleFavoriteSection = () => {
    setSectionFavoriteHidden(!sectionFavoriteHidden);
  };
  const handleChildrenSection = () => {
    setSectionChildrenHidden(!sectionChildrenHidden);
  };

  return (
    <>
      <div className="userAccountContainer">
        <div className="options">
          <button onClick={handleFavoriteSection}>
            <HeartIcon width={30} />
            Vos Favoris
          </button>
          <button onClick={handleChildrenSection}>
            <UsersIcon width={30} />
            Mon/Mes enfants
          </button>
        </div>
        <div className="logout">
          <button onClick={handleLogout}>
            <ArrowRightEndOnRectangleIcon width={30} />
            Me déconnecter
          </button>
        </div>
        <ChildrenSection
          sectionChildrenHidden={sectionChildrenHidden}
          setSectionChildrenHidden={setSectionChildrenHidden}
        />
        <FavoriteSection
          sectionFavoriteHidden={sectionFavoriteHidden}
          setSectionFavoriteHidden={setSectionFavoriteHidden}
        />
      </div>
    </>
  );
}

export default Account;
