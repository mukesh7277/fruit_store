import {put,takeEvery} from 'redux-saga/effects'
import * as type from '../shop/productTypes'
import axios from 'axios'
import {getProductsSuccess} from "../shop/productActions"

const apiUrl="http://localhost:3333/ShopData";



function* fetchProducts(action){
    try{
        const products = yield axios.get(apiUrl)
        // const products = yield call(getApi);
        yield console.log(products.data)
        yield put(getProductsSuccess(products.data));
    } catch(e){
        yield put({type:type.GET_PRODUCTS_FAILED,message:e.message});
    }
}

function* productSaga(){
    yield takeEvery(type.GET_PRODUCTS_REQUESTED,fetchProducts);
}

export default productSaga;