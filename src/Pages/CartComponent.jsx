import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Checkbox,
  Flex,
  Image,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const CartComponent = ({ cart, handleCheckData, handleChangeQty }) => {

const removeFromCart=(id)=>{
    axios.delete(`https://classic-world.onrender.com/cart/${id}`).then((res)=>{alert("Removed from Bag...")
    window.location.reload()
  })
    .catch((err)=>console.log(err))
}

  return (
    <Box>
      <Box border={"0px solid #9e998f"} mb={5}  boxShadow={'base'} >
        <Flex >
          <Box
            width={{ sm: "30%", md: "30%", lg: "33%" }}
            position={"relative "}
          >
            <Image src={cart.images}></Image>
            <Checkbox
              top={1}
              left={1}
              isChecked={cart.isChecked}
              backgroundColor={"blackAlpha.300"}
              position={"absolute"}
              onChange={() => handleCheckData(cart.id)}
            ></Checkbox>
          </Box>
          <Stack w={"100%"} ml={2} spacing={3}>
            <Box
              pl={"0.5rem"}
              textAlign={"left"}
              width={{ sm: "100%", md: "100%", lg: "100%" }}
            >
              <Text fontSize={{ md: "0.8rem" }} fontWeight={"700"}>
                {cart.title}
              </Text>
              <Text fontSize={{ md: "0.8rem" }} mb={1} >
                <Text display={"inline-block"} color={"gray.400"}>
                  Sold by:
                </Text>
                {cart.brand}
              </Text>
              <Box >
                <Flex alignItems={"center"} gap={"1rem"}>
                  <Text
                    fontSize={{ sm: "0.8rem", md: "1rem" }}
                    fontWeight={700}
                  >
                    Qty:
                  </Text>
                  <Select
                    fontSize={"0.7rem"}
                    value={cart.qty}
                    w={{ md: "25%", lg: "35%", sm: "25%" }}
                    size={"xs"}
                    onChange={(e) => handleChangeQty(e.target.value, cart.id)}
                  >
                    {[1, 2, 3, 4].map((item, i) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))}
                  </Select>
                </Flex>
              </Box>

              <Flex>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"baseline"}
                  gap={"0.5rem"}
                  mt={1}
                >
                  <Text fontSize={"0.9rem"} fontWeight={"600"}>
                    Rs.{cart.discounted_price * cart.qty}
                  </Text>
                  <Text
                    fontSize={"0.7rem"}
                    alignItems={"baseline"}
                    textDecoration={"line-through"}
                  >
                    Rs.{cart.strike_price * cart.qty}
                  </Text>
                  <Text fontSize={"0.7rem"} color="pink.300">
                    {cart.discount}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Stack>
        <Box position={"relative"}>
        <CloseIcon position={"absolute"} top={2} right={3} onClick={()=>removeFromCart(cart.id)}/>
      </Box>
        </Flex>
      </Box>
      
    </Box>
  );
};

export default CartComponent;
