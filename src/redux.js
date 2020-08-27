import { createStore,combineReducers} from 'redux';
import updatee from './reducer/update'
import userReducer from'./reducer/userreducer'
import adsReducer from './reducer/adsReducer'
import socket from './reducer/socket';
let allreducer = combineReducers({ userReducer,updatee,adsReducer,socket});
let store = createStore(allreducer);

export default store;