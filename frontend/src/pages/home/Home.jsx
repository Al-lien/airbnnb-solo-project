import { useEffect, useState } from "react";
import NurseryCard from "../../components/NurseryCard";

function Home() {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:4000/api/parents");
            const json = await response.json();

            if (response.ok) {
                setData(json);
            }
        }
        fetchData();
    }, [])

    { data && console.log(data) }

    return (
        <>
            <h1>Welcome Home</h1>
            <NurseryCard />
        </>
    );
}

export default Home;