import { getMensProductsAPI  } from "./Product.api"
import * as types from "./Product.type"


export const getMensProducts = async(dispatch)=>{

     dispatch({type:types.GET_PRODUCTS_LOADING})

     try{
        let data= await getMensProductsAPI()
        dispatch({
            type: types.GET_PRODUCTS_SUCCESS,
            payload : data
        })
     }catch(err){
        dispatch({type:types.GET_PRODUCTS_ERROR})
     }
}
