let adsReducer = (state = ["nokia"],action)=>{
        switch (action.type) {
            case "insertads":
                return [...state,action.payload]
            default:
                return state;
        }
    
    
}
export default adsReducer;