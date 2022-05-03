import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { LOGIN_PATH } from './RoutePath'

export default function PrivateRoute({ children }) {

    const isLogged = useSelector(state => state.isLoggedIn)

    return isLogged ? children : <Navigate to={LOGIN_PATH} />;
}