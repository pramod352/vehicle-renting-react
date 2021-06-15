// import React, {useState,useEffect} from 'react'
// import firebase from './firebase'
// import Login from './Login';
// const index = () => {

//   const [user,setUser]=useState ('');
//   const [email,setEmail]=useState ('');
//   const [password,setPassword]=useState ('');
//   const [emailError,setEmailError]=useState ('');
//   const [passwordError,setPasswordError]=useState ('');
//   const [hasAccount,setHasAccount]=useState (false);

//   const handleLogin =() =>{
//     clearErrors();
//     firebase.auth().signInWithEmailAndPassword(email,password)
//     .catch((err)=>{
//       switch(err.code){
//         case "auth/Invalid-Email":
//           case "auth/User-Disabled":
//             case "auth/User-Not-Found":  
//             setEmailError(err.message);
//             break;
//             case "auth/Wrong-Password":
//               setPasswordError(err.message);
//               break;
//       }
//     });
//   };


//   const clearInputs = () =>{
//     setEmail('');
//     setPassword('');
//   };

//   const clearErrors = () =>{
//     setEmailError('');
//     setPasswordError('');
//   };

//    const handleSignup =()=>{
//      clearErrors();
//     firebase.auth().createUserWithEmailAndPassword(email,password)
//     .catch((err)=>{
//       switch(err.code){
//         case "auth/Email-Already-in-use":
//           case "auth/invalid-email":
//             setEmailError(err.message);
//             break;
//             case "auth/weak-Password":
//               setPasswordError(err.message);
//               break;
//       }
//     });
//    }
   
//     const handleLogout =()=>{
//       firebase.auth().signOut();
//     };

//     const authListener =()=>{
//       firebase.auth().onAuthStateChanged((user)=>{
//         if (user){
//           clearInputs();
//           setUser(user);
//         }
//         else {
//           setUser("");
//         }
//       });
//     }
    
//     useEffect (() =>{
//      authListener();

//     },[]);

//     return (
//         <div>
//             <Login 
//             email={email}
//             setEmail={setEmail}
//             password={password}
//             setPassword={setPassword}
//             handleLogin={handleLogin}
//             handleSignup={handleSignup}
//             hasAccount={hasAccount}
//             setHasAccount={setHasAccount}
//             emailError={emailError}
//             passwordError={passwordError}

           
//             />
//         </div>
//     )
// }

// export default index
