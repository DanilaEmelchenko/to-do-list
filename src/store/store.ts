import { configureStore } from "@reduxjs/toolkit";
import usersList from "./usersSlice/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import postsList from "./postsSlice/postsSlice";

export const store = configureStore({
  reducer: {
    users: usersList,
    posts: postsList,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
