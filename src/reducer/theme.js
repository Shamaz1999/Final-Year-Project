export default  (state = {theme:'normal'},action)=>{
    // console.log(action.type)
    // console.log(action.payload)
switch(action.type){
    case "theme_change":
        return {theme: action.payload};
    
    default:
        // console.log(action.type);

    return state;
}
}
