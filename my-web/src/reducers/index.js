import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import FetchProducts from './FetchProductsReducer'
import CountCard from './CountCardReducer'
import CardReducer from './CardReducer'

const reducers = combineReducers({
    login: LoginReducer,
    fetchProducts: FetchProducts,
    countCard: CountCard,
    card: CardReducer
})

export default reducers