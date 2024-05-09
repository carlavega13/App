import EditProfile from "../EditProfile/EditProfile"
import s from "./FirstEditProfile.module.css"


const FirstEditProfile=()=>{
    return(
        <div className={s.box}>

        <h1>En tu primer inicio de sesion actualiza tu información</h1>
        <EditProfile firstEdit={true}/>
    </div>
)
}
export default FirstEditProfile