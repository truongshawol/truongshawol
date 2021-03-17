import * as type from '../TypeAction' 

const initialState = {
    logedIn: false,
    token: "",
    message: "",
    name: "",
}

export default function LoginReducer (state = initialState, action={}) {
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