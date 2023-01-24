import { Box, Button, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWishlistData } from '../Redux/Wishlist/Wishlist.action'
import LoadingPage from './LoadingPage'
import PageNotFound from './PageNotFound'
import WishlistCard from '../Components/WishlistCard'
import FinalNavbar from '../Components/FinalNavbar'
import FinalFooter from '../Components/FinalFooter'

const Wishlist = () => {

    const {loading , error ,wishlistData} =useSelector(store=>store.wishlist)
    const dispatch = useDispatch()
//console.log("wishlist:", wishlistData)
 
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
        <Box textAlign={"left"} px={4} mt={'5rem'} color={"gray.600"} fontSize={"1.2rem"}><Text fontWeight={600} color={"pink.500"} display={"inline-block"}>My WishList : <span style={{color:'gray'}} >{wishlistData.length} Items</span></Text></Box>
        <Box>
            
            <Grid gridTemplateColumns={{base:"repeat(1,1fr)",sm:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(5,1fr)"}} justifyContent={'center'} >
                {
                    wishlistData?.map((wish)=>(
                        <WishlistCard key={wish} prod={wish}/>
                    ))
                }

            </Grid>
        </Box>
      <FinalFooter/>  
    </div>
  )
}

export default Wishlist