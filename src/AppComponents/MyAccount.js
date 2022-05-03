import React from 'react'
import { useSelector } from 'react-redux'

export default function MyAccount() {
    const userDetails = useSelector(state => state.loggedInUserDetails)

    return <div className='d-flex justify-content-center align-items-center p-3 '>
        <div className='shadow-sm p-3 bg-white rounded'>
            <img src="/images/user_Profile.png" alt="user profile" className="profile_Icon cursor-pointer" />
            <div className='d-flex flex-column'>
                <label className='p-2'>{`email : ${userDetails.email}`}</label>
                <label className='p-2'>{`lastLoginTime : ${userDetails.lastLoginTime}`}</label>
                <label className='p-2'>{`createdAt : ${userDetails.createdAt}`}</label>
            </div>
        </div>
    </div>
}