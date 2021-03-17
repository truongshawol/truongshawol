import CardApi from '../Apis/CardApi'
import * as type from '../TypeAction'

export const AddCardAction = (data) => (dispatch) => {
    dispatch({ type: type.ADD_CARD })
    CardApi.AddCard(data)
        .then((res) => {
            dispatch({ 
                type: type.ADD_CARD_SUCCESS,
            })
        })
        .catch((err) => {
            dispatch({ type: type.ADD_CARD_FAILED })
        })
}

export const CardAction = () => (dispatch) => {
    dispatch({ type: type.GET_CARD })
    CardApi.Card()
        .then((res) => {
            console.log("rescard: ", res.data)
            dispatch({ 
                type: type.GET_CARD_SUCCESS,
                payload: {
                    data: res.data
                }
            })
        })
        .catch((err) => {
            dispatch({ type: type.GET_CARD_FAILED })
        })
}

