import * as type from '../TypeAction'

export const AddCountCard = (data) => (dispatch) => {
    dispatch({ 
        type: type.ADD_COUNT_CARD,
        payload: { cart: data }
        
    })
}