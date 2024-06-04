import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import store from "../../Zustand/store";
//
const Login = () => {
  const navigate = useNavigate();
  const userLogged = store((s) => s.user);
  const login = store((s) => s.login);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await login(user);
    } catch (error) {}
  };
  useEffect(() => {
    if (Object.entries(userLogged).length !== 0) {
      if (!userLogged.fullname) {
        return navigate("/firstEditProfile");
      }
      if (userLogged.rol === "admin") {
        return navigate("/adminHome");
      }
    }
  }, [userLogged]);
  const handleForgetPassword = () => {
    navigate("/forgetPassword");
  };
  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo Electrónico: </label>
          <input
            onChange={handleChange}
            value={user?.email}
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu correo"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña: </label>
          <input
            onChange={handleChange}
            value={user?.password}
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            required
          />
        </div>
        <p onClick={handleForgetPassword}>Olvide mi contraseña</p>
        <button type="submit">Iniciar Sesión</button>
      </form>

    </div>
  );
};
export default Login;
