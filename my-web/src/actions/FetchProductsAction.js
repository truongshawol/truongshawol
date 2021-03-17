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