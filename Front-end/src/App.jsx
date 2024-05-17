import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import AdminHome from "./Components/Admin/Admin-home/AdminHome";
import FirstEditProfile from "./Components/FirstEditProfile/FirstEditProfile";
import s from "./App.module.css";
import AdminCreateUser from "./Components/Admin/Admin-create-user/AdminCreateUser";
import store from "./Zustand/store";
import ErrorView from "./Components/Error-view/ErrorView";
import { useEffect } from "react";



//
function App() {
  const { user,login } = store((s) => s);
  const userLogged = JSON.parse(window.localStorage.getItem("userLogged"));
  useEffect(()=>{
    if(!user.id){
  login({...userLogged,relog:true})
    }

  },[user])
  return (
    <div className={s.box}>
      <Routes>
        <Route path="/" element={<Login />} />
        {user.id && <Route path="/adminHome" element={<AdminHome />} />}
        {user.id && <Route path="/firstEditProfile" element={<FirstEditProfile />} />}
        {user.id && <Route path="/createUser" element={<AdminCreateUser />} />}
        <Route path="*" element={<ErrorView/>} />
      </Routes>
    </div>
  );
}
//
export default App;
