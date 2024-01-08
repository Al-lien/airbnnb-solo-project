// react
import { useEffect, useState } from "react";

// react-router
import { Link, useOutletContext } from "react-router-dom";

// components
import NurseryCard from "../../components/NurseryCard";
import Account from "../../components/Account";

function Home() {
  const [nurseries, setNurseries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { location } = useOutletContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/nurseries");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const json = await response.json();
        setNurseries(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      {location === 0 &&
        nurseries &&
        nurseries.map((nursery) => (
          <Link key={nursery._id} to={`nursery/${nursery._id}`}>
            <NurseryCard nursery={nursery} />
          </Link>
        ))}

      {location === 2 && <Account />}
    </>
  );
}

export default Home;
