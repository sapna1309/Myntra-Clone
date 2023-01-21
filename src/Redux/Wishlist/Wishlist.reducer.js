import * as types from "./Wishlist.type"

let initialState ={
    loading:false,
    error:false,
    wishlistData:[],
}

export const wishlistReducer = (state = initialState ,{type,payload})=>{
    switch(type){

        case types.GET_CART_LOADING:{
            return {
                ...state,
                loading:true,
                error:false
            }
        }

        case types.GET_CART_SUCCESS:{
            return {
                ...state,
                loading:false,
                error:false,
                wishlistData:payload
            }
        }

        case types.GET_CART_ERROR:{
            return{
                ...state,
                loading:false,
                error:true
            }
        }
        default:{
            return state
        }
    }
}