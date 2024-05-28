import { useEffect } from "react";
import store from "../../Zustand/store";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
const TransactionsList = () => {
  const navigate = useNavigate();
  const { user, transactions, getAllTransactions,  deleteTransactionsHistory } = store((s) => s);
  useEffect(() => {
    if (transactions.length == 0) {
      getAllTransactions(user.id);
    }

  }, [transactions]);
  if (typeof transactions == "string") {
    return (
      <div>
        <button onClick={() => navigate("/adminHome")}>Atras</button>
        No tienes transacciones realizadas.
      </div>
    );
  }
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "fullname", headerName: "Nombre Completo", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    { field: "phone", headerName: "Telefono", width: 130 },
    { field: "type", headerName: "Tipo", width: 130 },
    { field: "credits", headerName: "Creditos", width: 130 },
    {
      field: "transaction_date",
      headerName: "Día de la transaccion",
      width: 130,
    },
  ];

  const rows = transactions.map((t) => {
    return {
      id: t.transaction_id,
      fullname: t.User.fullname,
      email: t.User.email,
      phone: t.User.phone,
      type: t.transaction_type,
      credits: t.credits,
      transaction_date: t.transaction_date,
    };
  });

  return (
    <div>
      <button onClick={() => {navigate("/adminHome") }}>Atras</button>
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
      list
    </div>
  );
};
export default TransactionsList;
