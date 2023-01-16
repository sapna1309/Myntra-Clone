import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import PageNotFound from '../Pages/PageNotFound'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='*' element={<PageNotFound/>} ></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes