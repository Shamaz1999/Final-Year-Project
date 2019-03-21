import { createStore,combineReducers} from 'redux';
import updatee from './reducer/update'
import userReducer from'./reducer/userreducer'
import adsReducer from './reducer/adsReducer'

let allreducer = combineReducers({ userReducer,updatee,adsReducer});
let store = createStore(allreducer);

export default store;