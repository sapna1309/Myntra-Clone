import { Box, Heading, HStack, Stack } from '@chakra-ui/layout';
import { Avatar, AvatarGroup } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import AdminNavbar from '../../Components/AdminNavbar';
import { deleteUsersListData, getUsersListData } from '../../Redux/Admin/Admin.action';
import UserCard from './UserCard';
import Chart from "react-apexcharts";


const UsersPage = () => {
  const UsersListData = useSelector((store)=>store.adminManager.usersListData);
  const dispatch = useDispatch();
  useEffect(()=>{
   dispatch(getUsersListData());
  },[])
  
  const deleteUsers=(id)=>{
    dispatch(deleteUsersListData(id)).then(()=>dispatch(getUsersListData()));
  }
 // dispatch(getUsersListData());
  let loginUsers=0
  let logoutUsers=0
  for(let i=0;i<UsersListData.length;i++){
    let el=UsersListData[i];
    if(el.isAuth===true){
    loginUsers=loginUsers+1
    }else{
      logoutUsers=logoutUsers+1
    }
  }
  
  
  return (
    <Box minH="100vh" width={"100%"} bg={'gray.100'} fontFamily={'sans-serif'}>
      <AdminNavbar/>
    <Box mt={"80px"} >
     <Stack ml={[2,5,'270px','270px']} mr={[2,5,5,0]} border={"0px solid black"} justifyContent={'center'}>
      <Box display={"flex"} flexDirection={["column","row","row","row"]} gap={5} justifyContent={'space-around'} border={"0px solid blue"} >
     <Stack border={"0px solid green"}>
    <Heading mt={5} size={["lg","md","md",'lg']} fontFamily={'sans-serif'} >Total Users : {UsersListData.length} 
      </Heading>
    <HStack justifyContent={'center'}>
    <AvatarGroup size='md' max={3} mt={3}>
     {UsersListData.length!==0 && UsersListData.map((el,i)=>(
     el.image!==""?<Avatar  key={i} src={el.image} /> :<Avatar  key={i} name={el.name} />
    ))}
</AvatarGroup>
</HStack>
    </Stack>
   <Stack border={"0px solid green"} mt={5} display={["none","block","block","block"]}>
  
   <Chart
   type="pie"
   height={450}
   series={[loginUsers,logoutUsers]}
   options={{
    noData: { text: "Unavailable" },
    stroke: {
      lineCap: "round"
    },
   colors: ['#2BA751', '#FF0000'],
  
    labels: ["Total Login Users", "Total Logout Users"],
    
  }}
  >

  </Chart>
   </Stack>
   <Stack border={"0px solid green"} width={"90%"} display={["block","none","none","none"]}>
  
  <Chart
  type="pie"
  height={120}
  series={[loginUsers,logoutUsers]}
  options={{
   noData: { text: "Unavailable" },
   stroke: {
     lineCap: "round"
   },
  colors: ['#2BA751', '#FF0000'],
 
   labels: ["Total Login Users", "Total Logout Users"],
   
 }}
 >

 </Chart>
  </Stack>
    </Box>
    </Stack>
    <Stack ml={[15,30,"270px","440px"]} mr={[15,30,"20px","10px"]} border={"0px solid red"} spacing={10} >
      {UsersListData.length!==0 && UsersListData.map((el,i)=>(
        <UserCard key={i} {...el} deleteUsers={deleteUsers} />
      ))}
    </Stack>
    </Box>
    
    </Box>
  )
}

export default UsersPage