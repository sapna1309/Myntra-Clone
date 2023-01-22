import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../Components/firebase";
import Navbar from "../Components/Navbar";



import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
    

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [googleValue, setGoogleValue] = useState("");

  const [value, setValue] = useState({
    email: "",
    password: "",

    isAuth: "true",
  });
  const [submitbutton, setSubmitbutton] = useState(false);
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!value.email || !value.password) {
      setError("fill all fields");
      return;
    }
    console.log(value);

    setError("");
    setSubmitbutton(true);
    signInWithEmailAndPassword(auth, value.email, value.password)
      .then(async (res) => {
        setSubmitbutton(false);
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        setSubmitbutton(false);
        setError(err.message);
        console.log("error-", err.message);
      });
  };

    setError("")
    setSubmitbutton(true)
    signInWithEmailAndPassword(auth,value.email,value.password)
    .then(async(res)=>{
      setSubmitbutton(false)
      navigate("/")
      console.log(res)
    })
    .catch((err)=>{
      setSubmitbutton(false)
     toast.error(`${err.message}`, {
        position: "top-center",
      });
      console.log("error-", err.message)
    })


  const GoodleSignin = () => {
    signInWithPopup(auth, provider).then((data) => {
      setGoogleValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate("/");
    });
  };

  return (
    <Box>
      <Navbar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        mt={55}
        bg={useColorModeValue("rgb(248, 230, 233)")}
      >
        <Stack spacing={0} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"2xl"} textAlign={"center"}>
              Login
            </Heading>

            <Image
              src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/21/8fca3ae9-d245-443b-a142-8d568247794c1663700243878-offer-banner-300-600x240-code-_-MYNTRA400.jpg"
              w="100%"
            />
          </Stack>
          <Box
            // rounded={'lg'}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <VStack>
                <Text fontWeight={"500"}>Easly using</Text>
                <GoogleButton onClick={GoodleSignin} />
                <Text fontWeight={"500"}>-Or using E-mail-</Text>
              </VStack>

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(e) =>
                    setValue((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    onChange={(e) =>
                      setValue((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Text color={"red"} align={"left"}>
                  {error}
                </Text>
                <Button
                  disabled={submitbutton}
                  onClick={handleSubmit}
                  loadingText="Submitting"
                  size="lg"
                  bg={"#ff3f6c"}
                  color={"white"}
                  _hover={{
                    bg: "#ff3f6a",
                    color: "black",
                  }}
                >
                  login
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text color={"gray.600"} align={"center"}>
                  Have trouble logging in?{" "}
                  <Link style={{ color: "red" }} to="/register">
                    Register
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <ToastContainer />
      </Box>
    );
   }
  
