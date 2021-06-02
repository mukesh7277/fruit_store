import *as type from './productTypes'

    
const initialState = {
    products: [],
    loading: false,
    error:null
}

const productReducer =(state=initialState,action) =>{
    switch(action.type) {
        case type.GET_PRODUCTS_REQUESTED:
            return{
                ...state,
                loading: true
            }  
        case type.GET_PRODUCTS_SUCCESS:
            return{
                ...state,
                loading:false,
                products:action.payload
            }   
        case type.GET_PRODUCTS_FAILED:
            return{
                ...state,
                loading:false,
                error:action.message,
            }
        default:
            return state
    }
}
export default productReducer