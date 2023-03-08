import { Box, Button, Flex, Grid, Image, Stack, Text } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCartData } from "../Redux/Cart/Cart.action";
import FinalNavbar from "../Components/FinalNavbar";
import FinalFooter from "../Components/FinalFooter";
import { getAdminWomenSingleProductAPI } from "../Redux/Admin/Admin.api";
import { useToast } from '@chakra-ui/react';
import NavSearch from "../Components/NavSearch";

const WomenSingleProductPage = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const [poster, setPoster] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();

  const { id } = useParams();
  const fetchSingleProduct = async () => {
    await getAdminWomenSingleProductAPI(id)
      .then((res) => {
        setSingleProduct(res);
        setPoster(res?.images[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

console.log(singleProduct,id);
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

  const handleAddToWishlist = async () => {
    await axios
      .post(`https://classic-world.onrender.com/WishList/`, singleProduct)
      .then((res) => toast({
        title: 'Successfully Added.',
        description: "This product has been added to your wishlist.",
        status: 'success',
        duration:1500,
        isClosable: true,
      }))
      .catch((err) => toast({
        title: 'Already Exist.',
        description: "This product already exist in your wishlist.",
        status: 'error',
        duration:1500,
        isClosable: true,
      }));
  };
  const AddtoBag = async () => {
    await axios
      .post(`https://classic-world.onrender.com/cart/`, singleProduct)
      .then((res) => {
        toast({
          title: 'Successfully Added.',
          description: "This product has been added to your cart.",
          status: 'success',
          duration:1500,
          isClosable: true,
        });
        dispatch(fetchCartData());
      })
      .catch((err) => toast({
        title: 'Already Exist.',
        description: "This product already exist in your cart.",
        status: 'error',
        duration:1500,
        isClosable: true,
      }));
  };

  return (
    <div style={{ width: "100%", border: "0px solid red", margin: "auto" }}>
      <FinalNavbar />
      <Box border={"0px solid black"} display={{base:"flex",sm:"flex",md:"none",lg:"none"}} mt={"75px"} mb={"-60px"} width={"85%"} mx={"auto"} >
        <NavSearch/>
      </Box>
      <div style={{ width: "100%", border: "0px solid red", margin: "auto" }}>
        <Box
          mb={"4rem"}
          width={"100%"}
          margin={"auto"}
          mt={100}
          border={"0px solid black"}
        >
          <Flex
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
            alignItems={"flex-start"}
            m={"auto"}
            width={{ base: "98%", sm: "80%", md: "98%", lg: "70%" }}
            border={"0px solid black"}
          >
            <Box
              w={{ base: "100%", sm: "100%", md: "53%", lg: "44%" }}
              boxShadow={
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
              }
              m={"auto"}
              mt={0}
              border={"0px solid red"}
            >
              <Image
                src={poster}
                borderRadius={20}
                m={"auto"}
                w={"100%"}
                p={"0.5rem"}
              />
            </Box>

            <Stack
              spacing={5}
              w={{ base: "100%", sm: "100%", md: "55%", lg: "55%" }}
              m="auto"
              mt={0}
              p={"0 2rem"}
              boxShadow={
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
              }
              border={"0px solid green"}
            >
              <Text
                pt={"1rem"}
                textAlign={"left"}
                fontSize={"1.2rem"}
                fontWeight={500}
                color={"gray.500"}
                noOfLines={{ base: 1, sm: 1 }}
              >
                {title}
              </Text>

              <Flex alignItems={"baseline"}>
                <Text fontWeight={600} fontSize={"1.3rem"} color={"gray.700"}>
                  ₹ {discounted_price}
                </Text>
                <Text pl={"1.2rem"} fontSize={"0.9rem"}>
                  MRP{" "}
                  <Text
                    display={"inline-block"}
                    textDecoration={"line-through"}
                  >
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
                <Text m={" 0.5rem 0"} fontWeight={"500"} fontSize={"1rem"}>
                  Select Size
                </Text>
                <Grid
                  gridTemplateColumns={{
                    base: "repeat(4,1fr)",
                    sm: "repeat(7,1fr)",
                    md: "repeat(7,1fr)",
                    lg: "repeat(10,1fr)",
                  }}
                  gap={"0.5rem"}
                >
                  {size?.map((sz, i) => (
                    <Button
                      key={i}
                      backgroundColor={"#fff"}
                      border={"1px solid gray"}
                      borderRadius={"50%"}
                      p={"1.5rem"}
                    >
                      {sz}
                    </Button>
                  ))}
                </Grid>
              </Box>

              <Stack
                spacing={4}
                textAlign={"left"}
                mt={-1}
                borderTop={"2px solid gray"}
              >
                <Text m={"0.5rem 0"} fontWeight={"500"} fontSize={"1rem"}>
                  Product Details
                </Text>
                <Flex
                >
                  <Text color={"gray.600"} display={"inline-block"}>
                    Category : <span style={{color:"gray"}} >{category}</span>
                    </Text>
                </Flex>

                <Flex
                >
                  <Text color={"gray.600"} display={"inline-block"}>
                    Brand : <span style={{color:"gray"}} >{brand}</span>
                  </Text>
                </Flex>

                <Flex
                >
                   <Text color={"gray.600"} display={"inline-block"}>
                    Description : <span style={{color:"gray"}} >{title}</span>
                    </Text>
                </Flex>
                <Flex
                >
                   <Text color={"gray.600"} display={"inline-block"}>
                    Rating : <span style={{color:"gray"}} >{rating}</span>
                    </Text>
                </Flex>
                <Flex
                >
              <Text color={"gray.600"} display={"inline-block"}>
                    Review : <span style={{color:"gray"}} >{rating_count}</span>
                    </Text>
                </Flex>
              </Stack>
              <Box
                textAlign={"left"}
                w={"100%"}
                mt={"1rem"}
                borderTop={"2px solid gray"}
                p={"1rem"}
                display={{
                  base: "inlibe-block",
                  md: "inline-block",
                  lg: "inline-block",
                }}
              >
                <Flex
                  gap={"0.5rem"}
                  justifyContent={"center"}
                  mt={3}
                  direction={{
                    base: "column",
                    sm: "row",
                    md: "row",
                    lg: "row",
                  }}
                >
                  <Button
                   _hover={{ border: "2px solid #BB1679",borderRadius:5 }}
                   fontSize={"1.2rem"}
                   colorScheme={"pink"}
                   borderRadius={"0.2rem"}
                   onClick={handleAddToWishlist}
                   p={2}
                   variant={"outline"}
                   display={"flex"}
                   gap={3}
                 >
                  
                     <FaRegHeart size={21} backgroundColor="#fff" />
                     Wishlist
                 </Button>
                  <Button
                    _hover={{
                      backgroundColor: "white",
                      color: "pink.500",
                      outlineColor: "pink.500",
                    }}
                    borderRadius={"0.2rem"}
                    color={"#fff"}
                    backgroundColor={"pink.500"}
                    onClick={AddtoBag}
                    fontSize={"1.2rem"}
                    fontWeight={700}
                    //border={'2px solid gray'}
                    px={2}
                  >
                    Add To Bag
                  </Button>
                </Flex>
              </Box>
            </Stack>
          </Flex>
        </Box>
      </div>
      <FinalFooter />
    </div>
  );
};

export default WomenSingleProductPage;
