import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
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

  console.log(singleProduct);

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
              m={"auto"}
              w={{ sm: "50%", md: "70%" }}
              p={"0.5rem"}
              src={poster}
            /> 
            <Box>
           
              {rating}|{rating_count}
            </Box>
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
                {size?.map((sz) => (
                  <Button
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
            </Box>
            <Box
              textAlign={"left"}
              w={"100%"}
              mt={"1rem"}
              borderTop={"2px solid gray"}
              p={"1rem"}
              display={{ base: "none", md: "inline-block", lg: "inline-block" }}
            >
              <Flex gap={"0.5rem"} justifyContent={"center"}>
                <Button outlineColor={"gray"} borderRadius={"0.2rem"} w={"50%"}>
                  Wishlist
                </Button>
                <Button
                  borderRadius={"0.2rem"}
                  w={"50%"}
                  color={"#fff"}
                  backgroundColor={"pink.500"}
                >
                  Add To Bag
                </Button>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box
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
          <Button outlineColor={"gray"} borderRadius={"0.2rem"} w={"49%"}>
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
      </Box>
      </div>
      <Footer/>
    </div>
  );
};

export default SingleProductPage;
