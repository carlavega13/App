import { useEffect, useState } from "react";
import store from "../../../Zustand/store";
import CreditsGiverPopOut from "../Credits-giver-popout/CreditsGiverPopOut";
import { ToastInfo } from "../../../ToastNotification/toast";
//
const AdminUsers = () => {
  const { users, bringOneUser, user, getUsers } = store((s) => s);
  const [popOut, setPopOut] = useState({
    flag: false,
    admin: user.id,
    client: "",
    clientName: "",
    clientCredits: "",
    credits: "",
    type: "",
  });
  useEffect(() => {
    async function fetchUsers(id) {
      await getUsers(id);
    }
    if (users.length == 0) {
      fetchUsers(user.id);
    }
  }, [users]);

  if (typeof users == "string") {
    return <div>No hay usuarios para mostrar</div>;
  }

  const handleCredits = (e, type, credits) => {
    setPopOut({
      ...popOut,
      flag: true,
      client: e.target.id,
      clientName: e.target.name,
      type: type,
      clientCredits: credits,
    });
  };

  return (
    <div>
      <ToastInfo />
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.fullname}</h4>
            <h5>{user.email}</h5>
            <h5>{user.credits}</h5>
            {user.fullname ? (
              <button
                name={user.fullname}
                id={user.id}
                onClick={(e) => handleCredits(e, "add", user.credits)}
              >
                Agregar creditos
              </button>
            ) : (
              <button
                name={user.email}
                id={user.id}
                onClick={(e) => handleCredits(e, "add", user.credits)}
              >
                Agregar creditos
              </button>
            )}
            {user.fullname ? (
              <button
                name={user.fullname}
                id={user.id}
                onClick={(e) => handleCredits(e, "delete", user.credits)}
              >
                Eliminar creditos
              </button>
            ) : (
              <button
                name={user.email}
                id={user.id}
                onClick={(e) => handleCredits(e, "delete", user.credits)}
              >
                Eliminar creditos
              </button>
            )}
          </div>
        );
      })}
      <div>
        {popOut?.flag && (
          <CreditsGiverPopOut
            popOut={popOut}
            setPopOut={setPopOut}
            bringOneUser={bringOneUser}
          />
        )}
      </div>
    </div>
  );
};
export default AdminUsers;
