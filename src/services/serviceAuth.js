import Axios from "./otherService"

let login = async(user) =>{
    const resultat = await Axios.post('/utilisateur/login',user)
    return resultat.data
}

let logout=()=>{
    localStorage.removeItem('token')
}

let saveToken=(token)=>{
    localStorage.setItem('token',token)
}
let isLogged=()=>{
    const token=localStorage.getItem('token')
    return !!token
}
let getToken=()=>{
    return localStorage.getItem('token')
}



export const useAuth={
    login,
    getToken,
    isLogged,
    saveToken,
    logout
}

