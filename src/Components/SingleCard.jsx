import { StarIcon } from "@chakra-ui/icons";
import { FaRegHeart } from "react-icons/fa";
import {
  Card,
  CardBody,
  Text,
  Image,
  Box,
  Button,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCartData } from "../Redux/Cart/Cart.action";
function SingleCard({ ...props }) {
  const toast = useToast();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const {
    id,
    title,
    brand,
    images,
    discount,
    category,
    discounted_price,
    strike_price,
    rating,
    rating_count,
  } = props.prod;
  let prod = props.prod;

  const handleAddToWishlist = async () => {
   
      await axios
        .post(`https://classic-world.onrender.com/WishList/`, prod)
        .then((res) => {
          // alert("Added to Wishlist Successfully....");
          toast({
            title: 'Added Successfully.',
            description: "This product has been added to your wishlist.",
            status: 'success',
            duration:1500,
            isClosable: true,
          });
          dispatch(fetchCartData());
        })

        .catch((err) => toast({
          title: 'Already Exist.',
          description: "This product already exist in your wishlist.",
          status: 'error',
          duration:1500,
          isClosable: true,
        }));
    
  };
//console.log(typeof discounted_price) 
  return (
    // <div className={Style.cardContainer}>
    <Card
      border={"none"}
      _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <CardBody textAlign={"left"}>
        <Stack spacing={2}>
          <Box onClick={() => navigate(`/product/${category}/${id}`)}>
            <Image
              src={images[0]}
              width={"100%"}
              _hover={{transform: "scale(1.1)",marginBottom:"15px" }}
              overflow={"hidden"}
              borderRadius={"0.9rem"}
            />
          </Box>

          <Text fontSize={"1rem"} fontWeight={700} noOfLines={1}>
            {brand}
          </Text>
          <Text fontSize={"0.8rem"} color={"gray.500"} noOfLines={1}>
            {title}
          </Text>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"baseline"}
          >
            <Text fontSize={"0.9rem"} fontWeight={"600"}>
              {" "}
              ₹ {discounted_price}
            </Text>
            <Text
              fontSize={"0.7rem"}
              alignItems={"baseline"}
              textDecoration={"line-through"}
            >
              ₹ {strike_price}
            </Text>
            <Text fontSize={"0.7rem"} fontWeight={"medium"} color="pink.300">
              {discount}
            </Text>
          </Box>

          <Box>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>
                {" "}
                {rating} <StarIcon fontSize={"0.8rem"} />
              </Text>
              <Text>{rating_count}k</Text>
            </Flex>
          </Box>

          <Box textAlign={"center"} mt={"0.5rem"}>
            <Button
              backgroundColor={"pink.400"}
              color={"white"}
              _hover={{
                color: "pink.400",
                backgroundColor: "White",
                border: "3px solid #e91f99",
              }}
              onClick={() => handleAddToWishlist()}
            >
              <FaRegHeart fontVariant={"primary"} /> Add To Wishlist
            </Button>
          </Box>
        </Stack>
      </CardBody>
    </Card>
    // </div>
  );
}

export default SingleCard;
