import { useEffect, useState } from "react";
import NurseryCard from "../../components/NurseryCard";

function Home() {
  const [nurseries, setNurseries] = useState(null);

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
      {nurseries &&
        nurseries.map((nursery) => (
          <NurseryCard key={nursery._id} nursery={nursery} />
        ))}
    </>
  );
}

export default Home;
