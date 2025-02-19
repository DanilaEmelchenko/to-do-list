import { getUsers } from "./getUsers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "./interfaces";
import { User } from "../../services/user";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await User.fetchUsers();
  return response;
});

interface IUsersState {
  users: IUser[];
  loading: boolean;
  err: string | null;
}

const initialState = {
  users: [],
  loading: false,
  err: null,
} satisfies IUsersState as IUsersState;

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = getUsers(action.payload);
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.err = "Ошибка загрузки";
      });
  },
});

export default usersSlice.reducer;
