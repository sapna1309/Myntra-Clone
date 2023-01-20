import {  ADD_KIDS_SUCCESS, ADD_MENS_SUCCESS, ADD_WOMENS_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING } from "./Admin.type"

const initialState={
 loading:false,
 error:false,
 mensData:[],
 womensData:[],
 kidsData:[]
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
            mensData:[...state.mensData,payload],
        }
    }
    case ADD_WOMENS_SUCCESS:{
        return{
            ...state,
            loading:false,
            error:false,
            womensData:[...state.womensData,payload],
        }
    }
    case ADD_KIDS_SUCCESS:{
        return{
            ...state,
            loading:false,
            error:false,
            kidsData:[...state.kidsData,payload],
        }
    }
    default:{
        return state
    }
  }
}