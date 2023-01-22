
   import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    
    VStack,
   
    Image,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  import {
    FaFacebook,
    FaTwitter,
    FaYoutube,
   FaInstagram
  } from 'react-icons/fa';
  
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10} m={'auto'} border={'0px solid black'} >
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} border={'0px solid gray'} justifyContent={'space-between'} >
          <Flex direction={"column"} gap={"20px"} lineHeight={"16px"}  border={'0px solid gray'}  >
              <Stack align={'flex-center'} >
              <Text fontSize={"14px"} fontWeight={"bold"}>ONLINE SHOPPING</Text>
              <Link href={'#'}>Men</Link>
              <Link href={'#'}>Women</Link>
              <Link href={'#'}>Kids</Link>
              <Link href={'#'}>Beauty</Link>
              <Link href={'#'}>Gift card</Link>
              <Text>Myntra Insider</Text>
            </Stack>

            <VStack align={'flex-center'}  border={'0px solid gray'} >
              <Text fontSize={"14px"} fontWeight={"bold"}>USEFUL LINKS</Text>
              <Link href={'#'}>Blog</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Site Map</Link>
              <Link href={'#'}>Corporate Information</Link>
              <Link href={'#'}>Whitehat</Link>
           </VStack>
           </Flex>
          
           <Stack align={'flex-center'}  border={'0px solid gray'} lineHeight={"16px"}>
            <Text fontSize={"14px"} fontWeight={"bold"}>CUSTOMER POLICIES</Text>
              <Link href={'#'}>Contact Us</Link>
              <Link href={'#'}>FAQ</Link>
              <Link href={'#'}>T&C</Link>
              <Link href={'#'}>Terms Of Use</Link>
              <Link href={'#'}>Track Orders</Link>
              <Link href={'#'}  >Shipping</Link>
              <Link href={'#'}>Cancellation</Link>
              <Link href={'#'}>Return</Link>
              <Link href={'#'}>Privacy Policy</Link>
              <Link href={'#'}  >Grievance Officer</Link>
            </Stack>
           <VStack>
            <Stack align={'flex-center'}  border={'0px solid gray'} >
            <Stack>
            <Text fontSize={"14px"} fontWeight={"bold"}>EXPERIENCE MYNTRA APP ON MOBILE</Text>
            <Flex gap={"5%"}>
              <Image w={"50%"} src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"/>
              <Image w={"50%"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Available_on_the_App_Store_%28black%29_SVG.svg/203px-Available_on_the_App_Store_%28black%29_SVG.svg.png?20130522010834"/>
            </Flex>
            </Stack>
   
            </Stack>

            <Stack  border={"0px solid red"}  align={'flex-center'}>
            <Text  mt={"30px"} fontSize={"14px"} fontWeight={"bold"}>KEEP IN TOUCH</Text>
             <Flex  gap={"20px"}  border={"0px solid red"} align={'flex-center'}>
      
             <FaFacebook size={"30px"} />
              <FaTwitter size={"30px"}/>
             <FaYoutube size={"30px"}/>
             <FaInstagram size={"30px"}/>
            
             </Flex>
            </Stack>
            </VStack>
            
            <Stack w={"100%"} gap={"10px"} ml={"20%"} align={'flex-center'}  lineHeight={"20px"} border={'0px solid gray'} >
            <Text   fontSize={"14px"} fontWeight={"bold"}>ACCURANCE</Text>
            <Flex  gap={"2px"}>
              
              <Image w={"20%"} src="https://previews.123rf.com/images/arcady31/arcady311304/arcady31130400034/19245976-original-stamp.jpg"/>
              
              <Text fontWeight={"480"}><span>100% ORIGINAL</span> guarantee for all products at myntra.com</Text>

            </Flex>
            <Flex>
            <Image w={"25%"} src="https://ocxooscillator.com/wp-content/uploads/2020/06/30days_Return_OcxoOscillator-1.png"/>
              <Text  mt={"15px"} fontWeight={"480"}>Return within 30days of receiving your order</Text>
            </Flex>
            </Stack>
          </SimpleGrid>
        </Container>
        <Flex  direction ={'column'}>
        <VStack maxW={'6xl'}  m={'auto'} border={'0px solid black'}  >
           
            <Flex w={"full"} display={"flex"} align={'flex-start'}  flexDirection={"column"} border={'0px solid black'}   >
            <Text align={'flex-start'} fontSize={"14px"}  fontWeight={"bold"}>POPULAR SEARCHES</Text>
            <Text align={'flex-start'}>jacketsGreen  dress Boys Clothing Men KurtisTrack PantMen KurtasGym WearParty DressesPalazzo SuitsBoys ClothingGlovesNightyMaxi</Text>
            <Text>WearBriefs dress materialBlack ShortsGeorgette WearBriefs SareesEthnic dressesKids  WearBriefs dressesSleeveless shrugs Boys clothing</Text>
            <Text >Salwar SuitsKurtisDesigner WearBriefs Sarees Sarees & TrunksNike WatchesAscot  SareesTieCorset Tops TunicsLeather  magenta earring</Text>
            <Text >Salwar SuitsKurtisDesigner  Sarees WearBriefs & TrunksNike WatchesAscot WearBriefs  Sarees Bra TieCorset Tops TunicsLeather  magenta </Text>
            <Text>Woodland ShoesSkechers Shoes Sarees Wear  Briefs Shoes Loafers Bra SandalsLotto Sports  Sarees ShoesCasual ShoesWomens Skechers </Text>
            <Flex gap={'5px'} mt={"2%"}>
              <Text>In case of any concern</Text>
              <Text color={"blue"}  fontWeight={"bold"}>Contact Us</Text>
            </Flex>
            </Flex>
            </VStack>

             <VStack maxW={'xl'} py={"5"}  border={'0px solid black'} ml={"7%"}>
              <Flex w={"auto"} display={"flex"} align={'flex-start'}  flexDirection={"column"}>
            <Text align={'flex-start'} fontSize={"14px"} fontWeight={"bold"}>Registered Office Address</Text>
              <Text>Begonia and Clover situated,</Text>
              <Text>BegEmbassy Tech Village,</Text>
              <Text>Outer Ring Road,</Text>
              <Text>Devarabeesanahalli Village,</Text>
              <Text href={'#'}>Varthur Hobli,</Text>
              <Text>Bengaluru – 560103, India</Text>
              
              <Text >CIN: U72300KA2007PTC041799</Text>
               
              <Text>Telephone: +91-80-61561999</Text>
       
            </Flex>
              
            </VStack> 
            </Flex>

        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
           
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            © 2023 www.myntra.com.All rights reserved
          </Text>
        </Box>
      </Box>
    );
  }