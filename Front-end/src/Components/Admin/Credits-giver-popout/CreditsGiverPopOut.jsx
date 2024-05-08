import axios from "axios";
import { useState } from "react";
import { HOST } from "../../../HOST";
import s from "./CreditsGiverPopOut.module.css";
import {  notifyError, notifySuccess } from "../../../ToastNotification/toast";

const CreditsGiverPopOut = ({ popOut, setPopOut, bringOneUser }) => {
  const [confirmCredits, setConfirmCredits] = useState(false);
  const handleChange = (e) => {
    setPopOut({ ...popOut, credits: e.target.value });
  };
  const passCredits = async () => {
    try {
      const response = await axios.post(`${HOST}postCredits`, {
        client: popOut.client,
        clientName: popOut.clientName,
        credits: popOut.credits,
        type: popOut.type,
        clientCredits: popOut.clientCredits,
      });
      if (response.status == 200) {
        if (popOut.type == "add") {
          notifySuccess(
            `Se cargaron ${popOut.credits} creditos a ${
              popOut?.clientName
            }, ahora el usuario tiene ${
              Number(popOut.clientCredits) + Number(popOut.credits)
            }.`
          );
        } else {
          notifySuccess(
            `Se eliminaron ${popOut.credits} creditos a ${
              popOut?.clientName
            }, ahora el usuario tiene ${
              Number(popOut.clientCredits) - Number(popOut.credits)
            }.`
          );
        }
      }
      bringOneUser(popOut.client);
      setPopOut(!popOut?.flag);
    } catch (error) {
      notifyError(error.message);
    }
  };
  const handleConfirm = () => {
    if (
      Number(popOut.clientCredits) - Number(popOut.credits) < 0 &&
      popOut.type == "delete"
    ) {
      notifyError(
        "El usuario no puede tener creditos negativos, el usuario tiene que tener minimo 0 creditos"
      );
      return;
    }
    setConfirmCredits(!confirmCredits);
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
      <h5>
        {popOut.type == "add" && popOut.credits
          ? `${popOut.clientName} quedará con: ${popOut.credits?
              Number(popOut.clientCredits) + Number(popOut.credits):popOut.clientCredits
            }`
          : `${popOut.clientName} quedará con: ${popOut.credits?
              Number(popOut.clientCredits) - Number(popOut.credits):popOut.clientCredits
            }`}
      </h5>
      <button onClick={handleConfirm}>
        {popOut.type == "add" ? "Cargar credito" : "Eliminar credito"}
      </button>
    </div>
  );
};
export default CreditsGiverPopOut;
