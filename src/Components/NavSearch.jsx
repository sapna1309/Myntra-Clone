import { Box, Input, InputGroup, InputLeftElement, Text, useDisclosure } from '@chakra-ui/react'
import React ,{useEffect, useState} from 'react'
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useThrottle } from './useThrottling';
import { SearchIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWishlistData } from '../Redux/Wishlist/Wishlist.action';
import { getKidsData, getMensData, getWomensData } from '../Redux/Admin/Admin.action';


const NavSearch = () => {
    const location=useLocation();
    const [query ,setQuery] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {mensData,womensData,kidsData} = useSelector(store => store.adminManager);
    const {wishlistData} =useSelector(store=>store.wishlist)
    const dispatch = useDispatch()
    const {id} = useParams();
    let Products = [...mensData,...womensData,...kidsData];
    //console.log("AllProducts",Products);
   // console.log("ID",id);
useEffect(()=>{
    dispatch(fetchWishlistData());
    dispatch(getMensData());
    dispatch(getWomensData());
    dispatch(getKidsData());
},[dispatch])
    const [suggestions ,setSuggestion] = useState([]);
//console.log(isOpen)
    const throttledText = useThrottle(query,500)
    useEffect(()=>{

      if(throttledText === ""){
        setSuggestion([])
      }else{
        if(location.pathname==="/mens"){
            let newSuggestions = mensData.filter(item=>(
                item.brand.split("").join("").trim().toLowerCase().includes(throttledText)? true : false
              ))
              setSuggestion(newSuggestions)
              console.log(newSuggestions)
        }else if(location.pathname===`/product/Mens/${id}`){
          let newSuggestions = mensData.filter(item=>(
              item.brand.split("").join("").trim().toLowerCase().includes(throttledText)? true : false
            ))
            setSuggestion(newSuggestions)
            console.log(newSuggestions)
      }else if(location.pathname==="/womens"){
            let newSuggestions = womensData.filter(item=>(
                item.brand.split("").join("").trim().toLowerCase().includes(throttledText)? true : false
              ))
              setSuggestion(newSuggestions)
              console.log(newSuggestions)  
        }else if(location.pathname===`/product/Womens/${id}`){
          let newSuggestions = womensData.filter(item=>(
              item.brand.split("").join("").trim().toLowerCase().includes(throttledText)? true : false
            ))
            setSuggestion(newSuggestions)
            console.log(newSuggestions)  
      }else if(location.pathname==="/kids"){
            let newSuggestions = kidsData.filter(item=>(
                item.brand.split("").join("").trim().toLowerCase().includes(throttledText)? true : false
              ))
              setSuggestion(newSuggestions)
              console.log(newSuggestions)
        }else if(location.pathname===`/product/Child/${id}`){
          let newSuggestions = kidsData.filter(item=>(
              item.brand.split("").join("").trim().toLowerCase().includes(throttledText)? true : false
            ))
            setSuggestion(newSuggestions)
            console.log(newSuggestions)
      }else if(location.pathname==="/"){
         let newSuggestions = Products.filter(item=>(
              item.brand.split("").join("").trim().toLowerCase().includes(throttledText)? true : false
            ))
            setSuggestion(newSuggestions)
            console.log(newSuggestions)
      }else if(location.pathname==="/wishlist"){
        let newSuggestions = wishlistData.filter(item=>(
            item.brand.split("").join("").trim().toLowerCase().includes(throttledText)? true : false
          ))
          setSuggestion(newSuggestions)
          console.log(newSuggestions)
    }
        
      }

    },[throttledText])

  return (
    <Box position="relative" width={"100%"}>
        
        <InputGroup
          >
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.500" />}
            />
            <Input
              type="text"
              value={query}
              width={"100%"}
              onChange={(e)=>{setQuery(e.target.value.toLowerCase());
            onOpen()}}
              placeholder="Search..."
              borderBottom={"2px solid #BB1679"}
            />
          </InputGroup>
          {
            suggestions.length > 0 && isOpen && 
          
          <Box border="0px solid red" position={"absolute"} left={["1%","0%","-42%","-42%"]} right={"15%"} zIndex="100" backgroundColor="white"
          boxShadow={"xl"}
          overflowY='scroll'
          height={"350px"}
          width={{base:"100%",sm:"100%",md:'450px',lg:'450px'}}
          borderBottom={"4px solid #BB1679"}
          borderRadius={"lg"}
          >
              {
                suggestions?.map((el,i)=>(
                  <Link to={`/product/${el.category}/${el.id}`} >
                  <Text cursor={'pointer'} key={el.id} pt={1} onClick={()=>{
                    onClose();
                    setQuery("");
                  }}>{el.title}</Text>
                  </Link>
                ))
              }
          </Box>}
    </Box>
  )
}

export default NavSearch;