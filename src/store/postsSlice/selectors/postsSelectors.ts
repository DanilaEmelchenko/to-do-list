import { IPostsResponse } from "../../../services/interfaces";
import { RootState } from "../../store";

export const selectPostsData = (state: RootState): IPostsResponse[] | null =>
  state.posts.posts;
export const selectLoadingPosts = (state: RootState): boolean | null =>
  state.posts.loading;
export const selectLoadingForCreatingPost = (
  state: RootState
): boolean | null => state.posts.loadingForCreatingPost;
