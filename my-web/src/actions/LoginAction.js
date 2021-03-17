import LoginAction from '../Apis/LoginApi'
import * as type from '../TypeAction'

function saveToken(token) {
    return localStorage.setItem("token", token)
}

export const Login = (data) => (dispatch) => {
    dispatch({ type: type.LOGIN })
    LoginAction.login(data)
        .then((res) => {
            console.log("data action: ", res)
            dispatch({ 
                type: type.LOGIN_SUCCES,
                payload: { 
                    token: res.data.token,
                    name: res.data.name
                }
            })
            saveToken(res.data.token)
        })
        .catch((err) => {
            dispatch({ type: type.LOGIN_FAILED })
        })
}

export const Register = (data) => (dispatch) => {
    dispatch({ type: type.REGISTER })
    LoginAction.register(data)
        .then((res) => {
            dispatch({ 
                type: type.REGISTER_SUCCESS,
            })
        })
        .catch((err) => {
            dispatch({ type: type.REGISTER_FAILED })
        })
}