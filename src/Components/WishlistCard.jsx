import { CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const WishlistCard = ({ prod }) => {
  console.log(prod);
  const { brand, discount, discounted_price, images, strike_price } = prod;

  const addToBag = async () => {
    // console.log("newItem:",props)
    await axios
      .post(`https://classic-world.onrender.com/cart/`, prod)
      .then((res) => alert("Added to bag Successfully...."))
      .catch((err) => alert("Already Exists in Your Bag"));
  };

  return (
    <Box w={"230px"} border={"1px solid red"} m={"1rem"} position="relative">
      <Stack spacing={"0.5rem"}>
        tilte
        <Image src={images} />
        <Text>{brand}</Text>
        <Flex
          justifyContent={"space-between"}
          alignItems={"baseline"}
          p={"0 1.5rem"}
          gap={"0.5rem"}
        >
          <Text fontSize={"0.9rem"}> Rs.{discounted_price}</Text>
          <Text
            fontSize={"0.7rem"}
            textDecoration={"line-through"}
            color={"gray.400"}
          >
            Rs.{strike_price}
          </Text>
          <Text fontWeight={"700"} fontSize={"0.7rem"} color={"red.400"}>
            {discount}
          </Text>
        </Flex>
        <Button
          onClick={() => addToBag()}
          _hover={{
            backgroundColor: "white",
            color: "pink.500",
            outlineColor: "pink.500",
          }}
          textAlign={"center"}
          borderRadius={"0.2rem"}
          w={"50%"}
          color={"#fff"}
          backgroundColor={"pink.500"}
          fontSize={"1.2rem"}
          fontWeight={700}
        >
          Add To Bag
        </Button>
      </Stack>
      <Box
        position={"absolute"}
        top={0}
        right={"1rem"}
        color={"white"}
        backgroundColor={"blackAlpha.600"}
        p={"0.5rem"}
      >
        <CloseIcon />
      </Box>
    </Box>
  );
};

export default WishlistCard;
