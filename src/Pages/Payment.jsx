import { Box, Flex, FormLabel, HStack, Stack , Text} from '@chakra-ui/react'
import React from 'react'
import PaymentNavbar from '../Components/PaymentNavbar'

// https://w7.pngwing.com/pngs/679/616/png-transparent-sales-discounts-and-allowances-computer-icons-dicount-miscellaneous-angle-text.png

function Payment() {
  return (
    <div>
        <PaymentNavbar/>
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        lineHeight={"18.5714px"}
        border={"0px solid gray"}
        >
          <HStack 
          spacing={[0, 0, 8]} mx={'auto'}  py={12} px={6} border={"0px solid gray"} alignItems={"flex-start"} 
          display={["grid" , "grid" , "flex"]}
          w={["full" ,"full" ,"70%"] }
          >

            <Box
            border={"1px solid lightgray"}
            p={6}
            mb={4}
            >
           <Stack>
            <Box  border={"1px solid lightgray"}>
                
            </Box>

           </Stack>
            </Box>
            <Box border={"px solid gray"} w={["full" , "full" , "45%"]} marginTop={[8, 8,0]}  >
            <Stack p={4} >
                <FormLabel fontSize={"12px"} fontFamily={"1000"} >PRICE DEATILS (items)</FormLabel>
                <HStack justifyContent={"space-between"} >
                   <Text fontSize={"14px"} >Total MRP</Text>
                   <Text>₹3,498</Text>
                </HStack>
                <HStack justifyContent={"space-between"} >
                   <Text fontSize={"14px"} >Discount on MRP</Text>
                   <Text color={"green"} >-₹3,498</Text>
                </HStack>
                <HStack justifyContent={"space-between"} >
                <HStack><Text fontSize={"14px"}>Convenience Fee </Text><Text color={"#ff3f6c"}  fontSize={"13px"} fontWeight={"500"} >Know More</Text> </HStack>
                   <HStack><Text fontSize={"14px"}>₹99 </Text><Text color={"green"}  fontSize={"13px"} fontWeight={"500"} >FREE</Text> </HStack>
                </HStack>
                <hr/>
                <HStack justifyContent={"space-between"} >
                   <Text fontSize={"14px"} fontWeight={"500"} >Total Amount</Text>
                   <Text fontSize={"14px"} fontWeight={"500"} >₹3,498</Text>
                </HStack>

            </Stack>
          </Box>
          </HStack>
        </Flex>
    </div>
  )
}

export default Payment