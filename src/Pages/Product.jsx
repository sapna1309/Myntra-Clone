import React from "react";
import prodStyle from "../Styles/Products.module.css";
import SingleCard from "../Components/SingleCard";
import {
  Box,
  Checkbox,
  Flex,
  Grid,
  Heading,
  Radio,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMensProducts } from "../Redux/Product/Product.action";
import LoadingPage from "./LoadingPage";
import PageNotFound from "./PageNotFound";

let brands = [];

const Product = () => {
  const { loading, error, products } = useSelector((store) => store.mens);

  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    if (products.length === 0) {
      getMensProducts(dispatch);
    }
  }, [dispatch,products.length]);

  // to get brands

  let objMens = {};
  const getCategory = () => {
    let res = products.map((prod) => prod.brand);

    for (let i = 0; i < res.length; i++) {
      if (objMens[res[i]] === undefined) {
        objMens[res[i]] = 1;
      }
    }

    for (let key in objMens) {
      brands.push(key);
    }
  };
  console.log(brands);

  getCategory();

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
      Product
      <div className={prodStyle.product_container}>
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
          ({products.length})
        </Box>

        <Flex
          padding={"0.5rem 1rem 0.5rem 1rem"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box  w={"25%"}>
            <Flex justifyContent={"space-between"} alignItems={"baseline"} p={"0 1rem"}>
              <Text fontSize={"1.2rem"} fontWeight={700}>Filters</Text>
              <Text fontSize={"0.9rem"} fontWeight={"700"} color={"red"}>Clear All</Text>
            </Flex>

            <Box textAlign="left" mt={1} >
              <Flex flexDirection={"column"} pt={"0.5rem"} border={"1px solid gray"} >
                <Radio pl={"1rem"}>Mens</Radio>
                <Radio pl={"1rem"}>Womens</Radio>
                <Radio pl={"1rem"}>Childrens</Radio>
              </Flex>

              <Box border={"1px solid gray"} >


              <Heading fontSize={"1rem"} textAlign="left" mb={"0.5rem"} pt={"1rem"} pl={"0.5rem"}>
                Categories
              </Heading>

              <Flex flexDirection={"column"}>
                <Checkbox pl={"1rem"}>Mens</Checkbox>
                <Checkbox pl={"1rem"}>Womens</Checkbox>
                <Checkbox pl={"1rem"}>SweatShirts</Checkbox>
                <Checkbox pl={"1rem"}>Kurtas</Checkbox>
              </Flex>
              </Box>
            </Box>
            <Box border={"1px solid gray"}>
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
          </Box>
        </Flex>

        {/* </div> */}
      </div>
    </div>
  );
};

export default Product;
