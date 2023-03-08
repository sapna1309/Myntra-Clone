import { Box, Image, Center, Grid, HStack, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from 'axios';
import HomePageHeader from '../assets/HomePageHeader.png';
import { useEffect } from 'react';
import FinalNavbar from '../Components/FinalNavbar';
import FinalFooter from '../Components/FinalFooter';
import NavSearch from '../Components/NavSearch';

const Home = () => {
  const [data, setData] = useState([]);
  //const {currentUserData}=useSelector((store)=>store.adminManager);
  

  const getImagedata=async()=>{
    try {
      let res = await axios.get(`https://classic-world.onrender.com/HomePageData`);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getImagedata();
    
  },[])

  return (
    <Box width={'100%'} >
        <FinalNavbar/>
        <Box border={"0px solid black"} display={{base:"flex",sm:"flex",md:"none",lg:"none"}} mt={"75px"} mb={"-60px"} width={"85%"} mx={"auto"} >
        <NavSearch/>
      </Box>
        <Center>
        <Image src={HomePageHeader}
          alt='home-page-header' width={['100%','100%',"95%","95%"]} mt={['80px','80px','60px','60px']} 
          />
           </Center>
           <Box>
          <Image src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/3d8b5917-e115-425b-8c93-2c2e427f9d4f1673517461716-OMG-Deal--2-.jpg' alt='omgDeals' />
          <Grid gridTemplateColumns={["repeat(3,1fr)","repeat(6,1fr)","repeat(6,1fr)","repeat(9,1fr)"]} gap={[0,0,0,0]} >
            {data.HomePageOmgDeals?.map((el,i)=>(
              <Image key={i} src={el.image} />
            ))}
          </Grid>
          <Image src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/e78ea5f5-8bcc-43e2-afce-529b95a166081673517538108-Grand-Brands.jpg' alt='grandBrands' />
          <Grid gridTemplateColumns={["repeat(3,1fr)","repeat(6,1fr)","repeat(6,1fr)","repeat(9,1fr)"]} gap={[0,0,0,0]} >
            {data.HomePageGrandBrands?.map((el,i)=>(
              <Image key={i} src={el.image} />
            ))}
          </Grid>
          <Image src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/1c508dcd-ee9f-4485-81a5-71d97bf512e31673517538088-Brands-To-Bag.jpg' alt='brandsToBag' />
          <Grid gridTemplateColumns={["repeat(3,1fr)","repeat(6,1fr)","repeat(6,1fr)","repeat(9,1fr)"]} gap={[0,0,0,0]} >
            {data.HomePageBrandsToBag?.map((el,i)=>(
              <Image key={i} src={el.image} />
            ))}
          </Grid>
          <Image src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/11/2eb7efa2-1743-43b4-94c0-8b634d1be9af1673439896772-Budget-Buys--3-.jpg' alt='budgetToBuys' />
          <Grid gridTemplateColumns={["repeat(2,1fr)","repeat(4,1fr)","repeat(4,1fr)","repeat(8,1fr)"]} gap={[0,0,0,0]}>
            {data.HomePageBudgetToBuys?.map((el,i)=>(
              <Image key={i} src={el.image} />
            ))}
          </Grid>
          <Image src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/11/ba62da25-d69a-441f-a639-4bd08534f3451673416953973-Shop-By-Category--2-.jpg' alt='shopByCategory' />
          <Grid gridTemplateColumns={["repeat(3,1fr)","repeat(6,1fr)","repeat(6,1fr)","repeat(6,1fr)"]} gap={[0,0,0,0]} >
            {data.HomePageShopByCategory
?.map((el,i)=>(
              <Image key={i} src={el.image} />
            ))}
          </Grid>
     </Box>
     <FinalFooter/>
    </Box>
  )
}

export default Home