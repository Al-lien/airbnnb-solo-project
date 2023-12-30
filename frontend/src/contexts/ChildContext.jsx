// react
import { createContext, useReducer } from "react";

// proptypes
import PropTypes from "prop-types";

// helpers function
import { childrenReducer } from "../helpers";

export const ChildContext = createContext();

export const ChildContextProvider = ({ children }) => {
  // 'children' can be any type of React node (not just an object).
  ChildContextProvider.propTypes = {
    children: PropTypes.node,
  };

  const [state, dispatch] = useReducer(childrenReducer, {
    children: null,
  });

  return (
    <ChildContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ChildContext.Provider>
  );
};
