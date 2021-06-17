import React from 'react'
import './home.css'
import Hero from '../components/Hero'
import {SliderData} from '../data/SliderData'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>

              <Hero slides={SliderData}/>
        {/* <section id="home">
       <h1 className="h-primary">Welcome to our renting system</h1>
       <p>Vehicle Rental Management System helps in automating all the services like booking, 
           finding the car, collecting the car, returning, accounting, and vehicle management.</p>
           <Button to = "/contact" primary='true'>Book Now</Button>
   </section> */}

   <section id="work" className="work">
    <div className="contai">
        <h1 className="section-heading"><span>Our</span>Vehicle</h1>
        <p> The vehicle rental system provides a car catalogue for the customers to select a car they want. </p>
        <div className="card-wrapper">
            <div className="card">
            <div className="overlay">
                    <span>CAR</span>
                    <Link to="/"> Rent </Link>
                    {/* <a href='./User_booking/User_booking.jsx'>RENT</a> */}
                </div>
                <img src="../images/1.jpg" alt="" />
            </div>
            <div className="card">
                <div className="overlay">
                    <span>BIKE</span>
                    <Link to="/"> Rent </Link>
                </div>
                <img src="../images/2.jpg" alt="" />
            </div>
            <div className="card">
            <div className="overlay">
                    <span>BIKE</span>
                    <Link to="/"> Rent </Link>
                </div>
                <img src="../images/4.jpg" alt="" />
            </div>
            <div className="card">
            <div className="overlay">
                    <span>CAR</span>
                    <Link to="/"> Rent </Link>
                </div>
                <img src="../images/vehicle3.jpg" alt="" />
            </div>
            <div className="card">
              <div className="overlay">
                    <span>CAR</span>
                    <Link to="/"> Rent </Link>
                </div>
                <img src="../images/3.jpg" alt="" />
            </div>
            <div className="card">
            <div className="overlay">
                    <span>BOLERO</span>
                    <Link to="/"> Rent </Link>
                </div>
                <img src="../images/vehicle1.jpg" alt="" />
            </div>
        </div>
    </div>
</section>
       </div>
    )
}

export default Home
