import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _isEmpty from 'lodash/isEmpty'

import { handleKeys } from '../action/Action'
import { getStorage } from '../Storage/localStorage'

export default function MyAccount() {
    const userDetails = useSelector(state => state.loggedInUserDetails)
    const dispatch = useDispatch()
    useEffect(() => {
        if (_isEmpty(userDetails)) {
            getUserDetailsFromStorage()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [])

    const getUserDetailsFromStorage =  () => {
        let userData = getStorage('loggedInUserDetails')
        dispatch(handleKeys('loggedInUserDetails',JSON.parse( userData)))
        
    }
    return <div className='d-flex justify-content-center align-items-center p-3 '>
        <div className='shadow-sm p-3 bg-white rounded'>
            <img src="/images/user_Profile.png" alt="user profile" className="profile_Icon cursor-pointer" />
            <div className='d-flex flex-column'>
                <label className='p-2'>{`email : ${userDetails.email}`}</label>
                <label className='p-2'>{`lastLoginTime : ${userDetails.lastLoginTime}`}</label>
                <label className='p-2'>{`createdAt : ${userDetails.createdAt}`}</label>
                <label className='p-2'>{`providerId : ${userDetails.providerId}`}</label>
                <label className='p-2'>{`uid : ${userDetails.uid}`}</label>
            </div>
        </div>
    </div>
}