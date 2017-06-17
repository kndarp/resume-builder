//This is the file where we combine all the reducers.
import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
//Now everywhere we will access UserReducer by user.
const allReducers = combineReducers({
    users:UserReducer,
    activeUser:ActiveUserReducer
})
export default allReducers;