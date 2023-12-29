// react
import { createContext, useEffect, useReducer } from "react";

// proptypes
import PropTypes from "prop-types";

// helpers function
import { authReducer } from "../helpers";

// context
export const AuthContext = createContext();

// contextProvider
export const AuthContextProvider = ({ children }) => {
  // 'children' can be any type of React node (not just an object).
  AuthContextProvider.propTypes = {
    children: PropTypes.node,
  };

  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
      
    }
  }, []);

  console.log("AuthContext state: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
