import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

interface IUserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface IUser {
  fullName: string;
  email: string;
  fullAddress: string;
  id: number;
}

// interface IApiResponse<T> {
//   data: T;
//   status: number;
//   message: string;
// }

const getUsers = (data: IUserResponse[]): IUser[] => {
  return data.map((item) => {
    const copyAddress = {
      ...item.address,
    };
    const { geo, ...deleteGeo } = copyAddress;
    const fullAddress = Object.values(deleteGeo).join(" ,");

    const fullName = [item.name, item.username].join(" ");

    return {
      id: item.id,
      fullName: fullName,
      email: item.email,
      fullAddress: fullAddress,
    };
  });
};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "fullName", headerName: "Full name", width: 500 },
  { field: "email", headerName: "Email", width: 500 },
  { field: "fullAddress", headerName: "Full address", width: 500 },
];

const paginationModel = { page: 0, pageSize: 5 };

function App() {
  const [users, setUsers] = useState<IUser[] | null>(null);
  console.log(users);

  useEffect(() => {
    axios
      .get<IUserResponse[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = getUsers(response.data);
        setUsers(users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("app render");
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

export default App;
