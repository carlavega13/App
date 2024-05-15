import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import AdminHome from "./Components/Admin/Admin-home/AdminHome";
import FirstEditProfile from "./Components/FirstEditProfile/FirstEditProfile";
import s from "./App.module.css";
import AdminCreateUser from "./Components/Admin/Admin-create-user/AdminCreateUser";

//
function App() {
  return (
    <div className={s.box}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/firstEditProfile" element={<FirstEditProfile />} />
        <Route path="/createUser" element={<AdminCreateUser />} />
      </Routes>
    </div>
  );
}
//
export default App;
