import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

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
  return data.map();
};

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
    <>
      <button>Кнопка</button>
    </>
  );
}

export default App;
