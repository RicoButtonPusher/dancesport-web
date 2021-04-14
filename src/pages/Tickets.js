import React from 'react'
import SeatChart from './tickets-components/SeatChart';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import './tickets-components/Tickets.css'

function Tickets() {
  return (
    <>
    <Navbar/>
    <div className="tickets-body">
      <h1>Select Your Tickets</h1>
      <div className="tickets-container">
        <div className="seat-layout">
          <div className="seats-container">

          <div className="seats-container-left-side">
            <div className="seats-top-left">
              Top Left Seats

            </div>
            <div className="seats-bottom-left">
              Bottom Left Seats

            </div>
          </div>

          <div className="seats-container-middle">
            <div className="seats-middle-left-side">
              <div className="seats-middle-left-side-sections">
                <div className="seats-middle-left-side-top">
                  Upper Left Middle Section
                  <SeatChart/>
                  <SeatChart/>

                </div>
                <div className="seats-middle-left-side-bottom">
                  Lower Left Middle Section 
                  <SeatChart/>
                  <SeatChart/>
                  <SeatChart/>

                </div>
              </div>
            </div>
            <div className="seats-middle-center">
              <div className="seats-middle-center-top">
                Top Row
                <SeatChart/>
                <SeatChart/>
                <SeatChart/>

              </div>
              <img src="https://www.pciglobal.org/wp-content/uploads/2018/04/vertical-rectangle.jpg" alt="" className="floor"/>
              <div className="seats-middle-center-bottom">
                Bottom Row
                <SeatChart/>
                <SeatChart/>
                <SeatChart/>

              </div>
            </div>
            <div className="seats-middle-right-side">
              <div className="seats-middle-right-side-sections">
                <div className="seats-middle-right-side-top">
                  Upper Right Middle Section 
                  <SeatChart/>
                  <SeatChart/>
                  <SeatChart/>

                </div>
                <div className="seats-middle-right-side-bottom">
                  Bottom Right Middle Section 
                  <SeatChart/>
                  <SeatChart/>
                  <SeatChart/>

                </div>
              </div>
            </div>
          </div>
          <div className="seats-container-right-side">
            <div className="seats-top-right">
              Top Right Seats
              <SeatChart/>
              <SeatChart/>
              <SeatChart/>

            </div>
            <div className="seats-bottom-right">
              Bottom Right Seats
              <SeatChart/>
              <SeatChart/>
              <SeatChart/>

            </div>
          </div>
        </div>
            <div className="seats-container-bottom-row">
            <div className="seats-container-bottom-left">
              Bottom Left
              <SeatChart/> 
              <SeatChart/> 
              <SeatChart/> 

            </div>
            <div className="seats-container-bottom-right">
              Bottom Right 
              <SeatChart/>
              <SeatChart/>
              <SeatChart/>
          </div>
        </div>
        </div>
        
        <div className="tickets-cart-container">
          <div className="tickets-title">
            <h3>Tickets Reserved </h3>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
      </>
  )
}

export default Tickets


