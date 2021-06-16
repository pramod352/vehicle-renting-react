import React from 'react'
import './service.css'

const Service = () => {
    return (
        <div className="service">
            <div className="service-container">
                <div className="service-contents">
                    <h1>WE Are Here<br></br>
                    TO PROVIDE RENTING SERVICES</h1>
                    <div className="flex-row service-icons">
                        <div className="flex flex-1">
                            <img src="assets/images/service_1.png" alt="" />
                            <p><span className="service-icons-head">Free Trail </span><br></br>
                              Customer can trail the vehicle first and the rent based on their experience. </p>
                        </div>
                        <div className="flex flex-1">
                        <img src="assets/images/service_3.png" alt="" />
                            <p><span className="service-icons-head">Satisfied Customer</span><br></br>
                            Our main aim is to satisfy the customer by providing services at a relevant prices and quality.</p>
                        </div>
                    </div>
                    <div className="flex-row service-icons">
                        <div className="flex flex-1">
                            <img src="assets/images/service_2.png" alt="" />
                            <p><span className="service-icons-head">Discount For Regular Customer</span><br></br>
                            We also have made the provision of discount to the regular customer based on their renting packages and privious services.</p>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="testimonial">
                <div className="testimonial-contents">
                    <h1>TESTIMONIAL</h1>
                </div>
                <div className="flex-row service-icons">
                        <div className="flex flex-1 testimon">
                            <img src="/images/team1.png" alt="" />
                            <p><span className="service-icons-head">Bonuses For Renting</span><br></br>
                            The service of bonuses is very much exciting as I am also hooked into this system by 
                            knowing this.</p>
                        </div>
                        <div className="flex flex-1 testimon">
                        <img src="/images/team2.png" alt="" />
                            <p><span className="service-icons-head">Fast Services</span><br></br>
                            The system provides the fast services which is very crutial part of this website.</p>
                        </div>
                </div>
            </div>
            <div className="call">
                <h1>WE ARE READY TO SERVE AT ANY TIME !!!</h1>
                <div className="flex-row calls">
                    <img src="assets/images/phone-2.jpg" alt="" />
                    <img src="assets/images/icon_2.png" alt="" />
                    <img src="assets/images/msg.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Service
