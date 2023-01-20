import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";

import axios from "axios";
//import { prodErrorMap } from "firebase/auth";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { getSingleProductAPI } from "../Redux/Product/Product.api";

const SingleProductPage = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const [poster, setPoster] = useState("");

  const { id } = useParams();
  // console.log(id)

  const fetchSingleProduct = async () => {
    await getSingleProductAPI(id)
      .then((res) => {
        setSingleProduct(res?.data);
        setPoster(res?.data?.images[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  // console.log(singleProduct);

  const {
    title,
    brand,
    category,
    discount,
    discounted_price,
    rating,
    rating_count,
    size,
    strike_price,
  } = singleProduct;

  const handleAddToWishlist= async ()=>{
    alert("sdfghjkl")
    // console.log("newItem:",props)
    await axios.post(`https://classic-world.onrender.com/WishList/`,{singleProduct})
    .then((res)=>alert("Added to Wishlist Successfully...."))
    .catch((err)=>alert(err))

  }
  const AddtoBag= async ()=>{
    // console.log("newItem:",props)
    await axios.post(`https://classic-world.onrender.com/cart/`,{singleProduct})
    .then((res)=>alert("Added to bag Successfully...."))
    .catch((err)=>alert(err))

  }


  return (

    <div>
      <Navbar/>
      <div>
      <Box mb={"4rem"} mt={120} >

        {/* box-shadow: ; */}
        <Flex
          flexDirection={{ sm: "column", md: "row", lg: "row" }}
          justifyContent={"space-between"}
          p={"0.5rem 3rem"}
        >
          <Box w={{ md: "100%" }} boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}>
            <Image 
            src={poster}
            position={"relative"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
              h={"100%"}
              m={"auto"}
              w={{ sm: "50%", md: "70%" }}
              p={"0.5rem"}
              
            /> 
            
          </Box>

          <Box  w={"100%"}  p={"0 2rem"} boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}>
            <Text
              pt={"1rem"}
              textAlign={"left"}
              fontSize={"1.2rem"}
              fontWeight={500}
              color={"gray.500"}
            >
              {title}
            </Text>

            <Flex alignItems={"baseline"}>
              <Text fontWeight={600} fontSize={"1.3rem"} color={"gray.700"}>
                ₹{discounted_price}
              </Text>
              <Text pl={"1.2rem"} fontSize={"0.9rem"}>
                MRP{" "}
                <Text display={"inline-block"} textDecoration={"line-through"}>
                  {strike_price}
                </Text>
              </Text>
              <Text pl={"1.2rem"} fontWeight={700} color={"tomato"}>
                {discount}
              </Text>
            </Flex>

            <Text
              fontSize={"0.9rem"}
              fontWeight={700}
              textAlign={"left"}
              color={"#3bbaa1"}
            >
              inclusive of all taxes
            </Text>

            <Box textAlign={"left"} mt={"1rem"} borderTop={"2px solid gray"}>
              <Text m={" 0.5rem 0"} fontWeight={"500"} fontSize={"0.8rem"}>
                Select Size
              </Text>
              <Flex gap={"0.5rem"}>
                {size?.map((sz,i) => (
                  <Button
                  key={i}
                    backgroundColor={"#fff"}
                    border={"1px solid gray"}
                    borderRadius={"50%"}
                    p={"1rem"}
                  >
                    {sz}
                  </Button>
                ))}
              </Flex>
            </Box>

            <Box textAlign={"left"} mt={"1rem"} borderTop={"2px solid gray"}>
              <Text m={"0.5rem 0"} fontWeight={"500"} fontSize={"0.8rem"}>
                Product Details
              </Text>
              <Flex
                flexDirection={{ sm: "column", lg: "row" }}
                justifyContent={"space-between"}
              >
                <Text color={"gray.600"} display={"inline-block"}>
                  Category:
                </Text>
                <Text color={"gray.400"}> {category}</Text>
              </Flex>

              <Flex
                flexDirection={{ sm: "column", lg: "row" }}
                justifyContent={"space-between"}
              >
                <Text color={"gray.600"} display={"inline-block"}>
                  Brand:
                </Text>
                <Text color={"gray.400"}>
                  {"  "}
                  {brand}
                </Text>
              </Flex>

              <Flex
                flexDirection={{ sm: "column", lg: "row" }}
                justifyContent={"space-between"}
              >
                <Text color={"gray.600"} display={"inline-block"}>
                  Description:
                </Text>
                <Text color={"gray.400"}> {title}</Text>
              </Flex>
              <Flex
                flexDirection={{ sm: "column", lg: "row" }}
                justifyContent={"space-between"}
              >
                <Text color={"gray.600"} display={"inline-block"}>
                  Rating: 
                </Text>
                <Text color={"gray.400"}> {rating}</Text>
              </Flex>
              <Flex
                flexDirection={{ sm: "column", lg: "row" }}
                justifyContent={"space-between"}
              >
                <Text color={"gray.600"} display={"inline-block"}>
                  Review: 
                </Text>
                <Text color={"gray.400"}> {rating_count}</Text>
              </Flex>
            </Box>
            <Box
              textAlign={"left"}
              w={"100%"}
              mt={"1rem"}
              borderTop={"2px solid gray"}
              p={"1rem"}
              display={{ base: "inlibe-block", md: "inline-block", lg: "inline-block" }}
            >
              {/* fontSize={"1.2rem"} color={"pink.500"} fontWeight={700} */}
              <Flex gap={"0.5rem"} justifyContent={"center"}>
                <Button _hover={{color:"black"}} fontSize={"1.2rem"} color={"pink.500"} outlineColor={"gray"} borderRadius={"0.2rem"} w={"50%"} onClick={handleAddToWishlist}>
                  <Flex gap={"0.5rem"}>
                  <FaRegHeart fontSize={"1.5rem"} backgroundColor="#fff"/>
                    Wishlist
                  </Flex>
                  
                </Button>
                <Button
                _hover={{backgroundColor:"white",color:"pink.500",outlineColor:"pink.500"}}
                  borderRadius={"0.2rem"}
                  w={"50%"}
                  color={"#fff"}
                  backgroundColor={"pink.500"}
                  onClick={AddtoBag}
                  fontSize={"1.2rem"}
                  fontWeight={700}
                >
                  Add To Bag
                </Button>
              </Flex>
            </Box>
            {/* <Box
        display={{ md: "none", lg: "none" }}
        position={"fixed"}
        bottom={0}
        w={"100%"}
        border={"1px solid gray"}
        m={"auto"}
        p={"0.9rem"}
        backgroundColor={"#fff"}
      >
        <Flex justifyContent={"space-between"}>
          <Button outlineColor={"gray"} borderRadius={"0.2rem"} w={"49%"} onClick={handleAddToWishlist}>
            WISHLIST
          </Button>
          <Button
            borderRadius={"0.2rem"}
            w={"49%"}
            color={"#fff"}
            backgroundColor={"pink.500"}
          >
            ADD TO BAG
          </Button>
        </Flex>
      </Box> */}
          </Box>
        </Flex>
      </Box>
     
      </div>
      <Footer/>
    </div>
  );
};

export default SingleProductPage;
