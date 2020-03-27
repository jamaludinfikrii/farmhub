import { combineReducers } from 'redux'
import {counterReducer} from './counter'
import {userReducer} from './user'

export default combineReducers({
    counter : counterReducer,
    name : userReducer
})
