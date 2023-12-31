import { useState } from "react";

function useCreateParent() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const createParent = async (newParent) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch("http://localhost:4000/api/parents", {
      method: "POST",
      body: JSON.stringify(newParent),
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
      console.log("New parent added", json);
    }
  };
  return { createParent, isLoading, error };
}

export default useCreateParent;
