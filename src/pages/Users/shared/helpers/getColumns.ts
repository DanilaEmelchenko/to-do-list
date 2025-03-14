import { GridColDef } from "@mui/x-data-grid";

export const getColumns = (): GridColDef[] => {
  return [
    { field: "id", headerName: "ID", width: 70 },
    { field: "fullName", headerName: "Full name", width: 500 },
    { field: "email", headerName: "Email", width: 500 },
    { field: "fullAddress", headerName: "Full address", width: 500 },
  ];
};
