import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getAdminData } from "../Redux/Admin/Admin.action";

export const AdminPrivateRoute = ({ children }) => {
  const {adminData}=useSelector((store)=>store.adminManager);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getAdminData());
  },[dispatch])
  console.log("Admin",adminData);
  if(adminData.isAuth===false){
   return <Navigate to='/login' />
  }
  return children;
};