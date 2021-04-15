import React from 'react'
import Navbar from '../components/Navbar';
import EventSection from '../components/EventSection';
import Footer from '../components/Footer'
import "./CSS-files/Homepage.css"



function Homepage() {
  return (
    <>
    <div className="body">
      <Navbar/>
      <EventSection/>
      <Footer/>
    </div>
      
    </>
  )
}

export default Homepage
