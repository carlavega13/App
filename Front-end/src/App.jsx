import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import AdminHome from "./Components/Admin/Admin-home/AdminHome";
import FirstEditProfile from "./Components/FirstEditProfile/FirstEditProfile";

//
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/adminHome" element={<AdminHome/>} />
        <Route path="/firstEditProfile" element={<FirstEditProfile/>} />
      </Routes>
    </div>
  );
}
//
export default App;
