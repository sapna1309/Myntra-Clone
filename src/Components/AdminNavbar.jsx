import React from 'react';
import CWLOGO from '../assets/CWLOGO-1.png';
import AdminProfile from '../assets/AdminProfile.jpg';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  Image,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  // MenuDivider,
  // MenuItem,
  // MenuList,
} from '@chakra-ui/react';
import {
  FiMenu,
  //FiChevronDown,
} from 'react-icons/fi';
import {AiFillHome} from 'react-icons/ai'
import {BsFillBellFill} from 'react-icons/bs'
import {HiFolderAdd} from 'react-icons/hi'
import {ImMan,ImWoman} from 'react-icons/im';
import {FaChild,FaUsers,FaHouseUser} from 'react-icons/fa'
const LinkItems= [
  { name: 'Home', icon: AiFillHome, path:'/admin-dashboard'},
  { name: 'Add Products', icon: HiFolderAdd, path:'/add-product' },
  { name: 'Men', icon: ImMan, path:'/mens' },
  { name: 'Women', icon: ImWoman, path:'/womens' },
  { name: 'Kids', icon: FaChild, path:'/kids' },
  { name: 'Users', icon: FaUsers, path:'/users' },
  { name: 'Profile', icon: FaHouseUser, path:'/admin-profile' },
];

export default function AdminNavbar({
  children,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}
const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="0px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
    //   top={10}
      {...rest}>
      <Flex h="20" alignItems="center" mx="6" justifyContent="space-between">
        <Image src={CWLOGO} alt='classic-world' display={{ base: 'none', md: 'flex' }}/>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link}
        </NavItem>
      ))}
    </Box>
  );
};
const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href={children.path} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children.name}
      </Flex>
    </Link>
  );
};
const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        <Image src={CWLOGO} alt='classic-world' width={"100px"} />
      </Text>
      
      <HStack spacing={{ base:0, md:3 }}  mr={{base:3,md:8}}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<BsFillBellFill />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={{base:"sm",md:"md"}}
                  src={AdminProfile}
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  >
                  <Text fontSize={{base:"sm",md:"md"}} fontWeight={500} >Sapna Sharma</Text>
                  <Text fontSize={{base:"xs",md:"sm"}} color="gray.600">
                    Admin
                  </Text>
                </VStack>
                {/* <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box> */}
              </HStack>
            </MenuButton>
            {/* <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList> */}
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};