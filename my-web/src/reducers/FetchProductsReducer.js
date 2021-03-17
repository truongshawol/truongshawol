import * as type from '../TypeAction' 

const initialState = {
    list: {
        products: [],
        total: 1,
        message: ""
    },
    
}

export default function fetchProducts (state= initialState, action={}) {
    switch(action.type) {
        case type.FETCH_PRODUCTS:
            return {
                ...state,
            }
        case type.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    products: action.payload.data,
                    total: action.payload.total,
                    message: "fetch success"
                }
            }
        case type.FETCH_PRODUCTS_FAILED:
            return {
                ...state,
                list: {
                    ...state.list,
                    message: "fetch fail"
                 }
            }
    }
    return state
        
}