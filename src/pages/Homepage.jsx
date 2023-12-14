import React from "react";
import "./Homepage.css"
import Banner from "../components/Banner.jsx"
import ApartmentsGrid from "../components/ApartmentsGrid.jsx"

function Homepage() {
    return (
        <>
            <Banner />
            <ApartmentsGrid />
        </>
    );
}

export default Homepage;