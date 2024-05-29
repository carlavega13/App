import { useNavigate } from "react-router-dom";
import s from "./AdminCreateUser.module.css";
import { useEffect, useState } from "react";
import validator from "./validator";
import store from "../../../Zustand/store";
import { ToastContainer } from "react-toastify";
import randomPassword from "../../../utils/randomPassword";
const AdminCreateUser = () => {
  const navigate = useNavigate();
  const { postUser } = store((s) => s);
  const [flag, setFlag] = useState(false);
  const [info, setInfo] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    firstname: "",
    lastname: "",
    phone: "",
  });
  const [error, setError] = useState({
    flag: false,
    email: "",
    password: "",
    confirmpassword: "",
    firstname: "",
    lastname: "",
    phone: "",
  });
  useEffect(() => {
    setError(validator(info, error.flag));
  }, [info]);

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };
  const handleCreate = (e) => {
    e.preventDefault();
    if (
      !error.email &&
      !error.firstname &&
      !error.lastname &&
      !error.phone &&
      !error.password &&
      !error.confirmpassword
    ) {
      setError({ ...error, flag: false });
      postUser(info);
    } else {
      setError({ ...error, flag: true });
    }
  };
const handlerRandomPassword=()=>{
const randomPass= randomPassword()
setInfo({...info,password:randomPass,confirmpassword:randomPass})
}
console.log(info.password);
  return (


    <div>
      <ToastContainer />
      <button onClick={() => navigate("/adminHome")}>Atras</button>
      <div className={s.formBox}>
        <form className={s.box}>
          <label htmlFor="email">Correo Electrónico:</label>
          <input value={info.email} onChange={handleChange} type="email" name="email" required />
          {error.flag && error.email && <p>{`${error.email}`}</p>}

          <label htmlFor="password">Contraseña:</label>
          <input
          value={info.password}
            onChange={handleChange}
            type="password"
            name="password"
            required
          />
          {error.flag && error.password && <p>{`${error.password}`}</p>}

          <label htmlFor="confirmpassword">Confirma la contraseña: </label>
          <input
          value={info.confirmpassword}
            onChange={handleChange}
            type="password"
            name="confirmpassword"
            required
          />
          {error.flag && error.confirmpassword && (
            <p>{`${error.confirmpassword}`}</p>
          )}

          {!flag ? (
            <p onClick={() => setFlag(!flag)}>{`Agregar información.`}</p>
          ) : (
            <div className={s.box}>
              <label htmlFor="firstname">Primer Nombre:</label>
              <input value={info.firstname} onChange={handleChange} type="text" name="firstname" />
              {error.flag && error.firstname && <p>{`${error.firstname}`}</p>}

              <label htmlFor="lastname">Apellido:</label>
              <input value={info.lastname} onChange={handleChange} type="text" name="lastname" />
              {error.flag && error.lastname && <p>{`${error.lastname}`}</p>}

              <label htmlFor="phone">Teléfono:</label>
              <input value={info.phone} onChange={handleChange} type="tel" name="phone" />
              {error.flag && error.phone && <p>{`${error.phone}`}</p>}

              <p onClick={() => setFlag(!flag)}>{`Mostrar menos.`}</p>
            </div>
          )}

          <button onClick={handleCreate} type="submit">
            Crear Usuario
          </button>
        </form>
        <button onClick={handlerRandomPassword} className={s.randomPassword}>Generar contraseña aleatoria</button>
      </div>
    </div>

  );
};
export default AdminCreateUser;
