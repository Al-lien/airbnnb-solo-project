// react
import { createContext, useEffect, useState } from "react";

// proptypes
import PropTypes from "prop-types";

// context
import { useAuthContext } from "../hooks/useAuthContext";
export const ParentContext = createContext();

// helpers function
import { fetchParent, fetchUser } from "../helpers";

export const ParentContextProvider = ({ children }) => {
  // 'children' can be any type of React node (not just an object).
  ParentContextProvider.propTypes = {
    children: PropTypes.node,
  };

  const { user } = useAuthContext();
  const [parent, setParent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const currentUser = await fetchUser(user);
        const parents = await fetchParent();
        const currentParent = await parents.find(
          (parent) => parent.user_id === currentUser
        );
        setParent(currentParent);
      }
    };

    fetchData();
  }, [user]);

  return (
    <ParentContext.Provider value={{ parent: parent }}>
      {children}
    </ParentContext.Provider>
  );
};
