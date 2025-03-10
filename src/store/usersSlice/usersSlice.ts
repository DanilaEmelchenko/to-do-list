import { getUsers } from "./getUsers";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "./interfaces";
import { IUserResponse, User } from "../../services/users";

export const fetchUsers = createAsyncThunk<IUserResponse[], void>(
  "users/fetchUsers",
  async () => {
    const response = await User.fetchUsers();
    return response;
  }
);

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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<IUserResponse[]>) => {
          state.users = getUsers(action.payload);
          state.loading = false;
        }
      )
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.err = "Ошибка загрузки пользователей";
      });
  },
});

export default usersSlice.reducer;
