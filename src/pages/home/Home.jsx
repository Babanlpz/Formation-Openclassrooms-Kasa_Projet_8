import React from "react";
import "./Home.scss"
import Banner from "../../layout/Banner.jsx"
import ApartmentsGrid from "../../components/ApartmentsGrid.jsx"



/**
 * Home rend la page d'accueil avec une bannière (<Banner>) suivie d'une grille d'appartements (<ApartmentsGrid>).
 * @returns 
 */
function Home() {
    return ( 
        <>
            <Banner />
            <ApartmentsGrid />
        </>
    );
}

export default Home;