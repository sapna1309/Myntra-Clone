import React, { useRef, useState } from "react";
import prodStyle from "../Styles/Products.module.css";
import SingleCard from "../Components/SingleCard";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  // DrawerFooter,
  // DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  Heading,
  Select,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
//import LoadingPage from "./LoadingPage";
//import PageNotFound from "./PageNotFound";
import Pagination from "../Components/Pagination";
import FinalNavbar from "../Components/FinalNavbar";
import FinalFooter from "../Components/FinalFooter";
import { getKidsData } from "../Redux/Admin/Admin.action";
import { useSearchParams } from "react-router-dom";
import { MdFilterList } from "react-icons/md";
import NavSearch from "../Components/NavSearch";

let brands = [
    "HELLCAT",  
    "VASTRAMAY",
    "A.T.U.N.",
    "MANZON",
    "H&M",
    "max",
    "Urbano Juniors",
    "PLUM TREE",
    "Hopscotch",
    "YK Disney",
    "UTH by Roadster",
    "Nauti Nati",
    "JBN Creation",
    "x2o",
    "YK Marvel",
    "BONKIDS",
    "HERE&NOW",
    "Pantaloons Baby",
    "HRX Hrithik Roshan",
    "Aj DEZInES",
    "Superminis",
    "Luke & Lilly",
    "Bodycare Kids",
    "U.S. Polo Assn. Kids",
    "Tiber Taber",
    "YK",
    "Pantaloons Junior",
]; 

const KidsProduct = () => {
const [searchParams ,setSearchParams] =useSearchParams()
const initFilterValues =searchParams.getAll('filter')
const initSortValue =searchParams.getAll('sort')
const initOrder =searchParams.getAll('order')  

const [filterValues,setFilterValues] = useState(initFilterValues || []);
const [sortValue , setSortValue] = useState(initSortValue);
const [order, setOrder] = useState(initOrder);

const [drawerFilter,setDrawerfilter]=useState(initFilterValues ||[]);

const [page,setPage] = useState(1);

const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

const { kidsData } = useSelector((store) => store.adminManager);
const dispatch = useDispatch();

useEffect(()=>{
    let params={}
    if(filterValues.length || drawerFilter.length) params.filter = filterValues || drawerFilter;
    if(sortValue) {
        params._sort = sortValue
    }
    if(sortValue==="rating"){
        params._order = "desc"
    }else if(sortValue==="discount"){
        params._order = "desc"
    }else if(sortValue==="discounted_priceLTH"){
        params._sort = "discounted_price"
        params._order = "asc"
    }else if(sortValue==="discounted_priceHTL"){
        params._sort = "discounted_price"
        params._order = "desc"
    }else if(sortValue==="rating_countLTH"){
        params._sort = "rating_count"
        params._order = "asc"
    }else if(sortValue==="rating_countHTL"){
        params._sort = "rating_count"
        params._order = "desc"
    }
    setSearchParams(params)
},[filterValues,setSearchParams,sortValue,order,page])

  useEffect(()=>{
    const getProductParam = {
        params :{
          brand:searchParams.getAll('filter'),
          _sort:searchParams.get("_sort"),
          _order:searchParams.get("_order"),
        }
      }
      console.log("get",getProductParam)
    dispatch(getKidsData(getProductParam));
  },[searchParams,dispatch,page])

  const handleFilterChange = (value)=>{
    setFilterValues(value)
}


const handleClear = () => {
  setFilterValues([])
  dispatch(getKidsData());
  // onClose();
};

const handlePage = (val) => {
  setPage((prev) => prev + val);
};

const handleDrawerFilter=()=>{

}


//console.log(Math.ceil(kidsData.length/12));
  // if (loading)
  //   return (
  //     <>
  //       <LoadingPage />
  //     </>
  //   );
  // if (error)
  //   return (
  //     <>
  //       <PageNotFound />
  //     </>
  //   );

  return (
    <div>
      <FinalNavbar />
      <Box border={"0px solid black"} display={{base:"flex",sm:"flex",md:"none",lg:"none"}} mt={"75px"} mb={"-60px"} width={"85%"} mx={"auto"} >
        <NavSearch/>
      </Box>
      <Box
        className={prodStyle.product_container}
        mt={{ base:'5rem',sm: "5rem", md: "3.9rem", lg: "7.2rem" }}
      >
        <Flex
          position={"relative"}
          padding={"0 1rem 0.5rem 1rem"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box
            border={"0px solid red"}
            backgroundColor={"white"}
            textAlign={"left"}
            zIndex={"100"}
            w={"20%"}
            position={"fixed"}
            top={[0,0,0,29]}
            display={{
              base: "none",
              sm: "none",
              md: "inline-block",
              lg: "inline-block",
            }}
          >
            <Text
              display={"inline-block"}
              fontSize={"1.2rem"}
              fontWeight={"bold"}
              color={"pink.400"}
              mt={"5rem"}
            >
              {" "}
              Kids -
            </Text>{" "}
            ({kidsData.length})
          </Box>
          <Box
            display={{ sm: "none",base:'none',md:'inline-block', lg: "inline-block" }}
            position={"fixed"}
            w={"20%"}
            top={"9rem"}
            zIndex={"100"}
            backgroundColor={"#FFF"}
          >
            <Flex
              justifyContent={"space-between"}
              alignItems={"baseline"}
              pl={"0.1rem"}
            >
              <Text fontSize={"1.2rem"} fontWeight={700} textAlign={"left"}>
                Filters
              </Text>
              <Text
                onClick={() => handleClear()}
                fontSize={"0.9rem"}
                fontWeight={"700"}
                color={"red"}
                pr={2}
                _hover={{cursor:"pointer"}}
             
             >
                Clear All
              </Text>
            </Flex>

            <Box border={"0px solid gray"}>
              <Heading
                fontSize={"1rem"}
                textAlign="left"
                mb={"0.5rem"}
                pt={"1rem"}
                pl={"0.5rem"}
              >
                Brands
              </Heading>

              <CheckboxGroup colorScheme="blue" value={filterValues} onChange={handleFilterChange}>
          <Stack spacing={1} direction={["column"]} border={"0px solid black"} pb={1} height={"495px"} overflowY={"scroll"} >
            {brands.map((el)=>(
                 <Checkbox value={el}>{el}</Checkbox>
            ))}
          
          </Stack>
        </CheckboxGroup>
            </Box>
          </Box>
          {/* filters end */}

          <Box
            border={"0px solid gray"}
            w={{ lg: "80%", sm: "100%", md: "80%",base:'100%' }}
            ml={{base:0,sm:0,md:"22%",lg:"22%"}}
          >
            <div className={prodStyle.products}>
              <Flex
                justifyContent={"space-between"}
                borderBottom={"2px solid gray"}
                zIndex={14}
                backgroundColor={"white"}
              >
                <Box
                  w={{ base:'100%',sm: "100%", md: "100%", lg: "100%" }}
                  m={"0.5rem"}
                  display={'flex'}
                  flexDirection={{
                    base: "column",
                    sm: "row",
                    md: "row",
                    lg: "row",
                  }}
                  px={2}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  border={"0px solid gray"}
                  boxShadow={'sm'}
                >
                   <Box border={'0px solid black'} justifyContent={"space-between"} width={'100%'} display={{
                      base: "flex",
                      sm: "none",
                      md: "none",
                      lg: "none",
                    }} >
                  <Button
                    ml={2}
                    textAlign={"center"}
                    gap={3}
                    bg={"gray.200"}
                    display={{
                      base: "flex",
                      sm: "none",
                      md: "none",
                      lg: "none",
                    }}
                    ref={btnRef} onClick={onOpen}
                  >
                    Filter
                    <MdFilterList size={20} />
                  </Button>
                    <Text
                      display={"inline-block"}
                      fontSize={"1.2rem"}
                      fontWeight={"bold"}
                      color={"pink.400"}
                      pr={2}
                    >
                      {" "}
                      Kids - <span style={{color:"gray",fontSize:"15px"}}> ({kidsData.length})</span>
                    </Text>{" "}
                   
                  </Box>
                  <Box width={['100%','100%','50%']} border={'0px solid red'} >
                  <Text ml={2} display={{base:"none",sm:"none",md:"block",lg:"block"}} textAlign={"left"}>
                    <b>Sort By :</b>
                  </Text>
                  <Select
                    variant="solid"
                    placeholder="All"
                    p={2}
                    display={{base:"none",sm:"none",md:"block",lg:"block"}}
                    bg={"gray.200"}
                    value={sortValue} onChange={(e)=>setSortValue(e.target.value)}
                  >
                    <option value="rating">Rating </option>
                    <option value="discount">Better Discount</option>
                   <option value="rating_countLTH">Reviews: Low To High</option>
                   <option value="rating_countHTL">Reviews: High To Low</option> 
                    <option value="discounted_priceLTH">Price: Low To High</option>
                    <option value="discounted_priceHTL">Price: High To Low</option>
                  </Select>
                  <Select
                    variant="solid"
                    placeholder="Sort By"
                    p={2}
                    color={"black"}
                    fontWeight={"medium"}
                    display={{base:"block",sm:"block",md:"none",lg:"none"}}
                    bg={"gray.200"}
                    value={sortValue} onChange={(e)=>setSortValue(e.target.value)}
                  >
                    <option value="rating">Rating </option>
                    <option value="discount">Better Discount</option>
                   <option value="rating_countLTH">Reviews: Low To High</option>
                   <option value="rating_countHTL">Reviews: High To Low</option> 
                    <option value="discounted_priceLTH">Price: Low To High</option>
                    <option value="discounted_priceHTL">Price: High To Low</option>
                  </Select>
                  </Box>
                  {/* small screen filters */}
                  <Box border={'0px solid black'} alignItems={"center"} justifyContent={"space-between"} width={'100%'} display={{
                      base: "none",
                      sm: "flex",
                      md: "none",
                      lg: "none",
                    }} >
                  <Button
                    ml={2}
                    textAlign={"center"}
                    gap={2}
                    bg={"gray.200"}
                    display={{
                      base: "none",
                      sm: "flex",
                      md: "none",
                      lg: "none",
                    }}
                    ref={btnRef} onClick={onOpen}
                  >
                    Filter
                    <MdFilterList size={22} />
                  </Button>
                    <Text
                      display={"inline-block"}
                      fontSize={{base:"1.2rem",sm:"1rem"}}
                      fontWeight={"bold"}
                      color={"pink.400"}
                     
                    >
                      {" "}
                      Kids - <span style={{color:"gray",fontSize:"13px"}} > ({kidsData.length})</span>
                    </Text>{" "}
                  </Box>
                </Box>
              </Flex>

              <Grid
                gridTemplateColumns={{
                  base: "repeat (1,1fr)",
                  lg: "repeat(4 ,1fr) ",
                  sm: "repeat(2,1fr)",
                  md: "repeat(3,1fr)",
                }}
               gap={"0.9rem"}
                // m={'auto'}
                mt={{ lg: "0rem", sm: "1rem", md: "1rem" }}
              >
                {kidsData.length > 0 && kidsData.filter((el,i)=>{
            return i>=12 * (page -1) && i< 12 *(page) 
          })
           .map((prod) => <SingleCard key={prod.id} prod={prod} />)}
                  
              </Grid>
            </div>
            <Box>
              <Pagination
                handlePage={handlePage}
                setPage={setPage}
                page={page}
                totalPages={Math.ceil(kidsData.length/12)}
              />
            </Box>
            <FinalFooter/>
          </Box>
        </Flex>
      </Box>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody >
            <Box
            position={"fixed"}
            w={"90%"}
            top={10}
            zIndex={"100"}
            backgroundColor={"#FFF"}
          >
            <Flex
              justifyContent={"space-between"}
              alignItems={"baseline"}
              pl={"0.1rem"}
            >
              <Text fontSize={"1.2rem"} fontWeight={700} textAlign={"left"}>
                Filters
              </Text>
              <Text
                onClick={() => handleClear()}
                fontSize={"0.9rem"}
                fontWeight={"700"}
                color={"red"}
                pr={2}
                _hover={{cursor:"pointer"}}
             
             >
                Clear All
              </Text>
            </Flex>

            <Box border={"0px solid gray"}>
              <Heading
                fontSize={"1rem"}
                textAlign="left"
                mb={"0.5rem"}
                pt={"1rem"}
                pl={"0.5rem"}
              >
                Brands
              </Heading>

              <CheckboxGroup colorScheme="blue" value={filterValues} onChange={handleFilterChange}>
          <Stack spacing={1} direction={["column"]} border={"0px solid black"} pb={0} height={"595px"} overflowY={"scroll"}   >
            {brands.map((el)=>(
                 <Checkbox value={el}>{el}</Checkbox>
            ))}
          
          </Stack>
        </CheckboxGroup>
            </Box>
          </Box>
            </DrawerBody>
  
            {/* <DrawerFooter>
              <Button variant='outline' colorScheme={"pink"} mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='pink' onClick={()=>handleDrawerFilter} >Apply</Button>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
    </div>
  );
};

export default KidsProduct;
