import {
  Image,
  Box,
  Center,
  Stack,
  HStack,
  Button,
} from "@chakra-ui/react";
import AdminProfile from "../../assets/AdminProfile.jpg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNavbar from "../../Components/AdminNavbar";
import {
  getAdminData,
  updateAdminContact,
  updateAdminEmail,
  updateAdminLogout,
  updateAdminName,
  updateAdminPassword,
} from "../../Redux/Admin/Admin.action";
import EditName from "./EditName";
import EditEmail from "./EditEmail";
import EditContact from "./EditContact";
import EditPassword from "./EditPassword";
import { useNavigate } from "react-router-dom";

const AdminProfilePage = () => {
  const { adminData } = useSelector((store) => store.adminManager);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAdminData());
  }, []);
  
  const handleNameSubmit = (name) => {
    dispatch(updateAdminName(name)).then(() => dispatch(getAdminData()));
  };

  const handleEmailSubmit = (email) => {
    dispatch(updateAdminEmail(email)).then(() => dispatch(getAdminData()));
  };

  const handleContactSubmit = (contact) => {
    dispatch(updateAdminContact(contact)).then(() => dispatch(getAdminData()));
  };

  const handlePasswordSubmit = (password) => {
    dispatch(updateAdminPassword(password)).then(() => dispatch(getAdminData()));
  };
  console.log("Admin",adminData);
  return (
    <Box minH="100vh" width={"100%"} bg={"gray.100"} fontFamily={"sans-serif"}>
      <AdminNavbar />
      <Box mt={"80px"} ml={[3,5,"250px","250px"]} mr={[3,5,0,0]} >
        <Center>
          <Stack
            bg={"white"}
            justifyContent={"center"}
            width={"600px"}
            spacing={3}
            mt={10}
            padding={5}
            borderRadius={10}
            boxShadow={"base"}
          >
            <Center>
              <Image
                width={"200px"}
                height={"200px"}
                borderRadius={"50%"}
                name="Segun Adebayo"
                src={AdminProfile}
                alt={adminData.name}
                ring={5}
                ringColor={"#898AAB"}
              />
            </Center>
            <HStack
              alignItems={"end"}
              justifyContent={"space-between"}
              borderBottom={"1px solid black"}
            >
              {/* <EditName
                handleNameSubmit={handleNameSubmit}
              /> */}
              <EditName handleNameSubmit={handleNameSubmit}/>
            </HStack>
            <HStack
              alignItems={"end"}
              justifyContent={"space-between"}
              borderBottom={"1px solid black"}
            >
              <EditEmail
                handleEmailSubmit={handleEmailSubmit}
              />
            </HStack>
            <HStack
              alignItems={"end"}
              justifyContent={"space-between"}
              borderBottom={"1px solid black"}
            >
              <EditContact
                handleContactSubmit={handleContactSubmit}
              />
            </HStack>
            <HStack
              alignItems={"end"}
              justifyContent={"space-between"}
              borderBottom={"1px solid black"}
            >
              <EditPassword
                handlePasswordSubmit={handlePasswordSubmit}
              />
            </HStack>
            <HStack justifyContent={"center"} width="full" border={"0px solid black"}>
            <Button bg={'pink.700'} color='white' textAlign={"center"} width={"100px"} _hover={{color:'black',bg:'gray.200'}} 
            onClick={()=>{
              dispatch(updateAdminLogout());
              navigate("/login")
            }}>
             LOGOUT
            </Button>
            </HStack>
          </Stack>
        </Center>
      </Box>
    </Box>
  );
};

export default AdminProfilePage;
