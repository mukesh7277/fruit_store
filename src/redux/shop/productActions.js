import * as type from './productTypes'

export const getProducts = products => {
    return{
        type:type.GET_PRODUCTS_REQUESTED,
        payload : products
    }
}
export const getProductsSuccess = products => {
    return{
        type:type.GET_PRODUCTS_SUCCESS,
        payload : products
    }
}