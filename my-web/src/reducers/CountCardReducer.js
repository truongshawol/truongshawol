import * as type from '../TypeAction'

const initialState = {
    cart: 0
}

export default function fetchProducts (state= initialState, action={}) {
    switch(action.type) {
        case type.ADD_COUNT_CARD:
            return {
                ...state,
                cart: action.payload.cart
            }
    }
    return state
}