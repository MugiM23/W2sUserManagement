import React, { useState, Fragment, useEffect } from "react";
import { Dropdown, Button } from 'react-bootstrap'
import { connect } from "react-redux";
import { Table, Tag, Space, } from 'antd'
import _isEmpty from 'lodash/isEmpty'
import Column from "antd/lib/table/Column";
import ReactLoading from "react-loading"
import { useNavigate } from "react-router-dom";

import { handleKeys, getUserDetails, logoutUser } from "../action/Action";
import { USER_PATH } from "../Routes/RoutePath";
import { removeStorage } from "../Storage/localStorage";


function Dashboard({
    handleKeys,
    userDetails,
    getUserDetails,
    loading,
    logoutUser
}) {
const navigate = useNavigate()
    const [userData, setUserData] = useState(userDetails)
    const roles = ['developer', 'admin', 'tester', 'HR']

    useEffect(() => {
        getUserDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setUserData(userDetails)
    }, [userDetails])

    const onClickUpdateRole = (selectedId, selectedRole) => {
        let updatedUserDetails = userData.map((item) => {
            if (item.id === selectedId) {
                return { ...item, role: selectedRole }
            } else return { ...item }
        })
        setUserData(updatedUserDetails)
    }
    const onClickDeleteUser = (selectedId) => {
        let filteredUsers = userData.filter((item) => item.id !== selectedId)
        setUserData(filteredUsers)
    }

    const onLogOut = () => {
        logoutUser()
        removeStorage('loggedInUserDetails')
        removeStorage('userToken')
    }
    if (loading) {
        return <div className="d-flex justify-content-center align-items-center">
            <ReactLoading type={'spinningBubbles'} color={'#0d6efd'} height={50} width={50} />
        </div>
    }
    return <div className="d-flex flex-column">
        {
            _isEmpty(userData) ?
                <div className="d-flex justify-content-center align-items-center">
                    <label>Oops! No records found</label>
                </div>
                :
                <Fragment>
                    <div className="d-flex justify-content-end align-items-center p-2 ">
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic" size="sm" >
                                <img src="/images/user_Profile.png" alt="user profile" className="profile_Icon cursor-pointer" />
                                <label className="px-2 cursor-pointer"> My Account </label>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>navigate(USER_PATH)} >My Account</Dropdown.Item>
                                <Dropdown.Item onClick={onLogOut}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>
                    <div>
                        <Table dataSource={userData} >
                            <Column title={'Name'} dataIndex={"username"} key={"username"} />
                            <Column title={'Email'} dataIndex={"email"} key={"email"} />
                            <Column title={'Phone'} dataIndex={"phone"} key={"phone"} />
                            <Column title={'Gender'} dataIndex={"gender"} key={"gender"} />
                            <Column
                                title="Role"
                                dataIndex="role"
                                key="role"
                                render={tag => (
                                    <Tag color="blue" key={tag}>
                                        {tag}
                                    </Tag>
                                )}
                            />
                            <Column
                                title="Action"
                                key="action"
                                render={(text, record) => {
                                    return <Space size="middle">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="primary" id="dropdown-basic" size="sm" >
                                                <label className="px-2 cursor-pointer"> Update Role </label>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {
                                                    roles.map((item) => {
                                                        if (item !== record.role) {
                                                            return <Dropdown.Item onClick={() => onClickUpdateRole(record.id, item)}>{item}</Dropdown.Item>
                                                        }
                                                        else return null
                                                    })
                                                }
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Button onClick={() => onClickDeleteUser(record.id)}>Delete</Button>
                                    </Space>
                                }}
                            />
                        </Table>
                    </div>
                </Fragment>
        }
    </div>
}

const mapStateToProps = (state) => {
    return {
        userDetails: state.userDetails,
        loading: state.loading,
    }
}

export default connect(mapStateToProps, { handleKeys, getUserDetails,logoutUser })(Dashboard)