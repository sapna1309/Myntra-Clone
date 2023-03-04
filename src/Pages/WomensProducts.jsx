import React, { useState } from "react";
import prodStyle from "../Styles/Products.module.css";
import SingleCard from "../Components/SingleCard";
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Grid,
  Heading,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getFilterdProducts,
  getMainData,
  getMensProducts,
  getMensProductsSorted,
} from "../Redux/Product/Product.action";
import LoadingPage from "./LoadingPage";
import PageNotFound from "./PageNotFound";
import Pagination from "../Components/Pagination";
import { useCallback } from "react";
import FinalNavbar from "../Components/FinalNavbar";
import SampleBrand from "./SampleBrand";
import FinalFooter from "../Components/FinalFooter";
import { getWomensData } from "../Redux/Admin/Admin.action";
import { useSearchParams } from "react-router-dom";

let brands = [
  "KALINI",
  "Khushal K",
  "Anouk",
  "Indo Era",
  "Anubhutee",
  "FASHOR",
  "Ahalyaa",
  "Nayo",
  "Varanga",
  "H&M",
  "AHIKA",
  "Roadster",
  "JAIPURI BUNAAI",
  "KASSUALLY",
  "InWeave",
  "Mitera",
  "Antheaa",
  "Berrylush",
  "Chemistry",
  "SASSAFRAS",
  "Yufta",
  "MOKSHA DESIGNS",
  "DOLCE CRUDO",
  "Libas",
  "Tokyo Talkies",
  "ADDYVERO",
  "heemara",
  "Difference of Opinion",
  "Kotty",
  "Anubhutee"
]; /**
,
*/

const WomensProduct = () => {
const [searchParams ,setSearchParams] =useSearchParams()
const initFilterValues =searchParams.getAll('filter')
const initSortValue =searchParams.getAll('sort')
const initOrder =searchParams.getAll('order')  

const [filterValues,setFilterValues] = useState(initFilterValues || [])
const [sortValue , setSortValue] = useState(initSortValue)
const [order, setOrder] = useState(initOrder)

const { womensData } = useSelector((store) => store.adminManager);
const dispatch = useDispatch();

useEffect(()=>{
    let params={}
    if(filterValues.length) params.filter = filterValues
    if(sortValue) {
        params._sort = sortValue
    }
    if(sortValue==="rating"){
        params._order = "desc"
    }else if(sortValue==="discount"){
        params._order = "desc"
    }else if(sortValue==="discounted_price"){
        params._order = "desc"
    }else if(sortValue==="rating_count"){
        params._order = "desc"
    }else if(order===""&&sortValue===""){
        params._sort = "discounted_price"
        params._order = "asc"
    }
    setSearchParams(params)
    console.log("Params",params);
},[filterValues,setSearchParams,sortValue,order])

  useEffect(()=>{
    const getProductParam = {
        params :{
          brand:searchParams.getAll('filter'),
          _sort:searchParams.get("_sort"),
          _order:searchParams.get("_order"),
        }
      }
      console.log("get",getProductParam)
    dispatch(getWomensData(getProductParam));
  },[searchParams,dispatch])

  const handleFilterChange = (value)=>{
    setFilterValues(value)
}
// const handleSortChange=(value)=>{
// setOrder(value)

// }
//console.log(searchParams.getAll("filter"));
console.log(womensData);

//   if (loading)
//     return (
//       <>
//         <LoadingPage />
//       </>
//     );
//   if (error)
//     return (
//       <>
//         <PageNotFound />
//       </>
//     );

  return (
    <div>
      <FinalNavbar />
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
            top={29}
            display={{
              base: "none",
              sm: "none",
              md: "none",
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
              Women -
            </Text>{" "}
            ({womensData.length})
          </Box>
          <Box
            display={{ sm: "none",base:'none',md:'none', lg: "inline-block" }}
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
            //     onClick={() => handleClear()}
            //     fontSize={"0.9rem"}
            //     fontWeight={"700"}
            //     color={"red"}
            //     _hover={{cursor:"pointer"}}
            //  
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
            w={{ lg: "80%", sm: "100%", md: "100%",base:'100%' }}
            ml={{base:0,sm:0,md:0,lg:"22%"}}
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
                    sm: "column",
                    md: "row",
                    lg: "row",
                  }}
                  px={2}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  border={"0px solid gray"}
                  boxShadow={'sm'}
                >
                  <Box width={'100%'} border={'0px solid red'} >
                  <Text ml={2} textAlign={"left"}>
                    <b>Sort By :</b>
                  </Text>
                  <Select
                    variant="solid"
                    placeholder="All"
                    p={2}
                    bg={"gray.200"}
                    value={sortValue} onChange={(e)=>setSortValue(e.target.value)}
                  >
                    <option value="rating">Rating </option>
                    <option value="discount">Better Discount</option>
                   <option value="rating_count">Reviews:High To Low</option> 
                    <option value="discounted_price">Price:High To Low</option>
                  </Select>
                  </Box>
                  {/* filters */}
                  <Box border={'0px solid black'} width={'100%'} >
                  <Text
                    ml={2}
                    textAlign={"left"}
                    display={{
                      base: "flex",
                      sm: "flex",
                      md: "flex",
                      lg: "none",
                    }}
                  >
                    <b>Filters :</b>
                  </Text>
                  <Stack
                    display={{
                      base: "flex",
                      sm: "flex",
                      md: "flex",
                      lg: "none",
                    }}
                  >
                    <SampleBrand brands={brands} 
                    // handleCheck={handleCheck} 
                    />
                  </Stack>
                  </Box>
                  <Box border={'0px solid green'} width={'100%'} display={{base:'inline-block',sm:'inline-block',md:'inline-block',lg:'none'}} justifyContent={'flex-end'}  textAlign={{base:'center',sm:'center',md:'right'}} >
                    <Text
                      display={"inline-block"}
                      fontSize={"1.2rem"}
                      fontWeight={"bold"}
                      color={"pink.400"}
                     
                    >
                      {" "}
                      Women -
                    </Text>{" "}
                    ({womensData.length})
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
                m={'auto'}
                mt={{ lg: "0rem", sm: "1rem", md: "1rem" }}
              >
                  <>
                    {womensData &&
                      womensData?.map((prod) => (
                        <SingleCard key={prod.id} prod={prod} />
                      ))}
                  </>
            
              </Grid>
            </div>
            <Box>
              {/* <Pagination
                handlePage={handlePage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalPages={womensData.length}
              /> */}
            </Box>
            <FinalFooter/>
          </Box>
        </Flex>

        {/* </div> */}
       
      </Box>
      {/* <Footer/> */}
    </div>
  );
};

export default WomensProduct;
