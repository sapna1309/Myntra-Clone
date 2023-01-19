import React, { useState } from "react";
import prodStyle from "../Styles/Products.module.css";
import SingleCard from "../Components/SingleCard";
import {
  Box,
  Checkbox,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMensProducts } from "../Redux/Product/Product.action";
import LoadingPage from "./LoadingPage";
import PageNotFound from "./PageNotFound";
import Pagination from "../Components/Pagination";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

let brands = ["HRX by Hrithik Roshan ",
  "Roadster" ,
  "The Indian Garage Co ",
  "HIGHLANDER" ,
  "LOCOMOTIVE" ,
  "United Colors of Benetton" ,
  "IVOC" ,
  "H&M" ,
  "Mast & Harbour" ,
  "Lee" ,
  "DENNISON" ,
  "HERE&NOW" ,
  "Levis" ,
  "WROGN",
  "Urbano Fashion",
  "High Star",
  "KRA",
  "Blackberrys",
  "Artengo By Decathlon",
  "FITINC"
];/**
,
*/


const Product = () => {
  const { loading, error, totalPages,products } = useSelector((store) => store.mens);
  // page state
  const [currentPage, setCurrentPage] = useState(1);
  
  const dispatch = useDispatch();

  
  console.log(products , currentPage);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getMensProducts(currentPage));
    }
  }, [dispatch,products.length,currentPage]);
  
  console.log(brands);
  
  useEffect(()=>{

    dispatch(getMensProducts(currentPage));
   
  },[dispatch,currentPage])
  const handlePage = (val) =>{
    setCurrentPage((prev) => prev + val)
  }
  
  if (loading)
    return (
      <>
        <LoadingPage />
      </>
    );
  if (error)
    return (
      <>
        <PageNotFound />
      </>
    );

  return (
    <div>
      <Navbar/>
      <div className={prodStyle.product_container} style={{marginTop:'60px'}} >
        <Box ml={"1rem"} textAlign={"left"}>
          <Text
            display={"inline-block"}
            fontSize={"1.2rem"}
            fontWeight={"bold"}
            color={"pink.400"}
          >
            {" "}
            Myntra -
          </Text>{" "}
          ({totalPages})
        </Box>

        <Flex
          padding={"0.5rem 1rem 0.5rem 1rem"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box  w={"20%"}>
            <Flex justifyContent={"space-between"} alignItems={"baseline"} p={"0 1rem"}>
              <Text fontSize={"1.2rem"} fontWeight={700}>Filters</Text>
              <Text fontSize={"0.9rem"} fontWeight={"700"} color={"red"}>Clear All</Text>
            </Flex>

           

            <Box border={"1px solid gray"} overflowY={"scroll"} h={250}>
              <Heading fontSize={"1rem"} textAlign="left" mb={"0.5rem"} pt={"1rem"} pl={"0.5rem"}>
                Brands
              </Heading>

              <Flex flexDirection={"column"} textAlign={"left"}>
                {brands?.map((brand, i) => (
                  <Checkbox
                    textAlign={"left"}
                    fontSize={"0.7rem"}
                    key={i}
                    pl={"1rem"}
                  >
                    {brand}
                  </Checkbox>
                ))}
              </Flex>
            </Box>

          </Box>
          {/* filters end */}

          <Box border={"1px solid red"} w={"74%"}>
            <div className={prodStyle.products}>
              <Box border={"1px solid red"}> top filters</Box>

              <Grid
                gridTemplateColumns={{
                  base: "repeat (2,1fr)",
                  lg: "repeat(4 ,1fr) ",
                  sm: "repeat(2,1fr)",
                  md: "repeat(3,1fr)",
                }}
                gap={"0.9rem"}
              >
                {products &&
                  products?.map((prod) => (
                    <SingleCard key={prod.id} prod={prod} />
                  ))}
              </Grid>
            </div>
      <Box>
        <Pagination handlePage={handlePage} setCurrentPage={setCurrentPage} currentPage ={currentPage} totalPages={totalPages}/>
      </Box>
          </Box>
        </Flex>

        {/* </div> */}
      </div>
<Footer/>
    </div>
  );
};

export default Product;
