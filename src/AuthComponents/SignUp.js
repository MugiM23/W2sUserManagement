import React, { useState } from 'react'
import { LockFill, EnvelopeOpenFill } from 'react-bootstrap-icons'
import { Button } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import InputBox from '../Common/InputBox'
import { newUserRegister } from '../action/FirebaseActions'
import { LOGIN_PATH } from '../Routes/RoutePath';

export default function SignUp(props) {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const inputFields = [
        {
            value: userName,
            placeholder: 'Username',
            Prefix: '@',
            onChange: (e) => setUserName(e.target.value)
        },
        {
            value: email,
            placeholder: 'Email',
            Prefix: <EnvelopeOpenFill size={20} color='#868d94' />,
            onChange: (e) => setEmail(e.target.value)
        },
        {
            value: password,
            placeholder: 'Password',
            Prefix: <LockFill size={20} color='#868d94' />,
            onChange: (e) => setPassword(e.target.value)
        }
    ]
    const onSignUpPress = () => {
        const parametersObj = {
            name: userName,
            email: email,
            password: password
        }
        if (userName === '') {
            toast('username required')
            return false
        } else if (email === '') {
            toast('Email required')
            return false
        } else if (password === '') {
            toast('Password required')
            return false
        } else {
            // setLoading(true)
            newUserRegister(parametersObj)
        }
    }
    return <div className='d-flex flex-direction-row p-3'>
        <img src='images/signup.png' alt='login' className='authPicture' />
        <div className='d-flex flex-column justify-content-center w-100'>
            <label className='p-2 font-weight-bold'>Sign Up</label>
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
                        <label>Already signed up <Link to={LOGIN_PATH}>Login</Link> </label>
                    </div>
                    <Button variant="primary" size='sm' onClick={onSignUpPress}>Sign Up</Button>
                </div>
            </div>
        </div>
    </div>
}