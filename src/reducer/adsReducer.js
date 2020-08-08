let adsReducer = (state = ["nokia"],action)=>{
        switch (action.type) {
            case "insertads":
                return [action.payload]
            default:
                return state;
        }
    
    
}
export default adsReducer;