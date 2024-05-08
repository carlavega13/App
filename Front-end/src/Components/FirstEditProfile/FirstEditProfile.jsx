import { useEffect } from "react"
import EditProfile from "../EditProfile/EditProfile"
import store from "../../Zustand/store"

const FirstEditProfile=()=>{
    const{user}=store(s=>s)
    useEffect(()=>{
if(user.fullname&&user.rol==="administrador"){
// navigate()
}
    },[user])
return(
    <div>
        first
        <EditProfile/>
    </div>
)
}
export default FirstEditProfile