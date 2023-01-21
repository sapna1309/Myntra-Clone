import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWishlistData } from '../Redux/Wishlist/Wishlist.action'
import LoadingPage from './LoadingPage'
import PageNotFound from './PageNotFound'
import WishlistCard from '../Components/WishlistCard'

const Wishlist = () => {

    const {loading , error ,wishlistData} =useSelector(store=>store.wishlist)
    const dispatch = useDispatch()
console.log("wishlist:", wishlistData)
 
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
        <Box p={"5rem 3rem 0 3rem"} textAlign={"left"} color={"gray.600"} fontSize={"1.2rem"}><Text fontWeight={600} color={"gray.800"} display={"inline-block"}>My WishList</Text> {wishlistData.length} items</Box>
        <Box p={"3rem 5rem"}>
            
            <Flex flexWrap={"wrap"} m={"auto"}>
                {
                    wishlistData?.map((wish)=>(
                        <WishlistCard prod={wish}/>
                    ))
                }

            </Flex>
        </Box>
        
    </div>
  )
}

export default Wishlist