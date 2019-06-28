import React from "react";
import Card from "../components/Card";

import "../css/home.css";

const Home = () => {
    return (
            <div className="card-container" id="card-list" data-test='component-home'>
                <Card />
            </div>
    );
};

export default Home;