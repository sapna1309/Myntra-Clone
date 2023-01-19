import {
  Card,
  CardBody,
  Text,
  Image,
  Box,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function SingleCard({ ...props }) {
  const navigate = useNavigate()
  // console.log(props.prod.title)
  const {
    id,
    title,
    brand,
    images,
    discount,
    discounted_price,
    strike_price,
  } = props.prod;
  return (

   
    // <div className={Style.cardContainer}>
    <Card border={"none"} _hover={ {boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}} onClick={()=>navigate(`/product/${id}`)} >
      <CardBody textAlign={"left"}>
        <Box>
          <Image  src={images[0]} width={"100%"} _hover={{p:"0.5rem"}} overflow={"hidden"} borderRadius={"0.9rem"}/>
        </Box>

        <Text fontSize={"1rem"} fontWeight={700}>{brand}</Text>
        <Text fontSize={"0.8rem"} color={"gray.500"}>{title}</Text>
        <Box display={"flex"} justifyContent={"space-between" } alignItems={"baseline"}>
        <Text fontSize={"0.9rem"} fontWeight={"600"}> Rs.{discounted_price}</Text>
        <Text fontSize={"0.7rem"} alignItems={"baseline"} textDecoration={"line-through"}>Rs.{strike_price}</Text>
        <Text fontSize={"0.7rem"} color="pink.300">{discount}</Text>



        </Box>

        <Box textAlign={"center"} mt={"0.5rem"}>
          <Button  backgroundColor={"pink.400"} color={"white"} _hover={{color:"pink.400", backgroundColor:"White",
          border:"3px solid #e91f99"} }>Add To Wishlist</Button>
        </Box>
      </CardBody>
    </Card>
    // </div>
  );
}

export default SingleCard;
