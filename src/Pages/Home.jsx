import { Box, Image, Center, Grid } from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from 'axios';
import HomePageHeader from '../assets/HomePageHeader.png';
import { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';



const Home = () => {
  const [data, setData] = useState([]);
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
  console.log("Data",data);
  return (
    <Box width={'100%'} >
        {/* <Heading size={'lg'} >Welcome To Home Page</Heading> */}
        <Navbar/>
        <Center>
        <Image src={HomePageHeader}
          alt='home-page-header' width={"95%"} mt={100} />
           </Center>
          <Image src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/3d8b5917-e115-425b-8c93-2c2e427f9d4f1673517461716-OMG-Deal--2-.jpg' alt='omgDeals' />
          <Grid gridTemplateColumns={"repeat(10,1fr)"} >
            {data.HomePageOmgDeals?.map((el,i)=>(
              <Image key={i} src={el.image} />
            ))}
          </Grid>
          <Image src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/e78ea5f5-8bcc-43e2-afce-529b95a166081673517538108-Grand-Brands.jpg' alt='grandBrands' />
          <Grid gridTemplateColumns={"repeat(10,1fr)"} >
            {data.HomePageGrandBrands?.map((el,i)=>(
              <Image key={i} src={el.image} />
            ))}
          </Grid>
          <Image src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/1c508dcd-ee9f-4485-81a5-71d97bf512e31673517538088-Brands-To-Bag.jpg' alt='brandsToBag' />
          <Grid gridTemplateColumns={"repeat(9,1fr)"} >
            {data.HomePageBrandsToBag?.map((el,i)=>(
              <Image key={i} src={el.image} />
            ))}
          </Grid>
          <Image src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/11/2eb7efa2-1743-43b4-94c0-8b634d1be9af1673439896772-Budget-Buys--3-.jpg' alt='budgetToBuys' />
          <Grid gridTemplateColumns={"repeat(8,1fr)"} >
            {data.HomePageBudgetToBuys?.map((el,i)=>(
              <Image key={i} src={el.image} />
            ))}
          </Grid>
          <Image src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/11/ba62da25-d69a-441f-a639-4bd08534f3451673416953973-Shop-By-Category--2-.jpg' alt='shopByCategory' />
          <Grid gridTemplateColumns={"repeat(6,1fr)"} >
            {data.HomePageShopByCategory
?.map((el,i)=>(
              <Image key={i} src={el.image} />
            ))}
          </Grid>
          <Footer/>
    </Box>
  )
}

export default Home