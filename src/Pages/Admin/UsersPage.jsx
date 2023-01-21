import { Box, Heading, HStack, Stack } from '@chakra-ui/layout';
import { Avatar, AvatarGroup } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import AdminNavbar from '../../Components/AdminNavbar';
import { getUsersListData } from '../../Redux/Admin/Admin.action';
import UserCard from './sample';


const UsersPage = () => {
  const UsersListData = useSelector((store)=>store.adminManager.usersListData);
  const dispatch = useDispatch();
  useEffect(()=>{
   dispatch(getUsersListData());
  },[])
  //console.log("USERSLIST",UsersListData);
  return (
    <Box minH="100vh" bg={'gray.100'}>
      <AdminNavbar/>
    <Box mt={"80px"} >
     <Stack ml={'270px'} justifyContent={'center'}>
    <Heading mt={5} size={'lg'} >TOTAL USERS</Heading>
    <HStack justifyContent={'center'}>
    <AvatarGroup size='md' max={3} mt={3}>
   <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
    {UsersListData.length!==0 && UsersListData.map((el,i)=>(
     <Avatar  key={i} name={`${el.fname}+${el.lname}`} />
    ))}
</AvatarGroup>
</HStack>
    </Stack>
    <Stack ml={'270px'} >
      {UsersListData.length!==0 && UsersListData.map((el,i)=>(
        <UserCard key={i} {...el} />
      ))}
    </Stack>
    </Box>
    
    </Box>
  )
}

export default UsersPage