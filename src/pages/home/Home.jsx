import React from "react";
import "./Home.scss"
import Banner from "../../layout/Banner.jsx"
import ApartmentsGrid from "../../components/ApartmentsGrid.jsx"

function Home() {
    return ( 
        <>
            <Banner />
            <ApartmentsGrid />
        </>
    );
}

export default Home;