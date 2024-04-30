import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../../Zustand/store";
//
const Login = () => {
  const navigate = useNavigate();
const userLogged=store(s=>s.user)
console.log(userLogged);
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

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  useEffect(() => {
    if (userLogged) {
      if(userLogged.rol==="administrador"){
        navigate("/adminHome");

      }
    }
  }, [userLogged]);
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
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};
export default Login;
