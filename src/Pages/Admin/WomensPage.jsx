import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getWomensData } from '../../Redux/Admin/Admin.action'
const WomensPage = () => {
  const WomensData = useSelector((store)=>store.adminManager.womensData);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getWomensData());
  },[])
  
  console.log("Womens",WomensData);
  return (
    <div>WomensPage</div>
  )
}

export default WomensPage