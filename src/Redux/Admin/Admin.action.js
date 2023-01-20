import { getAdminKidsdataAPI, getAdminMensdataAPI, getAdminWomensdataAPI, postAdminKidsdataAPI, postAdminMensdataAPI, postAdminWomensdataAPI } from "./Admin.api";
import { ADD_KIDS_SUCCESS, ADD_MENS_SUCCESS, ADD_WOMENS_SUCCESS, GET_KIDS_SUCCESS, GET_MENS_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_WOMENS_SUCCESS } from "./Admin.type"

//POST_FUNCTION

export const postMensData=(mensProduct)=>async(dispatch)=>{
    console.log("Men",mensProduct);
    dispatch({type:GET_PRODUCTS_LOADING});
  try {
    await postAdminMensdataAPI(mensProduct);
    dispatch({type:ADD_MENS_SUCCESS});
  } catch (error) {
    dispatch({type:GET_PRODUCTS_ERROR});
  }
}

export const postWomensData=(womensProduct)=>async(dispatch)=>{
    console.log("Women",womensProduct);
    dispatch({type:GET_PRODUCTS_LOADING});
  try {
    await postAdminWomensdataAPI(womensProduct);
    dispatch({type:ADD_WOMENS_SUCCESS});
  } catch (error) {
    dispatch({type:GET_PRODUCTS_ERROR});
  }
}

export const postKidsData=(kidsProduct)=>async(dispatch)=>{
    console.log("Kid",kidsProduct);
    dispatch({type:GET_PRODUCTS_LOADING});
  try {
    await postAdminKidsdataAPI(kidsProduct);
    dispatch({type:ADD_KIDS_SUCCESS});
  } catch (error) {
    dispatch({type:GET_PRODUCTS_ERROR});
  }
}


// GET-FUNCTION

export const getMensData=()=>async(dispatch)=>{
  dispatch({type:GET_PRODUCTS_LOADING});
try {
  let data = await getAdminMensdataAPI();
  dispatch({type:GET_MENS_SUCCESS,payload:data});
} catch (error) {
  dispatch({type:GET_PRODUCTS_ERROR});
}
}

export const getWomensData=()=>async(dispatch)=>{
  dispatch({type:GET_PRODUCTS_LOADING});
try {
  let data = await getAdminWomensdataAPI();
  dispatch({type:GET_WOMENS_SUCCESS,payload:data});
} catch (error) {
  dispatch({type:GET_PRODUCTS_ERROR});
}
}

export const getKidsData=()=>async(dispatch)=>{
  dispatch({type:GET_PRODUCTS_LOADING});
try {
  let data = await getAdminKidsdataAPI();
  dispatch({type:GET_KIDS_SUCCESS,payload:data});
} catch (error) {
  dispatch({type:GET_PRODUCTS_ERROR});
}
}



