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
      <p className="role">website developer</p>
      <p>Kafle joined the Web Design team in the fall of 2018 as our Customer Service Representative.
      As Kafle’s skills and knowledge grew, he became a valuable asset to the development team and is now a 
      website developer adept at JavaScript animations, custom search applications.
      </p>
    </div>
    <div className="team_member">
      <div className="team_img">
        <img src="./images/team2.png" alt="Team_image"/>
      </div>
      <h3>Puspa Shrestha</h3>
      <p className="role">owner and ceo</p>
      <p>Shrestha’s love for website development started in 2017, when at the age of 17 she learned HTML and 
        secured her first dot-com. Puspa spent her time working on freelance website projects,
         and in college she held a part-time position as webmaster for the college radio station.</p></div>
    <div className="team_member">
      <div className="team_img">
        <img src="./images/team3.png" alt="Team_image"/>
      </div>
      <h3>Pramod Sapkota</h3>
      <p className="role">Support Lead</p>
      <p>A Software Engineering Support Lead is responsible for their team’s execution, the quality they produce, 
        the speed and cadence at which they produce, but most importantly, they are responsible for the team’s 
        culture, environment, and overall growth of the people on it.</p>
    </div>
  </div>
</div>	
</section>
 </div>
    )
}
}

export default About
