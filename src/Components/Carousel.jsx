import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 100,
  autoplaySpeed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function Carousel({images}) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  //const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "BLACK FRIDAY REPLAY",
      text: "We're giving you a second chance-get 25% off your most-wanted beauty products with code REPLAY. Order with standard shipping by 12/15 and they will make it under the tree.",
      image:
        "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/46/1130-STDCRE-44452-SS-MH-Q4-Photography-December-THG0035165-Batching-And-Artwork-P2-Shot-2-1180x450.jpeg-050446.jpg",
    },
    {
      title: "THE HOLIDAY EDIT",
      text: "Give 12 gifts in one box withour Holiday Edit, which features full & delux-sized beauty products that spread joy (and great skin). Filled with $670 worth of must-haves, get yours for just $69.30.",
      image:
        "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/10/original-New_Project_%283%29-085610.jpg",
    },
    {
      title: "HOLIDAY SHOP",
      text: "With something fro everyone on your list, you've reached your destination for beauty's best gifts.",
      image:
        "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/55/Shot6-1180x450-095455.jpeg",
    },
    {
      title: "COUNTDOWN!",
      text: "The Season for Savings. Recieve 30% off last-minute gifts that don't look last-minute with code COUNTDOWN. But hurry-discount drops by 1% every three hours (hint: the sale started at 9am EST!)",
      image:
        "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/20/1130-STDCRE-44452-SS-MH-Q4-Photography-December-THG0035165-Batching-And-Artwork-P2-Shot-6-1180x450.jpeg-083620.jpg",
    },
  ];

  const darkHover = {
    backgroundColor: "#28bdb7",
    color: "black",
    cursor: "pointer",
  };
  const lightHover = {
    backgroundColor: "gray",
    color: "black",
    cursor: "pointer",
  };

  return (
      <Box
        position={"relative"}
        height={"580px"}
        width={"100%"}
        m={"auto"}
        overflow={"hidden"}

      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        {/* <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={0}
          top={top}
          borderRadius={"none"}
          transform={"translate(0%, -50%)"}
          zIndex={1}
          onClick={() => slider?.slickPrev()}
      
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
       
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={0}
          top={top}
          borderRadius={"none"}
          transform={"translate(0%, -50%)"}
          zIndex={1}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton> */}
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {images?.map((card, index) => (
            <Box
              key={index}
              width={"100%"}
              height={"550px"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card})`}
            >
              {/* This is the block you need to change, to customize the caption */}
              {/* <Container
                width="400px"
                height="600px"
                position="absolute"
                textAlign={"left"}
              >
                <Stack
                  spacing={6}
                  w={"full"}
                  maxW={"lg"}
                  position="absolute"
                  top="47%"
                  left="20%"
                  zIndex={1}
                  transform="translate(0, -50%)"
                >
                  <Heading
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    color={index % 2 === 1 ? "black" : "white"}
                    fontFamily={"Lato-Regular,Helvetica,Arial,sans-serif"}
                  >
                    {card.title}
                  </Heading>
                  <Text
                    fontSize={{ base: "md", lg: "lg" }}
                    color={index % 2 === 1 ? "black" : "white"}
                    fontFamily={"Lato-Light,Helvetica,Arial,sans-serif"}
                  >
                    {card.text}
                  </Text>
                  <Button
                    width={"100px"}
                    borderRadius={"none"}
                    bg={index % 2 === 1 ? "black" : "white"}
                    color={index % 2 === 1 ? "white" : "black"}
                    _hover={index % 2 === 1 ? darkHover : lightHover}
                  >
                    SHOP NOW
                  </Button>
                </Stack>
              </Container> */}
            </Box>
          ))}
        </Slider>
      </Box>
  );
}
