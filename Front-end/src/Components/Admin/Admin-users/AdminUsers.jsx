import { useEffect, useState } from "react";
import store from "../../../Zustand/store";
import axios from "axios";
import CreditsGiverPopOut from "../Credits-giver-popout/CreditsGiverPopOut";
//
const AdminUsers = () => {
  const { users, getUsers, user } = store((s) => s);
  const [popOut, setPopOut] = useState({
    flag: false,
    admin: user.id,
    client: "",
    clientName: "",
    credits:""
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

  const handleCredits = async (e) => {
    setPopOut({
      ...popOut,
      flag: !popOut?.flag,
      client: e.target.id,
      clientName: e.target.name,
    });
  };
  return (
    <div>
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
                onClick={(e) => handleCredits(e)}
              >
                Agregar creditos
              </button>
            ) : (
              <button
                name={user.email}
                id={user.id}
                onClick={(e) => handleCredits(e)}
              >
                Agregar creditos
              </button>
            )}
          </div>
        );
      })}
      <div>
        {popOut?.flag && (
          <CreditsGiverPopOut popOut={popOut} setPopOut={setPopOut} />
        )}
      </div>
    </div>
  );
};
export default AdminUsers;
