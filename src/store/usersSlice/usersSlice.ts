import { getUsers } from "./getUsers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "./interfaces";
import { User } from "../../services/user";

// First, create the thunk
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await User.fetchUsers();
  return response;
});

interface UsersState {
  users: IUser[];
  loading: boolean;
  err: string | null;
}

const initialState = {
  users: [],
  loading: false,
  err: null,
} satisfies UsersState as UsersState;

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchUsers.pending, (state) => {
        // Add user to the state array
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        // Add user to the state array
        state.users = getUsers(action.payload);
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state) => {
        // Add user to the state array
        state.loading = false;
        state.err = "Ошибка загрузки";
      });
  },
});

// Later, dispatch the thunk as needed in the app
export default usersSlice.reducer;
