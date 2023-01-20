import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import AdminNavbar from '../../Components/AdminNavbar';
import {useDispatch} from 'react-redux';
import { postKidsData, postMensData, postWomensData } from '../../Redux/Admin/Admin.action';

// const products={
//   category:"",
//   brand:"",
//   title: "",
//   discounted_price:"",
//   strike_price:"",
//   discount:"",
//   image: [],
//   size: [],
// }


export default function AddProductsPage() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  const [title,setTitle] = useState('');
  const [brand,setBrand] = useState('');
  const [category,setCategory] = useState('');
  const [price,setPrice] = useState('');
  const [discount,setDiscount] = useState('');
  const [size,setSize] = useState('');
  const [strike,setStrike]=useState('');
  const [image,setImage]=useState('');
  const [country,setCountry]=useState('');
  const [description,setDescription]=useState('');

  const dispatch = useDispatch();

  const Form1 = () => {
 
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
          Product Details
        </Heading>
        <Flex>
          <FormControl mr="5%">
            <FormLabel htmlFor="title" fontWeight={500}>
              Title
            </FormLabel>
            <Input id="first-name" placeholder="Enter Product Name" value={title} onChange={(e)=>setTitle(e.target.value)} />
          </FormControl>
  
          <FormControl>
            <FormLabel htmlFor="brand" fontWeight={500}>
              Brand
            </FormLabel>
            <Input id="last-name" placeholder="Enter Brand Name" value={brand} onChange={(e)=>setBrand(e.target.value)}/>
          </FormControl>
        </Flex>
        <FormControl mt="2%">
          <FormLabel htmlFor="category"  fontWeight={500}>
            Category
          </FormLabel>
          {/* <Input id="category" type="text" placeholder='Enter Category' value={category} onChange={(e)=>setCategory(e.target.value)}/> */}
          <Select
            id="category"
            name="category"
            autoComplete="category"
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            value={category} onChange={(e)=>setCategory(e.target.value)}
            rounded="md">
            <option value={"Mens"} >Mens</option>
            <option value={"Womens"} >Womens</option>
            <option value={"Kids"} >Kids</option>
          </Select>
        </FormControl>
  
        <FormControl mt="2%">
          <FormLabel htmlFor="price"  fontWeight={500}>
            Price
          </FormLabel>
          <Input id="price" type="text" placeholder='Enter Price' value={price} onChange={(e)=>setPrice(e.target.value)} />
        </FormControl>
  
      </>
    );
  };
  
  const Form2 = () => {
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
          Additional Details
        </Heading>
        <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
          <FormLabel
            htmlFor="city"
            fontSize="sm"
            fontWeight={500}
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%">
            Discount Rate
          </FormLabel>
          <Input
            type="text"
            name="city"
            id="city"
            autoComplete="city"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            placeholder='Enter Discount Amount'
            rounded="md"
            value={discount} onChange={(e)=>setDiscount(e.target.value)}
          />
        </FormControl>
  
        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="state"
            fontSize="sm"
            fontWeight={500}
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%">
            Strike Amount
          </FormLabel>
          <Input
            type="text"
            name="state"
            id="state"
            autoComplete="state"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            placeholder='Enter Strike Amount'
            rounded="md"
            value={strike} onChange={(e)=>setStrike(e.target.value)}
          />
        </FormControl>
  
        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="postal_code"
            fontSize="sm"
            fontWeight={500}
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%">
            Size
          </FormLabel>
          <Input
            type="text"
            name="postal_code"
            id="postal_code"
            autoComplete="postal-code"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            placeholder='Enter Size'
            rounded="md"
            value={size} onChange={(e)=>setSize(e.target.value)}
          />
        </FormControl>
  
        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
            <FormLabel
              fontSize="sm"
              fontWeight={500}
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}
              mt="2%"
              >
              Image
            </FormLabel>
            <InputGroup size="sm">
              <InputLeftAddon
                bg="gray.50"
                _dark={{
                  bg: 'gray.800',
                }}
                color="gray.500"
                rounded="md">
                http://
              </InputLeftAddon>
              <Input
                type="url"
                placeholder="Enter Image URL"
                focusBorderColor="brand.400"
                rounded="md"
                value={image} onChange={(e)=>setImage(e.target.value)}
              />
            </InputGroup>
          </FormControl>
  
      </>
    );
  };
  
  const Form3 = () => {
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal">
          Optional Details
        </Heading>
        <SimpleGrid columns={1} spacing={6}>
         
          <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel
            htmlFor="country"
            fontSize="sm"
            fontWeight={500}
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Country / Region
          </FormLabel>
          <Select
            id="country"
            name="country"
            autoComplete="country"
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            value={country} onChange={(e)=>setCountry(e.target.value)}
            rounded="md">
            <option value={"India"} >India</option>
            <option value={"United States"} >United States</option>
            <option value={"Canada"} >Canada</option>
            <option value={"Mexico"} >Mexico</option>
          </Select>
        </FormControl>
  
          <FormControl id="email" mt={1}>
            <FormLabel
              fontSize="sm"
              fontWeight={500}
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}>
              Product Description
            </FormLabel>
            <Textarea
              placeholder="Enter Product Description"
              rows={3}
              shadow="sm"
              focusBorderColor="brand.400"
              fontSize={{
                sm: 'sm',
              }}
              value={description} onChange={(e)=>setDescription(e.target.value)}
            />
            <FormHelperText>
              Brief description about product.
            </FormHelperText>
          </FormControl>
        </SimpleGrid>
      </>
    );
  };

  const handleSubmit=()=>{
  const product={ 
    category,
    brand,
    title,
    discounted_price: +price,
    strike_price: +strike,
    discount: +discount,
    image,
    size,
    country,
    description}
    if(category==="Mens"){
      dispatch(postMensData(product))
    }else if(category==="Womens"){
      dispatch(postWomensData(product))
    }else if(category==="Kids"){
      dispatch(postKidsData(product))
    }
    toast({
      title: 'Successfully Added.',
      description: "You have added product successfully.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    console.log("Product",product);
    setBrand("");
    setTitle("");
    setCategory("");
    setCountry("");
    setDescription("");
    setDiscount("");
    setImage("");
    setPrice("");
    setSize("");
    setStrike("");
  }
  return (
    <Box minH="100vh" bg={'gray.100'} >
      <AdminNavbar/>
      <Box
        bg={'white'}
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="pink"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="pink"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="teal"
                variant="solid"
                onClick={handleSubmit}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </Box>
  );
}