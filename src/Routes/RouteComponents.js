import React from "react";
import { Route, Routes } from 'react-router-dom'

import Dashboard from '../AppComponents/Dashboard'
import Login from "../AuthComponents/Login";
import SignUp from "../AuthComponents/SignUp";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Home from "../Home";
import { DASHBOARD_PATH, LOGIN_PATH, SIGNUP_PATH, USER_PATH } from "./RoutePath";
import MyAccount from "../AppComponents/MyAccount";



export default function RouterComponent(props) {

    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path={DASHBOARD_PATH} element={<PrivateRoute><Dashboard/></PrivateRoute>} />
        <Route path={USER_PATH} element={<PrivateRoute><MyAccount/></PrivateRoute>} />
        <Route path={LOGIN_PATH} element={<PublicRoute><Login/></PublicRoute>} />
        <Route path={SIGNUP_PATH} element={<PublicRoute><SignUp/></PublicRoute>} />
    </Routes>
}