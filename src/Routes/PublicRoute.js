import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { DASHBOARD_PATH } from './RoutePath'

export default function PublicRoute({ children}) {

    const isLogged = useSelector(state => state.isLoggedIn)
    
    return isLogged? <Navigate to={DASHBOARD_PATH} />:children
}
