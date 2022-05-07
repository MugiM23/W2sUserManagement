import React, { useEffect, useState } from "react";
import { Button, Modal } from 'antd';
import { connect } from "react-redux";
import { EnvelopeOpenFill } from 'react-bootstrap-icons'

import { handleKeys, logoutUser } from "../action/Action";
import InputBox from "../Common/InputBox";
import { updateUserDetailToFirebase } from "../action/FirebaseActions";
import { setStorage, removeStorage } from "../Storage/localStorage";

function UserDashboard({
    loggedInUserDetails,
    handleKeys,
    logoutUser
}) {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    useEffect(() => {
        setEmail(loggedInUserDetails.email)
        setEmail(loggedInUserDetails.name)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const inputFields = [
        {
            value: name,
            placeholder: 'name',
            Prefix: '@',
            onChange: (e) => setName(e.target.value)
        },
        {
            value: email,
            placeholder: 'Email',
            Prefix: <EnvelopeOpenFill size={20} color='#868d94' />,
            onChange: (e) => setEmail(e.target.value)
        },

    ]
    const onPressUpdateProfile = () => {
        setIsOpenModal(true)
    }
    const hideModal = () => {
        setIsOpenModal(false)
    }
    const handleConfirm = () => {
        setIsOpenModal(false)
        let updatedUserDetails = {
            email: email,
            name: name
        }
        handleKeys('loggedInUserDetails', { ...loggedInUserDetails, email: email, name: name })
        setStorage('loggedInUserDetails', JSON.stringify({ ...loggedInUserDetails, email: email, name: name }))
        updateUserDetailToFirebase(updatedUserDetails)
    }
    const profileUpdateModal = () => {

        return <Modal
            title={'Update Details'}
            visible={isOpenModal}
            onOk={handleConfirm}
            onCancel={hideModal}
            okText={'Update'}
            cancelText={'Cancel'}
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
        </Modal>
    }
    const onPressLogOut = () => {
        logoutUser()
        removeStorage('loggedInUserDetails')
        removeStorage('userToken')
    }
    return <>
        <div  >
            <div className="d-flex justify-content-end">
                <Button onClick={onPressUpdateProfile}> Update profile </Button>
                <Button className="mx-2" onClick={onPressLogOut}> Logout </Button>
            </div>
            <div>
                <img src="images/welcome.png" alt='welcome' className='authPicture' />
            </div>
            <div>
                <label> Welcome {loggedInUserDetails.email} </label>
            </div>
            <div>
                <label> you're logged in as a user. Please login as admin to enjoy more features. </label>
            </div>
        </div>
        {isOpenModal ? profileUpdateModal() : null}
    </>

}

const mapStateToProps = (state) => {
    return {
        loggedInUserDetails: state.loggedInUserDetails
    }
}

export default connect(mapStateToProps, { handleKeys, logoutUser })(UserDashboard)
