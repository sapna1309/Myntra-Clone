import { auth } from "../../Components/firebase"
import { SIGNUP_FAIL, SIGNUP_START, SIGNUP_SUCCESS } from "./Auth.type"
import {createUserWithEmailAndPassword , updateProfile} from "firebase/auth"

const registerStart=()=>({
    type:SIGNUP_START,
})

const registerSuccess=(user)=>({
    type:SIGNUP_SUCCESS,
    payload : user
})

const registerFail=(error)=>({
    type:SIGNUP_FAIL,
    payload:error,
})


export const registerInitial=(email,password,displayName)=>{
    return function(dispatch){
        createUserWithEmailAndPassword(email,password)
    .then(async(res)=>{

      
    //   const user=res.user
      await updateProfile({
        displayName
      })
    //   navigate("/")


    //   console.log(user)
    //   console.log(res)
    })
    .catch((err)=>{
      
      console.log("error-", err.message)
    })
    }
}