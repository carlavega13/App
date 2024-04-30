import store from "../../../Zustand/store"


//
const AdminUsers=()=>{
const user=store(s=>s.user)
console.log(user);

    return(
        <div>
lista usuarios
        </div>
    )
}
export default AdminUsers