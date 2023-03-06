import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PageNotFound from "../Pages/PageNotFound";
import Register from "../Pages/Register";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import AddProductsPage from "../Pages/Admin/AddProductsPage";
import MensPage from "../Pages/Admin/MensPage";
import WomensPage from "../Pages/Admin/WomensPage";
import KidsPage from "../Pages/Admin/KidsPage";
import UsersPage from "../Pages/Admin/UsersPage";
import AdminProfilePage from "../Pages/Admin/AdminProfilePage";
import Address from "../Pages/Address";

import Wishlist from "../Pages/Wishlist";
import Cart from "../Pages/Cart";

import Payment from "../Pages/Payment";
import Success from "../Pages/Success";
import { PrivateRoute } from "./PrivateRouting";
import { AdminPrivateRoute } from "./AdminPrivateRoute";
import WomensProduct from "../Pages/WomensProducts";
import WomenSingleProductPage from "../Pages/WomenSingleProductPage";
import KidsProduct from "../Pages/KIdsProduct";
import KidSingleProductPage from "../Pages/KidSingleProductPage";
import MensProduct from "../Pages/MensProduct";
import MenSingleProductPage from "../Pages/MenSingleProductPage";

const AllRoutes = () => {
  // console.log(userName);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mens" element={<MensProduct />}></Route>
        <Route path="/womens" element={<WomensProduct/>}></Route>
        <Route path="/kids" element={<KidsProduct/>}></Route>
        <Route path="/product/Mens/:id" element={<MenSingleProductPage />}></Route>
        <Route path="/product/Womens/:id" element={<WomenSingleProductPage />}></Route>
        <Route path="/product/Child/:id" element={<KidSingleProductPage />}></Route>
        <Route
          path="/wishlist"
          element={
            // <PrivateRoute>
            <Wishlist />
            //</PrivateRoute>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/admin-dashboard"
          element={
            <AdminPrivateRoute>
              <AdminDashboard />
            </AdminPrivateRoute>
          }
        ></Route>
        <Route
          path="/add-products"
          element={
            <AdminPrivateRoute>
              <AddProductsPage />
            </AdminPrivateRoute>
          }
        ></Route>
        <Route
          path="/admin-men"
          element={
            <AdminPrivateRoute>
              <MensPage />
            </AdminPrivateRoute>
          }
        ></Route>
        <Route
          path="/admin-women"
          element={
            <AdminPrivateRoute>
              <WomensPage />
            </AdminPrivateRoute>
          }
        ></Route>
        <Route
          path="/admin-kids"
          element={
            <AdminPrivateRoute>
              <KidsPage />
            </AdminPrivateRoute>
          }
        ></Route>
        <Route
          path="/admin-users"
          element={
            <AdminPrivateRoute>
              <UsersPage />
            </AdminPrivateRoute>
          }
        ></Route>
        <Route
          path="/admin-profile"
          element={
            <AdminPrivateRoute>
              <AdminProfilePage />
            </AdminPrivateRoute>
          }
        ></Route>
        <Route
          path="/address"
          element={
            <PrivateRoute>
              <Address />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/success"
          element={
            <PrivateRoute>
              <Success />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
