import { Box, Heading, Stack } from '@chakra-ui/layout';
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
  },[dispatch])
  
  const kd =  kidsData.length;
  const md =  mensData.length;
  const wd =  womensData.length;
  const ud =  usersListData.length;

  const total = kd+md+wd;

  //console.log(kd,md,wd);
  //#6476A3
  return (
    <Box minH="100vh" minW="100%" bg={'gray.100'}  >
        <AdminNavbar/>
        <Box marginTop={'80px'} pt={30} fontFamily={'sans-serif'}>
        <Stack bg={'white'}  ml={[0,0,'250px','250px']} padding={10} borderRadius={15} boxShadow={'base'}>
           <Heading fontFamily={'sans-serif'} fontSize={[20,20,25,35]} >Total Products :  <b>{total}</b></Heading> 
          </Stack>
          
          <Box display={["none","block","block",'block']} ml={[0,0,"250px","250px"]} justifyContent={"center"} mt={10} border={"0px solid black"} >
        <Chart
   
         type="radialBar"
         height={450}
         series={[total,md,wd,kd,ud]}
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
          labels: [ "TOTAL_PRODUCTS","MENS-PRODUCTS", "WOMENS-PRODUCTS","KIDS-PRODUCTS",'TOTAL-USERS'],
          
        }}
           
         
         
      >

        </Chart>
        
        </Box>
        <Box display={["block","none","none",'none']}  justifyContent={"center"} mt={10}>
        <Chart
   
         type="radialBar"
         height={330}
         series={[total,md,wd,kd,ud]}
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
          labels: [ "TOTAL_PRODUCTS","MENS-PRODUCTS", "WOMENS-PRODUCTS","KIDS-PRODUCTS",'TOTAL-USERS'],
          
        }}
           
         
         
      >

        </Chart>
        
        </Box>
        <Box display={"flex"} flexDirection={["column","row","row","row"]} ml={[0,0,'250px','250px']} mt={10} pb={10} alignItems={'center'} border={"0px solid black"} gap={5}>
          <Stack bg={'#00E396'} boxShadow={'base'}  padding={8} borderRadius={15}>
           <Heading fontWeight={'normal'} fontSize={[20,20,25,35]} fontFamily={'sans-serif'}>Total Mens Products  <b>{md}</b></Heading> 
          </Stack>
          <Stack bg={'#FEB019'} padding={8}boxShadow={'base'} borderRadius={15}>
           <Heading fontWeight={'normal'} fontSize={[20,20,25,35]} fontFamily={'sans-serif'}>Total Womens Products   <b>{wd}</b></Heading> 
          </Stack>
          <Stack bg={'#008FFB'} padding={8}boxShadow={'base'} borderRadius={15}>
           <Heading fontWeight={'normal'} fontSize={[20,20,25,35]} fontFamily={'sans-serif'}>Total Kids Products   <b>{kd}</b></Heading> 
          </Stack>
          </Box>
        </Box>
    </Box>
  )
}

export default AdminDashboard;