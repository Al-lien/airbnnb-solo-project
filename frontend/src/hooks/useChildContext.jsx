// context
import { ChildContext } from "../contexts/ChildContext";
import { useContext } from "react";

export const useChildContext = () => {
  const context = useContext(ChildContext);

  if (!context) {
    throw Error("useChildContext must be used inside a ChildContextProvider");
  }

  return context;
};
