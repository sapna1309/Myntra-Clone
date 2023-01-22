import { Box, Heading, HStack, Stack } from '@chakra-ui/layout';
import { useEffect } from 'react';
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from 'react-redux';
import AdminNavbar from '../../Components/AdminNavbar';
import { getKidsData, getMensData, getUsersListData, getWomensData } from '../../Redux/Admin/Admin.action';

const AdminDashboard = () => {
  const {usersListData,kidsData,mensData,womensData} = useSelector((store)=>store.adminManager)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getKidsData());
    dispatch(getMensData());
    dispatch(getWomensData());
    dispatch(getUsersListData());
  },[])
  
  const kd =  kidsData.length;
  const md =  mensData.length;
  const wd =  womensData.length;
  const ud =  usersListData.length;

  //console.log(kd,md,wd);
  //#6476A3
  return (
    <Box minH="100vh" bg={'gray.100'}  >
        <AdminNavbar/>
        <Box marginTop={'80px'} pt={30} fontFamily={'sans-serif'}>
        <Stack bg={'white'}  ml={'250px'} padding={10} borderRadius={15} boxShadow={'base'}>
           <Heading fontFamily={'sans-serif'}>Total Products :  <b>{kd+md+wd}</b></Heading> 
          </Stack>
          
          <Box ml={'250px'} borderRadius={15} mt={10}>
        <Chart
   
         type="radialBar"
         height={450}
         series={[kd,md,wd,ud]}
         options={{
          noData: { text: "Unavailable" },
          stroke: {
            lineCap: "round"
          },
          radialBar: {
           // dataLabels: {
              total: {
                show: true,
                label: 'TOTAL',
              }
           // }
          },
          labels: [ "KIDS-PRODUCTS","MENS-PRODUCTS", "WOMENS-PRODUCTS",'TOTAL-USERS'],
          
        }}
           
         
         
      >

        </Chart>
        
        </Box>
        <HStack ml={'250px'} mt={10} pb={10} alignItems={'center'} spacing={3} >
          <Stack bg={'#00E396'} boxShadow={'base'}  padding={8} borderRadius={15}>
           <Heading fontWeight={'normal'} fontFamily={'sans-serif'}>Total Mens Products  <b>{md}</b></Heading> 
          </Stack>
          <Stack bg={'#FEB019'} padding={8}boxShadow={'base'} borderRadius={15}>
           <Heading fontWeight={'normal'} fontFamily={'sans-serif'}>Total Womens Products   <b>{wd}</b></Heading> 
          </Stack>
          <Stack bg={'#008FFB'} padding={8}boxShadow={'base'} borderRadius={15}>
           <Heading fontWeight={'normal'} fontFamily={'sans-serif'}>Total Kids Products   <b>{kd}</b></Heading> 
          </Stack>
          </HStack>
        </Box>
    </Box>
  )
}

export default AdminDashboard;