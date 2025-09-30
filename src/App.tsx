import { useEffect, useState } from "react";
import Characters from "./components/Characters";

export default function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const rawData = await fetch("https://potterapi-fedeperin.vercel.app/en/characters?max=20");
            const actualData = await rawData.json();
            setData(actualData);
        }

        fetchData()
            .then(() => console.log("Everything is good"))
            .catch((e) => console.log("This error: " + e + "occurred"));
    }, [data.length]);

    return (
        <>
            <Characters data={data} />
        </>
    );
}
