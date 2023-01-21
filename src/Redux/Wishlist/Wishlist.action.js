import { fetchWishlistAPI } from "./Wishlist.api"
import * as types from "./Wishlist.type"

export const fetchWishlistData = ()=>async (dispatch) =>{

dispatch({type:types.GET_WISHLIST_LOADING})

try{
let data = await fetchWishlistAPI()

    dispatch({type:types.GET_WISHLIST_SUCCESS,payload:data})
    // console.log(data)
}catch(err){
dispatch({type:types.GET_WISHLIST_ERROR})
}

}