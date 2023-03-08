import { Box, Button, Image, Grid, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWishlistData } from '../Redux/Wishlist/Wishlist.action'
import LoadingPage from './LoadingPage'
import PageNotFound from './PageNotFound'
import WishlistCard from '../Components/WishlistCard'
import FinalNavbar from '../Components/FinalNavbar'
import FinalFooter from '../Components/FinalFooter'
import { useNavigate } from 'react-router-dom'
import NavSearch from '../Components/NavSearch'

const Wishlist = () => {

    const {loading , error ,wishlistData} =useSelector(store=>store.wishlist)
    const dispatch = useDispatch()
    const navigate = useNavigate();
useEffect(()=>{
    dispatch(fetchWishlistData())
},[dispatch])

if(loading){
    return <><LoadingPage/></>
}
if(error){
    return <><PageNotFound/></>
}
  return (
    <div>
      <FinalNavbar/>
      <Box border={"0px solid black"} display={{base:"flex",sm:"flex",md:"none",lg:"none"}} mt={"75px"} mb={"-60px"} width={"85%"} mx={"auto"} >
        <NavSearch/>
      </Box>
        <Box textAlign={"left"} px={4} mt={'5rem'} color={"gray.600"} fontSize={"1.2rem"}><Text fontWeight={600} color={"pink.500"} display={"inline-block"}>My WishList : <span style={{color:'gray'}} >{wishlistData.length} Items</span></Text></Box>

        {wishlistData.length===0?<Stack height={"100vh"} alignItems={"center"} align={"center"} >
        <Heading color={"pink.500"}fontSize={[25,30,35,35]} pt={"70px"}>MY WISHLIST</Heading>
        <Image src='https://www.pavejewelers.com/assets/images/empty-wishlist.png' />
        <Heading color={"pink.500"}fontSize={[18,20,22,25]} >YOUR WISHLIST IS EMPTY!!</Heading>
        <Text fontSize={[15,18,18,20]}>Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</Text>
        <Button bg={"teal.300"} color={"white"} _hover={{backgroundColor:"#D63F8C"}} onClick={()=> navigate("/")} >Continue Shopping</Button>
        </Stack>:<Box>
            
            <Grid gridTemplateColumns={{base:"repeat(1,1fr)",sm:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(5,1fr)"}} justifyContent={'center'} >
                {
                    wishlistData?.map((wish)=>(
                        <WishlistCard key={wish} prod={wish}/>
                    ))
                }

            </Grid>
        </Box>}
        
      <FinalFooter/>  
    </div>
  )
}

export default Wishlist