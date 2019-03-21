let adsReducer = (state = ["nokia"],action)=>{
    // console.log(action.payload)
        switch (action.type) {
            case "insertads":
                return [...state,action.payload]
            default:
                return state;
        }
    
    
}
export default adsReducer;