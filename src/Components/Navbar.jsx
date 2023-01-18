
    
  import React from 'react'
  
  
  import { AiFillHeart } from "react-icons/ai";
  import { CgProfile } from "react-icons/cg";
  import { BsHandbag } from "react-icons/bs";
  import { BsSuitHeart } from "react-icons/bs";
  import { useRoutes } from "react-router-dom";
  // import { NavLink } from 'react-router-dom';
  import {SearchIcon} from '@chakra-ui/icons'
  //import { useRoutes } from 'react-router-dom';
  
  // const Navbar = () => {
  //   const { colorMode, toggleColorMode } = useColorMode();
  //   const bg = { light: "white", dark: "gray.800" };
  //   const color = { light: "black", dark: "white" };
  //   //const routes = useRoutes();
  
  //   return (
  //     <Flex
  //       as="nav"
  //       align="center"
  //       justify="space-between"
  //       wrap="wrap"
  //       padding="1.5rem"
  //       bg={bg[colorMode]}
  //       color={color[colorMode]}
  //       boxShadow="md"
        
  //     >
  //       <Flex align="center" mr={5}>
  //         <Image src="/CW.png"  size="40px" alt="Logo" />
          
  //       </Flex>
  //       <Box display={{ sm: "block", md: "none" }} onClick={toggleColorMode}>
         
  //            <Text fontWeight="bold" ml={2}>
  //           WOMEN
  //         </Text>
           
  //       </Box>
  //       <Box
  //         display={{ sm: "none", md: "flex" }}
  //         width={{ sm: "full", md: "auto" }}
  //         alignItems="center"
  //         flexGrow={1}
  //       >
  //               <Link
  //           as={NavLink}
  //           to="/men"
  //           fontWeight="bold"
  //           color="inherit"
  //           mr={6}
  //           activeClassName="active"
  //         >
  //           MEN
  //         </Link>
  //           <Link
  //           as={NavLink}
  //           to="/women"
  //           fontWeight="bold"
  //           color="inherit"
  //           mr={6}
  //           activeClassName="active"
  //         >
  //           WOMEN
  //         </Link>
  //         <Link
  //           as={NavLink}
  //           to="/kids"
  //           fontWeight="bold"
  //           color="inherit"
  //           mr={6}
  //           activeClassName="active"
  //         >
  //           KIDS
  //         </Link>
  //         <Link
  //           as={NavLink}
  //           to="/home"
  //           fontWeight="bold"
  //           color="inherit"
  //           mr={6}
  //           activeClassName="active"
  //         >
  //           HOME&DELIVERY
  //         </Link>
  //         <Link
  //           as={NavLink}
  //           to="/beauty"
  //           fontWeight="bold"
  //           color="inherit"
  //           mr={6}
  //           activeClassName="active"
  //         >
  //           BEAUTY
  //         </Link>
  //         <Link
  //           as={NavLink}
  //           to="/studio"
  //           fontWeight="bold"
  //           color="inherit"
  //           activeClassName="active"
  //         >
  //           STUDIO
  //         </Link>
        
  //        <InputGroup ml="2%">
  //   <InputLeftElement
  //     pointerEvents='none'
  //     children={<SearchIcon color='gray.300' />}
  //   />
  //   <Input  variant='filled' w="80%" type='text' placeholder='Search for products,brands and more ' />
  // </InputGroup>

  //  <Flex gap="20px" w="30%">
  //     <Link as={NavLink} to="/profile" >
        
  //       <CgProfile/>
  //       <Text fontWeight="700" fontSize="13px">Profile</Text>
  //     </Link>
  //     <Link as={NavLink} to="/wishlist" >
        
  //       <BsSuitHeart/>
  //       <Text fontWeight="700" fontSize="13px">Wishlist</Text>
        
  //     </Link>
  //     <Link as={NavLink} to="/bag">
      
  //       <BsHandbag/>
  //       <Text fontWeight="700" fontSize="13px">Bag</Text>
  //     </Link>
  //     </Flex>
  //       </Box>
  //     </Flex>
  //   );
  // };
  
  
  // export default Navbar

  import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Text,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    InputLeftElement,
    Collapse,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from "@chakra-ui/react";
  import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
  import { Link as HomeLink, Navigate, useNavigate } from "react-router-dom";
  //  import { useContext } from "react";
  // import { AuthContext } from "../Context/AuthContext";
  
  const Links = ["Dashboard", "Projects", "Team"];
  
  const NavLink = () => (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    ></Link>
  );
  
  export default function Navbar() {
    // const { prodArray } = useContext(AuthContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpenMenu, onToggle } = useDisclosure();
  
    // const { isAuth, logoutUser } = useContext(AuthContext);
  
    const navigate=useNavigate();
  
    let totalCount = 0;
  
    // prodArray.map((ele) => (totalCount += ele.quantity));
  
    // console.log("count", totalCount);
  
    // console.log("isAuth", isAuth);
  
    return (
      <>
        {/* // Navbar Starts// */}
  
        <Box
          bg={"white"}
          px={4}
          // borderBottom={"2px solid black"}
          pos={"fixed"}
          top={5}
          zIndex={9999}
          width={"100%"}
        >
          <Flex
            // height={"110px"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={5} alignItems={"center"}>
              <HomeLink to="/">
                <Box>
                  <Image
                    src={`data:image/jpeg;base64,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`}
                    // ml="10px"
                    width="50%"
                  />
                </Box>
              </HomeLink>

      
               
            </HStack>

                   
        <Box pos={"fixed"}  width={"40%"} zIndex={999}>
          <Flex
            bg={useColorModeValue("white", "gray.800")}
            color={useColorModeValue("gray.600", "white")}
            // minH={"40px"}
            py={{ base: 2 }}
            px={{ base: 4 }}
            // borderBottom={1}
            // borderStyle={"solid"}
            // borderColor={useColorModeValue("gray.200", "gray.900")}
            align={"center"}
            
          > 
            <Flex
              flex={{ base: 1, md: "auto" }}
              ml={{ base: 1 }}
              display={{ base: "flex", md: "none" }}
            >
              <IconButton
                onClick={onToggle}
                icon={
                  isOpenMenu ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }} >
              <Flex display={{ base: "none", md: "flex" }} >
                <DesktopNav />
              </Flex>
            </Flex>
          </Flex>
  
          <Collapse in={isOpenMenu} animateOpacity></Collapse>
        </Box>

            
  
            <InputGroup w="32%" ml={"2%"} >
              <Input
                type="text"
                placeholder="Search for products,brands and more"
                borderRadius={"none"}
                variant={"filled"}
              />
              <InputLeftElement width="2.5rem">
                <Button h="1.9rem" size="sm">
                  <Image
                    src={
                      "https://img.icons8.com/material-sharp/24/null/search.png"
                    }
                  />
                </Button>
              </InputLeftElement>
            </InputGroup>


            {/* <Flex gap="20px" w="30%">
       <Link as={HomeLink} to="/profile" >
        
       <CgProfile/>
         <Text fontWeight="700" fontSize="13px">Profile</Text>
       </Link>
       <Link as={HomeLink} to="/wishlist" >
        
         <BsSuitHeart/>
       <Text fontWeight="700" fontSize="13px">Wishlist</Text>
        
       </Link>
       <Link as={HomeLink} to="/bag">
      
        <BsHandbag/>
         <Text fontWeight="700" fontSize="13px">Bag</Text>
      </Link>
       </Flex> */}

      


            
             <Flex
              alignItems={"center"}
              justifyContent={"space-around"}
              mr="40px"
              width="20%"
            >
              <Menu>
                <HStack> 
                   <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={
                        "https://img.icons8.com/pastel-glyph/64/null/user-male-circle.png"
                      }
                     />
                 </MenuButton>
                 <Text>Account</Text>
                  <MenuList>
                    <HomeLink to="/login">
                      {" "}
                      <MenuItem>
                        <Button width={"full"} >
                          Login
                        </Button>
                      </MenuItem>
                    </HomeLink>
                    <MenuItem>
                      <Button width={"full"}>Register</Button>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem>
                      <Button width={"full"}>Admin</Button>
                    </MenuItem>
                    <MenuItem>
                      <Button 
                        width={"full"} 
                        
                      
                    >
                        Logout
                      </Button>
                    </MenuItem>
                   </MenuList> 
                 </HStack>
               </Menu> 
               <Menu> 
                 <HStack spacing={1}> 
                   <MenuButton 
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  > 
                     <Avatar
                      size={"sm"}
                      src={
                        "https://img.icons8.com/external-creatype-outline-colourcreatype/64/null/external-basket-e-commerce-creatype-outline-colourcreatype.png"
                      }
                    />
                  </MenuButton>
                  <Text
                    backgroundColor={"black"}
                    color={"white"}
                    borderRadius={"50%"}
                    paddingX={"3px"}
                    fontSize={"11px"}
                  >
                    {totalCount}
                  </Text>
                  <Text>Cart</Text> 
  
                   <MenuList>
                    <MenuItem>
                        <Button width={"full"} onClick={()=>navigate("/cart")}>
                         View Cart
                        </Button>
                    </MenuItem>
                    <MenuItem>
                      <Button width={"full"}>My Orders</Button>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem>
                      <Button width={"full"}>Wishlist</Button>
                    </MenuItem>
                  </MenuList> 
                 </HStack> 
               </Menu>
            </Flex>
          </Flex>   
  
            {/* {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}  */}
         </Box>  
  
        {/* Navbar Ends */}
  
        {/* DropDown Menu Starts */}
   
         <Box pos={"fixed"} top={112} width={"100%"} zIndex={999}>
          <Flex
            bg={useColorModeValue("white", "gray.800")}
            color={useColorModeValue("gray.600", "white")}
            minH={"40px"}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.900")}
            align={"center"}
          >
            <Flex
              flex={{ base: 1, md: "auto" }}
              ml={{ base: -2 }}
              display={{ base: "flex", md: "none" }}
            >
              <IconButton
                onClick={onToggle}
                icon={
                  isOpenMenu ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
              <Flex display={{ base: "none", md: "flex" }} ml={10}>
                <DesktopNav />
              </Flex>
            </Flex>
          </Flex>
  
          <Collapse in={isOpenMenu} animateOpacity></Collapse>
        </Box> 
  
      
       </>
    );

              }
 
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("white", "gray.800");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");
    const backGround = useColorModeValue("white", "gray.800");
  
    return (
      <Box
        display={"flex"}
        // spacing={1}
        // border={"0px solid black"}
        // ml={"1%"}
        width={"500px"}
        justifyContent={"space-between"}
      >
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={linkColor}
                  _hover={{
                    // textDecoration: "none",
                    // color: linkHoverColor,
                    borderBottom:"3px solid red",
                    // bg: backGround,
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  // boxShadow={"lg"}
                  bg={popoverContentBgColor}
                  // p={4}
                  rounded={"sm"}
                  width={"auto"}
                >
                  <HStack alignItems={"start"}>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </HStack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Box>
    );
  };
  
  const DesktopSubNav = ({ label, subLabel }) => {
    return (
      <HomeLink
        to="/products"
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("#EEEEE9") }}
      >
        <Stack textAlign={"left"} spacing={2} >
          <Box mt="15px">
            <Text
              transition={"all .1s ease"}
              color={"pink.400"}
              // _groupHover={{ color: "pink" }}
              fontWeight={700}
              fontSize={"13px"}
            >
              {label}
            </Text>
          </Box>
          {subLabel.map((el, i) => (
            <Text fontSize={"sm"} key={i}>
              {el}
            </Text>
          ))}
        </Stack>
      </HomeLink>
    );
  };
  
  const NAV_ITEMS = [
    {
      label: "MENS",
      children: [
        {
          label: "Popular Categories",
          subLabel: [
            "Shop All Holiday Beauty Gifts",
            "Our Favourite Beauty Gift Sets",
            "Tvacha Store Exlusive Gifts",
            "Tvacha Stores Holiday Edit Box",
            "Holiday Gift Ideas For Her",
            "Holiday Gift Ideas For Him",
          ],
          href: "#",
        },
        {
          label: "By Gift Ideas",
          subLabel: [
            "Budget Friendly And Small Gifts",
            "Stoking Stuffer Ideas",
            "Thoughtfull Gifts For Smart Splurges",
            "Luxury Holiday Gifts",
            "Last Minute Gift Ideas",
            "Gift For YOu",
          ],
          href: "#",
        },
        {
          label: "By Price",
          subLabel: [
            "Gift Under $25",
            "Gift Under $50",
            "Gift Under $100",
            "Gift Over $100",
          ],
          href: "#",
        },
        {
          label: "By Category",
          subLabel: [
            "Skin Care Gifts",
            "Body Care Gifts",
            "Home Scents And Candle Gifts",
            "Makeup Gifts",
            "Hair Care Gifts",
            "Beauty Tools And Hair Styling Gifts",
          ],
          href: "#",
        },
      ],
    },
    {
      label: "WOMEN",
      children: [
        {
          label: "Popular Categories",
          subLabel: [
            "View All Skin Care",
            "New In",
            "Clean Skincare",
            "5 Rated Products",
            "Gifts & Sets",
            "Surprises & Duo",
            "Travel Sizes",
          ],
          href: "#",
        },
        {
          label: "By Product Type",
          subLabel: [
            "Cleansers",
            "Moisturizers",
            "Serums",
            "Eye Serums",
            "Exfoliaters",
            "Masks",
            "Eye Care",
            "Toners",
            "Lip Care",
            "Oils",
            "Treatments",
            "Mists",
            "Self Tanning",
            "Tools",
          ],
          href: "#",
        },
        {
          label: "By Ingredient",
          subLabel: [
            "Vitamin C",
            "AHA",
            "Caffeine",
            "Retinol",
            "Hyluronic Acid",
            "Niacinamide",
            "Lactic Acid",
            "Salicylic Acid",
            "Glycolic Acid",
            "Azelaic Acid",
          ],
          href: "#",
        },
        {
          label: "By Specific Concern",
          subLabel: [
            "Acne & Blemishes",
            "Fine Lines & Wrinkles",
            "Dark Circles",
            "Dry Skin",
            "Dullness",
            "Lack of Fairness",
            "Pigmentaion",
            "Pregnancy Skincare",
            "Redness & Rosacea",
            "Sensitive Skin",
            "Visible Pores",
          ],
          href: "#",
        },
        {
          label: "Sunscreen & Suncare",
          subLabel: [
            "Take The SPF Quiz",
            "SPF 30 and over",
            "SPF 50 and over",
            "After Sun",
            "Tinted",
            "Mineral",
            "Eye Protection",
          ],
          href: "#",
        },
      ],
    },
    {
      label: "KIDS",
      children: [
        {
          label: "Popular Categories",
          subLabel: [
            "View All Skin Care",
            "New In",
            "Clean Skincare",
            "5 Rated Products",
            "Gifts & Sets",
            "Surprises & Duo",
            "Travel Sizes",
          ],
          href: "#",
        },
        {
          label: "Product Type",
          subLabel: [
            "Shampoo",
            "Conditioners",
            "Hair Treatments",
            "Hair Masks",
            "Hair Oils",
            "Hair Sprays",
            "Hair Styling",
            "Hair Thinning & Loss",
            "Hair Color Treatments",
            "Hair Supplements",
            "Hair Brushes & Combs",
          ],
          href: "#",
        },
        {
          label: "Hair Type",
          subLabel: [
            "Anti-Dandruff & Scalp Care",
            "Coarse & Textured Hair",
            "Colored Hair",
            "Curly & Wavy Hair",
            "Damaged Hair",
            "Dry hair",
            "Fine Hair",
            "Oily Hair",
          ],
          href: "#",
        },
        {
          label: "Electrical",
          subLabel: ["Flat Irons", "Hair Dryers", "Rollers & Curling Tongs"],
          href: "#",
        },
        {
          label: "Hair Removal",
          subLabel: [
            "Hair Removal Devices",
            "Hair Removal Products",
            "Mens Shaving Products",
          ],
          href: "#",
        },
      ],
    },
    {
      label: "HOME & DELIVERY",
      children: [
        {
          label: "Popular Categories",
          subLabel: [
            "New In",
            "Clean Makeup",
            "5 Rated Products",
            "Gifts & Sets",
            "Brushes & Applicators",
            "Makeup Palettes",
            "Nails",
          ],
          href: "#",
        },
        {
          label: "Eyes",
          subLabel: [
            "Eye Liners",
            "Lash & Brow Enhancers",
            "Eye Shadows",
            "Mascaras",
            "Brow Pencils",
          ],
          href: "#",
        },
        {
          label: "Face",
          subLabel: [
            "BB && CC Cream",
            "Blushers",
            "Bronzers",
            "Color Correctors",
            "Concealers",
            "Contour",
            "Face Powders",
            "Foundations",
            "Highlighters",
            "Makeup Removers",
            "Makeup Setting Spray",
            "Primers",
            "Tinted Moisturizer",
          ],
          href: "#",
        },
        {
          label: "Lips",
          subLabel: [
            "Lipstics",
            "Lip Balms",
            "Lip Glosses",
            "Lip Liners",
            "Lip Plumpers",
            "Liquid Lipsticks",
          ],
          href: "#",
        },
      ],
    },
    {
      label: "BEAUTY",
      children: [
        {
          label: "Popular Categories",
          subLabel: [
            "View All Bath & Body",
            "New In",
            "Clean Bath & Body",
            "5 Rated Products",
            "Gifts & Sets",
            "Travel Sizes",
            "At Home Spa",
            "Decorants",
            "Oral Care",
          ],
          href: "#",
        },
        {
          label: "Bath & Shower",
          subLabel: [
            "Baths Oils/Soak",
            "Bath Salts",
            "Body Washes",
            "Cleansing bars",
            "Exfoliators",
          ],
          href: "#",
        },
        {
          label: "Self Tanners",
          subLabel: [
            "Accessories",
            "Pre-Tan Preparation",
            "Body Tanners",
            "Post Tanning",
          ],
          href: "#",
        },
        {
          label: "Moisturizers",
          subLabel: ["Balms", "Butters", "Creams", "Lotions", "Oils"],
          href: "#",
        },
        {
          label: "Targeted Care",
          subLabel: [
            "Bust",
            "Cellulite",
            "Dry Skin",
            "Hair Removal",
            "Hands & Foot Care",
            "Hans Soap Senitizers & Creams",
            "Legs",
            "Simming & Sculpting",
            "Strecth Marks",
            "Sunscreen",
          ],
          href: "#",
        },
      ],
    },
    {
      label: "STUDIO",
      children: [
        {
          label: "Popular Categories",
          subLabel: ["View All Fragrance", "New In", "5 Rated Products"],
          href: "#",
        },
        {
          label: "Top Brands",
          subLabel: [
            "NEOM Organics",
            "Glasshouse Fragrances",
            "KORRES",
            "NEST Fragrance",
            "Molton Brown",
          ],
          href: "#",
        },
        {
          label: "Personal Fragrance",
          subLabel: [
            "Perfume",
            "EAU de Toilette",
            "Body Spray",
            "For Her",
            "For Him",
          ],
          href: "#",
        },
        {
          label: "Home Fragrance",
          subLabel: [
            "Scented Candles",
            "Diffusers",
            "Aromatherapy",
            "Pillow Mists",
            "Room Sprays",
          ],
          href: "#",
        },
      ],
    },
  
  ]

  
