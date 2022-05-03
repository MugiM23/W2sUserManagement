import *as types from './ActionType'
import initialState from '../store/initialState'


const RootReducer = (state, action) => {
  const { payload } = action

  switch (action.type) {
    case types.LOGIN_REQUEST: {
      // Replace the existing state entirely by returning the new valueuserDetails
      return { ...state }
    }
    case types.GET_USER_DETAILS_REQUEST: {
      return { ...state, loading: true }
    }
    case types.GET_USER_DETAILS_SUCCESS: {
      return { ...state, loading: false, userDetails: payload }
    }
    case types.GET_USER_DETAILS_FAILURE: {
      return { ...state, loading: false }
    }
    case types.HANDLE_KEYS: {
      return { ...state, [payload.key]: payload.value }
    }
   
    case types.RESET_REDUCER: {
      return { ...initialState }
    }
    default:
      return state
  }
}

export default RootReducer