import { useEffect, useState } from "react";
import s from "./EditProfile.module.css";
import validator from "./validator";
import { ToastContainer } from "react-toastify";
import store from "../../Zustand/store";
import { notifyError } from "../../ToastNotification/toast";
import { useNavigate } from "react-router-dom";
import { ToastInfo } from "../../ToastNotification/toast";

const EditProfile = ({ firstEdit, userToEdit, setEdit }) => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });
  const [infoError, setInfoError] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });
  const { putUser, user } = store((s) => s);
  useEffect(() => {
    setInfoError(validator(info, firstEdit));
    if (user.fullname && user.rol === "admin" && firstEdit) {
      return navigate("/adminHome");
    }
  }, [info, user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setInfoError(validator(info, firstEdit));
    if (
      !infoError.firstname &&
      !infoError.lastname &&
      !infoError.phone &&
      !infoError.password &&
      !infoError.confirmpassword
    ) {
      if (userToEdit) {
        putUser({ ...info, id: userToEdit }, userToEdit);
        // setEdit(false)
      } else {
        putUser({ ...info, id: user.id });
      }
    } else {
      infoError.firstname && notifyError(infoError.firstname);
      infoError.lastname && notifyError(infoError.lastname);
      infoError.phone && notifyError(infoError.phone);
      infoError.password && notifyError(infoError.password);
      infoError.confirmpassword && notifyError(infoError.confirmpassword);
    }
  };
  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className={s.box}>
      <ToastInfo />
      <h2>Editar Perfil</h2>
      <form className={s.formbox} onSubmit={handleSubmit}>
        <label htmlFor="firstname">Nombre: </label>
        <input onChange={handleChange} type="text" name="firstname" />
        <label htmlFor="lastname">Apellido: </label>
        <input onChange={handleChange} type="text" name="lastname" />
        <label htmlFor="phone">Telefono: </label>
        <input onChange={handleChange} type="phone" name="phone" />
        <label htmlFor="password">Contraseña: </label>
        <input onChange={handleChange} type="password" name="password" />
        <label htmlFor="confirmpassword">Confirma la contraseña: </label>
        <input onChange={handleChange} type="password" name="confirmpassword" />
        <button type="submit">Editar perfil</button>
      </form>
    </div>
  );
};
export default EditProfile;
