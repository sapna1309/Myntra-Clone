import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import PageNotFound from '../Pages/PageNotFound'
import Product from '../Pages/Product'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/product' element={<Product/>} ></Route>
            <Route path='*' element={<PageNotFound/>} ></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes