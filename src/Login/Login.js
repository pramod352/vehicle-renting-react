import React from 'react'
import './login.css'

const Login = (props) => {
    const {
        email,
        password,
        setEmail,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;

    return(
        <>
        
            <section className="login">
              
            <div className="loginContainer">
            <h1>Please Login before using the vehicle renting system...</h1>
                <label>UserName</label>
                <input type ="text" autoFocus required value={email} onChange={e=>setEmail(e.target.value)} />
                <p className="errorMsg">{emailError}</p>

                <label>Password</label>
                <input type ="password" required value={password} onChange={e=>setPassword(e.target.value)} />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
               {hasAccount ? (
                 <>
                 <button onClick={handleLogin}>Sign In</button>
                 <p> Don't have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign up</span></p>
                 </>
               ): (
                <>
                <button onClick={handleSignup}>Sign up</button>
                <p> Have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign in</span></p>
                </>

               ) }
            
            </div>

           </div>



        </section>
</>
    )

}

export default Login;