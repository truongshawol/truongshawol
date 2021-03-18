import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../CSS/LoginPage.css'
import {connect} from 'react-redux'
import {Login} from '../actions/LoginAction'
import {Redirect, Link} from 'react-router-dom'
import HomePage from './HomePage'

function LoginPage({Login, logedIn, message}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function usernameChange(e) {
        setUsername(e.target.value)
    }
    function passwordChange (e) {
        setPassword(e.target.value)
    }

    function onClick() {
        const value = {
            username: username,
            password: password
        }
        Login(value)
    }
    return (
        logedIn ? <Redirect to="/"><HomePage a={username}/></Redirect> : (
            <div className="login">
                <div className="login_container">
                <h1><FontAwesomeIcon icon="user-circle" /></h1>
                <div>
                    <input 
                        type="text" 
                        name="password" 
                        placeholder="username" 
                        onChange={usernameChange}>
                    </input>
                </div>
                <div>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="password" 
                        onChange={passwordChange}>
                    </input>
                </div>
                <button onClick={onClick}>LOGIN</button>
                <p style={{color:"red"}}>{message}</p>
                <Link to="/"><div className="closs">X</div></Link>
            </div>
            
        </div>
        )
    )
}

function mapStateToProps({login}) {
    return {
        logedIn: login.logedIn,
        message: login.message
    }
}
export default connect( mapStateToProps ,{Login})(LoginPage)