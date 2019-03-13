remove =(data)=>{
    return {type:"Remove", payload:data}
}
addObj = (data) =>{
return {type:"Add",payload:data}
}
export { add,remove};