import {
  Box,
  Avatar,
  Flex,
  Button,
  Card,
  CardHeader,
  Heading,
  IconButton,
  CardBody,
  CardFooter,
  AvatarBadge,
  Divider,
} from '@chakra-ui/react';
import {AiOutlineShoppingCart,AiOutlineDelete,AiOutlineMail} from 'react-icons/ai'
import { BsRecord2,BsTelephoneInbound,BsThreeDotsVertical } from 'react-icons/bs'


export default function UserCard({fname,lname,email,contact,isAuth,id,deleteUsers}) {
  return (
    <Card maxW='4xl' paddingX={3}  mt={50}boxShadow='md' bgGradient="linear(to-t, pink,white,white)" >
  <CardHeader>
    <Flex spacing='4'  >
      <Flex flex='1' gap='4' alignItems='center'flexWrap='wrap'>
       {isAuth? <Avatar name={`${fname}+${lname}`} src='https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' size={'lg'} >
        <AvatarBadge boxSize='1em' bg='green.500' />
        </Avatar>: <Avatar name={`${fname}+${lname}`} src='https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' size={'lg'} >
        <AvatarBadge boxSize='1em' bg='red.500' />
        </Avatar>}
        <Box textAlign={'left'}>
          <Heading ml={4} size='md' fontWeight={'semibold'} >{fname} {lname}</Heading>
          <Button  fontSize={18} fontWeight={'normal'} bg={'none'} leftIcon={<AiOutlineMail/>} >  {email}</Button>
          <Button fontSize={18} fontWeight={'normal'} bg={'none'} leftIcon={<BsTelephoneInbound/>} >  {contact}</Button>
        </Box>
        
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        icon={<BsThreeDotsVertical />}
      />
      
    </Flex>
  </CardHeader>
  <CardBody>
  </CardBody>
 <Divider/>
  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '146px',
        maxW:'160px'
      },
    }}
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