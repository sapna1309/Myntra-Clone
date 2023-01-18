import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import PageNotFound from '../Pages/PageNotFound'

import Register from '../Pages/Register'

import Product from '../Pages/Product'

const AllRoutes = ({userName}) => {
  console.log(userName)
  
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/product' element={<Product/>} ></Route>
            <Route path='*' element={<PageNotFound/>} ></Route>
            <Route path='/login' element={<Login/>} ></Route>
            <Route path='/register' element={<Register/>} ></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes