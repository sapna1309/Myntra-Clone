import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { getCurrentUserData } from "../Redux/Admin/Admin.action";

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  //const {currentUserData}=useSelector((store)=>store.adminManager);
  const dispatch=useDispatch();
  let isAuth = JSON.parse(localStorage.getItem("isAuth"));
  useEffect(()=>{
    dispatch(getCurrentUserData());
  },[dispatch,isAuth])
  //console.log("CurrentUser",currentUserData);
  if(isAuth===false){
   return <Navigate to='/login' state={{from:location}} replace />
  }
  return children;
};