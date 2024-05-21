import { ToastContainer } from "react-toastify";
import AdminUsers from "../Admin-users/AdminUsers";
import s from "./AdminHome.module.css";
import store from "../../../Zustand/store";
import { useNavigate } from "react-router-dom";
const AdminHome = () => {
  const navigate=useNavigate()
  const {logOut}=store(s=>s)
  const handlelogOut=()=>{
    logOut()
    navigate("/")
  }
  return (
    <div className={s.box}>
      <div>
        <button onClick={handlelogOut}>Cerrar sesión</button>
        <button onClick={()=>navigate("/transactions")}>Historial de Movimiento</button>
      </div>
      <ToastContainer />
      <AdminUsers />
    </div>
  );
};
export default AdminHome;
