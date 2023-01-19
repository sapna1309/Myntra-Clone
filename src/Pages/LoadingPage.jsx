import { Box, Image } from "@chakra-ui/react";
import React from "react";
import loader from "../assets/loading-waiting.gif";
const LoadingPage = () => {
  return <div>
    <Box position={"fixed" } top={"50%"}  left={"50%"} transform={"translate(-50% , -50%)"}>
         <Image w={"50px"} m={"auto"} align={"center"} src={loader}/>
    </Box>
  </div>;
};

export default LoadingPage;
