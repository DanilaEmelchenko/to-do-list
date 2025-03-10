import { RootState } from "../../store";
import { IUser } from "../interfaces";

export const selectUsersData = (state: RootState): IUser[] | null =>
  state.users.users;
export const selectLoadingUsers = (state: RootState): boolean | null =>
  state.users.loading;
