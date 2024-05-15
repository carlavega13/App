import { ToastContainer } from "react-toastify";
import AdminUsers from "../Admin-users/AdminUsers";
import s from "./AdminHome.module.css";
const AdminHome = () => {
  return (
    <div className={s.box}>
      <div></div>
      <ToastContainer />
      <AdminUsers />
    </div>
  );
};
export default AdminHome;
