import React from 'react'
import Navbar from './components/Navbar.jsx'
import "./App.css"
import Banner from './components/Banner.jsx'
import ApartmentsGrid from './components/ApartmentsGrid.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div>
      <Main>
        <Navbar />
        <Banner />
        <ApartmentsGrid />
      </Main>
      <Footer />
    </div>
  )
}

export default App