import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getKidsData } from '../../Redux/Admin/Admin.action'
const KidsPage = () => {
  const KidsData = useSelector((store)=>store.adminManager.kidsData);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getKidsData());
  },[])
  
  console.log("Kids",KidsData);
  return (
    <div>KidsPage</div>
  )
}

export default KidsPage