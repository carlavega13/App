import axios from "axios";
import { useState } from "react";
import { HOST } from "../../../HOST";
import s from "./CreditsGiverPopOut.module.css";

const CreditsGiverPopOut = ({ popOut, setPopOut,bringOneUser }) => {
  const [confirmCredits, setConfirmCredits] = useState(false);
  const handleChange = (e) => {
    setPopOut({ ...popOut, credits: e.target.value });
  };
  const passCredits = async () => {
    const response = await axios.post(`${HOST}postCredits`, {
      client: popOut.client,
      clientName: popOut.clientName,
      credits: popOut.credits,
      type:popOut.type,
      clientCredits:popOut.clientCredits
    });
    bringOneUser(popOut.client)
    setPopOut(!popOut?.flag);
  };

  if (confirmCredits) {
    return (
      <div className={s.box}>
        <button onClick={() => setPopOut(false)}>X</button>
        <div>
          {`Estas seguro que quieres ${
            popOut.type == "add" ? "agregar" : "eliminar"
          } ${popOut.credits} al usuario ${popOut.clientName}? `}
          <button onClick={() => setConfirmCredits(!confirmCredits)}>
            Cancelar
          </button>
          <button onClick={passCredits}>Aceptar</button>
          {`El usuario ${popOut.clientName} quedará con ${
            popOut.type == "add"
              ? Number(popOut.credits) + Number(popOut.clientCredits)
              : Number(popOut.clientCredits) - Number(popOut.credits)
          }`}
        </div>
      </div>
    );
  }
  return (
    <div className={s.box}>
      <button onClick={() => setPopOut(!popOut?.flag)}>X</button>
      <h3>{`Cantidad de credito para ${
        popOut.type == "add" ? "cargar" : "eliminar"
      } a ${popOut.clientName}: `}</h3>
      <input onChange={handleChange} type="number" />
      <button onClick={() => setConfirmCredits(!confirmCredits)}>
        {popOut.type == "add" ? "Cargar credito" : "Eliminar credito"}
      </button>
    </div>
  );
};
export default CreditsGiverPopOut;
