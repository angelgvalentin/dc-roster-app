import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";

function App() {
    // const [getRoster, setRoster] = useEffect([]);

    // const getRoster = () => {
    //     axios.get("");
    // };

    return (
        <>
            <div>Hello World</div>
            <Cards />
        </>
    );
}

export default App;
