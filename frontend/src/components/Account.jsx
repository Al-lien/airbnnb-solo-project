import { Link } from "react-router-dom";

// hooks
import { useLogout } from "../hooks/useLogout";

// library
import {
  ArrowRightEndOnRectangleIcon,
  HeartIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

function Account() {
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <div className="userAccountContainer">
        <div className="options">
          <button>
            <HeartIcon width={30} />
            Vos Favoris
          </button>
          <button>
            <Link to="/accountcreation/addchild">
              <UsersIcon width={30} />
              Mon/Mes enfants
            </Link>
          </button>
        </div>
        <div className="logout">
          <button onClick={handleLogout}>
            <ArrowRightEndOnRectangleIcon width={30} />
            Me déconnecter
          </button>
        </div>
      </div>
    </>
  );
}

export default Account;
