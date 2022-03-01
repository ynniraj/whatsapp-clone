import React from 'react'
import "./login.css"
import { Button } from "@mui/material"
import { auth, provider } from './firebase'
import { actionTypes } from './reducer'
import { useStateValue } from "./StateProvider"

function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch((error) => alert(error.message))
    }
    return (
        <div className="Login">
            <div className="login_container">
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" alt="" />
                <div className="login_text">
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button type="submit" className="btn"onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login