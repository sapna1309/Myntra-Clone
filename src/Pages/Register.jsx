import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {Link, useNavigate} from "react-router-dom"
import GoogleButton from 'react-google-button';
import { createUserWithEmailAndPassword , updateProfile} from 'firebase/auth';
import { auth } from '../Components/firebase';
//import { async } from '@firebase/util';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [value , setValue]=useState({
    fname:"",
    lname:"",
    email:"",
    password:"",
  })
  const [submitbutton , setSubmitbutton]=useState(false)
  const navigate=useNavigate()

  const[error, setError]=useState("")

  const handleSubmit=()=>{
    
    if(!value.fname || !value.email || !value.password ){
          setError("fill all fields")
          return 
    }
    console.log(value);
    setError("")
    setSubmitbutton(true)
    createUserWithEmailAndPassword(auth,value.email,value.password)
    .then(async(res)=>{

      setSubmitbutton(false)
      const user=res.user
      await updateProfile(user,{
        displayName:value.fname
      })
      navigate("/")


      console.log(user)
      console.log(res)
    })
    .catch((err)=>{
      setSubmitbutton(false)
      setError(err.message)
      console.log("error-", err.message)
    })

  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue("rgb(248, 230, 233)")}>
      <Stack spacing={0} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}  >
          <Heading fontSize={'2xl'} textAlign={'center'}>
            Sign up  with Classic World
          </Heading>
          
            
        
          <Text fontSize={'lg'} color={'gray.600'}>
            Welcome to Family ✌️
          </Text>
          

          
           {/* <Image    src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/21/8fca3ae9-d245-443b-a142-8d568247794c1663700243878-offer-banner-300-600x240-code-_-MYNTRA400.jpg" w="100%" /> */}
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          
          p={8}>
          <Stack spacing={4}>
            <VStack>
              <Text fontWeight={"500"} >Easly using</Text>
              <GoogleButton/>
              <Text fontWeight={"500"} >-Or using E-mail-</Text>
              
            </VStack>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" 
                  onChange={(e)=>setValue((prev)=>({...prev, fname:e.target.value}))}
                   />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" 
                  onChange={(e)=>setValue((prev)=>({...prev, lname:e.target.value}))}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email"
              onChange={(e)=>setValue((prev)=>({...prev, email:e.target.value}))}
               />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'}
                onChange={(e)=>setValue((prev)=>({...prev, password:e.target.value}))}
                 />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Text color={"red"} align={"left"}>{error}</Text>
              <Button
               disabled={submitbutton}
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={"#ff3f6c"}
                color={'white'}
                _hover={{
                  bg: '#ff3f6a',
                  color:"black"
                }}
                // _disabled={{
                //   cursor: "not-allowed"
                // }}
                >
                Register
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text color={"gray.600"} align={'center'}>
                Already a user? <Link  style={{color:"red"}} to="/login"  >Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

