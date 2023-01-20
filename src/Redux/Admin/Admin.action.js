import { postAdminKidsdataAPI, postAdminMensdataAPI, postAdminWomensdataAPI } from "./Admin.api";
import { GET_KIDS_SUCCESS, GET_MENS_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_WOMENS_SUCCESS } from "./Admin.type"

export const postMensData=(mensProduct)=>async(dispatch)=>{
    console.log("Men",mensProduct);
    dispatch({type:GET_PRODUCTS_LOADING});
  try {
    let data = await postAdminMensdataAPI(mensProduct);
    dispatch({type:GET_MENS_SUCCESS,payload:data});
  } catch (error) {
    dispatch({type:GET_PRODUCTS_ERROR});
  }
}

export const postWomensData=(womensProduct)=>async(dispatch)=>{
    console.log("Women",womensProduct);
    dispatch({type:GET_PRODUCTS_LOADING});
  try {
    let data = await postAdminWomensdataAPI(womensProduct);
    dispatch({type:GET_WOMENS_SUCCESS,payload:data});
  } catch (error) {
    dispatch({type:GET_PRODUCTS_ERROR});
  }
}

export const postKidsData=(kidsProduct)=>async(dispatch)=>{
    console.log("Kid",kidsProduct);
    dispatch({type:GET_PRODUCTS_LOADING});
  try {
    let data = await postAdminKidsdataAPI(kidsProduct);
    dispatch({type:GET_KIDS_SUCCESS,payload:data});
  } catch (error) {
    dispatch({type:GET_PRODUCTS_ERROR});
  }
}