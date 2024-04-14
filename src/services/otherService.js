import axios from "axios"
import { useAuth } from "./serviceAuth"
const Axios=axios.create({
    baseURL:'http://localhost:4000/api'
})
Axios.interceptors.request.use(request=>{
    console.log(request)
    let token=useAuth.getToken()
    if(token) {
        request.headers.Authorization='Bearer '+token
    }
    return request
})

export default Axios