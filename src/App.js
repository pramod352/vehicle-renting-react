import React, {useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles'
import {Route,Switch } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Dropdown from './components/Dropdown'
import Service from './pages/Service'
import Contact from './pages/Contact'
import './App.css'
import Footer from './pages/Footer'
import firebase from  './pages/firebase'
import Login from './Login/Login'
import User_Booking from './pages/User_booking/User_Booking'
function App() {

  const [isOpen,setIsOpen]=useState(false);


  // Login backend using firebase

  const [user,setUser]=useState ('');
  const [email,setEmail]=useState ('');
  const [password,setPassword]=useState ('');
  const [emailError,setEmailError]=useState ('');
  const [passwordError,setPasswordError]=useState ('');
  const [hasAccount,setHasAccount]=useState (false);

  const handleLogin =() =>{
    clearErrors();
    firebase
       .auth()
       .signInWithEmailAndPassword(email,password)
       .catch((err)=>{
      switch (err.code){
        case "auth/invalid-email":
          case "auth/user-disabled":
            case "auth/user-not-found":  
            setEmailError(err.message);
            break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
      }
    });
  };


  const clearInputs = () =>{
    setEmail('');
    setPassword('');
  };

  const clearErrors = () =>{
    setEmailError('');
    setPasswordError('');
  };

   const handleSignup =() => {
     clearErrors();
    firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch((err) => {
      switch (err.code) {
        case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
      }
    });
   }
   
    const handleLogout =()=>{
      firebase.auth().signOut();
    };

    const authListener =()=>{
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          clearInputs();
          setUser(user);
        }
        else {
          setUser("");
        }
      });
    }
    
    useEffect (() =>{
     authListener();

    },[]);

// ENd of login backend....


  const toggle = () =>{
    setIsOpen(!isOpen)
  }

    return ( 
       <div className="App">
        {user ? (<>
          <GlobalStyle/>
          <Navbar handleLogout={handleLogout} toggle={toggle}/>
          <Dropdown handleLogout={handleLogout} isOpen={isOpen} toggle={toggle}/>
          <Switch>
         <Route exact path='/' component={Home}/>
         <Route  path='/About' component={About}/>
         <Route  path='/Service' component={Service}/>
         <Route  path='/Contact' component={Contact}/>
         <Route  path='/User_booking/User_Booking' component={User_Booking}/>
         </Switch>
         <Footer/>
         </>
         ) : (<>
           {/* <Navbar handleLogout={handleLogout} toggle={toggle}/> */}
          <Login 
         email={email}
         password={password}
         setEmail={setEmail}
         setPassword={setPassword}
         handleLogin={handleLogin}
         handleSignup={handleSignup}
         hasAccount={hasAccount}
         setHasAccount={setHasAccount}
         emailError={emailError}
         passwordError={passwordError}
         />
         <Footer/>
         </>
        )};
       
      </div>
    )
};

export default App