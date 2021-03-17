import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Register} from '../actions/LoginAction'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import '../CSS/RegisterPage.css'
import LoginPage from './LoginPage' 

function RegisterPage({Register, message}) {

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
        Register(value)
    }

    return (
        <div className="register">
                <div className="register_container">
                <h1>R E G I S T E R</h1>
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
                <button onClick={onClick}>REGISTER</button>
            </div>
        </div>
    );
}


function mapStateToProps({register}) {
    return {
        message: register.messageRegister
    }
}

export default connect( mapStateToProps ,{Register})(RegisterPage)
