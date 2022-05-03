import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import RouterComponent from './Routes/RouteComponents'
import { hasStorage, getStorage } from './Storage/localStorage'
import { handleKeys } from './action/Action'


export default function AppLayout(props) {

    const dispatch = useDispatch()

    useEffect(() => {
        handleLoad()
        // window.addEventListener('load', handleLoad)
        // return () => {
        //     window.removeEventListener('load', handleLoad)
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleLoad = () => {
        if (hasStorage('userToken')) {
            dispatch(handleKeys('isLoggedIn', true))
            let userData = getStorage('loggedInUserDetails')
            dispatch(handleKeys('loggedInUserDetails',JSON.parse( userData)))
        }
    }
    return <div>
        <RouterComponent />
    </div>
}