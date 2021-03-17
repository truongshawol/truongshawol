import * as type from '../TypeAction' 

const initialState = {
    data: []
}

export default function CardReducer (state = initialState, action={}) {
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