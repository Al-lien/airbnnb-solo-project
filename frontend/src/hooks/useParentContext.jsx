// context
import { ParentContext } from "../contexts/ParentContext";
import { useContext } from "react";

export const useParentContext = () => {
  const context = useContext(ParentContext);

  if (!context) {
    throw Error("useParentContext must be used inside a ParentContextProvider");
  }

  return context;
};
