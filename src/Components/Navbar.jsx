
 
  
  
  import { AiFillHeart } from "react-icons/ai";
  import { CgProfile } from "react-icons/cg";
  import { BsHandbag } from "react-icons/bs";
  import { BsSuitHeart } from "react-icons/bs";
 
   import {SearchIcon} from '@chakra-ui/icons'
  


import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  InputGroup,
  Input,
  InputLeftElement,
  Image,
  VStack,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
       

             <Box>
                  <Image
                    src={`data:image/jpeg;base64,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`}
                    // ml="10px"
                    width="80%"
                  />
                </Box>

          <Flex display={{ base: 'none', md: 'flex' }} ml={0}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack w={"35%"}  mr={"5%"} >
        <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input type='text' placeholder='Search for produts,brands and more' />
  </InputGroup>
            </Stack>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
            mr={"2%"}>
            <VStack>
          <CgProfile/>
          <Button
            as={'a'}
            fontSize={'xs'}
            fontWeight={700}
            variant={'link'}
            href={'#'}>
            Profile
          </Button>
          </VStack>
         
          <VStack>
          <BsSuitHeart/>
          <Button
            as={'a'}
            fontSize={'xs'}
            fontWeight={700}
            variant={'link'}
            href={'#'}>
            Wishlist
          </Button>
          </VStack>

          <VStack>
          <BsHandbag />
          <Button
            as={'a'}
            fontSize={'xs'}
            fontWeight={700}
            variant={'link'}
             
            href={'#'}>
            Bag
          </Button>
          </VStack>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('grey.600', 'gray.200');
  const linkHoverColor = useColorModeValue('pink.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4} w={"600px"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                  borderBottom:"3px solid red"
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'lg'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'4xl'}>
                <Flex direction={"row"} width={"1000px"} gap={"20px"}>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Flex>
                </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'column'} align={'flex-start'} spacing={0} >
        <Flex direction={"column"} align={"flex-start"}>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={700}
            fontSize={"xs"}
              color={"#D53F8C"}>
            {label}
          </Text>
          </Flex>
          <Flex direction={"column"} align={"flex-start"}>
          {subLabel.map((el, i) => (
          <Text fontSize={"sm"} key={i}>
            {el}
          </Text>
        ))}
          </Flex>
       
        <Flex
          transition={'all .3s ease'}
           direction={"column"}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
  </Stack>

  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <VStack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </VStack>
      </Collapse>
    </Stack>
  );
};

// interface NavItem {
//   label: string;
//   subLabel?: string;
//   children?: Array<NavItem>;
//   href?: string;
// }


  
  const NAV_ITEMS = [
    {
      label: "MENS",
      children: [
        {
          label: "Topwear",
          subLabel: [
            "T-Shirts",
            "Casual Shirts",
            "Formal Shirts",
            "Sweatshirts",
            "Sweaters",
            "Jackets",
            "Blazzers and Coats",
            "Suits",
            "Rain Jackets",
           
          ],
          href: "#",
        },
        {
          label: "Indian and Festive Wear",
          subLabel: [
            "Kurtas and Kurtas Sets",
            "Sherwanies",
            "Nehru Jacket",
            "Dhoties",
           
          ],
          href: "#",
        },
        {
          label: "Bottomwear",
          subLabel: [
            "Jeans",
            "Casual Trousers",
            "Shorts",
            "TrackPants and Joggers",
          ],
          href: "#",
        },
        {
          label: "Innerwear ans Sleepwear",
          subLabel: [
            "Brief and Trunks",
            "Vests",
            "Sleepwear and Loungewear",
            "Thermals",
           
          ],
          href: "#",
        },

        {
          label: "Footwear",
          subLabel: [
            "Casual Shoes",
            "Sports Shoes",
            "Formal Shoes",
            "Sneakers",
            "Sandals and Floaters",
            "Flip Flops",
            "Socks"
           
          ],
          href: "#",
        },
      ],
    },
    {
      label: "WOMEN",
      children: [
        {
          label: "Indian and Fusion Wear",
          subLabel: [
            "Crop tops over Lehenga",
            "Palazzo Lehenga",
            "jacket over Sari",
            "Pants under Saree",
            "Slit Dhoti under Blouse",
            "Ethnic saree",
            "Ethnic skirt",
          ],
          href: "#",
        },
        {
          label: "Western Wear",
          subLabel: [
            "Dresses",
            "Tops",
            "TShirts",
            "Jeans",
            "Trousers & Capris",
            "Shorts and Skirts",
            "Co-ords",
            "Playsuits",
            "Jumpsuits",
            "Shrungs",
            "Sweaters & SweatShirts",
            "Blazzers and Waistcoats",
           
          ],
          href: "#",
        },
        {
          label: "Footwear",
          subLabel: [
            "Flats",
            "Casual Shoes",
            "Heels",
            "Boots",
            "Sports Shoes & Floaters",
            "Sports and Active Wear",
           
          ],
          href: "#",
        },
        {
          label: "Lingerie & Sleepwear",
          subLabel: [
            "Acne & Blemishes",
            "Fine Lines & Wrinkles",
            "Dark Circles",
            "Dry Skin",
            "Dullness",
            "Lack of Fairness",
            "Pigmentaion",
            
          ],
          href: "#",
        },
        {
          label: "Beauty & Personal Care",
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
          label: "Boys Clothing",
          subLabel: [
            "T-Shirts",
            "Casual Shirts",
            "Formal Shirts",
            "Sweatshirts",
            "Sweaters",
            "Jackets",
            "Blazzers and Coats",
            "Suits",
            "Rain Jackets",
           
          ],
          href: "#",
        },
        {
          label: "Girls Clothing",
          subLabel: [
            "Shampoo",
            "Conditioners",
            "Hair Treatments",
            "Hair Masks",
            "Hair Oils",
            "Hair Sprays",
            "Hair Styling",
            "Hair Thinning & Loss",
            
          ],
          href: "#",
        },
        {
          label: "Footwear",
          subLabel: [
            "Flats",
            "Casual Shoes",
            "Heels",
            "Boots",
            "Sports Shoes & Floaters",
            "Sports and Active Wear",
           
          ],
          href: "#",
        },
        {
          label: "Toys",
          subLabel: ["Flat Irons", "Hair Dryers", "Rollers & Curling Tongs"],
          href: "#",
        },
        {
          label: "Infants",
          subLabel: [
            " Removal Devices",
            " Removal Products",
            " Beauty Products",
          ],
          href: "#",
        },
      ],
    },
    {
      label: "HOME & LIVING",
      children: [
        {
          label: "Ben Linen & Furnishing",
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
          label: "Flooring",
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
          label: "Bath",
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
           
          ],
          href: "#",
        },
        {
          label: "Lamps and Lighting",
          subLabel: [
            "stastics",
            "Lamps Balms",
            "Lamp Glosses",
            " Liners",
            " Plumpers",
            "Liquid Lamps",
          ],
          href: "#",
        },
        {
          label: "Home Decor",
          subLabel: [
            "Accessories",
            "Pre-Tan Preparation",
            "Body Tanners",
            "Post Tanning",
          ],
          href: "#",
        },
      ],
    },
    {
      label: "BEAUTY",
      children: [
        {
          label: "Makeup",
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
          label: "Skincare,Bath & Body",
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
          label: "Baby Care",
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
          label: "Haircare",
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
          label: "Galary",
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
          label: "Deoderants",
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
          label: "Ethnic",
          subLabel: [
            "Scented Candles",
            "Diffusers",
            "Aromatherapy",
            "Pillow Mists",
            "Room Sprays",
          ],
          href: "#",
        },

        {
          label: "Upcoming Fashion",
          subLabel: [
            "In Shirts",
            "In Pants",
            "Casual",
            "Watches",
            "Footwear",
          ],
          href: "#",
        },
      ],
    },
  
  ]

  
