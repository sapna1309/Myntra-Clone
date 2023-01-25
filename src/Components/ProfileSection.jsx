import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Button,
  Stack,
  Flex,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { BiHeart } from "react-icons/bi";
import {
  MdOutlineCardGiftcard,
  MdOutlineContactPhone,
  MdOutlineCreditCard,
  MdOutlineDriveFileRenameOutline,
  MdOutlineMail,
} from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { TbAddressBook } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { RiShutDownLine, RiCouponLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

export default function ProfileSection() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [lgUser, setLgUser] = useState({});

  let User = JSON.parse(localStorage.getItem("USER")) || {};
  let booleanValue = Boolean(User.isAuth);
  //const [isLogin,setIsLogin]=useState(User?true:false);

  //console.log(User);
  useEffect(() => {
    auth.onAuthStateChanged((user, email) => {
      if (user) {
        setUserName(user.displayName);
        setUserEmail(user.email);
       //console.log(user.displayName)
      } else {
        setUserName("");
        setUserEmail("");
      }
    });
  }, []);
  const handleLogout = () => {
    setLgUser({ ...User, isAuth: false });
    booleanValue = Boolean(lgUser.isAuth);
    localStorage.setItem("USER", JSON.stringify(lgUser));
  };

  return (
    <Flex justifyContent="center" mt={0}>
      <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          <Button
            display={"flex"}
            flexDirection={"column"}
            fontSize={"xs"}
            bg={"none"}
            _hover={{ bg: "white", color: "#BB1679", fontWeight: "bold" }}
          >
            <IconButton
              aria-label="More server options"
              icon={<CgProfile />}
              variant="ghost"
              w="fit-content"
              _hover={{ bg: "white", color: "#BB1679" }}
            />
            <Text>Profile</Text>
          </Button>
        </PopoverTrigger>
        <PopoverContent w="fit-content" _focus={{ boxShadow: "md" }} mt={0}>
          <PopoverArrow />
          <PopoverBody>
            <Stack>
              <Button
                w="auto"
                variant="ghost"
                rightIcon={<MdOutlineDriveFileRenameOutline />}
                justifyContent="space-between"
                fontWeight="semibold"
                fontSize="md"
                colorScheme={"pink"}
              >
               Hello, {booleanValue ? userName : "Welcome"}
              </Button>
              <Button
                w="auto"
                variant="ghost"
                rightIcon={<MdOutlineMail />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="pink"
                fontSize="sm"
              >
                {booleanValue ? userEmail : "To access account and orders"}
              </Button>
              <Button
                w="auto"
                variant="ghost"
                rightIcon={<AiOutlineLogin />}
                justifyContent="space-between"
                fontWeight="semibold"
                colorScheme="pink"
                fontSize="sm"
                isDisabled={booleanValue}
              >
                <NavLink to="/Login">LOGIN </NavLink>/{" "}
                <NavLink to="/Register">SIGNUP</NavLink>
              </Button>
              <Button
                w="auto"
                variant="ghost"
                rightIcon={<BiHeart />}
                justifyContent="space-between"
                fontWeight="semibold"
                colorScheme="pink"
                fontSize="sm"
              >
                Order  / <NavLink to="/wishlist"> Whishlist</NavLink>
              </Button>
              <Button
                w="auto"
                variant="ghost"
                rightIcon={<MdOutlineCardGiftcard />}
                justifyContent="space-between"
                fontWeight="semibold"
                colorScheme="pink"
                fontSize="sm"
              >
                Gift Cards
              </Button>
              <Button
                w="auto"
                variant="ghost"
                rightIcon={<MdOutlineContactPhone />}
                justifyContent="space-between"
                fontWeight="semibold"
                colorScheme="pink"
                fontSize="sm"
              >
                Contact Us
              </Button>
              <Button
                w="auto"
                variant="ghost"
                justifyContent="space-between"
                fontWeight="semibold"
                colorScheme="pink"
                fontSize="sm"
              >
                Classic World Insider
                <Tag
                  size={"sm"}
                  bg={useColorModeValue("pink.500", "green.800")}
                  ml={2}
                  color={"white"}
                >
                  New
                </Tag>
              </Button>
              <Button
                w="auto"
                variant="ghost"
                rightIcon={<MdOutlineCreditCard />}
                justifyContent="space-between"
                fontWeight="semibold"
                colorScheme="pink"
                fontSize="sm"
              >
                Classic World Credit
              </Button>
              <Button
                w="auto"
                variant="ghost"
                rightIcon={<RiCouponLine />}
                justifyContent="space-between"
                fontWeight="semibold"
                colorScheme="pink"
                fontSize="sm"
              >
                Coupons
              </Button>
              <Button
                w="auto"
                variant="ghost"
                rightIcon={<TbAddressBook />}
                justifyContent="space-between"
                fontWeight="semibold"
                colorScheme="pink"
                fontSize="sm"
              >
                <NavLink to="/Address">Address</NavLink>
              </Button>
              <Button
                w="auto"
                variant="ghost"
                rightIcon={<RiShutDownLine />}
                justifyContent="space-between"
                fontWeight="semibold"
                colorScheme="red"
                fontSize="sm"
                isDisabled={!booleanValue}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
}
