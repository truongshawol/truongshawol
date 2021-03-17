import * as type from '../TypeAction' 

const initialState = {
    logedIn: false,
    token: "",
    message: "",
    name: "",
    messageRegister: "",
}

export function LoginReducer (state = initialState, action={}) {
    switch (action.type) {
        case type.LOGIN:
            return {
                ...state
            }
        case type.LOGIN_SUCCES:
            return {
                ...state,
                token: action.payload.token,
                logedIn: true,
                name: action.payload.name,
                message: "login succes",
            }
        case type.LOGIN_FAILED:
            return {
                ...state,
                message: "Login Failed"
            }
    }
    return state;
}


export function RegisterReducer (state = initialState, action={}) {
    switch (action.type) {
        case type.REGISTER:
            return {
                ...state
            }
        case type.REGISTER_SUCCESS:
            return {
                ...state,
                messageRegister: "register succes",

            }
        case type.REGISTER_FAILED:
            return {
                ...state,
                messageRegister: "register Failed"
            }
    }
    return state;
}