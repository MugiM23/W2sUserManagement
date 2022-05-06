import React, { useState } from 'react'
import { LockFill } from 'react-bootstrap-icons'
import { Button } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'
import _isEmpty from 'lodash/isEmpty'
import { useDispatch } from 'react-redux';

import InputBox from '../Common/InputBox'
import { loginUser } from '../action/FirebaseActions'
import { DASHBOARD_PATH, SIGNUP_PATH } from '../Routes/RoutePath';
import { setStorage } from '../Storage/localStorage'
import { handleKeys } from '../action/Action';

export default function Login(props) {
    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const inputFields = [
        {
            value: userEmail,
            placeholder: 'Email',
            Prefix: '@',
            onChange: (e) => setUserEmail(e.target.value)
        },
        {
            value: password,
            placeholder: 'Password',
            Prefix: <LockFill size={20} color='#868d94' />,
            onChange: (e) => setPassword(e.target.value)
        }
    ]
    const onLoginPress = () => {
        if (userEmail === '') {
            toast('Email required')
            return false
        } else if (password === '') {
            toast('Password required')
            return false
        } else {
            let parametersObj = {
                email: userEmail,
                password: password
            }
            let extraData = { callBackFunc: authorizeUser }
            loginUser(parametersObj, extraData)
        }
    }
    const authorizeUser = (userResponse) => {
        if (!_isEmpty(userResponse)) {
            setStorage('userToken', userResponse.user.accessToken)
            let userDetails = {
                email: userResponse.user.email,
                isEmailVerified: userResponse.user.emailVerified,
                createdAt: userResponse.user.metadata.creationTime,
                lastLoginTime: userResponse.user.metadata.lastSignInTime,
                providerId : userResponse.user.providerId,
                uid : userResponse.user.uid,
                isAdmin:userResponse.isAdmin
            }
            setStorage('loggedInUserDetails', JSON.stringify(userDetails))
            dispatch(handleKeys('isLoggedIn', true))
            dispatch(handleKeys('loggedInUserDetails', userDetails))
            navigate(DASHBOARD_PATH)
        }
    }

    return <div className='d-flex flex-direction-row p-3'>
        <img src='images/login.png' alt='login' className='authPicture' />
        <div className='d-flex flex-column justify-content-center w-100'>
            <label className='p-2 font-weight-bold'>Login</label>
            <div className='d-flex justify-content-center'>
                <div className='w-75'>
                    {
                        inputFields.map((item, index) => {
                            return <InputBox
                                key={index}
                                value={item.value}
                                placeholder={item.placeholder}
                                onChange={item.onChange}
                                Prefix={item.Prefix}
                                size='md'
                            />
                        })
                    }
                    <div className='p-2'>
                        <label>Don't have an account <Link to={SIGNUP_PATH}>SignUp</Link> </label>
                    </div>
                    <Button variant="primary" size='sm' onClick={onLoginPress}>Login</Button>
                </div>
            </div>
        </div>
    </div>
}