import { Box, Button, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartAPI } from "../Redux/Cart/Cart.api";
import { fetchCartData } from "../Redux/Cart/Cart.action";
import CartComponent from "./CartComponent";
import LoadingPage from "./LoadingPage";
import PageNotFound from "./PageNotFound";
import Navbar from "../Components/Navbar";
import PaymentNavbar from "../Components/PaymentNavbar";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { loading, error, cartData } = useSelector((store) => store.cart);

  const dispatch = useDispatch();
  const goToAddress = useNavigate()
  const [sampleData, setSampleData] = useState([]);

  const fetchCartAPI = async () => {
    let res = await axios.get(`https://classic-world.onrender.com/cart`);
    const result = res?.data?.map((item) => {
      return {
        ...item,
        isChecked: false,
        qty: 1,
      };
    });
    setSampleData(result);
  };
  useEffect(() => {
    dispatch(fetchCartData());
    fetchCartAPI();
  }, [dispatch]);

  const handleCheckData = (id) => {
    const resultData = sampleData?.map((item) => {
      return item?.id === id ? { ...item, isChecked: !item?.isChecked } : item;
    });
    setSampleData(resultData);
  };

  const handleChangeQty = (value, id) => {
    const resultData = sampleData?.map((item) => {
      return item?.id === id ? { ...item, qty: value } : item;
    });
    setSampleData(resultData);
  };

  let resultcount = 0;
  sampleData
    ?.filter((item) => item.isChecked === true)
    ?.map((item) => {
      resultcount =
        Number(resultcount) + Number(item.discounted_price) * Number(item.qty);
      return resultcount;
    });
  let resultStriked = 0;
  sampleData
    ?.filter((item) => item.isChecked === true)
    ?.map((item) => {
      resultStriked =
        Number(resultStriked) + Number(item.strike_price) * Number(item.qty);
      return resultStriked;
    });

  console.log("resultStriked", resultStriked);

  const resultTotalItem = sampleData?.filter((item)=>(
    item.isChecked === true
  ))
  console.log("resultTotalItem",resultTotalItem)

  const placeOrderObj = {
    "Total MRP": resultcount,
    "Discount on MRP": resultStriked,
  };

  console.log(placeOrderObj);

   


  if (loading) {
    return (
      <>
        <LoadingPage />
      </>
    );
  }

  if (error) {
    return (
      <>
        <PageNotFound />
      </>
    );
  }

  const checkCount = sampleData?.filter((item) => {
    return item?.isChecked === true;
  });

  return (
<>
    <Box>
    <PaymentNavbar/>
      </Box>

    <Box m={{sm:"8rem 1rem", md: "3rem 1rem", lg: "3rem 5rem" }}>
      
      <Flex
        p={{ md: "4rem 5rem", sm: "4rem 0rem", base: "4rem 0.5rem" }}
        alignItems={"-moz-initial"}
        justifyContent={"space-between"}
        flexDirection={{ base: "row", sm: "row", md: "row", lg: "row" }}
        
      >
        <Box width={{ sm: "70%", md: "60%", lg: "55%" }} >
          <Box border={"1px solid #9e998f"}>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              p={"1rem"}
            >
              <Text color={"gray.700"} fontWeight={600} fontSize={"0.9rem"}>
                Check Delivery time & services
              </Text>
              <Button
                fontSize={"0.8rem"}
                h={"2.3rem"}
                borderRadius={0}
                backgroundColor={"#fff"}
                border={"1px solid tomato"}
                outline={"tomato"}
                color={"tomato"}
              >
                {" "}
                ENTER PIN CODE
              </Button>
            </Flex>
          </Box>
          <Box p={"1rem"} border={"1px solid #9e998f"}>
            <Flex
              p={{sm:"0"}}
              fontSize={"0.9rem"}
              alignItems={"center"}
              gap={"1rem"}
            >
              <Text
                color={"gray.700"}
                fontWeight={600}
                fontSize={"0.8rem"}
              >
                {`(${checkCount.length}/${sampleData.length}) ITEMS SELECTED`}
              </Text>
              <Text  _hover={{ color: "tomato", cursor: "pointer" }}
                color={"gray.700"}
                fontWeight={600}
                fontSize={"0.8rem"}>REMOVE</Text>
              <Text>{" | "} </Text>
              <Text
                _hover={{ color: "tomato", cursor: "pointer" }}
                color={"gray.700"}
                fontWeight={600}
                fontSize={"0.8rem"}
              >
                MOVE TO WISHLIST
              </Text>
            </Flex>
          </Box>
          <Box>
            {sampleData?.map((cart) => (
              <CartComponent
                cart={cart}
                handleCheckData={handleCheckData}
                handleChangeQty={handleChangeQty}
              />
            ))}
          </Box>
        </Box>
        <Box
          border={"1px solid gray"}
          width={{ base: "30%", sm: "40%", md: "45%", lg: "45%" }}
          p={"2rem"}
        >
          <Box textAlign={"left"} borderBottom={"1px solid gray"} >
            <Text >PRICE DETAILS ({resultTotalItem.length}{" "}item)</Text>
          </Box>
          <Box p={"1rem 0"} borderBottom={"1px solid gray"}>
            {Object.keys(placeOrderObj).map((item) => {
              return (
                <Flex justifyContent={"space-between"}>
                  <Text>{item}</Text>
                  <Text>{placeOrderObj[item]}</Text>
                </Flex>
              );
            })}
          </Box>
          <Button _hover={{backgroundColor:"white",color:"pink.400",outline:"2px solid #e10765"}} w={"100%"} mt={"2rem"} color={"white"} backgroundColor={"pink.400"} onClick={()=>goToAddress("/address")}>PLACE ORDER</Button>
        </Box>

        
      </Flex>
    </Box>
    </>
  );
};

export default Cart;
