// react
import { useEffect, useState } from "react";

// react-router-dom
import { useOutletContext } from "react-router-dom";

// components
import NurseryCard from "../../components/NurseryCard";
import Account from "../../components/Account";

function Home() {
  const [nurseries, setNurseries] = useState(null);
  const [location] = useOutletContext();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/api/nurseries");
      const json = await response.json();

      if (response.ok) {
        setNurseries(json);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {location === 0 &&
        nurseries &&
        nurseries.map((nursery) => (
          <NurseryCard key={nursery._id} nursery={nursery} />
        ))}

      {location === 2 && <Account />}
    </>
  );
}

export default Home;
