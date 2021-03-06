import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {Register} from '../actions/LoginAction'
import {connect} from 'react-redux'
import '../CSS/RegisterPage.css'
 

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
                <Link to="/"><div className="closs">X</div></Link>
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
