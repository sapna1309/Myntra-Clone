import {
  Box,
  Avatar,
  Flex,
  Button,
  Card,
  CardHeader,
  Heading,
  IconButton,
  CardFooter,
  AvatarBadge,
  Divider,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Stack,
} from '@chakra-ui/react';
import {AiOutlineShoppingCart,AiOutlineDelete,AiOutlineMail} from 'react-icons/ai'
import { BsRecord2,BsTelephoneInbound,BsThreeDotsVertical } from 'react-icons/bs'
export default function UserCard({name,email,contact,isAuth,id,deleteUsers, image,logindetails}) {
 
  const {lastSignInTime,createdAt,creationTime,lastLoginAt} = logindetails
    console.log(lastSignInTime,createdAt,creationTime,lastLoginAt);
  return (
    <Card maxW='4xl' border={"0px solid grey"} mt={50}boxShadow='md' bgGradient="linear(to-t, pink,white,white)" >
  <CardHeader>
    <Flex >
      <Flex flex='1' gap='4' border={"0px solid green"} alignItems='center' flexWrap='wrap'>
       {image!=="" && isAuth===true? <Avatar src={image} size={'lg'} >
        <AvatarBadge boxSize='1em' bg='green.500' />
        </Avatar>: image==="" && isAuth===true? <Avatar name={name}  size={'lg'} >
        <AvatarBadge boxSize='1em' bg='green.500' />
        </Avatar> : image!=="" && isAuth===false? <Avatar src={image}  size={'lg'} >
        <AvatarBadge boxSize='1em' bg='red.500' />
        </Avatar> : <Avatar name={name}  size={'lg'} >
        <AvatarBadge boxSize='1em' bg='red.500' />
        </Avatar> }
        <Box textAlign={'left'}>
          <Heading ml={4} size='md' fontWeight={'semibold'} >{name}</Heading>
          <Button  fontSize={18} fontWeight={'normal'} bg={'none'} leftIcon={<AiOutlineMail/>} >  {email}</Button>
          <Button fontSize={18} fontWeight={'normal'} bg={'none'} leftIcon={contact!==null?<BsTelephoneInbound/>:null} >  {contact}</Button>
        </Box>
        
      </Flex>
      <Flex justifyContent="flex-end" border={"0px solid black"} >
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
            <Button bg={'none'} _hover={{color:'white',backgroundColor:'pink.700'}}  >
            <IconButton
              aria-label="Right menu"
              icon={<BsThreeDotsVertical />}
              variant="ghost"
              w="fit-content"
              bg={'none'}
              fontWeight={'bold'}
              _hover={{color:'white',backgroundColor:'pink.700'}} 
            />
            </Button>
          </PopoverTrigger>
          <PopoverContent w="fit-content" _focus={{ boxShadow: 'md' }}>
            <PopoverArrow />
            <PopoverBody>
              <Stack textAlign={'left'}  >
              <Text fontWeight={'bold'} color={'pink.700'} fontSize={20}>Login Details</Text>
              <Stack boxShadow={'md'} padding={2} spacing={0} bgGradient="linear(to-t, pink,white,white)"  >
              <Text fontWeight={'semibold'}>Acount created At</Text>
              <Text > {creationTime!==""?creationTime:"No Such Details Found"}</Text>
              </Stack>
              <Stack boxShadow={'md'} padding={2} spacing={0}bgGradient="linear(to-t, pink,white,white)" >
              <Text fontWeight={'semibold'} >Last SignIn At</Text>
              <Text > {lastSignInTime!==""?lastSignInTime:"No Such Details Found"}</Text>
              </Stack>
             
         
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
      
    </Flex>
  </CardHeader>
 <Divider/>
  <CardFooter
  border={"0px solid blue"}
    justifyContent='space-between'
    flexWrap='wrap'
  >
    <Button flex='1' _hover={{color:'white',backgroundColor:'pink.700'}} variant='ghost' leftIcon={<AiOutlineShoppingCart />}>
      Cart
    </Button>
    <Button flex='1' _hover={{color:'white',backgroundColor:'pink.700'}} variant='ghost' leftIcon={<BsRecord2 />}>
      Order
    </Button>
    <Button flex='1' _hover={{color:'white',backgroundColor:'pink.700'}} variant='ghost' leftIcon={<AiOutlineDelete />} onClick={()=>deleteUsers(id)} >
      Delete
    </Button>
  </CardFooter>
</Card>
  );
}