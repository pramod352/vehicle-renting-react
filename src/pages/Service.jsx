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
                            <p><span className="service-icons-head">Test Vehicle And Rent  </span><br></br>
                            Lorem ipsum is placeholder text commonly used in the graphic, graphic, lorem text is placeholder.</p>
                        </div>
                        <div className="flex flex-1">
                        <img src="assets/images/service_3.png" alt="" />
                            <p><span className="service-icons-head">Satisfied Customer</span><br></br>
                            Lorem ipsum is placeholder text commonly used in the graphic, graphic, lorem text is placeholder.</p>
                        </div>
                    </div>
                    <div className="flex-row service-icons">
                        <div className="flex flex-1">
                            <img src="assets/images/service_2.png" alt="" />
                            <p><span className="service-icons-head">Discount For Regular Customer</span><br></br>
                            Lorem ipsum is placeholder text commonly used in the graphic, graphic, lorem text is placeholder.</p>
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
                            Lorem ipsum is placeholder text commonly used in the graphic, graphic, lorem text is placeholder.</p>
                        </div>
                        <div className="flex flex-1 testimon">
                        <img src="/images/team2.png" alt="" />
                            <p><span className="service-icons-head">Fast Services</span><br></br>
                            Lorem ipsum is placeholder text commonly used in the graphic, graphic, lorem text is placeholder.</p>
                        </div>
                </div>
            </div>
            <div className="call">
                <h1>WE ARE READY TO SERVE AT ANY TIME  !</h1>
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
