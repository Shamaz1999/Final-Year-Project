let updatee = (state = [{name:'a',email:'abc',balance:1}],action)=>{
    // console.log(action.type)
    // console.log(action.payload)
switch(action.type){
    case "up_user":
        return [...action.payload];
    
    default:
        // console.log(action.type);

    return state;
}
}
export default updatee;