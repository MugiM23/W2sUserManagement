import React, { useEffect, useState } from "react";
import { Modal, Radio } from 'antd';
import { EnvelopeOpenFill, TelephoneFill } from 'react-bootstrap-icons'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import InputBox from "./InputBox";
import { handleKeys } from "../action/Action";

export default function UserManagementModal({
    isModalVisible,
    title = '',
    cancelText = 'Cancel',
    hideUserManageMentModal = () => { },
    userDetails = {}
}) {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [selectedGender, setSelectedGender] = useState('')
    const [selectedRole, setSelectedRole] = useState('')
    const allUserDetails = useSelector(state => state.userDetails)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isModalVisible === 'Edit') {
            setUserName(userDetails[0]?.username)
            setEmail(userDetails[0]?.email)
            setPhone(userDetails[0]?.phone)
        }
        else {
            resetState()
        }
    }, [isModalVisible])

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
            value: phone,
            placeholder: 'Phone',
            Prefix: <TelephoneFill size={20} color='#868d94' />,
            onChange: (e) => setPhone(e.target.value)
        }
    ]
    const handleConfirm = () => {
        resetState()
        onSubmit()
        hideUserManageMentModal()
    }
    const onSubmit = () => {
        resetState()
        if (isModalVisible === 'Create') {
            let newUserDetails = {
                "id": allUserDetails.length + 1,
                "username": userName,
                "hiredOn": new Date(),
                "email": email,
                "phone": phone,
                "role": selectedRole,
                "gender": selectedGender,
                "portrait": "portraits/admin.jpg",
                "thumbnail": "portraits/admin-thumb.jpg"
            }
            let updatedUserDetails = [...allUserDetails, { ...newUserDetails }]
            dispatch(handleKeys('userDetails', updatedUserDetails))
        } else {
            let updatedUserDetails = allUserDetails.map((item) => {
                if (item.id === userDetails[0].id) {
                    return { ...item, username: userName, "email": email, "phone": phone }
                }
                else {
                    return {...item}
                }
            })
            dispatch(handleKeys('userDetails', updatedUserDetails))
        }
        hideUserManageMentModal()
    }
    const resetState = () => {
        setUserName('')
        setEmail('')
        setPhone('')
    }
    const handleGenderChange = (e) => {
        setSelectedGender(e.target.value)
    }
    const handleRoleChange = (e) => {
        setSelectedRole(e.target.value)
    }
    return <div className="d-flex">
        <Modal
            title={title}
            visible={isModalVisible}
            onOk={handleConfirm}
            onCancel={hideUserManageMentModal}
            okText={title === 'Create User' ? 'Create' : 'Update'}
            cancelText={cancelText}
        >
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
            {
                isModalVisible === 'Create' && <div className="p-2">
                    <div className="d-flex justify-content-center align-items-center py-2">
                        <label className="px-2"> Gender </label>
                        <Radio.Group value={selectedGender} onChange={handleGenderChange}>
                            <Radio.Button value="Male">Male</Radio.Button>
                            <Radio.Button value="Female">Female</Radio.Button>
                        </Radio.Group>
                    </div>
                    <div className="d-flex justify-content-center align-items-center py-2">
                        <label className="px-2"> Select Role </label>
                        <Radio.Group value={selectedRole} onChange={handleRoleChange}>
                            <Radio.Button value="HR">HR</Radio.Button>
                            <Radio.Button value="developer">developer</Radio.Button>
                            <Radio.Button value="admin">admin</Radio.Button>
                            <Radio.Button value="tester">tester</Radio.Button>
                        </Radio.Group>
                    </div>
                </div>
            }
        </Modal>
    </div>
}