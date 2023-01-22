import { Box, Heading, HStack, Stack } from '@chakra-ui/layout';
import { Avatar, AvatarGroup } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import AdminNavbar from '../../Components/AdminNavbar';
import { deleteUsersListData, getUsersListData } from '../../Redux/Admin/Admin.action';
import UserCard from './UserCard';


const UsersPage = () => {
  const UsersListData = useSelector((store)=>store.adminManager.usersListData);
  const dispatch = useDispatch();
  useEffect(()=>{
   dispatch(getUsersListData());
  },[])
  
  const deleteUsers=(id)=>{
    dispatch(deleteUsersListData(id)).then(()=>dispatch(getUsersListData()));
  }
  return (
    <Box minH="100vh" bg={'gray.100'}>
      <AdminNavbar/>
    <Box mt={"80px"} >
     <Stack ml={'270px'} justifyContent={'center'}>
    <Heading mt={5} size={'lg'} >TOTAL USERS</Heading>
    <HStack justifyContent={'center'}>
    <AvatarGroup size='md' max={3} mt={3}>
   <Avatar name='Ryan Florence' src='https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' />
    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
    {UsersListData.length!==0 && UsersListData.map((el,i)=>(
     <Avatar  key={i} name={`${el.fname}+${el.lname}`} />
    ))}
</AvatarGroup>
</HStack>
    </Stack>
    <Stack ml={'440px'} spacing={10} >
      {UsersListData.length!==0 && UsersListData.map((el,i)=>(
        <UserCard key={i} {...el} deleteUsers={deleteUsers} />
      ))}
    </Stack>
    </Box>
    
    </Box>
  )
}

export default UsersPage