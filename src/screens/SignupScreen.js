import React, { useRef } from 'react'
import { auth } from '../firebase'
import "./SignupScreen.css"

function SignupScreen() {
    // for the capture the email to us
    const emailRef = useRef(null)
    const passwordRef = useRef(null)


    // for a new account users
    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value)

            .then((authUser) => {
                console.log(authUser)
            })
            .catch((error) => {
                alert(error.message)
            });
    }


    // for a old account users
    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value)

            .then((authUser) => {
                console.log(authUser)
            })
            .catch((error) => {
                alert(error.message)
            });


    }
    return (
        <div className="signupScreen">
            <form >
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="email" />
                <input ref={passwordRef} type="password" placeholder="password" />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className="signUpScreen__gray">New to Netflix?  </span>

                    <span className="signUpScreen__link" onClick={register}>Sign Up Now.</span>

                </h4>
            </form>
        </div>
    )
}

export default SignupScreen
