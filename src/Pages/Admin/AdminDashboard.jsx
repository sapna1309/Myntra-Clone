import { Box } from '@chakra-ui/layout';
import React from 'react'
import AdminNavbar from '../../Components/AdminNavbar';

const AdminDashboard = () => {
  return (
    <Box minH="100vh" bg={'gray.100'}>
        <AdminNavbar/>
    </Box>
  )
}

export default AdminDashboard;