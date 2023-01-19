import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import PageNotFound from '../Pages/PageNotFound'

import Register from '../Pages/Register'

import Product from '../Pages/Product'
 fp06_174_Day_3
import AdminDashboard from '../Pages/Admin/Admin-Dashboard'

import SingleProductPage from './SingleProductPage'
 main

const AllRoutes = ({userName}) => {
  console.log(userName)
  
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/product' element={<Product/>} ></Route>
            <Route path='/product/:id' element={<SingleProductPage/>} ></Route>
            <Route path='*' element={<PageNotFound/>} ></Route>
            <Route path='/login' element={<Login/>} ></Route>
            <Route path='/register' element={<Register/>} ></Route>
            <Route path='/admin-dashboard' element={<AdminDashboard/>} ></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes