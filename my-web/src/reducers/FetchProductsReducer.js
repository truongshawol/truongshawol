import * as type from '../TypeAction' 

const initialState = {
    list: {
        products: [],
        total: 1,
        message: ""
    },
    message: ""
}

export function fetchProducts (state= initialState, action={}) {
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

export function DeleteProduct (state = initialState, action={}) {
    switch(action.type) {
        case type.DELETE_PRODUCTS:
            return {
                ...state
            }
        case type.DELETE_PRODUCTS_SUCCESS:
            return {
                ...state,
                message: "delete success"
            }
        case type.DELETE_PRODUCTS_FAILED:
            return {
                ...state,
                message: "delete failed"
            }
    }
    return state
}

export function EditProduct (state = initialState, action={}) {
    switch(action.type) {
        case type.EDIT_PRODUCTS:
            return {
                ...state
            }
        case type.EDIT_PRODUCTS_SUCCESS:
            return {
                ...state,
                message: "update success"
            }
        case type.EDIT_PRODUCTS_FAILED:
            return {
                ...state,
                message: "update failed"
            }
    }
    return state
}

export function AddProduct (state = initialState, action={}) {
    switch(action.type) {
        case type.ADD_PRODUCTS:
            return {
                ...state
            }
        case type.ADD_PRODUCTS_SUCCESS:
            return {
                ...state,
                message: "add success"
            }
        case type.ADD_PRODUCTS_FAILED:
            return {
                ...state,
                message: "add failed"
            }
    }
    return state
}