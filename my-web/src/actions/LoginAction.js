import loginAction from '../Apis/LoginApi'
import * as type from '../TypeAction'

function saveToken(token) {
    return localStorage.setItem("token", token)
}

export const Login = (data) => (dispatch) => {
    dispatch({ type: type.LOGIN })
    loginAction.login(data)
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