
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
  HStack,
  Grid
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function FinalFooter() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <Grid gridTemplateColumns={{ base:"repeat(1,1fr)", sm: "repeat(2,1fr)", md: "repeat(3,1fr)",lg:"repeat(4,1fr)"}} gap={5} >
          <Stack align={'flex-start'}>
            <ListHeader>ONLINE SHOPPING</ListHeader>
            <Link href={"#"}>Men</Link>
              <Link href={"#"}>Women</Link>
              <Link href={"#"}>Kids</Link>
              <Link href={"#"}>Beauty</Link>
              <Link href={"#"}>Gift card</Link>
              <Link>Classic World Insider</Link>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>USEFUL LINKS</ListHeader>
            <Link href={"#"}>Blog</Link>
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>Site Map</Link>
              <Link href={"#"}>Corporate Information</Link>
              <Link href={"#"}>Whitehat</Link>
              <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>CUSTOMER POLICIES</ListHeader>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>FAQ</Link>
            <Link href={"#"}>T&C</Link>
            <Link href={"#"}>Terms Of Use</Link>
            <Link href={"#"}>Track Orders</Link>
            <Link href={"#"}>Shipping</Link>
            <Link href={"#"}>Cancellation</Link>
            <Link href={"#"}>Return</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Grievance Officer</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>REGISTER OFFICE ADDRESS</ListHeader>
            <Link href={"#"}>Begonia and Clover situated,</Link>
            <Link href={"#"}>BegEmbassy Tech Village,</Link>
            <Link href={"#"}>Outer Ring Road,</Link>
            <Link href={"#"}>Devarabeesanahalli Village,</Link>
            <Link href={"#"}>Varthur Hobli,</Link>
            <Link href={"#"}>Bengaluru – 560103, India</Link>
            <Link href={"#"}>CIN: U72300KA2007PTC041799</Link>
            <Link href={"#"}>Telephone: +91-80-61561999</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Install App</ListHeader>
            
            <Image src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg' alt='playStore' width={['50%','50%','80%','100%']} />
            <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Available_on_the_App_Store_%28black%29_SVG.svg/203px-Available_on_the_App_Store_%28black%29_SVG.svg.png?20130522010834' alt='applestore' 
             width={['50%','50%','80%','100%']}  />
           
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Accurance</ListHeader>
            <HStack>
            <Image src='https://previews.123rf.com/images/arcady31/arcady311304/arcady31130400034/19245976-original-stamp.jpg' alt='playStore' width={['30%','30%','40%','50%']} />
            
            <Image src='https://ocxooscillator.com/wp-content/uploads/2020/06/30days_Return_OcxoOscillator-1.png' alt='applestore' 
             width={['35%','35%','45%','60%']}  />
           </HStack>
          </Stack>
        </Grid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}