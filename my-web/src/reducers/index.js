import { combineReducers } from 'redux'
import {LoginReducer, RegisterReducer} from './LoginReducer'
import {fetchProducts, DeleteProduct, EditProduct, AddProduct} from './FetchProductsReducer'
import CountCard from './CountCardReducer'
import {CardReducer} from './CardReducer'

const reducers = combineReducers({
    login: LoginReducer,
    fetchProducts: fetchProducts,
    deleteProduct: DeleteProduct,
    editProduct: EditProduct,
    addProduct: AddProduct,
    countCard: CountCard,
    card: CardReducer,
    register: RegisterReducer
})

export default reducers