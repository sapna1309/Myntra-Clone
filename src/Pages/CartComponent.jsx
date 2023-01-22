import { Box, Button, Checkbox, Flex, Text } from "@chakra-ui/react";
import React from "react";

const CartComponent = ({ cart }) => {
  return (
    <Box m={"0.2rem"}>

      {/* CartComponent */}
      <Box border={"1px solid #9e998f"}>
        <Flex alignItems={"center"} justifyContent={"space-between"} p={"1rem"}>
          <Text color={"gray.700"} fontWeight={600} fontSize={"0.9rem"}>Check Delivery time & services</Text>
          <Button fontSize={"0.8rem"} h={"2.3rem"} borderRadius={0} backgroundColor={"#fff"} border={"1px solid tomato"} outline={"tomato"} color={"tomato"} > ENTER PIN CODE</Button>
        </Flex>
      </Box>
      <Box>
        <Flex p={"1rem"}>
         <Text>REMOVE</Text>
         <Text>|</Text>
         <Text>MOVE TO WISHLIST</Text>
         </Flex>
      </Box>
       <Flex>

       </Flex>
    </Box>
  );
};

export default CartComponent;
