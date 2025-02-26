import { RootState } from "../store";

export const selectUsersData = (state: RootState) => state.users.users;
export const selectLoadingUsers = (state: RootState) => state.users.loading;
