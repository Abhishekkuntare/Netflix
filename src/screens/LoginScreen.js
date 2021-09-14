import React, { useState } from 'react'
import Accordian from './Accordian';
import './LoginScreen.css'
import SignupScreen from './SignupScreen';



function LoginScreen() {

    const [signIn, setSignIn] = useState(false);

    return (

        <div className="loginScreen">
            <div className="language">
                <select className="lang" name="lang" value="lang" id=""  >
                    <option value="english" >English</option>
                    <option value="hindi">Hindi</option>
                    <option value="tamil">Tamil</option>
                </select>
            </div>
            <div className="loginScreen__background">
                <img className="loginScreen__logo"
                    src="
                    http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <button onClick={() => setSignIn(true)} className="loginScreen__button">Sign In</button>


                <div className="loginScreen__gradiant" />
            </div>


            <div className="loginScreen__body">
                {signIn ? (
                    <SignupScreen />
                ) : (
                    <>
                        <h1>Unlimited Films, Tv programmes and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch ? Enter you email to create or restart your membership.</h3>

                        <div className="loginScreen__input">
                            <form >
                                <input type="email" placeholder="Your Name" />
                                <button onClick={() => setSignIn(true)} className='loginScreen__getStarted'>GET STARTED</button>
                            </form>

                        </div>
                    </>
                )}

            </div>
            <Accordian />
        </div>
    )
}
export default LoginScreen

