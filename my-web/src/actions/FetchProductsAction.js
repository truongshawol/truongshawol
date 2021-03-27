import FetchProductsApi from '../Apis/ProductsApi'
import * as type from '../TypeAction'

export const FetchProductsAction = (pagination) => (dispatch) => {
    dispatch({ type: type.FETCH_PRODUCTS})
    FetchProductsApi.fetchProducts(pagination)
        .then((res) => {
            dispatch({ 
                type: type.FETCH_PRODUCTS_SUCCESS,
                payload: {
                    data: res.data.data,
                    total: res.data.totalPage
                }
            })
        })
        .catch((err) => {
            dispatch({
                type: type.FETCH_PRODUCTS_FAILED
            })
        })
}

export const DeleteProductAction = (id) => (dispatch) => {
    dispatch({ type: type.DELETE_PRODUCTS })
    FetchProductsApi.deleteProduct(id)
        .then((res) => {
            dispatch({type: type.DELETE_PRODUCTS_SUCCESS})
        })
        .catch((err) => {
            dispatch({type: type.DELETE_PRODUCTS_FAILED})
        })
}

export const EditProductAction = (id) => (dispatch) => {
    dispatch({ type: type.EDIT_PRODUCTS })
    FetchProductsApi.deleteProduct(id)
        .then((res) => {
            dispatch({type: type.EDIT_PRODUCTS_SUCCESS})
        })
        .catch((err) => {
            dispatch({type: type.EDIT_PRODUCTS_FAILED})
        })
}

export const AddProductAction = (data) => (dispatch) => {
    dispatch({ type: type.ADD_PRODUCTS })
    FetchProductsApi.addProduct(data)
        .then((res) => {
            dispatch({type: type.ADD_PRODUCTS_SUCCESS})
        })
        .catch((err) => {
            dispatch({type: type.ADD_PRODUCTS_FAILED})
        })
}