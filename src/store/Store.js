import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import initialState from "./initialState";
import rootReducer from '../action/Reducer'


const middleWare = applyMiddleware(thunk)

const store = createStore(rootReducer,initialState, middleWare)

export default store