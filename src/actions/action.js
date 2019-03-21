let updateee = (data) => {
    return ({ type: "up_user", payload: data })
}
let insertads = (data)=>{
return ({type:"insertads",payload:data})
}
let aftedelete = (data)=>{
    return {type:"After_delete",payload:data}
}
let search = (data)=>{
return ({type:"search_user",payload:data})
}

export { insertads, search, aftedelete, updateee} ;