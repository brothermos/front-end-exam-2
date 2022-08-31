import React, { useContext } from "react";
import { DataContext } from "../App";

const Menu = () => {
    const { setAppState } = useContext(DataContext);
    return (
        <div className="menu">
            <h1> DoseTech Quizz</h1>
            <button onClick={() => setAppState("quiz")}>Start</button>
        </div>
    );
};

export default Menu;
