import { useEffect } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchUsers } from "../store/usersSlice/usersSlice";
import { useNavigate } from "react-router";

// interface IApiResponse<T> {
//   data: T;
//   status: number;
//   message: string;
// }

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "fullName", headerName: "Full name", width: 500 },
  { field: "email", headerName: "Email", width: 500 },
  { field: "fullAddress", headerName: "Full address", width: 500 },
];

const paginationModel = { page: 0, pageSize: 10 };

function App() {
  const dispatch = useAppDispatch();
  const { users, loading } = useAppSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) return <h1>Загрузка...</h1>;

  const navigatePosts = (params: GridRowParams) => {
    const userId = params.row.id;
    navigate(`/posts/${userId}`);
  };

  return (
    <Paper sx={{ height: "100vh", width: "100%" }}>
      <DataGrid
        rows={users || []}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
        onRowClick={navigatePosts}
      />
    </Paper>
  );
}

export default App;
