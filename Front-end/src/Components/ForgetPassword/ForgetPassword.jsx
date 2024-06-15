import axios from "axios";
import { useEffect, useState } from "react";
import { HOST } from "../../HOST";
import {
  ToastInfo,
  notifyError,
  notifySuccess,
} from "../../ToastNotification/toast";
import validator from "./validator";
import s from "./ForgetPassword.module.css"
import { useNavigate } from "react-router-dom";
const ForgetPassword = () => {
const navigate=useNavigate()

  const [email, setEmail] = useState({
    email: "",

    token: "",
    flag: false,
    passFlag: false,
    password: "",
    confirmPassword: "",

    userCode: "",
  });
  const [error,setError]=useState({
    password:"",
    confirmPassword:""
  })
  const handleChange = (e) => {

    setEmail({ ...email, [e.target.name]: e.target.value });

  };
  const handleSend = async (email) => {
    try {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (regexEmail.test(email.email)) {
        const res = await axios.post(`${HOST}forgetPassword`, {
          email: email.email,
        });
        setEmail({ ...email, token: res.data, flag: true });
      } else {
        notifyError("El email no es valido");
      }
    } catch (error) {
      console.log(error.message);
      notifyError(error.message);
    }
  };
  const handleCheckToken = () => {
    if (email.token.trim() === email.userCode.trim()) {
      setEmail({ ...email, passFlag: true });
    } else {
      notifyError("Codigo invalido");
    }
  };
const handleChangePassword=async()=>{
  try {
    setError(validator(email))
    if(email.password&&email.confirmPassword&&!error?.password&&!error?.confirmPassword){
    console.log("cambiar contraseña");
    const res=await axios.put(`${HOST}putUser`,{
      email:email.email,
      password:email.password,
      type:"changePassword"
    })
  if(res.status>=200){
    notifySuccess("Contraseña cambiada")
    navigate("/")
  }

  } 

  } catch (error) {

notifyError(error.message)    
  }
}

useEffect(()=>{
  if(email.passFlag){
    setError(validator(email))
  }
},[email.password,email.confirmPassword])




  return (
    <div>
      <button onClick={()=>navigate("/")}>Atras</button>
      <ToastInfo />
      <label htmlFor="email">Correo electronico: </label>
      <input
        onChange={handleChange}
        value={email.email}
        type="email"
        name="email"
        placeholder="Tu email aqui"
      />

      <button onClick={(e) => handleSend(email)}>
        {!email.flag ? "Enviar el codigo" : "Reenviar el codigo"}
      </button>
      {email.flag && (
        <div>
          <label htmlFor="userCode">Codigo: </label>
          <input
            onChange={handleChange}
            value={email.userCode}
            type="text"
            name="userCode"
          />
          <button onClick={handleCheckToken}>Confirmar codigo</button>
        </div>
      )}
      {email.passFlag && (
        <div className={s.passBox}>
          <label htmlFor="password">Contraseña: </label>
          <input
            onChange={handleChange}
            value={email.password}
            type="password"
            name="password"
          />
          {error.password && <p>{error.password}</p>}
          <label htmlFor="confirmPassword">Confirmar contraseña: </label>
          <input


            onChange={handleChange}
            value={email.confirmPassword}
            type="password"
            name="confirmPassword"
          />
          {error.confirmPassword && <p>{error.confirmPassword}</p>}
          <button onClick={handleChangePassword}>Cambiar contraseña</button>
        </div>


      )}
    
    </div>
  );


};

export default ForgetPassword;
