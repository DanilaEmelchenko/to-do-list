import { useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router";
import { DataGrid, GridRowParams } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchUsers } from "../../store/usersSlice/usersSlice";
import Loading from "../../components/Loading/Loading";
import { getColumns } from "./shared/helpers/getColumns";
import { getPaginationModel } from "./shared/helpers/getPaginationModel";
import { selectLoadingUsers, selectUsersData } from "../../store";

const Users = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsersData);
  const loading = useAppSelector(selectLoadingUsers);
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const navigatePosts = (params: GridRowParams): void => {
    const userId = params.row.id;
    navigate(`/posts/${userId}`);
  };

  if (loading) return <Loading />;

  return (
    <Paper sx={{ height: "100vh", width: "100%" }}>
      <DataGrid
        rows={users || []}
        columns={getColumns()}
        initialState={getPaginationModel()}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
        onRowClick={navigatePosts}
      />
    </Paper>
  );
};

export default Users;
