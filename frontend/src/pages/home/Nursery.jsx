// react
import { useEffect, useState } from "react";

// react-router
import { useNavigate, useParams } from "react-router-dom";

function Nursery() {
  let { nurseryId } = useParams();
  const [nurseryData, setNurseryData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNursery = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://localhost:4000/api/nurseries/${nurseryId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const json = await response.json();
        setNurseryData(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNursery();
  }, [nurseryId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!nurseryData) {
    return null; // or some fallback content if you prefer
  }

  return (
    <>
      <h1>Welcome to {nurseryData.name}</h1>
      <div className="calendar">Calendar</div>
      <div className="date">Date</div>
      <button
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Cancel
      </button>
    </>
  );
}

export default Nursery;
