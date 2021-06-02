import productReducer from './shop/productReducer'
import {combineReducers} from 'redux'
import todoProduct from './cart/reducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'root',
    storage, 
    whiteList:['_todoProduct']

}
const rootReducer = combineReducers({
    products:productReducer,
    _todoProduct:todoProduct
})


export default persistReducer(persistConfig,rootReducer)