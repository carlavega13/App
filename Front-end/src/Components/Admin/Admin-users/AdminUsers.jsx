import { useEffect, useState } from "react";
import store from "../../../Zustand/store";
import CreditsGiverPopOut from "../Credits-giver-popout/CreditsGiverPopOut";
import { ToastInfo } from "../../../ToastNotification/toast";
import s from "./AdminUsers.module.css";
import EditProfile from "../../EditProfile/EditProfile";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
//
const AdminUsers = () => {
  const navigate = useNavigate();
  const {
    users,
    bringOneUser,
    user,
    getUsers,
    deleteUser: deleteU,
  } = store((s) => s);
console.log("user",user);
  const [deleteUser, setDeleteUser] = useState({
    flag: false,
    id: "",
    email: "",
  });
  const [popOut, setPopOut] = useState({
    flag: false,
    admin: user.id,
    client: "",
    clientName: "",
    clientCredits: "",
    credits: "",
    type: "",
  });
  const [edit, setEdit] = useState({
    flag: false,
    id: "",
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
      admin: user?.id,
    });
  };

  const handleDelete = () => {
    deleteU(deleteUser.id);
    setDeleteUser({ ...deleteUser, flag: false });
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "fullname", headerName: "Nombre Completo", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    { field: "phone", headerName: "Telefono", width: 130 },
    { field: "credits", headerName: "Creditos", width: 130 },
    {
      field: "actions",
      headerName: "Acciones",
      width: 700,
      renderCell: (info) => {
     
        return (
          <div>
          {info.row.fullname ? (
            <button
              name={info.row.fullname}
              id={info.row.id}
              onClick={(e) => handleCredits(e, "add", info.row.credits)}
            >
              Agregar creditos
            </button>
          ) : (
            <button
              name={info.row.email}
              id={info.row.id}
              onClick={(e) => handleCredits(e, "add", info.row.credits)}
            >
              Agregar creditos
            </button>
          )}
          {info.row.fullname ? (
            <button
              name={info.row.fullname}
              id={info.row.id}
              onClick={(e) => handleCredits(e, "subtract", info.row.credits)}
            >
              Eliminar creditos
            </button>
          ) : (
            <button
              name={info.row.email}
              id={info.row.id}
              onClick={(e) => handleCredits(e, "subtract", info.row.credits)}
            >
              Eliminar creditos
            </button>
          )}
          <button
            onClick={() => setEdit({ flag: true, id: Number(info.row.id) })}
          >
            Editar
          </button>
          <button
            onClick={() =>
              setDeleteUser({
                flag: true,
                id: Number(info.row.id),
                email: info.row.email,
              })
            }
          >
            Eliminar usuario
          </button>
        </div>
        );
      },
    },
  ];
  const rows = users?.map((user) => {
    return {
      id: user.id,
      fullname: user.fullname,
      email: user.email,
      phone: user.phone,
      credits: user.credits,
    };
  });
  return (
    <div className={s.box}>
      <ToastInfo />
      <div>
        {deleteUser.flag && (
          <div className={s.deleteBox}>
            {`estas seguro que quieres eliminar a ${deleteUser.email} ?`}{" "}
            <button onClick={handleDelete}>Eliminar</button>

            <button
              onClick={() => setDeleteUser({ flag: false, id: "", email: "" })}
              >
              Cancelar
            </button>{" "}
          </div>
        )}
        {popOut?.flag && (
          <CreditsGiverPopOut
            popOut={popOut}
            setPopOut={setPopOut}
            bringOneUser={bringOneUser}
          />
        )}
        {edit.flag && (
          <div>
            {" "}
            <button onClick={() => setEdit(false)}>X</button>
            <EditProfile userToEdit={edit.id} setEdit={setEdit} />
          </div>
        )}
      </div>
      <div onClick={() => navigate("/createUser")}>Crear usuario</div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};
export default AdminUsers;