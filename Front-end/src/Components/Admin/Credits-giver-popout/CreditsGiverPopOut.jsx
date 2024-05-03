import axios from "axios";
import { useState } from "react";
import { HOST } from "../../../HOST";
import s from "./CreditsGiverPopOut.module.css"

const CreditsGiverPopOut = ({ popOut, setPopOut }) => {
  const [confirmCredits, setConfirmCredits] = useState(false);
  const handleChange = (e) => {
    setPopOut({ ...popOut, credits: e.target.value });
  };
const passCredits=async()=>{
const response=await axios.post(`${HOST}postCredits`,{client:popOut.client,clientName:popOut.clientName,credits:popOut.credits})
setPopOut(!popOut?.flag)
}
  if (confirmCredits) {
    return (
      <div className={s.box}>
        <button onClick={() => setPopOut(!popOut?.flag)}>X</button>
        <div>
            {`Estas seguro que quieres cargar ${popOut.credits} al usuario ${popOut.clientName}? `}
            
          <button onClick={() => setConfirmCredits(!confirmCredits)}>Cancelar</button>
          <button onClick={passCredits}>Aceptar</button>
        </div>
      </div>
    );
  }
  return (
    <div className={s.box}>
      <button onClick={() => setPopOut(!popOut?.flag)}>X</button>
      <h3>{`Cantidad de credito a cargar para ${popOut.clientName}: `}</h3>
      <input onChange={handleChange} type="number" />
      <button onClick={() => setConfirmCredits(!confirmCredits)}>
        Cargar credito
      </button>
    </div>
  );
};
export default CreditsGiverPopOut;
