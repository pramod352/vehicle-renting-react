import React ,{useState} from 'react'
import './Contact.css'
import  {db} from './firebase';

const Contact = () => {


    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[message, setMessage]=useState('');
  
const handleSubmit = (e) =>{
       e.preventDefault()
       db.collection('contact').add({
           name:name,
           email:email,
           message:message,
       })
       .then(() =>{
           alert("Message Sent Succesfully!! We will Contact You Soon....Thank You!! ")
       })
       .catch((error) =>{
           alert(error.message)
       });
       setName('');
       setEmail('');
       setMessage('');
    };

       return (
        <div>
            <div className="contact" >
                <div className="contenment">
                    <h2>Contact Us</h2>
                    <p>We are here to serve you!! So feel free to contact us!!!</p>
                </div>
                <div className="containeer">
                    <div className="contactInfo">
                        <div className="box">
                            <div className="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>Bhaktapur-01, Nepal</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
                            <div className="text">
                                <h3>Phone</h3>
                                <p>+977-9868832972</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>vehiclerenting@contact.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="contactForm">
                        <form action="" onSubmit={handleSubmit}>
                            <h2>Get in touch!! Send Message..</h2>
                            <div className="inputBox">
                                <input type="text" name="name" required value={name}
                         onChange={(e)=> setName(e.target.value)}/>
                         <span>Full Name</span>
                            </div>
                            <div className="inputBox">
                                <input type="email" name="email" required value={email}
                      onChange={(e)=> setEmail(e.target.value)}/>
                                <span>Email</span>
                            </div>
                            <div className="inputBox">
                                <textarea type="text" name="message" required="required" value={message}
                                      onChange={(e)=> setMessage(e.target.value)}/>
                                <span>Your Message...</span>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Send"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
       
    )
}

export default Contact
