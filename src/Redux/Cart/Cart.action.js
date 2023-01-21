import { fetchCartAPI } from "./Cart.api"
import * as types from "./Cart.type"

export const fetchCartData = ()=>async (dispatch) =>{

    dispatch({type:types.GET_CART_LOADING})
    
    try{
    let data = await fetchCartAPI()
    
        dispatch({type:types.GET_CART_SUCCESS,payload:data})
        // console.log(data)
    }catch(err){
    dispatch({type:types.GET_CART_ERROR})
    }
    
    }