import React from "react";
import "./Homepage.scss"
import Banner from "../layout/Banner.jsx"
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