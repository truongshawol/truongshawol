import * as type from '../TypeAction' 

const initialState = {
    data: [],
    message: ""
}

export function CardReducer (state = initialState, action={}) {
    switch (action.type) {
        case type.GET_CARD:
            return {
                ...state
            }
        case type.GET_CARD_SUCCESS:
            return {
                ...state,
                data: action.payload.data
            }
        case type.GET_CARD_FAILED:
            return {
                ...state,
            }
    }
    return state;
}

export function AddCardReducer (state = initialState, action={}) {
    switch (action.type) {
        case type.GET_CARD:
            return {
                ...state
            }
        case type.GET_CARD_SUCCESS:
            return {
                ...state,
                message: "add card success"
                
            }
        case type.GET_CARD_FAILED:
            return {
                ...state,
                message: "add card failed"
            }
    }
    return state;
}