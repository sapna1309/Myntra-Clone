import { Box, Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Image } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AdminNavbar from '../../Components/AdminNavbar';
import { getMensData } from '../../Redux/Admin/Admin.action'

const MensPage = () => {
  const MensData = useSelector((store)=>store.adminManager.mensData);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getMensData());
  },[])
  
  console.log("Mens",MensData);
  return (
    <Box bg={'gray.100'}  width={'full'} >
      <AdminNavbar/>
      <Box  style={{ width: "90%", margin: "auto", marginLeft:"250px" }} >
    <TableContainer>
    <Table variant='striped' colorScheme='pink'  >
      <Thead bg={'#990578'} >
        <Tr>
          <Th color={'white'}>So No.</Th>
          <Th color={'white'}>Image</Th>
          <Th color={'white'}>Title</Th>
          <Th color={'white'}>Brand</Th>
          <Th color={'white'}>Price</Th>
          <Th color={'white'}>Discount</Th>
          <Th color={'white'}>Strike Price</Th>
          <Th color={'white'}>Edit Price</Th>
          <Th color={'white'}>Remove</Th>
        </Tr>
      </Thead>
      <Tbody  borderRadius={5} >
          {MensData.length!==0 && MensData?.map((el,i)=>(
           <Tr key={el.id} >
           <Td>{i+1}</Td>
           <Td><Image src={el.images[0]}  /></Td>
           <Td>{el.title}</Td>
           <Td>{el.brand}</Td>
           <Td>₹ {el.discounted_price?el.discounted_price: Number(1200)}</Td>
           <Td>{el.discount?el.discount:'(55% OFF)'}</Td>
           <Td textDecoration={'line-through'} >{el.strike_price}</Td>
           <Td><Button bg={"#72749B"} color={'white'} _hover={{color:"black",backgroundColor:"gray.100"}}>Edit</Button></Td>
           <Td><Button bg={"#72749B"} >Remove</Button></Td>
         </Tr>
          ))}
       
      </Tbody>
    </Table>
  </TableContainer>
  </Box>
  </Box>
  )
}

export default MensPage