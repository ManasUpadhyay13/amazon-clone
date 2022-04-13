import React , { useState } from 'react'
import './Login.css'
import { Link , useHistory } from "react-router-dom"
import { auth } from './firebase'

function Login() {
    const history = useHistory()
    const [email ,setEmail] = useState('');
    const [password , setPassword]=useState('');

    const signIn= e =>{
        e.preventDefault()

        
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))

        // some fancy firebase login stuff
    }

    const register = e => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email , password)
            .then((auth)=>{
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })

            .catch(error => alert(error.message))

        // do some fancy firebase register 
    }
    return (
        <div className="login">
            <Link to='/'>
                    <img src="logo_in_black.png"    alt="" className="login__logo"/>
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange ={ e=> setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange ={ e=> setPassword(e.target.value)} />

                    <button type = 'submit' onClick = {signIn}
                    className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in-you agree to the FAKE AMAZON BY MANAS Conditions of Use & Sale. Please see our pivacy notice , our cookies notice and our Internet-Based ads notice.
                </p>

                <button type='submit' onClick = {register}
                className = "login__registerButton">Create you Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
