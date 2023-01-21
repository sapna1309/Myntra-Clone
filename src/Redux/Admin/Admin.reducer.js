import {  ADD_KIDS_SUCCESS, ADD_MENS_SUCCESS, ADD_WOMENS_SUCCESS, DELETE_PRODUCT_KIDS, DELETE_PRODUCT_MENS, DELETE_PRODUCT_WOMENS, GET_ADMINDATA_SUCCESS, GET_KIDS_SUCCESS, GET_MENS_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_USERSLIST_SUCCESS, GET_WOMENS_SUCCESS, UPDATE_PRODUCT_KIDS, UPDATE_PRODUCT_MENS, UPDATE_PRODUCT_WOMENS } from "./Admin.type"

const initialState={
 loading:false,
 error:false,
 mensData:[],
 womensData:[],
 kidsData:[],
 usersListData:[],
 adminData:{}
}
export const adminReducer=(state=initialState,{type,payload})=>{
  switch(type){
    case GET_PRODUCTS_LOADING:{
        return{
            ...state,
            loading:true,
        }
    }
    case GET_PRODUCTS_ERROR:{
        return{
            ...state,
            loading:false,
            error:true,
        }
    }
    case ADD_MENS_SUCCESS:{
        return{
            ...state,
            loading:false,
            error:false,
        }
    }
    case ADD_WOMENS_SUCCESS:{
        return{
            ...state,
            loading:false,
            error:false,
        }
    }
    case ADD_KIDS_SUCCESS:{
        return{
            ...state,
            loading:false,
            error:false,
        }
    }
    case GET_MENS_SUCCESS:{
        return{
            ...state,
            loading:false,
            error:false,
            mensData:payload,
        }
    }
    case GET_WOMENS_SUCCESS:{
        return{
            ...state,
            loading:false,
            error:false,
            womensData:payload,
        }
    }
    case GET_KIDS_SUCCESS:{
        return{
            ...state,
            loading:false,
            error:false,
            kidsData:payload,
        }
    }
    case UPDATE_PRODUCT_MENS:{
        return{
            ...state,
            loading:false,
            error:false,
            mensData:[...state.mensData,payload],
        }
    }
    case UPDATE_PRODUCT_WOMENS:{
        return{
            ...state,
            loading:false,
            error:false,
            womensData:[...state.womensData,payload],
        }
    }
    case UPDATE_PRODUCT_KIDS:{
        return{
            ...state,
            loading:false,
            error:false,
            kidsData:[...state.kidsData,payload],
        }
    }
    case DELETE_PRODUCT_MENS:{
        return{
            ...state,
            loading:false,
            error:false,
            mensData:[...state.mensData,payload],
        }
    }
    case DELETE_PRODUCT_WOMENS:{
        return{
            ...state,
            loading:false,
            error:false,
            womensData:[...state.womensData,payload],
        }
    }
    case DELETE_PRODUCT_KIDS:{
        return{
            ...state,
            loading:false,
            error:false,
            kidsData:[...state.kidsData,payload],
        }
    }
    case GET_USERSLIST_SUCCESS:{
        return{
            ...state,
            loading:false,
            error:false,
            usersListData:payload,
        }
    }
    case GET_ADMINDATA_SUCCESS:{
        return{
            ...state,
            loading:false,
            error:false,
            adminData:payload,
        }
    }
    default:{
        return state
    }
  }
}