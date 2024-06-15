import { ToastContainer } from "react-toastify";
import AdminUsers from "../Admin-users/AdminUsers";
import s from "./AdminHome.module.css";
import store from "../../../Zustand/store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EditProfile from "../../EditProfile/EditProfile";
import TransactionsList from "../../TransactionsList/TransactionsList";
const AdminHome = () => {
  const navigate=useNavigate()
  const [home,setHome]=useState("users")
  const {logOut}=store(s=>s)
  const handlelogOut=()=>{
    logOut()
    navigate("/")
  }
  return (
    <div className={s.box}>
      <ToastContainer />
      <div>
        <button onClick={handlelogOut}>Cerrar sesión</button>
        <button onClick={()=>setHome("historyTransactions")}>Historial de Movimiento</button>
        <button onClick={()=>setHome("editProfile")}>Editar mi perfil</button>
        <button onClick={()=>setHome("users")}>Usuarios</button>
      </div>
      {home==="editProfile"&&<EditProfile/>}
      {home==="users"&&<AdminUsers />}
      {home==="historyTransactions"&&<TransactionsList/>}
    </div>
  );
};
export default AdminHome;
