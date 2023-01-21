import { deleteAdminKidsdataAPI, deleteAdminMensdataAPI, deleteAdminWomensdataAPI, getAdminDataAPI, getAdminKidsdataAPI, getAdminMensdataAPI, getAdminWomensdataAPI, getUsersListAPI, postAdminKidsdataAPI, postAdminMensdataAPI, postAdminWomensdataAPI, updateAdminKidsdataAPI, updateAdminMensdataAPI, updateAdminWomensdataAPI } from "./Admin.api";
import { ADD_KIDS_SUCCESS, ADD_MENS_SUCCESS, ADD_WOMENS_SUCCESS, DELETE_PRODUCT_KIDS, DELETE_PRODUCT_MENS, DELETE_PRODUCT_WOMENS, GET_ADMINDATA_SUCCESS, GET_KIDS_SUCCESS, GET_MENS_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_USERSLIST_SUCCESS, GET_WOMENS_SUCCESS, UPDATE_PRODUCT_KIDS, UPDATE_PRODUCT_MENS, UPDATE_PRODUCT_WOMENS } from "./Admin.type"

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

export const getUsersListData=()=>async(dispatch)=>{
  dispatch({type:GET_PRODUCTS_LOADING});
try {
  let data = await getUsersListAPI();
  dispatch({type:GET_USERSLIST_SUCCESS,payload:data});
} catch (error) {
  dispatch({type:GET_PRODUCTS_ERROR});
}
}

export const getAdminData=()=>async(dispatch)=>{
  dispatch({type:GET_PRODUCTS_LOADING});
try {
  let data = await getAdminDataAPI();
  dispatch({type:GET_ADMINDATA_SUCCESS,payload:data});
} catch (error) {
  dispatch({type:GET_PRODUCTS_ERROR});
}
}

//DELETE-FUNCTION

export const deleteMensData=(id)=>async(dispatch)=>{
  dispatch({type:GET_PRODUCTS_LOADING});
try {
  await deleteAdminMensdataAPI(id);
  dispatch({type:DELETE_PRODUCT_MENS});
} catch (error) {
  dispatch({type:GET_PRODUCTS_ERROR});
}
}

export const deleteWomensData=(id)=>async(dispatch)=>{
  dispatch({type:GET_PRODUCTS_LOADING});
try {
  await deleteAdminWomensdataAPI(id);
  dispatch({type:DELETE_PRODUCT_WOMENS});
} catch (error) {
  dispatch({type:GET_PRODUCTS_ERROR});
}
}

export const deleteKidsData=(id)=>async(dispatch)=>{
  dispatch({type:GET_PRODUCTS_LOADING});
try {
  await deleteAdminKidsdataAPI(id);
  dispatch({type:DELETE_PRODUCT_KIDS});
} catch (error) {
  dispatch({type:GET_PRODUCTS_ERROR});
}
}

//UPDATE-FUNCTION

export const updateMensData=(id,newPrice)=>async(dispatch)=>{
  dispatch({type:GET_PRODUCTS_LOADING});
try {
 let data = await updateAdminMensdataAPI(id,newPrice);
  dispatch({type:UPDATE_PRODUCT_MENS,payload:data});
} catch (error) {
  dispatch({type:GET_PRODUCTS_ERROR});
}
}

export const updateWomensData=(id,newPrice)=>async(dispatch)=>{
  dispatch({type:GET_PRODUCTS_LOADING});
try {
  let data = await updateAdminWomensdataAPI(id,newPrice);
  dispatch({type:UPDATE_PRODUCT_WOMENS,payload:data});
} catch (error) {
  dispatch({type:GET_PRODUCTS_ERROR});
}
}

export const updateKidsData=(id,newPrice)=>async(dispatch)=>{
  dispatch({type:GET_PRODUCTS_LOADING});
try {
  let data = await updateAdminKidsdataAPI(id,newPrice);
  dispatch({type:UPDATE_PRODUCT_KIDS,payload:data});
} catch (error) {
  dispatch({type:GET_PRODUCTS_ERROR});
}
}





