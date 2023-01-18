import { SIGNUP_FAIL, SIGNUP_START, SIGNUP_SUCCESS } from "./Auth.type";

const initialState={
    loading:false,
    currentUser:null,
    error:null,
}

const userReducer=(state=initialState,action)=>{
    switch (action.type){
        case SIGNUP_START :
            return {
                ...state,
                loading:true
            }
        case SIGNUP_SUCCESS :
            return {
               ...state,
               loading:false,
               currentUser:action.payload, 
            }
        case SIGNUP_FAIL :
            return {
                ...state,
                loading:false,
                error:action.payload
            }        
        default :
         return state;
    }
}

export default userReducer;