import staticData from '../StaticUserDetails';
import *as types from './ActionType'


export const getUserDetails = (data) => dispatch => {
    dispatch({ type: types.GET_USER_DETAILS_REQUEST })
    setTimeout(() => {
        dispatch({ type: types.GET_USER_DETAILS_SUCCESS, payload: staticData })
    }, 1000);

}

export const handleKeys = (key, value) => dispatch => {
    dispatch({ type: types.HANDLE_KEYS, payload: { key, value } })
}
export const logoutUser = () => dispatch => {
    dispatch({ type: types.RESET_REDUCER })
}