import { useState } from "react";
import { useChildContext } from "../hooks/useChildContext";

function useCreateChild() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useChildContext();

  const createChild = async (newChild) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch("http://localhost:4000/api/children", {
      method: "POST",
      body: JSON.stringify(newChild),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      setIsLoading(false);
      setError(null);
      console.log("New child added", json);
      dispatch({ type: "CREATE_CHILDREN", payload: json });
    }
  };
  return { createChild, isLoading, error };
}

export default useCreateChild;
