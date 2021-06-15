import React,{Component} from 'react'
import './about.css'

class About extends Component{

  render(){
    return (
        <div>
         <div className="bottom-header-sub">
                 <div className="contd"></div>
                     <div className="sub-page">
                         <h1>About Us </h1>
                           </div>
                 
         </div>
         <div className="main">
             <div className="con">
                      <div className="content-sub">
                         <img src="./images/renting.jpg" alt="" />
                         <h3><span>About</span>  Company</h3>
                         <p>The vehicle rental management system helps in changing the manual process of bookings to a computerized system. 
                             The vehicle rental system helps in keeping a check on the vehicles. The vehicle rental system provides a 
                             car catalogue for the customers to select a car they want. The vehicle rental management system restricts
                              the number of users and the admin decides on the accessibility to the process. The vehicle rental system 
                              allows the customers to give feedback on the travel.</p>
                     </div>
              </div>
         </div>
<section className="body">
         <div class="wrapper">
  <h1>Our Team</h1>
  <div className="team">
    <div className="team_member">
      <div className="team_img">
        <img src="./images/team1.png" alt="Team_image"/>
      </div>
      <h3>Anil Kafle</h3>
      <p className="role">UI developer</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
    </div>
    <div className="team_member">
      <div className="team_img">
        <img src="./images/team2.png" alt="Team_image"/>
      </div>
      <h3>Puspa Shrestha</h3>
      <p className="role">Tester</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p></div>
    <div className="team_member">
      <div className="team_img">
        <img src="./images/team3.png" alt="Team_image"/>
      </div>
      <h3>Pramod Sapkota</h3>
      <p className="role">Support Lead</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
    </div>
  </div>
</div>	
</section>
 </div>
    )
}
}

export default About
