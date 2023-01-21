import { Flex, Image , Box, HStack , Text } from '@chakra-ui/react'
import React from 'react'
import {Link, NavLink } from 'react-router-dom';
import CWLOGO from '../assets/CWLOGO-1.png';

const links=[
  {path:"/bag" , text:"Bag"},
  {path:"/address" , text:"Address"},
  {path:"/payment" , text:"Payment"}
]

 

function PaymentNavbar() {
  const defaultStyle={
    color:"darkgray",
    textDecoration:"none",
    fontSize:"15px",
    fontWeight:"bold"
}
const activeStyle={
    color:"green",
    textDecoration:"underline",
    fontSize:"15px",
    fontWeight:"bold"
}
  return (
    <div>
      <Flex justifyContent={"space-between"} border="1px solid lightgray" >
        <Box>
          <Link to="/" >
          <Image src={CWLOGO} alt="logo" w={["50px" , "60px" , "70px"]}  />
          </Link>
        </Box>
        <HStack spacing={[2 , 3, 4]} >
          {
           links.map((link)=>(
            <Box>
            <NavLink
            key={link.path}
            to={link.path}
            style={({isActive})=>{
              return isActive ? activeStyle : defaultStyle
            }} 
            >
              {link.text}
            </NavLink>
            
            </Box>
           ))
          }
        </HStack>
        <Box>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-izi1oOv4HzrRkvRftiYqNGjG8OnmjHgSHA&usqp=CAU" w={["50px" , "60px" , "70px"]} />
        </Box>
      </Flex>
    </div>
  )
}

export default PaymentNavbar