import {createStore, combineReducers} from 'redux';
// import {connect} from 'redux' 
const userReducer =(state=["Ali","Ahmad","Zohaib"],action)=>{
    switch(action.type){

        case "Add":
        return [...state, action.payload];
        default:
        return state;
    }
}

const bookReducer=(state=["English","math","phy"],action)=>{

    switch(action.type){

        case "book":
        return [...state, action.payload];
        default:
        return state;
    }
}
const allReducers=combineReducers({userReducer, bookReducer});
let store=createStore(allReducers);
export default store;