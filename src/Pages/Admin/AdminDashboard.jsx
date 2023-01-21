import { Box } from '@chakra-ui/layout';
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
  return (
    <Box minH="100vh" bg={'gray.100'}  >
        <AdminNavbar/>
        <Box marginTop={'80px'} >
        <Chart
         mt={200}
         type="pie"
         width={1349}
         height={350}
         series={[kd,md,wd,ud]}
         options={{
           noData: { text: "Pie Chart" },
          dropShadow: {
            enabled: true,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5
          },
           labels: [ "Kids","Mens", "Womens",'Users'],
         }}
         
      >

        </Chart>
        </Box>
    </Box>
  )
}

export default AdminDashboard;