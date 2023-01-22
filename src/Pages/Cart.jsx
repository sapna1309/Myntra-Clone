import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../Redux/Cart/Cart.action";
import CartComponent from "./CartComponent";
import LoadingPage from "./LoadingPage";
import PageNotFound from "./PageNotFound";

const Cart = () => {

    const {loading ,error,cartData} = useSelector(store=>store.cart)

    const dispatch = useDispatch()
    console.log(cartData)

    useEffect(()=>{
        dispatch(fetchCartData())
    },[dispatch])

    if(loading){
       return <><LoadingPage/></>
    }

    if(error){
      return  <><PageNotFound/></>
    }

  return (
    <Box>
      Cart
      <Flex
        p={{md:"4rem 5rem",sm:"4rem 0rem",base:"4rem 0.5rem"}}
        alignItems={"center"}
        border={"1px solid red"}
        justifyContent={"space-between"}
        flexDirection={{base:"column",sm:"column",md:"row",lg:"row"}}

      >
        <Box border={"1px solid blue"} width={{sm:"90%",md:"55%",lg:"55%"}}>
            right
            {
                cartData?.map((cart)=>(

                    <CartComponent cart={cart}/>
                ))
            }



        </Box>
        <Box border={"1px solid green"} width={{base:"100%",sm:"90%",md:"45%",lg:"45%"}}>
          left
        </Box>
      </Flex>
    </Box>
  );
};

export default Cart;
